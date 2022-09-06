import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import axios from 'axios'

export type Country = {
  flags: {
    png: string
  }
  name: {
    common: string
  }
  languages: {
    [key: string]: string
  }
  population: number
  region: string
}

export interface CountriesState {
  items: Country[]
  singleItem: Country
  countriesRef: Country[]
  isLoading: boolean
}

const initialState: CountriesState = {
  items: [],
  singleItem: {
    flags: {
      png: '',
    },
    name: {
      common: '',
    },
    languages: {},
    population: 0,
    region: '',
  },
  countriesRef: [],
  isLoading: false,
}

export const fetchCountriesThunk = createAsyncThunk(
  'countries/fetch',
  async () => {
    const res = await axios.get(
      'https://restcountries.com/v3.1/all?fields=flags,name,languages,population,region'
    )

    return {
      data: res.data,
      status: res.status,
    }
  }
)

export const fetchCountryThunk = createAsyncThunk(
  'country/fetch',
  async (name: string) => {
    const res = await axios.get(
      `https://restcountries.com/v3.1/name/${name}?fullText=true&fields=flags,name,languages,population,region`
    )

    return {
      data: res.data[0],
      status: res.status,
    }
  }
)

export const countriesSlice = createSlice({
  name: 'countries',
  initialState,
  reducers: {
    search: (state: CountriesState, action: PayloadAction<string>) => {
      const filteredItems = state.countriesRef.filter((item) =>
        item.name.common.toLowerCase().includes(action.payload.toLowerCase())
      )

      state.items = filteredItems
    },
    sort: (state: CountriesState, action: PayloadAction<string>) => {
      if (action.payload === 'aToZ') {
        state.items = state.items.sort((a, b) =>
          a.name.common.toLowerCase().localeCompare(b.name.common)
        )
      } else if (action.payload === 'zToA') {
        state.items = state.items.sort((a, b) =>
          b.name.common.toLowerCase().localeCompare(a.name.common)
        )
      } else if (action.payload === 'lowToHigh') {
        state.items = state.items.sort((a, b) => a.population - b.population)
      } else if (action.payload === 'highToLow') {
        state.items = state.items.sort((a, b) => b.population - a.population)
      }
    },
    filterRegion: (state: CountriesState, action: PayloadAction<string>) => {
      state.items = state.countriesRef.filter(
        (item) => item.region === action.payload
      )
    },
    filterLanguage: (state: CountriesState, action: PayloadAction<string>) => {
      state.items = state.countriesRef.filter((item) =>
        Object.values(item.languages).includes(action.payload)
      )
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCountriesThunk.pending, (state: CountriesState) => {
      state.items = []
      state.countriesRef = []
      state.isLoading = true
    })
    builder.addCase(
      fetchCountriesThunk.fulfilled,
      (state: CountriesState, action) => {
        state.items = action.payload.data
        state.countriesRef = action.payload.data
        state.isLoading = false
      }
    )
    builder.addCase(fetchCountryThunk.pending, (state: CountriesState) => {
      state.singleItem = {
        flags: {
          png: '',
        },
        name: {
          common: '',
        },
        languages: {},
        population: 0,
        region: '',
      }
      state.isLoading = true
    })
    builder.addCase(
      fetchCountryThunk.fulfilled,
      (state: CountriesState, action) => {
        state.singleItem = action.payload.data
        state.isLoading = false
      }
    )
  },
})

export const { search, sort, filterRegion, filterLanguage } =
  countriesSlice.actions

export default countriesSlice.reducer

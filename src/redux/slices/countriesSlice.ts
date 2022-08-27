import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
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

export interface countriesState {
  items: Country[]
  singleItem: Country
  filteredItems: Country[]
  isLoading: boolean
}

const initialState: countriesState = {
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
  filteredItems: [],
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
      `https://restcountries.com/v3.1/name/${name}?fields=flags,name,languages,population,region`
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
    search: (state, action) => {
      const filteredItems = state.items.filter((item) =>
        item.name.common.toLowerCase().includes(action.payload.toLowerCase())
      )

      return {
        ...state,
        filteredItems:
          action.payload.length > 0 ? filteredItems : [...state.items],
      }
    },
    sort: (state, action) => {
      if (action.payload === 'aToZ') {
        state.items.sort((a, b) =>
          a.name.common.toLowerCase().localeCompare(b.name.common)
        )
        state.filteredItems.sort((a, b) =>
          a.name.common.toLowerCase().localeCompare(b.name.common)
        )
      } else if (action.payload === 'zToA') {
        state.items.sort((a, b) =>
          b.name.common.toLowerCase().localeCompare(a.name.common)
        )
        state.filteredItems.sort((a, b) =>
          b.name.common.toLowerCase().localeCompare(a.name.common)
        )
      } else if (action.payload === 'lowToHigh') {
        state.items.sort((a, b) => a.population - b.population)
        state.filteredItems.sort((a, b) => a.population - b.population)
      } else if (action.payload === 'highToLow') {
        state.items.sort((a, b) => b.population - a.population)
        state.filteredItems.sort((a, b) => b.population - a.population)
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCountriesThunk.pending, (state) => {
      state.items = []
      state.isLoading = true
    })
    builder.addCase(fetchCountriesThunk.fulfilled, (state, action) => {
      state.items = action.payload.data
      state.isLoading = false
    })
    builder.addCase(fetchCountryThunk.pending, (state) => {
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
    builder.addCase(fetchCountryThunk.fulfilled, (state, action) => {
      state.singleItem = action.payload.data
      state.isLoading = false
    })
  },
})

export const { search, sort } = countriesSlice.actions

export default countriesSlice.reducer

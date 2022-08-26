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
  isLoading: boolean
}

const initialState: countriesState = {
  items: [],
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

export const countriesSlice = createSlice({
  name: 'countries',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCountriesThunk.pending, (state) => {
      state.items = []
      state.isLoading = true
    })
    builder.addCase(fetchCountriesThunk.fulfilled, (state, action) => {
      state.items = action.payload.data
      state.isLoading = false
    })
  },
})

//export const { } = countrySlice.actions

export default countriesSlice.reducer

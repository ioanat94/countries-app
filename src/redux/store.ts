import { configureStore } from '@reduxjs/toolkit'
import sliderReducer from './slices/sliderSlice'
import themeReducer from './slices/themeSlice'
import countriesReducer from './slices/countriesSlice'

export const store = configureStore({
  reducer: {
    slider: sliderReducer,
    theme: themeReducer,
    countries: countriesReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

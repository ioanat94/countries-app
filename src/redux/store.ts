import { configureStore } from '@reduxjs/toolkit'

import sliderReducer from './slices/sliderSlice'
import themeReducer from './slices/themeSlice'
import countriesReducer from './slices/countriesSlice'
import favoritesReducer from './slices/favoritesSlice'

export const store = configureStore({
  reducer: {
    slider: sliderReducer,
    theme: themeReducer,
    countries: countriesReducer,
    favorites: favoritesReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

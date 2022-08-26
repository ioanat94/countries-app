import { configureStore } from '@reduxjs/toolkit'
import sliderReducer from './slices/sliderSlice'
import themeReducer from './slices/themeSlice'

export const store = configureStore({
  reducer: {
    slider: sliderReducer,
    theme: themeReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

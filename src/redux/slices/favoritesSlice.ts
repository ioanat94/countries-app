import { createSlice } from '@reduxjs/toolkit'

function setFavorites() {
  if (!localStorage.getItem('favorites')) {
    return []
  }

  return JSON.parse(localStorage.getItem('favorites') || '{}')
}

export type Favorite = {
  flags: {
    png: string
  }
  name: {
    common: string
  }
}

export interface FavoritesState {
  items: Favorite[]
}

const initialState: FavoritesState = {
  items: setFavorites() || [],
}

export const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    add: (state, action) => {
      state.items.push(action.payload)
      localStorage.setItem('favorites', JSON.stringify(state.items))
    },
    remove: (state, action) => {
      state.items.filter((item) => item.name.common !== action.payload)
    },
  },
})

export const { add, remove } = favoritesSlice.actions

export default favoritesSlice.reducer

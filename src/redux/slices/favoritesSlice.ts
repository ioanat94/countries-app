import { createSlice, PayloadAction } from '@reduxjs/toolkit'

function setFavorites() {
  if (!localStorage.getItem('favorites')) {
    const items: [] = []
    const count = 0
    return { items, count }
  }

  const items: [] = JSON.parse(localStorage.getItem('favorites') || '{}')
  const count: number = items.length || 0

  return { items, count }
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
  count: number
}

const initialState: FavoritesState = {
  items: setFavorites().items || [],
  count: setFavorites().count || 0,
}

export const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    add: (state: FavoritesState, action: PayloadAction<Favorite>) => {
      state.items.push(action.payload)
      state.count += 1
      localStorage.setItem('favorites', JSON.stringify(state.items))
    },
    remove: (state: FavoritesState, action: PayloadAction<string>) => {
      state.items = state.items.filter(
        (item) => item.name.common !== action.payload
      )
      state.count -= 1
      localStorage.setItem('favorites', JSON.stringify(state.items))
    },
  },
})

export const { add, remove } = favoritesSlice.actions

export default favoritesSlice.reducer

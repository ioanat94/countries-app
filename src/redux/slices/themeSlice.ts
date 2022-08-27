import { createSlice } from '@reduxjs/toolkit'

export interface ThemeState {
  theme: string
}

function setTheme() {
  if (!localStorage.getItem('theme')) {
    localStorage.setItem('theme', 'dark')
  }

  return localStorage.getItem('theme')
}

const initialState: ThemeState = {
  theme: setTheme() || 'dark',
}

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleTheme: (state: ThemeState) => {
      if (state.theme === 'dark') {
        state.theme = 'light'
      } else {
        state.theme = 'dark'
      }

      if (localStorage.getItem('theme') === 'dark') {
        localStorage.setItem('theme', 'light')
      } else {
        localStorage.setItem('theme', 'dark')
      }
    },
  },
})

export const { toggleTheme } = themeSlice.actions

export default themeSlice.reducer

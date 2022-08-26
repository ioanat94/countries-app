import { createSlice } from '@reduxjs/toolkit'

export interface SliderState {
  isOpen: boolean
}

const initialState: SliderState = {
  isOpen: false,
}

export const sliderSlice = createSlice({
  name: 'slider',
  initialState,
  reducers: {
    toggle: (state) => {
      state.isOpen = !state.isOpen
      console.log(state.isOpen)
    },
  },
})

export const { toggle } = sliderSlice.actions

export default sliderSlice.reducer

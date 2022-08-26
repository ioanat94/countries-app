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
    toggleSlider: (state) => {
      state.isOpen = !state.isOpen
    },
  },
})

export const { toggleSlider } = sliderSlice.actions

export default sliderSlice.reducer

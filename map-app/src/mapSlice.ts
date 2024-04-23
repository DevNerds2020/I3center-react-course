import { createSlice } from '@reduxjs/toolkit'

export const mapSlice = createSlice({
  name: 'map',
  initialState: {
    zoom: 7,
    center:[35.7219, 51.3347],
  },
  reducers: {
    incrementZoom: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes.
      // Also, no return statement is required from these functions.
      state.zoom += 1
    },
    decrementZoom: (state) => {
      state.zoom -= 1
    },
  },
})

// Action creators are generated for each case reducer function
export const { incrementZoom, decrementZoom } = mapSlice.actions

export default mapSlice.reducer
import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";

const notesAdapter = createEntityAdapter()

export const tagOptions = [
  { value: 'Work', label: 'Work' },
  { value: 'Home', label: 'Home' },
  { value: 'Hobby', label: 'Hobby' },
  { value: 'Books', label: 'Books' }
]

const initialState = notesAdapter.getInitialState({
  filter: 'all'
})

const notesSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    filtersChange: (state, action) => {
      state.filter = action.payload
    },
  },
  extraReducers: (builder) => {
    builder
      .addDefaultCase(() => { })
  }
})

const { actions, reducer: filters } = notesSlice

export default filters

// export const { selectAll } = notesAdapter.getSelectors(state => state.filters)

export const { filtersChange } = actions
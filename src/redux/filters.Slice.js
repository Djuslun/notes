import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";

const filtersAdapter = createEntityAdapter()

const initialState = filtersAdapter.getInitialState({
  filter: 'all'
})

const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    filtersSet: (state, action) => {
      filtersAdapter.setAll(state, action.payload)
    },
    filtersChange: (state, action) => {
      state.filter = action.payload
    },
    filtersAdd: (state, action) => {
      filtersAdapter.addOne(state, action.payload)
    },
    filtersDelete: (state, action) => {
      filtersAdapter.removeMany(state, action.payload)
    }
  },
  extraReducers: (builder) => {
    builder
      .addDefaultCase(() => { })
  }
})

const { actions, reducer: filters } = filtersSlice

export default filters

export const { selectAll } = filtersAdapter.getSelectors(state => state.filters)

export const { filtersChange, filtersSet, filtersAdd, filtersDelete } = actions
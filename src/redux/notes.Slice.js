import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";

const notesAdapter = createEntityAdapter()

const initialState = notesAdapter.getInitialState({
})

const notesSlice = createSlice({
  name: 'notes',
  initialState,
  reducers: {
    notesCreate: (state, action) => {
      notesAdapter.addOne(state, action.payload)
    },
    notesDelete: (state, action) => {
      notesAdapter.removeOne(state, action.payload)
    },
    notesChange: (state, action) => {
      notesAdapter.updateOne(state, action.payload)
    },
    notesSet: (state, action) => {
      notesAdapter.setAll(state, action.payload)
    }
  },
  extraReducers: (builder) => {
    builder
      .addDefaultCase(() => { })
  }
})

const { actions, reducer } = notesSlice

export default reducer

export const { selectAll, selectById } = notesAdapter.getSelectors(state => state.notes)

export const { notesCreate, notesDelete, notesChange, notesSet } = actions
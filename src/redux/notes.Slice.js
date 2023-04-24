import { createSlice, createAsyncThunk, createEntityAdapter } from "@reduxjs/toolkit";
import { useHttp } from '../hooks/http.hook'

const notesAdapter = createEntityAdapter()

export const tagOptions = [
  { value: 'Work', label: 'Work' },
  { value: 'Home', label: 'Home' },
  { value: 'Hobby', label: 'Hobby' },
  { value: 'Books', label: 'Books' }
]

export const allTags = tagOptions.reduce((acc, tag) => {
  acc[tag.value] = []
  return acc
}, {})

export const fetchNotes = createAsyncThunk(
  'notes/fetchNotes',
  () => {
    const { request } = useHttp();
    return request("https://precious-deer-cuff-links.cyclic.app/notes")
  }
)

const initialState = notesAdapter.getInitialState({
  filter: 'all'
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
    filtersChange: (state, action) => {
      state.filter = action.payload
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchNotes.fulfilled, (state, action) => {
        notesAdapter.setAll(state, action.payload)
      })
      .addDefaultCase(() => { })
  }
})

const { actions, reducer } = notesSlice

export default reducer

export const { selectAll } = notesAdapter.getSelectors(state => state.notes)

export const { notesCreate, notesDelete, notesChange, filtersChange } = actions
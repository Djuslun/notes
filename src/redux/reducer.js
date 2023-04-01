import { NOTE_CREATE, NOTE_DELETED, NOTE_CHANGE, FILTER_CHANGE, TAG_DELETED, EDIT_CHANGE } from './types'

const initialState = {
  notes: [],
  filter: ''
}

const filterTag = ({ note, tags, id: itemId, ...item }, id, tag) => {
  if (itemId === id) {
    const newTags = tags.filter(item => item !== tag)
    const newNote = note.split(tag).join(tag.slice(1))
    return { ...item, note: newNote, tags: newTags }
  }
  return item
}

export const reducer = (state = initialState, action) => {
  const { notes } = state

  switch (action.type) {
    case NOTE_CREATE:
      {
        const { note, id, tags, edit } = action.data
        return {
          ...state,
          notes: [...notes, { note, id, tags, edit }]
        }
      }
    case NOTE_DELETED:
      {
        const { id } = action.data
        const newNotes = notes.filter(item => item.id !== id)
        return {
          ...state,
          notes: newNotes
        }
      }
    case NOTE_CHANGE:
      {
        const { note, id, tags } = action.data
        const changedNotes = notes.map(item => (item.id === id)
          ? { ...item, note, tags }
          : item)
        return {
          ...state,
          notes: changedNotes
        }
      }
    case FILTER_CHANGE:
      {
        return {
          ...state,
          filter: action.data.filter
        }
      }
    case TAG_DELETED:
      {
        const { id, tag } = action.data
        const newNotes = notes.map(item => filterTag({ ...item }, id, tag))
        return {
          ...state,
          notes: newNotes
        }
      }
    case EDIT_CHANGE:
      {
        const { id, edit } = action.data
        const newNotes = notes.map(item => (item.id === id)
          ? { ...item, edit }
          : item)
        return {
          ...state,
          notes: newNotes
        }
      }
    default:
      return state
  }
}
import { NOTE_CREATE, NOTE_DELETED, NOTE_CHANGE, FILTER_CHANGE, TAG_DELETED, EDIT_CHANGE } from './types'

export const createNote = (note, id, tags) => {
  return {
    type: NOTE_CREATE,
    data: { note, id, tags, edit: true }
  }
}

export const deleteNote = (id) => {
  return {
    type: NOTE_DELETED,
    data: { id }
  }
}

export const changeNote = (note, id, tags) => {
  return {
    type: NOTE_CHANGE,
    data: { note, id, tags }
  }
}

export const changeFilter = (filter) => {
  return {
    type: FILTER_CHANGE,
    data: { filter }
  }
}

export const deleteTag = (tag, id, edit) => {
  return {
    type: TAG_DELETED,
    data: { tag, id, edit }
  }
}

export const changeEdit = (id, edit) => {
  return {
    type: EDIT_CHANGE,
    data: { id, edit }
  }
}
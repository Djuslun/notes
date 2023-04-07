import { NOTE_CREATE, NOTE_DELETED, NOTE_CHANGE, FILTER_CHANGE } from './types'

export const createNote = (title, description, id, tags) => {
  return {
    type: NOTE_CREATE,
    data: { title, description, id, tags }
  }
}

export const deleteNote = (id) => {
  return {
    type: NOTE_DELETED,
    data: { id }
  }
}

export const changeFilter = (filter) => {
  return {
    type: FILTER_CHANGE,
    data: { filter }
  }
}

export const changeNote = (title, description, id, tags) => {
  return {
    type: NOTE_CHANGE,
    data: { title, description, id, tags }
  }
}
import { NOTE_CREATE, NOTE_DELETED, NOTE_CHANGE, FILTER_CHANGE } from './types'

const initialState = {
  notes: {},
  tags: {
    all: [],
    Home: [],
    Work: [],
    Hobby: []
  },
  filter: 'all'
}

export const reducer = (state = initialState, action) => {
  const { notes, tags } = state

  switch (action.type) {
    case NOTE_CREATE:
      {
        const { title, description, id, tags: newNoteTags } = action.data
        const newTags = newNoteTags.reduce((acc, item) => ({ ...acc, [item]: [...acc[item], id] }), tags)

        return {
          ...state,
          notes: { ...notes, [id]: { title, description, id, tags: newNoteTags } },
          tags: { ...tags, ...newTags, 'all': [...tags['all'], id] }
        }
      }
    case NOTE_DELETED:
      {
        const { id } = action.data
        const notesCopy = JSON.parse(JSON.stringify(notes))
        const tagsCopy = JSON.parse(JSON.stringify(tags))
        tagsCopy.all = tagsCopy.all.filter(item => item !== id)
        notes[id]['tags'].forEach(tag => tagsCopy[tag] = tagsCopy[tag].filter(item => item !== id));
        delete notesCopy[id]

        return {
          ...state,
          notes: notesCopy,
          tags: tagsCopy
        }
      }
    case FILTER_CHANGE:
      {
        const { filter: newFilter } = action.data

        return {
          ...state,
          filter: newFilter
        }
      }
    case NOTE_CHANGE:
      {
        const { title, description, id, tags: newNoteTags } = action.data
        const deletedTags = notes[id].tags.filter(x => !newNoteTags.includes(x));
        const addedTags = newNoteTags.filter(x => !notes[id].tags.includes(x));
        let tagsCopy = JSON.parse(JSON.stringify(tags))
        deletedTags.forEach(tag => tagsCopy[tag] = tagsCopy[tag].filter(item => item !== id));
        const newTags = addedTags.reduce((acc, item) => ({ ...acc, [item]: [...acc[item], id] }), tagsCopy)
        tagsCopy = { ...tagsCopy, ...newTags }

        return {
          ...state,
          notes: { ...notes, [id]: { title, description, id, tags: newNoteTags } },
          tags: tagsCopy
        }
      }
    default:
      return state
  }
}
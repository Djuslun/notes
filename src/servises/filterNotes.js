
export const filteredNotes = (notes, filter) => {
  return filter ? notes.filter(item => item.note.includes(filter)) : notes
}
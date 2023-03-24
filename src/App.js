import { useState, useEffect } from 'react';

import Header from './components/header/Header';
import SearchPanel from './components/searh-panel/SearchPanel';
import AddNote from './components/add-note/AddNote';
import NotesList from './components/notes-list/NotesList';
import './App.css';

function App() {

  const [notes, setNotes] = useState(() => {
    const storageData = JSON.parse(window.localStorage.getItem('notes'))
    return storageData ? storageData : []
  })
  const [id, setId] = useState(notes.length);
  const [filter, setFilter] = useState('')

  useEffect(() => {
    window.localStorage.setItem('notes', JSON.stringify(notes));
  }, [notes]);

  const onAddNotes = (note) => {
    setNotes([...notes, { note, tags: generateTags(note), id: id }])
    setId(id + 1)
  }

  const onDeleteNote = (id) => {
    setNotes(notes.filter(item => item.id !== id))
  }

  const onNoteChange = (id, event) => {
    const newNote = event.currentTarget.innerHTML
    setNotes(notes.map(item => (item.id === id)
      ? { ...item, note: newNote, tags: generateTags(newNote) }
      : item)
    )
  }

  const onFilterChange = (filter) => {
    setFilter(filter)
  }

  const generateTags = (note) => {
    let pattern = /#\w+/gi;
    return note.match(pattern);
  }


  const filterdNotes = (notes) => {
    return filter ? notes.filter(item => item.tags?.includes?.(filter)) : notes
  }

  const visibleNotes = filterdNotes(notes)

  return (
    <div className="App">
      <Header />
      <SearchPanel onFilterChange={onFilterChange} />
      <AddNote onAddNotes={onAddNotes} />
      <NotesList
        notes={visibleNotes}
        onDeleteNote={id => onDeleteNote(id)}
        onNoteChange={(id, event) => onNoteChange(id, event)} />
    </div>
  );
}

export default App;

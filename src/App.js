import { useState, useEffect } from 'react';

import Header from './components/header/Header';
import SearchPanel from './components/searh-panel/SearchPanel';
import AddNote from './components/add-note/AddNote';
import NotesList from './components/notes-list/NotesList';
import sanitizeHtml from "sanitize-html"
import './App.css';

function App() {

  const [notes, setNotes] = useState(() => {
    const storageData = JSON.parse(window.localStorage.getItem('notes'))
    return storageData ? storageData : []
  })
  const [id, setId] = useState(notes.length);
  const [filter, setFilter] = useState('');

  let pattern = /#[А-Яа-яA-Za-z]+/gi;

  const sanitizeConf = {
    allowedTags: ["b", "i", "a", "p"]
  };

  useEffect(() => {
    window.localStorage.setItem('notes', JSON.stringify(notes));
  }, [notes]);


  const onAddNotes = (note) => {
    let newNote = sanitizeHtml(note, sanitizeConf)
    setNotes([...notes, { note: newNote, tags: generateTags(note), id: id }])
    setId(id + 1)
  }

  const onDeleteNote = (id) => {
    setNotes(notes.filter(item => item.id !== id))
  }

  const repleceNote = (note, edit) => {
    return edit
      ? note
        .replace(/<span class="note__tag">/g, '')
        .replace(/<\/span>/g, '')
      : note
        .replace(/<span class="note__tag">/g, '')
        .replace(/<\/span>/g, '')
        .replace(pattern, '<span class="note__tag">$&</span>')
  }


  const onNoteChange = (id, event, edit) => {
    const note = sanitizeHtml(event.currentTarget.innerHTML, sanitizeConf)
    const newNote = repleceNote(note)

    setNotes(notes.map(item => (item.id === id)
      ? { ...item, note: newNote, tags: generateTags(newNote) }
      : item)
    )
  }

  const onTagDelete = (id, tag, edit) => {
    setNotes(notes.map(item => {
      if (item.id === id) {
        const newTags = item.tags.filter(item => item !== tag)
        const newNote = item.note.replace(tag, tag.slice(1))
        return { ...item, note: repleceNote(newNote, edit), tags: newTags }
      }
      return item
    }))
  }

  const onFilterChange = (filter) => {
    setFilter(filter)
  }

  const generateTags = (note) => {
    return note.match(pattern) || [];
  }

  const onEditChange = (id, edit) => {
    setNotes(notes.map(item => {
      if (item.id === id) {
        return { ...item, note: repleceNote(item.note, edit) }
      }
      return item
    }))
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
        onNoteChange={(id, event, edit) => onNoteChange(id, event, edit)}
        onTagDelete={onTagDelete}
        onEditChange={onEditChange} />
    </div>
  );
}

export default App;

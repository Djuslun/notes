import Header from './components/header/Header';
import SearchPanel from './components/searh-panel/SearchPanel';
import AddNote from './components/add-note/AddNote';
import NotesList from './components/notes-list/NotesList';
import './App.css';

function App() {
  const notes = [
    { note: 'some note', tags: [], id: 1 },
    { note: 'another note', tags: [], id: 2 },
    { note: 'and another one', tags: [], id: 3 },
  ]

  return (
    <div className="App">
      <Header />
      <SearchPanel />
      <AddNote />
      <NotesList notes={notes} />
    </div>
  );
}

export default App;

import Header from './components/header/Header';
import SearchPanel from './components/searh-panel/SearchPanel';
import AddNote from './components/add-note/AddNote';
import NotesList from './components/notes-list/NotesList';

import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <SearchPanel />
      <AddNote />
      <NotesList />
    </div>
  );
}

export default App;

import Header from './components/header/Header';
import AddNote from './components/add-note/AddNote';
import NotesList from './components/notes-list/NotesList';

import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <AddNote />
      <NotesList />
    </div>
  );
}

export default App;

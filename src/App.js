import Header from './components/header/Header';
import FormNote from './components/form-note/FormNote';
import NotesList from './components/notes-list/NotesList';

import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <FormNote />
      <NotesList />
    </div>
  );
}

export default App;

import Header from './components/header/Header';
import NotesList from './components/notes-list/NotesList';
import FormNote from './components/formNote/FormNote';
import './App.scss';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="view">
        <FormNote
          title=''
          description=''
          tags={[]}
        />
        <NotesList />
      </div>
    </div>
  );
}

export default App;

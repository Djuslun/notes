import Header from './components/header/Header';
import NotesList from './components/notes-list/NotesList';
import FormNote from './components/formNote/FormNote';
import SideBar from './components/sideBar/SideBar';
import './App.scss';

function App() {
  return (
    <div className="App">
      <SideBar />
      <div className="view">
        <Header />
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

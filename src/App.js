import SideBar from './components/sideBar/SideBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Notes from './pages/notes/Notes';
import NewNote from './pages/newNote/NewNote';
import DashBoard from './pages/dashBoard/DashBoard';
import Note from './pages/note/Note';
import NotFoundPage from './pages/notFoundPage/NotFoundPage'
import { useLocalStogare } from './hooks/useLocalStogare';
import './App.scss';

function App() {
  useLocalStogare()

  return (
    <BrowserRouter>
      <div className="App">
        <SideBar />
        <div className="view">
          <main className="main">
            <Routes>
              <Route path='/' element={<DashBoard />} />
              <Route path='/new-note' element={<NewNote />} />
              <Route path='/notes' element={<Notes />} />
              <Route path='/notes/:id' element={<Note />} />
              <Route path='*' element={<NotFoundPage />} />
            </Routes>
          </main>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;


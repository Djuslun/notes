import SideBar from './components/sideBar/SideBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Notes from './pages/notes/Notes';
import NewNote from './pages/newNote/NewNote';
import DashBoard from './pages/dashBoard/DashBoard';
import Note from './pages/note/Note';
import NotFoundPage from './pages/notFoundPage/NotFoundPage'
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { filtersSet } from './redux/filters.Slice';
import { tagOptions } from './utils/consts';
import { notesSet } from './redux/notes.Slice';
import './App.scss';

function App() {
  const dispatch = useDispatch()

  const store = JSON.parse(localStorage.getItem('store'))

  useEffect(() => {
    const filters = Object.values(store.filters.entities) || tagOptions
    const notes = Object.values(store.notes.entities) || []
    dispatch(filtersSet(filters))
    dispatch(notesSet(notes))
  }, [])

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


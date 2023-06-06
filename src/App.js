import Header from './components/header/Header';
import SideBar from './components/sideBar/SideBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Notes from './pages/notes/Notes';
import NewNote from './pages/newNote/NewNote';
import DashBoard from './pages/dashBoard/DashBoard';
import Note from './components/note/Note';
import NotFoundPage from './pages/notFoundPage/NotFoundPage'
import './App.scss';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <SideBar />
        <div className="view">
          <Header />
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


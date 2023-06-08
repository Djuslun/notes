import { useSelector } from 'react-redux';
import { selectAll } from '../../redux/notes.Slice'
import NotesList from "../../components/notes-list/NotesList"
import Header from "../../components/header/Header"

const Notes = ({ }) => {
  const notes = useSelector(selectAll)
  const { filter } = useSelector(store => store.filters)

  const getVisibleNotes = (filter) => {
    if (filter === 'all') {
      return notes
    } else {
      return notes.filter(item => item.tags.includes(filter))
    }
  }

  const visibleNotes = getVisibleNotes(filter)

  return (
    <>
      <Header />
      <NotesList visibleNotes={visibleNotes} />
    </>
  )
}

export default Notes
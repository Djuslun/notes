import NoteListItemView from './NoteListItemView';
import { Link } from 'react-router-dom';
import './noteListItem.scss';
import { useDispatch } from 'react-redux';
import { notesDelete } from '../../redux/notes.Slice';
import { useEffect } from 'react';

const NoteListItem = ({ id, title, tags }) => {
  const dispatch = useDispatch()

  useEffect(() => {
    if (tags.length === 0) {
      dispatch(notesDelete(id))
    }
  }, [])


  const tagsElem = tags.map((tag, index) => (<div className='note-li__tag' key={index}>{tag}</div>))

  return (
    <Link to={`${id}`}>
      <NoteListItemView
        title={title}
        tagsElem={tagsElem} />
    </Link>
  )
}


export default NoteListItem;
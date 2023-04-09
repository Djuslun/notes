import { useSelector } from 'react-redux';
import { useState } from 'react';
import Note from '../note/Note';
import './noteListItem.scss';
import Portal from '../note/Portal';
import NoteListItemView from './NoteListItemView';

const NoteListItem = ({ id: noteId }) => {
  const [open, setOpen] = useState(false)
  const { title, description, id, tags } = useSelector(({ notes }) => notes[noteId])

  const handleOpen = () => setOpen(!open)

  const tagsElem = tags.map((tag, index) => (<div className='note-li__tag' key={index}>{tag}</div>))

  return (
    <>
      <NoteListItemView
        handleOpen={handleOpen}
        title={title}
        tagsElem={tagsElem} />
      {
        open &&
        <Portal
          rootId='portal'>
          <Note
            title={title}
            description={description}
            tags={tags}
            id={id}
            handleOpen={handleOpen} />
        </Portal>
      }
    </>
  )
}


export default NoteListItem;
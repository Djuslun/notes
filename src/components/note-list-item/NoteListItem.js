import { useSelector } from 'react-redux';
import { useState } from 'react';
import Note from '../note/Note';
import './noteListItem.scss';
import Portal from '../note/Portal';

const NoteListItem = ({ id: noteId }) => {
  const [open, setOpen] = useState(false)
  const { title, description, id, tags } = useSelector(({ notes }) => notes[noteId])

  const handleOpen = () => setOpen(!open)

  const tagsElem = tags.map((tag, index) => (<div className='note-li__tag' key={index}>{tag}</div>))

  return (
    <>
      <li
        className="note-li"
        tabIndex={0}
        onClick={handleOpen}>
        <p
          className='note-li__title' >
          {title}
        </p>
        <div className='note-li__tags'>
          {tagsElem}
        </div>
      </li>
      {
        open
          ? <Portal
            rootId='portal'>
            <Note
              title={title}
              description={description}
              tags={tags}
              id={id}
              handleOpen={handleOpen} />
          </Portal>
          : null
      }
    </>
  )
}

export default NoteListItem;
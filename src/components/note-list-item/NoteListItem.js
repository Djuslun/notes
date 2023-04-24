import { useState, useCallback, useMemo, memo } from 'react';
import Note from '../note/Note';
import './noteListItem.scss';
import Portal from '../note/Portal';
import NoteListItemView from './NoteListItemView';

const NoteListItem = ({ id, title, description, tags }) => {
  const [open, setOpen] = useState(false)

  const handleOpen = useCallback(() => setOpen(open => !open), [])

  const tagsElem = useMemo(() => {
    return tags.map((tag, index) => (<div className='note-li__tag' key={index}>{tag}</div>), [tags])
  })

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


export default memo(NoteListItem);
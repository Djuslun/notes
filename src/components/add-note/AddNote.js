import { useRef } from 'react';
import { createNote } from '../../redux/actions';
import { useDispatch } from 'react-redux';
import uniqid from 'uniqid'
import sanitizeHtml from "sanitize-html"
import { sanitizeConf } from "../../consts"
import { generateTags } from "../../servises/tags"
import { Button } from '@mui/material';
import './add-note.scss';

const AddNote = ({ }) => {
  const inputRef = useRef()
  const dispatch = useDispatch();

  const onSubmit = (event) => {
    event.preventDefault()
    const id = uniqid()
    const note = inputRef.current.value
    const newNote = sanitizeHtml(note, sanitizeConf).trim()
    const tags = generateTags(newNote)
    if (newNote) {
      dispatch(createNote(newNote, id, tags))
      inputRef.current.value = ''
    }
  }

  return (
    <div className="app-add-form">
      <h2>Add note</h2>
      <form
        className="add-form"
        onSubmit={onSubmit}>
        <input
          ref={inputRef}
          className='add-form__input'
          placeholder="Add note" />
        <Button
          className='add-form__button'
          type="submit"
          variant="contained"
          color="success">
          Add
        </Button>
      </form>
    </div>
  )
}

export default AddNote;
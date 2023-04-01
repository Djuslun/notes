import { useRef } from 'react';
import { createNote } from '../../redux/actions';
import { useDispatch } from 'react-redux';
import { Button } from '@mui/material';
import { submitFormPrepare } from '../../servises/submitForm';
import './form-note.scss';

const FormNote = () => {
  const inputRef = useRef()
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault()
    const { newNote, id, tags } = submitFormPrepare(inputRef)

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
        onSubmit={handleSubmit}>
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

export default FormNote;
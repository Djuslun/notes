import { useState } from 'react';

import './add-note.scss';
import { TextField, Button } from '@mui/material';

const AddNote = () => {
  const [note, setNote] = useState('');

  return (
    <div className="app-add-form">
      <h2>Add note</h2>
      <form
        className="add-form">
        <TextField
          className='add-form__input'
          id="outlined-basic"
          label="Add note"
          variant="outlined"
          color="success"
          value={note}
          onChange={(e) => setNote(e.target.value)} />
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
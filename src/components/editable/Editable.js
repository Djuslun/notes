import { useState, useRef } from 'react';
import ContentEditable from 'react-contenteditable'

const Editable = ({ note, edit, onNoteChange }) => {
  const contentEditable = useRef();

  const handleChange = event => {
    onNoteChange(event)
  };

  return <>
    <ContentEditable

      innerRef={contentEditable}
      html={note} // innerHTML of the editable div
      disabled={edit}       // use true to disable editing
      onChange={(event) => handleChange(event)} // handle innerHTML change
      tagName='p'
      className='note__text' // Use a custom HTML tag (uses a div by default)
    />
  </>
};

export default Editable
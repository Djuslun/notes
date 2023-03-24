import { useState, useRef } from 'react';
import ContentEditable from 'react-contenteditable'

const Editable = ({ note, edit, onNoteChange }) => {
  const contentEditable = useRef();
  const [state, setState] = useState({ html: `${note}` })


  const handleChange = event => {
    setState({ html: event.target.value });
    onNoteChange(event)
  };



  return <>
    <ContentEditable

      innerRef={contentEditable}
      html={state.html} // innerHTML of the editable div
      disabled={edit}       // use true to disable editing
      onChange={handleChange} // handle innerHTML change
      tagName='p'
      className='note__text' // Use a custom HTML tag (uses a div by default)
    />
  </>
};

export default Editable
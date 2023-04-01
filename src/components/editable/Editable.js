import { useRef } from 'react';
import ContentEditable from 'react-contenteditable'
import { useDispatch } from 'react-redux';
import { changeNote, deleteNote } from '../../redux/actions';
import sanitizeHtml from "sanitize-html"
import { sanitizeConf } from "../../consts"
import { generateTags } from "../../servises/tags"

const Editable = ({ note, edit, id }) => {
  const contentEditable = useRef();

  const dispatch = useDispatch()

  const handleChange = event => {
    const changedNote = sanitizeHtml(event.target.value, sanitizeConf)
    const tags = generateTags(changedNote)
    changedNote
      ? dispatch(changeNote(changedNote, id, tags))
      : dispatch(deleteNote(id))
  };

  return <>
    <ContentEditable
      innerRef={contentEditable}
      html={note} // innerHTML of the editable div
      disabled={edit}       // use true to disable editing
      onChange={(event) => handleChange(event)} // handle innerHTML change
      tagName='p' // Use a custom HTML tag (uses a div by default)
      className='note__text'
    />
  </>
};

export default Editable
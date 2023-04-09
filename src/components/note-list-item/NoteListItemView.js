
const NoteListItemView = ({ title, tagsElem, handleOpen }) => {
  return (
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
  )
}

export default NoteListItemView
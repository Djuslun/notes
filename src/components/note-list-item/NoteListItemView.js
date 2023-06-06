
const NoteListItemView = ({ title, tagsElem }) => {
  return (
    <li
      className="note-li"
      tabIndex={0}>
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
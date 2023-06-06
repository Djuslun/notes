import './noteListItem.scss';
import NoteListItemView from './NoteListItemView';

const NoteListItem = ({ id, title, tags }) => {

  const tagsElem = () => {
    return tags.map((tag, index) => (<div className='note-li__tag' key={index}>{tag}</div>), [tags])
  }

  return (
    <>
      <NoteListItemView
        title={title}
        tagsElem={tagsElem} />
    </>
  )
}


export default NoteListItem;
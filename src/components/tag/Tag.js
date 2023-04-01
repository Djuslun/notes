import { IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { useDispatch } from 'react-redux';
import { deleteTag } from '../../redux/actions';
import './tag.scss'

const Tag = ({ tag, id }) => {
  const dispatch = useDispatch()

  return (
    <div className="tag">
      {tag}
      <IconButton
        className='delete-button'
        aria-label="delete"
        size='small'
        onClick={() => dispatch(deleteTag(tag, id))}>
        <DeleteIcon />
      </IconButton>
    </div>
  )
}
export default Tag

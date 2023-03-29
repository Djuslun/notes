import './tag.scss'

import { IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const Tag = ({ tag, onTagDelete }) => {
  return (
    <div className="tag">
      {tag}
      <IconButton
        className='delete-button'
        aria-label="delete"
        size='small'
        onClick={onTagDelete}>
        <DeleteIcon />
      </IconButton>
    </div>
  )
}
export default Tag

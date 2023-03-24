import './search-panel.scss';
import { useState } from 'react';
import { TextField, Button } from '@mui/material';


const SearchPanel = ({ onFilterChange }) => {

  const [filter, setFilter] = useState('');

  const onFilterValueChange = (event) => {
    setFilter(event.currentTarget.value)
  }

  return (
    <div className="search-panel">
      <TextField
        className='search-panel__input'
        id="outlined-basic"
        label="Search note"
        variant="outlined"
        onChange={onFilterValueChange}
        value={filter} />
      <Button
        className='search-panel__button'
        variant="contained"
        color="success"
        onClick={() => onFilterChange(filter)}>
        Search
      </Button>
    </div>
  )
}

export default SearchPanel;
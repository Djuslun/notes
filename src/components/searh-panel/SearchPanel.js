import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { changeFilter } from '../../redux/actions';
import { Button } from '@mui/material';
import './search-panel.scss';

const SearchPanel = () => {
  const inputRef = useRef()
  const dispatch = useDispatch()

  const onFilterValueChange = () => {
    const newFilter = inputRef.current.value
    dispatch(changeFilter(newFilter))
  }

  return (
    <div className="search-panel">
      <input
        ref={inputRef}
        className='search-panel__input'
        placeholder='Search note' />
      <Button
        className='search-panel__button'
        variant="contained"
        color="success"
        onClick={onFilterValueChange} >
        Search
      </Button>
    </div>
  )
}

export default SearchPanel;
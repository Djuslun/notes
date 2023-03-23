import './search-panel.scss';
import { TextField } from '@mui/material';
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#0971f1',
      darker: '#053e85',
    },
    neutral: {
      main: '#fff',
      contrastText: '#fff',
    },
  },
});

const SearchPanel = () => {
  return (
    <div className="search-panel">
      <TextField className='search-panel__input' id="outlined-basic" label="Search note" variant="outlined" />
    </div>
  )
}

export default SearchPanel;
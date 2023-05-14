import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import CodeList from './CodeList';

function Dropdown() {
  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id='demo-simple-select-label'>Code</InputLabel>
        <Select
          labelId='demo-simple-select-label'
          id='demo-simple-select'
          label='Code'
        >
          <CodeList />
        </Select>
      </FormControl>
    </Box>
  );
}

export default Dropdown;

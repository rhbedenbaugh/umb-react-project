import { useState } from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import CodeList from './CodeList';

function Dropdown(CodeList) {
  const [activeCode, setActiveCode] = useState();
  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id='demo-simple-select-label'>Code</InputLabel>
        <Select
          value={activeCode}
          onChange={e => setActiveCode(e.target.value)}
          labelId='demo-simple-select-label'
          id='demo-simple-select'
          label='Code'
        >
          {options.map(o => (
          <option key={o.value} value={o.value}>{o.label}</option>
        ))}
          {/* <CodeList /> */}
        </Select>
      </FormControl>
    </Box>
  );
}

export default Dropdown;

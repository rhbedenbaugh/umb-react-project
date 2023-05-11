import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useEffect, useState } from 'react';
import CodeList from './CodeList';

function Dropdown() {
  const handleChange = (event) => {
    setCodes(event.target.value);
  };

  const [codes, setCodes] = useState();

  useEffect(() => {
    fetch('http://localhost:3001/api/cptcodes?_embed=costs')
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        const cptCodes = data.map((cptCode) => {
          return { id: cptCode.id, value: cptCode.code, label: cptCode.code };
        });
        setCodes(cptCodes);
      });
  }, []);

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id='demo-simple-select-label'>Code</InputLabel>

        <Select
          labelId='demo-simple-select-label'
          id='demo-simple-select'
          label='Age'
          onChange={handleChange}
        >
          <CodeList />
        </Select>
      </FormControl>
    </Box>
  );
}

export default Dropdown;

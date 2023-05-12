import { useEffect, useState } from 'react';
import MenuItem from '@mui/material/MenuItem';

const CodeList = () => {
  const [codes, setCodes] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/api/cptcodes?_embed=costs')
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        const cptCodes = data.map((cptCode) => {
          return { id: cptCode.id, value: cptCode.code, label: cptCode.code };
        });
        console.log(data)
        setCodes(cptCodes);
        
      });
  }, []);
console.log(codes)
  return (<div className='codeList'>
    {codes.map((code) => (
      <MenuItem className='code' key={code.id}>
        <p>{code.value}</p>
      </MenuItem>
    ))}
  </div>);
};

export default CodeList;

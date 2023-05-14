import './App';
import { useState } from 'react';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import AverageCost from './AverageCost';

function Form() {
  const [name, setName] = useState('mario');

    // function postData() {
  //   fetch(API_URL + '/costs', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json'
  //     },
  //     body: JSON.stringify({
  //  "cptCodeId": 1,
  //  "cost": 305.0,
  //  "facilityType": "Physician's Office",
  //  "copay": 20.0
  //     })
  //   })
  //     .then((response) => {
  //       if (!response.ok) {
  //         throw Error('ERROR');
  //       }
  //       return response.json();
  //     })
  //     .then((data) => {
  //       console.log(data);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }

  // postData();
  // console.log(codes);

  return (
    <div className='App'>
      <Typography variant='h5'>Cost Submission Form</Typography>
      <form>
        <div>The average cost for code <AverageCost/></div>
        <p>{name}</p>
        <TextField
          style={{ width: '200px', margin: '5px' }}
          type='text'
          label='Cost'
          variant='outlined'
        />
        <br />
        <TextField
          style={{ width: '200px', margin: '5px' }}
          type='text'
          label='Facility Type'
          variant='outlined'
        />
        <br />
        <TextField
          style={{ width: '200px', margin: '5px' }}
          type='text'
          label='Copay'
          variant='outlined'
        />
        <br />
        <Button variant='contained' color='primary'
        onClick={(e) => {
          setName('luigi')
          console.log('Form Submitted', e.target)
        }}>
          Submit
        </Button>
      </form>
    </div>
  );
}

export default Form;

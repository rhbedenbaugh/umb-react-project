import { useEffect, useState } from 'react';
import './App.css';

import Dropdown from './Dropdown';
import Form from './Form';

function App() {
  const options = [
    { value: 'green', label: 'Green' },
    { value: 'blue', label: 'Blue' },
    { value: 'red', label: 'Red' },
    { value: 'yellow', label: 'Yellow' },
    { value: 'orange', label: 'Orange' },
    { value: 'pink', label: 'Pink' },
    { value: 'purple', label: 'Purple' },
    { value: 'grey', label: 'Grey' },
  ];
  let API_URL = 'http://localhost:3001/api/'
  let [codes, setCodes] = useState([]);
  // console.log(codes)
  async function getCodes() {
    const response = await fetch(API_URL + 'cptcodes');
    const data = await response.json();
    codes = await data.map((cptcodes) => {
      return cptcodes.code;
    });
    console.log(codes);
    return codes;
  }
  
  getCodes();
  
  useEffect(() => setCodes(codes),[codes])
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
    <>
      <div>
        <a href='https://healthcare.utah.edu/' target='_blank' rel='noreferrer'>
          <img
            src='https://healthcare.utah.edu/themes/custom/theme_uou_clinical/logo.svg'
            className='logo uhealth'
            alt='UHealth logo'
          />
        </a>
      </div>
      <h1>UMB React Select Dropdown Component</h1>
      <div className='card'></div>
      <div>
        <div display='flex'>
          <div id='app'></div>
          <Dropdown placeHolder='Select a code' options={options} />
          <Form/>
          <h3 id='averageCost'></h3>
        </div>
      </div>
    </>
  );
}

export default App;

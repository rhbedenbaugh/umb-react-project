// import { useEffect, useState } from 'react';
import './App.css';
import Dropdown from './Dropdown';
import Form from './Form';

function App() {
  // const [codeList, setCodeList] = useState(null);
  // const [codes,setCodes] =useState([]);
  // const [codes, setCodes] = useState([]);

  // useEffect(() => {
  //   fetch('http://localhost:3001/api/cptcodes?_embed=costs')
  //     .then((res) => {
  //       return res.json();
  //     })
  //     .then((data) => {
  //       const cptCodes = data.map((cptCode) => {
  //         return { id: cptCode.id, value: cptCode.code, label: cptCode.code };
  //       });
  //       console.log(data)
  //       setCodes(cptCodes);

  //     });
  // }, []);
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
      <h2>UMB React Select Dropdown Component</h2>
      <div>
        <div display='flex'>
          <Dropdown placeHolder='Select a code' />
          <Form />
          <h3 id='averageCost'></h3>
        </div>
      </div>
    </>
  );
}

export default App;

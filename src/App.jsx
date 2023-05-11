import { useEffect, useState } from 'react';
import './App.css';
import Dropdown from './Dropdown';
import Form from './Form';

function App() {
  const [codeList, setCodeList] = useState(null);
  const [codes,setCodes] =useState(null);

  // useEffect(() => {
  //     fetch('http://localhost:3001/api/cptcodes?_embed=costs')
  //     .then(res => {
  //       return res.json();
  //     })
  //     .then((data)=> {
  //       console.log(data);
  //       setCodes(data)
  //     })
  //     const cptCodes = data.map((cptCode) => {
  //       return {id:cptCode.id, value:cptCode.code, label:cptCode.code};
  //     }, []);
  //     setCodes(cptCodes)
  //     console.log(cptCodes);
  //     return cptCodes;
  //   });
    // getCodes();
  // }, []);

  // useEffect(() => {
  //   getAverageCost();
  // }, []);

  
  // const getAverageCost = async () => {
  //   const response = await fetch('http://localhost:3001/api/costs');
  //   const data = await response.json();
  //   const averageCost = await data.map((cost) => {
  //     return {id:cost.id, code:cost.cptCodeId, cost:cost.cost};
  //   });
  //   // setCodes(cptCodes)
  //   console.log(averageCost);
  //   return averageCost;
  // }
  // useEffect(() => setCodes(cptCodes),[codes])
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
      <div className='card'></div>
      <div>
        <div display='flex'>
          <div id='app'></div>
          <Dropdown placeHolder='Select a code' options={codes} />
          <Form/>
          <h3 id='averageCost'></h3>
        </div>
      </div>
    </>
  );
  }

export default App;

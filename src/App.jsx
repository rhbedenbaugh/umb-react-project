import './App.css';

import Dropdown from './Dropdown';

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

  function fetchData() {
    fetch('http://localhost:3001/api/cptcodes')
      .then((response) => {
        if (!response.ok) {
          throw Error('ERROR');
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
        const codes = data.map((cptcodes) => {
          return `${cptcodes.code}`;
        });
        console.log(codes);
        // document.querySelector('#app').insertAdjacentHTML('afterbegin', codes);
        return codes;
      })
      .catch((error) => {
        console.log(error);
      });
  }

  fetchData();

  // function postData() {
  //   fetch(API_URL + 'cptcodes?_embed=costs', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json'
  //     },
  //     body: JSON.stringify({

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
      <div className='card'>
        <p>
          TODO: Create CPT select dropdown component and display the average
          cost.
        </p>
      </div>

      <div>
        <div display='flex'>
          <div id='app'></div>
          <Dropdown placeHolder='Select a code' options={options} />
          <h3 id='averageCost'></h3>
        </div>
      </div>
    </>
  );
}

export default App;

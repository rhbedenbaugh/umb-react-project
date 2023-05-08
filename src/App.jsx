import './App.css';

import Dropdown from './components/Dropdown';

const API_URL = 'http://localhost:3001/';

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
      <h1>UMB React Project</h1>
      <div className='card'>
        <p>
          TODO: Create CPT select dropdown component and display the average
          cost.
        </p>
      </div>
      <p className='read-the-docs'>Check the README to get started!</p>
      <Dropdown placeHolder='Select...' options={options} />
    </>
  );
}

export default App;

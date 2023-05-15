// import { useEffect, useState } from 'react';
import './App.css';
import Dropdown from './Dropdown';

function App() {

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
          <h3 id='averageCost'></h3>
        </div>
      </div>
    </>
  );
}

export default App;

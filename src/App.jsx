import './App.css'

import Dropdown from "./components/Dropdown";

function App() {

  return (
    <>
      <div>
        <a href="https://healthcare.utah.edu/" target="_blank" rel="noreferrer">
          <img src="https://healthcare.utah.edu/themes/custom/theme_uou_clinical/logo.svg" className="logo uhealth" alt="UHealth logo" />
        </a>
      </div>
      <h1>UMB React Project</h1>
      <div className="card">
        <p>
          TODO: Create CPT select dropdown component and display the average cost.
        </p>
      </div>
      <p className="read-the-docs">
        Check the README to get started!
      </p>
      <Dropdown placeHolder="Select..." />
    </>
  )
}

export default App

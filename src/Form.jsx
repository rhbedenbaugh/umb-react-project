import './App.css';

function Form() {
  return (
    <>
      <form className='form-container' method='POST'>
        <input type='hidden' name='cptCodeId' value='code' />
        <div className='form-input'>
          <label htmlFor='cost'>Cost</label>
          <input type='number' name='cost' id='cost' min='1' required />
        </div>
        <div className='form-input'>
          <label htmlFor='facilityType'>Facility Type</label>
          <input type='text' name='facilityType' id='facilityType' required />
        </div>
        <div className='form-input'>
          <label htmlFor='copay'>Copay</label>
          <input type='number' name='copay' id='copay' min='1' required />
        </div>
        <div>
          <button type='reset'>Reset</button>
          <button type='submit'>Submit</button>
        </div>
      </form>
    </>
  );
}

export default Form;

import { useState, useId, useMemo } from 'react';
import AverageCost from './AverageCost';
import Form from './Form';
// import CodeList from './CodeList';

let options = [
  { id: '0', value: '', label: '--Please select a code--' },
  { id: '1', value: '99713', label: '99713' },
  { id: '2', value: '99714', label: '99714' },
  { id: '3', value: '99715', label: '99715' },
];
function Dropdown() {
  const [activeCode, setActiveCode] = useState('');
  return (
    <>
      <label htmlFor='code'></label>
      <select
        id='code'
        value={activeCode}
        onChange={(e) => setActiveCode(e.target.value)}
      >
        {options.map((option) => (
          <option key={option.id} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {activeCode && (
        <p>
          The average cost for {[activeCode]} is <AverageCost />
        </p>
      )}
      {activeCode && <Form></Form>}
    </>
  );
}

export default Dropdown;

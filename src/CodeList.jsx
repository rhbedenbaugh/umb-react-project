import { useEffect, useState } from 'react';
import MenuItem from '@mui/material/MenuItem';

const CodeList = () => {
  const [codeList, setCodeList] = useState([
    {
      "id": 1,
      "code": "99213",
      "description": "Office or other outpatient visit for the evaluation and management of an established patient, which requires a medically appropriate history and/or examination and low complexity medical decision making. Counseling and/or coordination of care with other providers or agencies are provided consistent with the nature of the problem(s) and the patient's and/or family's needs."
    },
    {
      "id": 2,
      "code": "77067",
      "description": "Screening mammography, bilateral (2-view study of each breast), including computer-aided detection (CAD) when performed."
    },
    {
      "id": 3,
      "code": "96372",
      "description": "Therapeutic, prophylactic, or diagnostic injection (specify substance or drug); subcutaneous or intramuscular."
    },
    {
      "id": 4,
      "code": "90471",
      "description": "Immunization administration (includes percutaneous, intradermal, subcutaneous, or intramuscular injections); 1 vaccine (single or combination vaccine/toxoid)."
    },
    {
      "id": 5,
      "code": "81002",
      "description": "Urinalysis, by dip stick or tablet reagent for bilirubin, glucose, hemoglobin, ketones, leukocytes, nitrite, pH, protein, specific gravity, urobilinogen, any number of these constituents; non-automated, with microscopy."
    }
  ]);

  useEffect(() => {
    fetch('http://localhost:3001/api/cptcodes?_embed=costs')
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        const cptCodes = data.map((cptCode) => {
          return { id: cptCode.id, value: cptCode.code, label: cptCode.code };
        });
        setCodeList(cptCodes);
      });
  }, []);
  console.log(CodeList);

  return (<div className='codeList'>
    {codeList.map((code) => (
      <MenuItem className='code' key={code.id}>
        <h2>{code.code}</h2>
      </MenuItem>
    ))}
  </div>);
};

export default CodeList;

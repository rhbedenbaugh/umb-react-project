import { useState, useEffect } from "react"

const useFetch = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/api/cptcodes')
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        const cptCodes = data.map((cptCode) => {
          return { id: cptCode.id, value: cptCode.code, label: cptCode.code };
        });
        setData(cptCodes);
      })
      .catch(err => {
        console.log(err.message)
        setError(err.message);
      });
  }, []);

  return {data, cptCodes}
}

export default useFetch;
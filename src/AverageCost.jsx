import { useEffect, useState } from 'react';

function AverageCost(cptCodeId) {
  const [average, setAverage] = useState();

  useEffect(() => {
    fetch(`http://localhost:3001/cptCodes/${cptCodeId}/costs`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        let total = 0;
        data.map((cost) => {
          total += cost.cost;
        });
        let average = total / data.length;
        setAverage(average);
      }),
      [];
  });

  if (average) {
    return average;
  }
}

export default AverageCost;

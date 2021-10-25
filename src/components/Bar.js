import React, { useState, useEffect } from 'react';
import Chart from 'react-apexcharts';
import {getProfit, getSales} from '../services';

const Bar = () => {
  const [barD, setBarD] = useState(null);
  const [toShow, setToShow] = useState('profit');

  useEffect(() => {
    if (toShow === 'profit') {
      setBarD(() => (
        {
          options: {
            chart: {
              id: 'datamellon-metrics'
            },
            xaxis: {
              categories: [
                'Washington',
                'Connecticut',
                'Pennsylvania',
                'California',
                'New Jersey',
                'New York',
                'Texas',
                'Ohio',
                'Illinois'
              ]
            }
          },
          series: [{
            name: 'profit',
            data: getProfit()
          }]
        }
      )
      )
    }

    if (toShow === 'sales') {
      setBarD(() => (
        {
          options: {
            chart: {
              id: 'datamellon-metrics'
            },
            xaxis: {
              categories: [
                'Washington',
                'Connecticut',
                'Pennsylvania',
                'California',
                'New Jersey',
                'New York',
                'Texas',
                'Ohio',
                'Illinois'
              ]
            }
          },
          series: [{
            name: 'sales',
            data: getSales()
          }]
        }
      )
      )
    }
  }, [toShow]);

if (barD === null) return <p>Loading...</p>
  return (
    <section className="col-12">
      <select onChange={(e) => setToShow(e.target.value)}>
        <option value="profit">Profit</option>
        <option value="sales">Sales</option>
      </select>
      <h2>Bar Chart</h2>
      <Chart options={barD.options} series={barD.series} type="bar" width={500} height={320} />
    </section>
  );
};

export default Bar;

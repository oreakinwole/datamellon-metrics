import React, { useState } from 'react';
import Chart from 'react-apexcharts';
import { getSales } from '../services';


const Pie = () => {
  const [pieD] = useState( {
    series: getSales(),
    options: {
      chart: {
        width: 380,
        type: 'pie',
      },
      labels: [
        'Washington',
        'Connecticut',
        'Pennsylvania',
        'California',
        'New Jersey',
        'New York',
        'Texas',
        'Ohio',
        'Illinois'
      ],
      responsive: [{
        breakpoint: 480,
        options: {
          chart: {
            width: 200
          },
          legend: {
            position: 'bottom'
          }
        }
      }]
    },
  });

  return (
    <section className="col-6">
      <h2>Pie Chart</h2>
      <Chart options={pieD.options} series={pieD.series} type="pie" width={380} />
    </section>
  );

};

export default Pie;
import React, { useState } from 'react';
import Chart from 'react-apexcharts';
import { getProfit, getSales } from '../services';

const Composite = () => {
  const [compositeD] = useState({
    series: [{
      name: 'Sales',
      type: 'column',
      data: getSales()
    }, {
      name: 'Profit',
      type: 'line',
      data: getProfit()
    }],
    options: {
      chart: {
        height: 350,
        type: 'line',
      },
      stroke: {
        width: [0, 4]
      },
      title: {
        text: 'Sales and Profit'
      },
      dataLabels: {
        enabled: true,
        enabledOnSeries: [1]
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
      xaxis: {
        type: 'string'
      },
      yaxis: [{
        title: {
          text: 'Profit',
        },
  
      }, {
        opposite: true,
        title: {
          text: 'Sales'
        }
      }]
    },
  });

  return (
    <section className="col-6">
    <h2>Composite bar Chart</h2>
    <Chart options={compositeD.options} series={compositeD.series} type="line" width={500} height={350} />
  </section>
  );
}

export default Composite;

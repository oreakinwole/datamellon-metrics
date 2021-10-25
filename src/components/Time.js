import React, { useState } from 'react';
import Chart from 'react-apexcharts';

const Time = () => {
  const [timeD] = useState({
    series: [
      {
        data: [
          {
            x: 'Code',
            y: [
              new Date('2019-03-02').getTime(),
              new Date('2019-03-04').getTime()
            ]
          },
          {
            x: 'Test',
            y: [
              new Date('2019-03-04').getTime(),
              new Date('2019-03-08').getTime()
            ]
          },
          {
            x: 'Validation',
            y: [
              new Date('2019-03-08').getTime(),
              new Date('2019-03-12').getTime()
            ]
          },
          {
            x: 'Deployment',
            y: [
              new Date('2019-03-12').getTime(),
              new Date('2019-03-18').getTime()
            ]
          }
        ]
      }
    ],
    options: {
      chart: {
        height: 350,
        type: 'rangeBar'
      },
      plotOptions: {
        bar: {
          horizontal: true
        }
      },
      xaxis: {
        type: 'datetime'
      }
    },
  });

  // useEffect(() => {
  //   const newData = 
  // }, []);

  return (
    <section className="col-6">
    <h2>Time Series</h2>
    <Chart options={timeD.options} series={timeD.series} type="rangeBar" height={350} />
  </section>
  );

};

export default Time;
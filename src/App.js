import React, { useState } from 'react';
import Chart from 'react-apexcharts';
import {barData, compositeData, pieData, timeData} from './services';

const App = () => {
  const [barD] = useState(barData);

  const [compositeD] = useState(compositeData);
  const [pieD] = useState(pieData);
  const [timeD] = useState(timeData);

  return (
    <div className="container-fluid">
     <div className="row p-2">
     <section className="col-6">
        <h2>Bar Chart</h2>
        <Chart options={barD.options} series={barD.series} type="bar" width={500} height={320} />
      </section>

      <section className="col-6">
        <h2>Composite bar Chart</h2>
        <Chart options={compositeD.options} series={compositeD.series} type="line" width={500} height={350} />
      </section>

      <section className="col-6">
        <h2>Pie Chart</h2>
        <Chart options={pieD.options} series={pieD.series} type="pie" width={380} />
      </section>

      <section className="col-6">
        <h2>Time Series</h2>
        <Chart options={timeD.options} series={timeD.series} type="rangeBar" height={350} />
      </section>
     </div>
    </div>
  );
};

export default App;

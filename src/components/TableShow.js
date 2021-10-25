import React from 'react';
import { getSales,getProfit } from '../services';

const categories = [
  'Washington',
  'Connecticut',
  'Pennsylvania',
  'California',
  'New Jersey',
  'New York',
  'Texas',
  'Ohio',
  'Illinois'
];

const TableShow = () => (
    <div className="row">
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">State</th>
            <th scope="col">Sales</th>
            <th scope="col">Profit</th>
          </tr>
        </thead>
        <tbody>
          {categories.map((cur, index) => (
            <tr key={cur}>
              <th scope="row">{index + 1}</th>
              <td>{cur}</td>
              <td>{getSales()[index]}</td>
              <td>{getProfit()[index]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

export default TableShow;
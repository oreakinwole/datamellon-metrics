import { mockResponse } from '../App';

const getSalesResult = (name) =>
  mockResponse.filter((cur) => cur.State.toLowerCase() === name)
    .reduce((prev, cur) => parseFloat((parseFloat(prev) + parseFloat(cur.Sales)).toFixed(2)), 0);

const getProfitResult = (name) =>
  mockResponse.filter((cur) => cur.State.toLowerCase() === name)
    .reduce((prev, cur) => parseFloat((parseFloat(prev) + parseFloat(cur.Profit)).toFixed(2)), 0);



// Profit
const washingtonP = () => getProfitResult('washington');

const connecticutP = () => getProfitResult('connecticut')

const pennsylvaniaP = () => getProfitResult('pennsylvania');

const californiaP = () => getProfitResult('california');

const newJerseyP = () => getProfitResult('new jersey');

const newYorkP = () => getProfitResult('new york');

const texasP = () => getProfitResult('texas');

const ohioP = () => getProfitResult('ohio');

const illinoisP = () => getProfitResult('illinois');

// Sales
const washingtonS = () => getSalesResult('washington');

const connecticutS = () => getSalesResult('connecticut');

const pennsylvaniaS = () => getSalesResult('pennsylvania');

const californiaS = () => getSalesResult('california');

const newJerseyS = () => getSalesResult('new jersey');

const newYorkS = () => getSalesResult('new york')

const texasS = () => getSalesResult('texas');

const ohioS = () => getSalesResult('ohio');

const illinoisS = () => getSalesResult('illinois');


export const getProfit = () => [washingtonP(), connecticutP(), pennsylvaniaP(), californiaP(), newJerseyP(), newYorkP(), texasP(), ohioP(), illinoisP()];


export const getSales = () => [washingtonS(), connecticutS(), pennsylvaniaS(), californiaS(), newJerseyS(), newYorkS(), texasS(), ohioS(), illinoisS()];


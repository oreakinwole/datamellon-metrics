import React, {useState, useEffect } from 'react';
import Bar from './components/Bar';
import Composite from './components/Composite';
import Pie from './components/Pie';
import TableShow from './components/TableShow';

export let mockResponse = undefined;

const App = () => {
  const [isFetched, setIsFetched] = useState(false);
  useEffect(() => {
    function fetchData() {
      const reqBody = { angular_test: "angular-developer" };
     fetch('https://g54qw205uk.execute-api.eu-west-1.amazonaws.com/DEV/stub', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(reqBody)
      })
      .then(response => response.json())
      .then((data) => {
        mockResponse = data;
        setIsFetched(true);
      })
      .catch((error) => console.error('Error:', error));
    }

    fetchData();
  }, [])

  if (!isFetched) return <p>App Loading...</p>
  return (
    <div className="container-fluid">
      <div className="row p-2">
     <Pie/>

       <Composite/>

      </div>

      <Bar/>

      <TableShow />
    </div>
  );
}

export default App;

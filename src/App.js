import './App.css';
import Dashboard from './Dashboard';
import Registration from './Registration';
import { useState } from 'react';
function App() {
  const [data, setData] = useState()
  const response = (data) => {
    setData(data);
  }
  return (
    <div>
      {data ? <Dashboard responseData={data} /> :
        <Registration responseData={response} />
      }
    </div>
  );
}

export default App;

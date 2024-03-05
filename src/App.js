import './App.css';
import Dashboard from './Dashboard';
import Registration from './Registration';
import { useState } from 'react';
function App() {
  const [data, setData] = useState()
  const [documentsData, setDocumentsData] = useState([])
  const response = (data) => {
    setData(data);
  }
  const documentsResultData =(d)=>{
    setDocumentsData(d)
  }
  return (
    <div>
      {data ? <Dashboard responseData={data} documentsResultData={documentsData} /> :
        <Registration responseData={response} documentsResultData={documentsResultData} />
      }
    </div>
  );
}

export default App;

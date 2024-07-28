import './App.css';
import Axios from 'axios';
import { useState, useEffect } from 'react';

function App() {
  const [fact, setFact] = useState('');
  const fetchFact=()=>{
    Axios.get('https://catfact.ninja/fact').then((res)=>{
    setFact(res.data.length<200 ? res.data.fact : 'Fact too long, click again');
  })}
  useEffect (()=>{
    fetchFact();
  },[]);
  return (
  <div className="App">    
      <button onClick={fetchFact}>Generate random cat fact</button>
      <h2>{fact}</h2>
    </div>
  );
}

export default App;

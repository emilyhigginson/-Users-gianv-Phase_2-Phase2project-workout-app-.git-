import React, {useState, useEffect} from 'react';
import CardContainer from './CardContainer';

function App() {
  const [woArray, setWoArray] = useState ([])
  
  useEffect (() => {
    fetch ('http://localhost:3000/workouts')
    .then (res => res.json())
    .then (data => setWoArray(data))
  },[])
  
  console.log(woArray);
  
  
  return (
    <div className="App">
     <CardContainer woArray ={woArray} />
    </div>
  );
}

export default App;

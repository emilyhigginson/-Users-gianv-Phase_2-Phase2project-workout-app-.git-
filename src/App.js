import React, {useState, useEffect} from 'react';
import DisplayCase from './DisplayCase';



function App() {
  const [woArray, setWoArray] = useState ([])
  
  
  useEffect (() => {
    fetch ('http://localhost:3000/workouts')
    .then (res => res.json())
    .then (setWoArray)
  },[])
  
  console.log(woArray);
  
  
  return (
    <div className="App">
     <DisplayCase woArray ={woArray} />
    </div>
  );
}

export default App;

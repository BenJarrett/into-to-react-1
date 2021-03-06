import React from 'react';
import './App.css';
import Counter from './Counter';


function App() { 

  const array = [
    {
      appName: "Counter 1",
      counterValue: 200
    },
    {
      appName: "Counter 6",
      counterValue: 0
    },
    {
      appName: "Counter 3",
      counterValue: 100
    },
    {
      appName: "Counter 15",
      counterValue: 50
    }
  ];



  return (
    <>
    {array.map((counter, i) => <Counter key={i} appName={counter.appName} counterValue={counter.counterValue}/>)}
  
  </>
  )
}

export default App;

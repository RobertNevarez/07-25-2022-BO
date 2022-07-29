import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const [state, setState] = useState({
    sum : 0,
    text: ""
});

//anytime state changes, this function will be ran
useEffect(() => {
  
    console.log(state);
}, [state])

function updateText(event : any){
  if(state.sum%2 == 0)
  {
    setState({...state, sum: event.target.value, text: "Evenish" })
  }
  else
  {
    setState({...state, sum: event.target.value, text:"Oddish"});

  }

    
}

return (
    <>
        <input type="number" onChange={updateText} />
        <h2>{state.text}</h2>
    </>
)

}

export default App;

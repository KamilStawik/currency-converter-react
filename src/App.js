import './App.css';
import React, { useState } from 'react';
import Form from './Form'

function App() {

  const [amount, setAmount] = useState(0);
  const [targetCurrency, setTargetCurrency] = useState(0);

  const getNewAmountValue = (newAmountValue) => {
    setAmount(newAmountValue);
    console.log(newAmountValue)
  };

  const getNewTargetCurrency = (newTargetCurrency) => {
    setTargetCurrency(newTargetCurrency);
    console.log(newTargetCurrency)
  };



  const calculateCurrency = () => {
    return (+amount / 4.5).toFixed(2);
  };




  return (

    <div className="App">

      <Form getNewAmountValue={getNewAmountValue} getNewTargetCurrency={getNewTargetCurrency} />

      <span>Wynik: </span>
      <span>{calculateCurrency()} </span>
      <span>{targetCurrency}</span>

    </div>
  );
}

export default App;

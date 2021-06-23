import './App.css';
import React, { useState } from 'react';
import Form from './Form'

function App() {

  const [amount, setAmount] = useState(0);

  const getNewAmountValue = (newAmountValue) => {
    setAmount(newAmountValue);
    console.log(newAmountValue)
  };
  const calculateCurrency = () => {
    return (+amount / 4.5).toFixed(2);
  };

  return (

    <div className="App">

      <Form getNewAmountValue={getNewAmountValue} />

      <span>Wynik: </span>
      <span>{calculateCurrency()} </span>
      <span>EUR</span>

    </div>
  );
}

export default App;

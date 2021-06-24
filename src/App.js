import './App.css';
import React, { useState } from 'react';
import Form from './Form'

function App() {

  const [amount, setAmount] = useState(0);
  const [baseCurrency, setBaseCurrency] = useState("PLN");
  const [targetCurrency, setTargetCurrency] = useState("EUR");

  const currencyPairRatings = [
    { baseCurrency: "PLN", targetCurrency: "EUR", rating: 1 / 4.5 },
    { baseCurrency: "EUR", targetCurrency: "PLN", rating: 4.5 },
    { baseCurrency: "PLN", targetCurrency: "DOL", rating: 1 / 4 },
    { baseCurrency: "DOL", targetCurrency: "PLN", rating: 4 },
  ];

  const getNewAmountValue = (newAmountValue) => {
    setAmount(newAmountValue);
    console.log(newAmountValue);
  };

  const getNewBasetCurrency = (newBaseCurrency) => {
    setBaseCurrency(newBaseCurrency);
    console.log(newBaseCurrency);
  };

  const getNewTargetCurrency = (newTargetCurrency) => {
    setTargetCurrency(newTargetCurrency);
    console.log(newTargetCurrency);
  };

  const selectProperRating = (currencyPairRating) => (currencyPairRating.baseCurrency === baseCurrency && currencyPairRating.targetCurrency === targetCurrency);

  const properRating = currencyPairRatings.filter(selectProperRating);

  const calculateCurrency = () => {

    return (+amount * properRating[0].rating).toFixed(2);

  };

  return (

    <div className="App">

      <Form getNewAmountValue={getNewAmountValue} getNewTargetCurrency={getNewTargetCurrency} getNewBaseCurrency={getNewBasetCurrency} />


      <h1>Wynik: {calculateCurrency()}</h1>

      <p>
        <span>{baseCurrency} </span>
        <span>{targetCurrency} </span>
        <span>Właściwy kurs to: {properRating[0].rating} </span>
      </p>


    </div>
  );
}

export default App;

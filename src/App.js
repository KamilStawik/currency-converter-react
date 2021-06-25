import './App.css';
import React, { useState } from 'react';
import Container from './Container';
import Header from './Header';
import InfoSection from './InfoSection';
import Form from './Form';

function App() {

  const [amount, setAmount] = useState(0);
  const [baseCurrency, setBaseCurrency] = useState("PLN");
  const [targetCurrency, setTargetCurrency] = useState("EUR");

  const currencyPairRatings = [
    { baseCurrency: "PLN", targetCurrency: "EUR", rating: 1 / 4.5302 },
    { baseCurrency: "EUR", targetCurrency: "PLN", rating: 4.5302 },
    { baseCurrency: "PLN", targetCurrency: "USD", rating: 1 / 3.7986 },
    { baseCurrency: "USD", targetCurrency: "PLN", rating: 3.7986 },
    { baseCurrency: "USD", targetCurrency: "EUR", rating: 1 / 1.1926 },
    { baseCurrency: "EUR", targetCurrency: "USD", rating: 1.1926 },
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

  const selectProperRating = (currencyPairRating) =>
    (currencyPairRating.baseCurrency === baseCurrency && currencyPairRating.targetCurrency === targetCurrency);

  const properRating = currencyPairRatings.filter(selectProperRating);

  const calculateCurrency = () => {

    return (+amount * properRating[0].rating).toFixed(2);

  };

  return (
    <>
      <Header />
      <Container>
        <InfoSection />
        <Form
          getNewAmountValue={getNewAmountValue}
          getNewTargetCurrency={getNewTargetCurrency}
          getNewBaseCurrency={getNewBasetCurrency}
        />

        <h1>Wynik: {calculateCurrency()}</h1>

        <p>
          <span>{baseCurrency} </span>
          <span>{targetCurrency} </span>
          <span>Właściwy kurs to: {properRating[0].rating} </span>
        </p>
      </Container>
    </>
  );
}

export default App;

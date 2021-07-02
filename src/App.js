import React, { useState } from 'react';
import Header from './Header';
import Container from './Container';
import InfoSection from './InfoSection';
import Form from './Form';
import ResultSection from './ResultSection';

function App() {

  const [amount, setAmount] = useState(1.00);
  const [baseCurrency, setBaseCurrency] = useState("PLN");
  const [targetCurrency, setTargetCurrency] = useState("EUR");
  const [clickCounter, setClickCounter] = useState(0);

  const currencyPairRatings = [
    { baseCurrency: "PLN", targetCurrency: "EUR", rating: 1 / 4.5302 },
    { baseCurrency: "EUR", targetCurrency: "PLN", rating: 4.5302 },
    { baseCurrency: "PLN", targetCurrency: "USD", rating: 1 / 3.7986 },
    { baseCurrency: "USD", targetCurrency: "PLN", rating: 3.7986 },
    { baseCurrency: "USD", targetCurrency: "EUR", rating: 1 / 1.1926 },
    { baseCurrency: "EUR", targetCurrency: "USD", rating: 1.1926 },
    { baseCurrency: "PLN", targetCurrency: "PLN", rating: 1 },
    { baseCurrency: "EUR", targetCurrency: "EUR", rating: 1 },
    { baseCurrency: "USD", targetCurrency: "USD", rating: 1 },
  ];

  const getNewAmountValue = (newAmountValue) => {
    setAmount(newAmountValue);
  };

  const getNewBasetCurrency = (newBaseCurrency) => {
    setBaseCurrency(newBaseCurrency);
  };

  const getNewTargetCurrency = (newTargetCurrency) => {
    setTargetCurrency(newTargetCurrency);
  };

  const getNewClickCounterValue = (newClickCounterValue) => {
    setClickCounter(newClickCounterValue);
  };

  const selectProperRating = (currencyPairRating) =>
    (currencyPairRating.baseCurrency === baseCurrency && currencyPairRating.targetCurrency === targetCurrency);

  const properRating = (currencyPairRatings.filter(selectProperRating)[0].rating);

  const calculateCurrency = () => {
    return (+amount * properRating).toFixed(2);
  };

  return (
    <>
      <Header />
      <Container>
        <InfoSection />
        <Form
          properRating={properRating}
          getNewAmountValue={getNewAmountValue}
          getNewTargetCurrency={getNewTargetCurrency}
          getNewBaseCurrency={getNewBasetCurrency}
          getNewClickCounterValue={getNewClickCounterValue}
        />
        <ResultSection
          calculateCurrency={calculateCurrency}
          amount={amount}
          baseCurrency={baseCurrency}
          targetCurrency={targetCurrency}
          clickCounter={clickCounter}
        />
      </Container>
    </>
  );
};

export default App;

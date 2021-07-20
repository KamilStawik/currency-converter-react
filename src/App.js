import React, { useState } from 'react';
import Header from './Header';
import { Container } from './Container';
import InfoSection from './InfoSection';
import Form from './Form';
import ResultSection from './ResultSection';
import LoadingScreen from './LoadingScreen';
import ErrorScreen from './ErrorScreen';
import { useCurrencyData } from './useCurrencyData';

function App() {

  const { currenciesData } = useCurrencyData();
  const [amount, setAmount] = useState(1);
  const [currency, setCurrency] = useState("EUR");
  const [clickCounter, setClickCounter] = useState(0);

  let rate = (currenciesData.status === "succes" ? currenciesData.rates[currency] : 1);

  const getNewAmountValue = (newAmountValue) => {
    setAmount(newAmountValue);
  };

  const getNewTargetCurrencyValue = (newTargetCurrencyValue) => {
    setCurrency(newTargetCurrencyValue);
  };

  const getNewClickCounterValue = (newClickCounterValue) => {
    setClickCounter(newClickCounterValue);
  };

  if (currenciesData.status === "loading")
    return (
      <>
        <Header />
        <Container>
          <LoadingScreen />
        </Container>
      </>
    );
  else if (currenciesData.status === "error")
    return (
      <>
        <Header />
        <Container>
          <ErrorScreen />
        </Container>
      </>
    );
  else {
    return (
      <>
        <Header />
        <Container>
          <InfoSection
            currenciesData={currenciesData}
          />
          <Form
            currenciesData={currenciesData}
            getNewAmountValue={getNewAmountValue}
            getNewTargetCurrencyValue={getNewTargetCurrencyValue}
            getNewClickCounterValue={getNewClickCounterValue}
          />
          <ResultSection
            amount={amount}
            currency={currency}
            rate={rate}
            clickCounter={clickCounter}
          />
        </Container>
      </>
    );
  }
};

export default App;
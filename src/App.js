import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import Header from './Header';
import Container from './Container';
import InfoSection from './InfoSection';
import Form from './Form';
import ResultSection from './ResultSection';
import LoadingScreen from './LoadingScreen';
import ErrorScreen from './ErrorScreen';
import { useCurrencyData } from './useCurrencyData';

const theme = {
  colors: {
    primaryColor: "hsl(240, 100%, 25%)",
    backgroundColor: "hsl(40, 100%, 97%)",
    invalidColor: "hsl(0, 100%, 80%)",
    requiredColor: "hsl(60, 100%, 80%)",
    borderColor: "hsl(0, 0%, 53%)",
  },
  breakPoints: {
    mobile: 660,
  },
};

function App() {

  const { currenciesData } = useCurrencyData();
  const [amount, setAmount] = useState(1);
  const [currency, setCurrency] = useState("EUR");
  const [clickCounter, setClickCounter] = useState(0);

  let rate = currenciesData.status === "succes" ? currenciesData.rates[currency] : 1;

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
      <ThemeProvider theme={theme}>
        <Header />
        <Container>
          <LoadingScreen />
        </Container>
      </ThemeProvider>
    )
  else if (currenciesData.status === "error")
    return (
      <ThemeProvider theme={theme}>
        <Header />
        <Container>
          <ErrorScreen />
        </Container>
      </ThemeProvider>
    )
  else {
    return (
      <ThemeProvider theme={theme}>
        <Header />
        <Container>
          <InfoSection />
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
      </ThemeProvider>
    );
  }
};

export default App;
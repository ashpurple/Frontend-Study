import Header from "./components/Header";
import UserInput from "./components/UserInput";
import Result from "./components/Result";
import { useState } from 'react';

const INITIAL_VALUE = {
  initalInvestment: 15000,
  annualInvestment: 1200,
  expectedReturn: 6,
  duration: 10
};

function App() {
  const [investmentValue, setInvestmentValue] = useState(INITIAL_VALUE);

  const handleInvestmentChange = (inputTitle, newValue) => {
    setInvestmentValue((prevValue) => {
          return {
              ...prevValue,
              [inputTitle]: newValue
          };
      });
      console.log(investmentValue);
  };

  return (
    <>
      <Header />
      <UserInput
        inputObject={investmentValue}
        onChange={handleInvestmentChange}
      />
      <Result 
        resultInput={investmentValue}
      />
    </>
  )
}

export default App

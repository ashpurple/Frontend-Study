import Header from "./components/Header";
import UserInput from "./components/UserInput";
import Result from "./components/Result";
import { useState } from 'react';

const INITIAL_VALUE = {
  initialInvestment: 15000,
  annualInvestment: 1200,
  expectedReturn: 6,
  duration: 10
};

function App() {
  const [investmentValue, setInvestmentValue] = useState(INITIAL_VALUE);

  const inputIsValid = investmentValue.duration >= 1;

  const handleInvestmentChange = (inputTitle, newValue) => {
    setInvestmentValue((prevValue) => {
      return {
        ...prevValue,
        [inputTitle]: +newValue
      };
    });
  };

  return (
    <>
      <Header />
      <UserInput
        inputObject={investmentValue}
        onChange={handleInvestmentChange}
      />
      {inputIsValid
        ? <Result resultInput={investmentValue} />
        : <p className="center">Please enter a duration greater than zero.</p>
      }

    </>
  )
}

export default App

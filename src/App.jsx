import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CalcButton from './Button'
import Display from './display'
import ButtonList from './ButtonList'




function App() {

  let [displayNum, setDisplayNum] = useState("0")

  const calculatorButtons = [
    "C", "+-", "%", "/",
    "7", "8", "9", "x",
    "4", "5", "6", "-",
    "1", "2", "3", "+",
    "0", ".", "="
  ];

  const handleClick = (e) => {
    let value = e.target.textContent
    if (value === "C") {
      setDisplayNum("0");
    } else if (value === "+-") {
      setDisplayNum((prev) => (prev.startsWith("-") ? prev.slice(1) : `-${prev}`));
    } else if (value === "=") {
      try {
        let result = eval(displayNum.replace("x", "*"));
        setDisplayNum(result.toString());
      } catch {
        setDisplayNum("Error");
      }
    } else {
      setDisplayNum((prev) => (prev === "0" ? value : prev + value));
    }
  };

  return (
    <div className='layout'>
      <Display currentNum={displayNum} />
      <ButtonList>
        {calculatorButtons.map((button) => {
          return <CalcButton
            key={button}
            icon={button}
            size={button === "=" ? "l" : "s"}
            onClick={handleClick} />
        })}
      </ButtonList>

    </div>
  )
}

export default App

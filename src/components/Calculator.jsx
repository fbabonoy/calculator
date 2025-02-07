import { useState } from "react";
import CalcButton from "./Button"
import Display from "./display";

function Calculator() {

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
        console.log(displayNum[displayNum.length-1]);
        
        if (displayNum[displayNum.length-1] === value && !Number(value)) {
            return
        }
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
            <div className="buttonList">
                {calculatorButtons.map((button) => {
                    return <CalcButton
                        key={button}
                        icon={button}
                        size={button === "=" ? "l" : "s"}
                        onClick={handleClick} />
                })}
            </div>

        </div>
    )
}

export default Calculator
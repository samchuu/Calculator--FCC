import React, { useState } from "react";
import "./styles.css";
import { evaluate } from "mathjs";

function App() {
  const [inputText, setInputText] = useState("");
  const [activeDecimal, setActiveDecimal] = useState(false);
  // const [limitReached, setLimitReached] = useState(false);

  const onClickHandler = (symbol) => {
    if (inputText.indexOf(0) === 0) {
      setInputText((prev) => prev.split("").slice(0, 0).join(""));
    }
    if (symbol === "+" || symbol === "-" || symbol === "*" || symbol === "/") {
      setActiveDecimal(false);

      if (inputText.endsWith("+")) {
        setInputText(inputText.slice(0, inputText.length));
      } else if (inputText.endsWith("-")) {
        setInputText(inputText.slice(0, inputText.length - 2));
      } else if (inputText.endsWith("/")) {
        setInputText(inputText.slice(0, inputText.length - 1));
      }
    }
    setInputText((prev) => prev + symbol);
  };

  const resultHandler = () => {
    let result = evaluate(inputText).toString();
    setInputText(result.slice(0, 9));
  };

  const clearAllHandler = () => {
    setInputText("0");
    setActiveDecimal(false);
  };

  const clearPreviousHandler = () => {
    setInputText((prev) =>
      prev
        .split("")
        .slice(0, prev.length - 1)
        .join("")
    );
  };

  const addDecimalToInput = (e) => {
    if (!activeDecimal) {
      setInputText(inputText + e.target.innerHTML);
      setActiveDecimal(true);
    }
  };

  return (
    <div className="App">
      <div className="container">
        <h1>calc</h1>

        <div className="input-value" id="display">
          <div
            className="input-text"
            className={inputText.length >= 13 ? "decrease-size" : "input-text"}
          >
            {inputText}
          </div>
        </div>

        <div className="rows">
          <div className="first-row">
            <button onClick={clearAllHandler} id="clear" className="operators">
              ac
            </button>
            <button onClick={clearPreviousHandler} id="clear-all">
              c
            </button>
            <button
              onClick={() => onClickHandler("/")}
              id="divide"
              className="operators"
            >
              /
            </button>
          </div>
          <div className="second-row">
            <button
              onClick={() => onClickHandler("7")}
              id="seven"
              className="numbers"
            >
              7
            </button>
            <button
              onClick={() => onClickHandler("8")}
              id="eight"
              className="numbers"
            >
              8
            </button>
            <button
              onClick={() => onClickHandler("9")}
              id="nine"
              className="numbers"
            >
              9
            </button>
            <button
              onClick={() => onClickHandler("*")}
              id="multiply"
              className="operators"
            >
              *
            </button>
          </div>

          <div className="third-row">
            <button
              onClick={() => onClickHandler("4")}
              id="four"
              className="numbers"
            >
              4
            </button>
            <button
              onClick={() => onClickHandler("5")}
              id="five"
              className="numbers"
            >
              5
            </button>
            <button
              onClick={() => onClickHandler("6")}
              id="six"
              className="numbers"
            >
              6
            </button>
            <button
              onClick={() => onClickHandler("-")}
              id="subtract"
              className="operators"
            >
              -
            </button>
          </div>

          <div className="fourth-row">
            <button
              onClick={() => onClickHandler("1")}
              id="one"
              className="numbers"
            >
              1
            </button>
            <button
              onClick={() => onClickHandler("2")}
              id="two"
              className="numbers"
            >
              2
            </button>
            <button
              onClick={() => onClickHandler("3")}
              id="three"
              className="numbers"
            >
              3
            </button>
            <button
              onClick={() => onClickHandler("+")}
              id="add"
              className="operators"
            >
              +
            </button>
          </div>

          <div className="last-row">
            <button
              onClick={() => onClickHandler("0")}
              id="zero"
              className="numbers"
            >
              0
            </button>
            <button onClick={addDecimalToInput} id="decimal">
              .
            </button>
            <button onClick={resultHandler} id="equals">
              =
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// console.log(inputText[inputText.length - 1]); to get the last character of input
// GIVEN there is no number in the display, WHEN I press "0" THEN it should not add zero to the display
// GIVEN there are non-zero numbers in the display, WHEN I press "0" THEN it should add zero to the display

export default App;

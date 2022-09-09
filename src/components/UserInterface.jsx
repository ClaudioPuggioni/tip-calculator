import React, { useState } from "react";
import "../styles.css";
import TipPercentBtn from "./TipPercentBtn";

const tipPercentages = [5, 10, 15, 25, 50, "Custom"];
export default function UserInterface() {
  const [active, setActive] = useState(2);
  const [bill, setBill] = useState(0);
  const [numPeople, setNumPeople] = useState(1);
  const [tipPerPerson, setTipPerPerson] = useState(0);
  const [percent, setPercent] = useState(null);

  const handleClick = (idx) => {
    setActive(idx);
    if (tipPercentages[idx] !== "Custom") {
      setTipPerPerson(bill !== 0 ? (bill * (tipPercentages[idx] / 100)) / numPeople : 0);
    } else {
      setTipPerPerson(bill !== 0 ? (bill * (percent / 100)) / numPeople : 0);
    }
  };

  const handleTips = (bill, people) => {
    if (tipPercentages[active] !== "Custom") {
      setTipPerPerson(bill !== 0 ? (bill * (tipPercentages[active] / 100)) / people : 0);
    } else {
      setTipPerPerson(bill !== 0 ? (bill * (percent / 100)) / people : 0);
    }
  };

  const handlePercent = (percentage) => {
    setPercent(percentage);
    setTipPerPerson(bill !== 0 ? (bill * (percentage / 100)) / numPeople : 0);
  };

  return (
    <div id="container">
      <div id="outerCard">
        <div id="header">
          <img id="splitterLogo" src="assets/images/logo.svg" alt="header logo" />
        </div>
        <div id="innerCard">
          <div id="left">
            <div id="top">
              <div className="leftHeader">Bill</div>
              <div id="topBody">
                <img id="dollarIcon" src="assets/images/icon-dollar.svg" alt="dollar icon" />
                <input
                  onChange={(e) => {
                    setBill(() => e.target.value);
                    handleTips(e.target.value, numPeople);
                  }}
                  type="number"
                  id="topBodyNum"
                  placeholder="0"
                  value={bill}
                />
              </div>
            </div>
            <div id="body">
              <div className="leftHeader">Select Tip %</div>
              <div id="bodyBody">
                {tipPercentages.map((ele, idx) => (
                  <TipPercentBtn
                    idx={idx}
                    isNum={Number.isInteger(ele) ? true : false}
                    percentage={ele}
                    active={active}
                    handleClick={handleClick}
                    handlePercent={handlePercent}
                  />
                ))}
              </div>
            </div>
            <div id="bottom">
              <div className="leftHeader">Number of People</div>
              <div id="bottomBody">
                <img id="personIcon" src="assets/images/icon-person.svg" alt="person icon" />
                <input
                  onChange={(e) => {
                    setNumPeople(e.target.value);
                    handleTips(bill, e.target.value);
                  }}
                  type="text"
                  id="bottomBodyNum"
                  placeholder="0"
                  value={numPeople}
                />
              </div>
            </div>
          </div>
          <div id="right">
            <div id="content">
              <div id="upperDiv">
                <div className="tagContainer">
                  <div className="topLine">Tip Amount</div>
                  <div className="btmLine">/ person</div>
                </div>
                <div className="rightNum">${tipPerPerson.toString().includes(".") ? tipPerPerson.toFixed(2) : tipPerPerson}</div>
              </div>
              <div id="lowerDiv">
                <div className="tagContainer">
                  <div className="topLine">Total</div>
                  <div className="btmLine">/ person</div>
                </div>
                <div className="rightNum">{`$${
                  (bill / numPeople + tipPerPerson).toString().includes(".")
                    ? (bill / numPeople + tipPerPerson).toFixed(2)
                    : bill / numPeople + tipPerPerson
                }`}</div>
              </div>
            </div>
            <button
              onClick={() => {
                setBill(0);
                setNumPeople(1);
                setTipPerPerson(0);
              }}
              id="reset"
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

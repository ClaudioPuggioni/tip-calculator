import React from "react";

export default function TipPercentBtn({ idx, percentage, active, isNum, handleClick, handlePercent }) {
  return isNum ? (
    <button
      onClick={() => handleClick(idx)}
      className="tipPercentBtn"
      style={{
        color: idx === active ? "#00474b" : !isNum ? "#627373" : "#e0edef",
        backgroundColor: idx === active ? "#26c2ad" : !isNum ? "#f3f8fb" : "#00474b",
      }}
    >
      {`${percentage}%`}
    </button>
  ) : (
    <button
      onClick={() => handleClick(idx)}
      className="tipPercentBtn"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: idx === active ? "#00474b" : !isNum ? "#627373" : "#e0edef",
        backgroundColor: idx === active ? "#26c2ad" : !isNum ? "#f3f8fb" : "#00474b",
      }}
    >
      {idx === active ? (
        <>
          <input onChange={(e) => handlePercent(e.target.value)} id="customInput" type="number" style={{ maxWidth: "33%" }} />%
        </>
      ) : (
        "Custom"
      )}
    </button>
  );
}

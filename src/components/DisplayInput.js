import React, { useEffect } from "react";

function DisplayInput({
  setClearedText,
  clearedText,
  numbers,
  setNumbers,
  isClearActive,
  setIsClearActive,
  number,
}) {
  return (
    <div className="input-container">
      <div id="input-value">{isClearActive ? clearedText : number}</div>
    </div>
  );
}

export default DisplayInput;

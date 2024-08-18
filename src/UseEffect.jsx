import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const UseEffect = () => {
  const [count, setCount] = useState(1);
  const [calculation, setCalculation] = useState(0);

  useEffect(() => {
    console.log("useEffect body");
    setCalculation(() => count * 2);
    return () => {
      console.log("Cleanup Code");
    };
  }, [count]);

  return (
    <>
      <p>Count: {count}</p>
      <button onClick={() => setCount((c) => c + 1)}>+</button>
      <p>Calculation: {calculation}</p>
    </>
  );
};

export default UseEffect;

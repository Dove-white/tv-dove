import React from "react";

const Calculator = () => {
  const numbers = [
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    "+",
    "-",
    "/",
    "*",
    "(",
    ")",
    "C",
    "=",
  ];

  let calculation = "";
  let divContainer;

  const btn = (num) => {
    if (num === "C") return (divContainer = calculation = "");
    else if (num === "=") return eval((divContainer = calculation));
    else return (divContainer = calculation += num);
  };

  return (
    <>
      <div>
        {numbers.map((num) => (
          <button className="w-5 h-5 bg-slate-400 mr-4" onclick={btn(num)}>
            {num}
          </button>
        ))}
      </div>
      <div>{divContainer}</div>
      <div>Calculator</div>
      <div>Calculator</div>
    </>
  );
};

export default Calculator;

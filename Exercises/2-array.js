"use strict";

const array = () => {
  const arr = [];

  const f = (index) => {
    if (typeof index === "number") return arr[index];
    return f;
  };

  f.push = (el) => arr.push(el);
  f.pop = () => arr.pop();

  return f;
};

module.exports = { array };

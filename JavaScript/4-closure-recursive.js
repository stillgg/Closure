"use strict";

const add = (x) => (y) => {
  const z = x + y;
  console.log(`${x} + ${y} = ${z}`);
  return add(z);
};

// Usage

// const a1 = add(5);
// const a2 = a1(2);
// const a3 = a2(3);
// const a4 = a1(1);
// const a5 = a2(10);
// console.log(a1, a2, a3, a4, a5);

const res = add(5)(3)(3);
console.log(typeof res);

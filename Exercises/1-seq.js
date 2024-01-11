"use strict";

const seq = (f) => (g) => (x) => {
  if (typeof x === "function") {
    return seq;
  }
  if (typeof x === "number") {
    return f(g(x));
  }
};

console.log(seq((x) => x + 7)((x) => x * 2)((x) => x * 3)(5));

// ```js
// seq(x => x + 7)
//    (x => x * 2)(5)

// // Результат: 17
// ``````js
// seq(x => x * 2)
//    (x => x + 7)(5)

// // Результат: 24
// ``````js
// console.log(seq((x) => x + 1)((x) => x * 2)((x) => x / 3)((x) => x - 4)(7));

// // Результат: 3
// ```;

module.exports = { seq };

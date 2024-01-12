"use strict";

// solution stack
// const seq = (f) => {
//   const stack = [];
//   let result = 0;

//   const n = (f) => {
//     if (typeof f === "function") {
//       stack.push(f);
//       return n;
//     } else if (typeof f === "number") {
//       while (stack.length > 0) {
//         const func = stack.pop();
//         result += func(f);
//       }
//       return result;
//     }
//   };

//   return n(f);
// };

// const f1 = (x) => x + 7;
// const f2 = (x) => x * 2;
// const f3 = (x) => x * 3;

// console.log(f1(f2(f3(5))));

const seq = (x) => (n) => {
  if (typeof n === "number") return x(n);
  return seq((t) => x(n(t)));
};

// console.log(seq(f1)(f2)(f3)(5));

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

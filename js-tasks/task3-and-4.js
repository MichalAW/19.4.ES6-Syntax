'use strict';

const grades = [1, 5, 5, 5, 4, 3, 3, 2, 1];

const average = (...args) => {
  let score = 0;
  for (let i = 0; i < args.length; i++) {
    score += args[i];
  }
  console.log(`average is: ${score / args.length}`);
};

average(1); // 1
average(1, 3); // 2
average(1, 3, 6, 6); // 4
average(...grades);

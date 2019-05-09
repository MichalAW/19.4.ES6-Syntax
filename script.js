'use strict';
//task 1
// example:
function sayHello(name = 'World') {
    console.log('Hello ' + name);
}
// ad 1:
const newOne = () => {
    console.log("Hello World..!");
}

//task 2
//example:
multiply(2, 5) // 10
multiply(6, 6) // 36
// ad 2:
a => (a < 2) ? 'valid' : 'invalid'
b => (a < 2) ? 'valid' : 'invalid'
const multiply = (a, b) => a * b
multiply(a, b)

// task 3
// example:
average(1) // 1
average(1, 3) // 2
average(1, 3, 6, 6) // 4

//ad 3:
const numbers = ['1', '3', '6'];
numbers = (...args) => {
    return args.forEach(arg => console.log(arg));
};

average(1) // 1
average(1, 3) // 2
average(1, 3, 6, 6) // 4

//ad 4 :
const grades = [1, 5, 5, 5, 4, 3, 3, 2, 1]
grades = (...args) => {
    return args.forEach(arg => console.log(arg));
};

function allGrades(...rest) {
    average(rest)
}

// ad 5:
const data = [1, 4, 'Iwona', false, 'Nowak']
const [first, second, ...rest, fourth, ...rest] = data;
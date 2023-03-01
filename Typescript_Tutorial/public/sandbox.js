"use strict";
let greet = () => {
    console.log('Hello');
};
const add = (a, b = 10, c) => {
    console.log(a + b);
};
const multiply = (a, b = 10) => {
    return a * b;
};
add(5, 8);

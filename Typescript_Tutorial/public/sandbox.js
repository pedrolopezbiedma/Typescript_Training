"use strict";
let greet = () => {
    console.log('Hello');
};
const add = (a, b = 10, c) => {
    console.log(a + b);
};
add(5, 8);

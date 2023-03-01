"use strict";
// Without alias
const logDetails = (payload) => {
    console.log(payload);
};
//  With Alias
const logDetails2 = (payload) => {
    console.log(payload);
};
//  With Better Alias
const logDetails3 = (payload) => {
    console.log(payload);
};
logDetails({ name: 'Pedro', age: 10 });
logDetails2({ name: 'Pedro2', age: 12 });
logDetails3({ name: 'Pedro3', age: 13 });

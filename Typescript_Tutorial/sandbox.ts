// explicit
let var1: string;
let var2: number;
let var3: boolean;

// arrays
let stringArray: string[] = [];

// mixed
let mixedArray: (string|number)[] = [];
mixedArray.push('mario');
mixedArray.push(20);

let mixedVar: string|number = '20';
mixedVar = 20;

// object
let ninjaOne: object;
let ninjaTwo: {
    name: string,
    age: number
};

ninjaTwo = { name:'Pedro', age:5}
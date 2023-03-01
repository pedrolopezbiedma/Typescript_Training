// Type Alias
type mySuperType = string | number;
type mySuperObjectType = { name: string, age: mySuperType }

// Without alias
const logDetails = (payload: {name: string, age: string | number} ) => {
    console.log(payload);
}

//  With Alias
const logDetails2 = (payload: {name: string, age: mySuperType} ) => {
    console.log(payload);
}

//  With Better Alias
const logDetails3 = (payload: mySuperObjectType ) => {
    console.log(payload);
}

logDetails({ name: 'Pedro', age: 10 })
logDetails2({ name: 'Pedro2', age: 12 })
logDetails3({ name: 'Pedro3', age: 13 })
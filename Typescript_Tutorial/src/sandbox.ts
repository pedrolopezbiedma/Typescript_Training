let greet = () => {
    console.log('Hello');
}

const add = (a:number, b:number = 10, c?: number|string): void => {
    console.log(a+b);
}

const multiply = (a:number, b:number = 10): number => {
    return a*b;
}

add(5,8);
let greet = () => {
    console.log('Hello');
}

const add = (a:number, b:number = 10, c?: number|string) => {
    console.log(a+b);
}

add(5,8);
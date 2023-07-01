export function sayHello(name : string) : string{
    return `Hello ${name}`;
}


var welcomeMessage = sayHello("Dave");
console.log(welcomeMessage);
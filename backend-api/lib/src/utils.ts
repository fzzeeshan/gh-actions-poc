export function sayHello(name : string) : string{
    return `Hello ${name}`;
}


var welcomeMessage = sayHello("Clive");
console.log(welcomeMessage);
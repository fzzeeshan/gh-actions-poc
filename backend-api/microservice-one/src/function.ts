export function sayHello(name : string) : string{
    return `Hello ${name}`;
}


var welcomeMessage = sayHello("Shave");
console.log(welcomeMessage);
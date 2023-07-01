export function sayHello(name : string) : string{
    return `Hello ${name}`;
}


var welcomeMessage = sayHello("David");
console.log(welcomeMessage);
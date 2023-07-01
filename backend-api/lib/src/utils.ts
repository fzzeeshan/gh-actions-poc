export function sayHello(name : string) : string{
    return `Hello ${name}`;
}


var welcomeMessage = sayHello("Martin");
console.log(welcomeMessage);
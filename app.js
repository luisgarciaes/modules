let greet = () =>{
    console.log('Hello');
}
let logGreeting= (fn) => fn();
logGreeting(function(){
    console.log('Greetings from a function created on the fly')
})
greet();

logGreeting(greet);

let greetMe = () => {
    console.log('Hola desde la expresion de función')
};
greetMe();

logGreeting(greetMe);

let logGreeting1 = (myName, myColor) => {
    console.log('Hello ' + myName + '. Good morning! Your favorite color is ' + myColor)
}
logGreeting1('Luis','Blue')
// function declaration
const sayHello = () => {
  console.log("Hello!"); // after it calls the function it execute this line of code
};

// Trippings Lang
const HelloWorld = (message) =>{
    console.log(message);
}
// Another sample
const printMany = (message , num) =>{
    for(let i = 0; i < num ; i++){
        console.log(message);
    }
}
sayHello(); // Calling the function

HelloWorld("print"); // sample lng haha

printMany("Cute Ako!" , 2)
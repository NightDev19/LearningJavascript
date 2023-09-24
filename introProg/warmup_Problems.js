/*
    Create a constant variable of each of the ff. primitive types.
    - Strings const name = "Sherwin";
    - Number / Integer const age = 21;
    - Boolean const girlfriend = true;
    - Null  const gameBoy = null;
    - Undefined const PS5 = undefined;

    Use console.log(); to log out each variables to the terminal at the end.

    HINT 1: You can run your file in the terminal using this command : node <filename>
            e.g, if your file is called sample.js, you would type in your VSCode terminal : node sample.js
    
    HINT 2: Make sure your terminal is "looking at" the right folder where your code is.     

    ps : if you don't have Node.js install it on https://nodejs.org/en/download/current 
*/

const Name = "Sherwin";
const age = 21;
const girlfriend = true;
const gameBoy = null;
const PS5 = undefined;

console.log(
  " My name is ${Name}\n and im " +
    age +
    " years old \n has a girlfriend : " +
    girlfriend +
    " \n has a game boy :" +
    gameBoy +
    " \n has a PS5 : " +
    PS5
);

/*
    1. At the start of program print out "--- Animal Checker Program ---".
    2. Create a variable called animal that starts at the value "cat".
    3. Create an if statement that checks if the animal is equal to "cat".
    4. If it is equal to "cat" print out "meow!" to the screen.
    5. If it is equal to "dog" print out "woof!" to the screen.
    6. If it is equal to "cat" nor "dog" print out "must be an alien!" to the screen.
    7. At the end of the program print out "--- Animal Check Complete ---".
    8. Change animal to different values to make sure it works in all cases.
*/
let animal = "human"
console.log("--- Animal Checker Program ---");
if(animal === "cat"){
    console.log("Meow!");
}else if(animal === "dog"){
    console.log("Woof!");
}else{
    console.log("Must be an alien!");
}
console.log("--- Animal Check Complete ---");
/*
    Create a variable called "greeting" and initialize it to :
        - "Hello nice to meet you!"
    
    Use a loop to loop though this String (Just like you would an array)
        - On each loop iteration, print out what is at that index.
    
    Why does this happen?
    What is a String Really?
*/

const greeting = "Hello nice to meet you!";

for (let i = 0; i < greeting.length; i++) {
  console.log(greeting[i]);
}

/*
    1. Create a while loop that runs from 1 - 100.
    2. Every 10 loops, print out "checkpoint!" and the loop number.
    3. On loop 50 print out ONLY : "Half way there!"
    4. On the final loop (100) print out ONLY : "You made it!"
    5. AFTER the loop is done , print out : "All Done!"

    You should see this printed out when run :

    Checkpoint! 10
    Checkpoint! 20
    Checkpoint! 30
    Checkpoint! 40
    Half way there!
    Checkpoint! 60
    Checkpoint! 70
    Checkpoint! 80
    Checkpoint! 90
    You made it!
    All Done!

    "HINT" : Loop the "continue" keyword for loops
*/

let num = 1;

while (num <= 100) {
  if (num % 10 === 0) {
    console.log(`Checkpoint! ${num}`);
  }
  if (num === 50) {
    console.log("Half way there!");
    num++;
    continue;
  }
  if (num === 100) {
    console.log("You made it!");
    num++;
    continue;
  }
  num++;
}
console.log("All Done!");

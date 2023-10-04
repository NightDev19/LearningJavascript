/*
    Create a while loop that will print out all the even numbers
    between 10 and 40

    Do the same for all odds numbers as well
*/

let num = 10;

while (num <= 40) {
  if (num % 2 === 0) {
    console.log("Even : " + num);
  } else {
    console.log("Odd  : " + num);
  }
  num++;
}

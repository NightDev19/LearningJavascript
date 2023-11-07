/*
    1. Create a variable called "Multiple" and initialize it to 5
    1.1 Create an array with the numbers 10 - 15 (inclusive)
    2. Loop through the array and on each iteration:
        - Multiply the numbers and print-out the result
        - As you're printing, use this format:
            10 x 5 = 50
            11 x 5 = 55
            ...
            15 x 5 = 75

    BONUS : Try to see if you make it so that all you need to change 
        is the multiple variable and the progress still works properly

*/
const Multiple = 5;
const numbers = [10, 11, 12, 13, 14, 15];

for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i] , " x ", Multiple," = ", numbers[i] * Multiple);
}

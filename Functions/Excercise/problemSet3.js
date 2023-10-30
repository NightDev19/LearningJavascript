/*
    1. Write a function called "square" :
    Square has 1 parameters 
        - num : this should be a Integer
    "square" will return the square of "num" HINT : (num**2)

    2. Write another function called sumOfSquares:
    
    sumOfSquares will have 2 parameters :
        - num1 : Integer
        - num2 : Integer

    sumOfSquares will need to:
        1. Use the square function inside itself
        2. return back square of num1 + the square of num2

    3. Test the function using these:
        - const sum1 = sumOfSquares(2,3); //"sum1" should be 13 (4 + 9)
        - const sum2 = sumOfSquares(3, 4); // "sum1" should be 25 (9 + 16)
*/

const square = (num) => {
  return num ** 2;
};

const sumOfSquares = (num1, num2) => {
  return square(num1) + square(num2);
};
const sum1 = sumOfSquares(2, 3); //"sum1" should be 13 (4 + 9)
const sum2 = sumOfSquares(3, 4); // "sum1" should be 25 (9 + 16)
console.log(sum1, sum2);

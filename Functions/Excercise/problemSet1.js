/*
    Write a function called noRemainder

    1. This function has two parameters
        - num
        - mod

    2. The function will return :
        - true : if "num" is evenly divisible by "mod" (no remainder)
        - false : if "num" is not evenly divisible by "mod" (has a remainder)

    3. Call your function like so:
        - const result = noRemainder(10,7);
        - const result = noRemainder(100,10);
*/

const noRemainder = (num, mod) => {
  if (num % mod === 0) {
    return true;
  } else {
    return false;
  }
};
const result1 = noRemainder(100, 10);
const result2 = noRemainder(10, 7);
console.log(result1);
console.log(result2);

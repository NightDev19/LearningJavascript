/*
    Write out the truth table for the ff. boolean operators
    using two boolean values , one each side.
    - AND (&&)
    - OR (||)
    - NOT (!)

    Use console.log(); to log out the results for each.

    "HINT1" : AND and OR will have 4 possibilities, While NOT has 2
    "HINT2" : console.log(true || true); 
*/

console.log("====AND====");
// AND
console.log(true && true);
console.log(true && false);
console.log(false && true);
console.log(false && false);

console.log("====OR====");
// OR
console.log(true || true);
console.log(true || false);
console.log(false || true);
console.log(false || false);

console.log("====NOT====");
// NOT
console.log(!true);
console.log(!false);

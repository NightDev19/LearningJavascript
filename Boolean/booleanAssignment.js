// AND Assignment
const fruits = true && "bananas";
console.log(fruits); // bananas
console.log(false && "oranges"); // false
console.log(0 && "cucumbers"); // 0 : 0 is considered as false thats why its output is 0

// OR Assignment

console.log("==============");

console.log(true || "bananas"); // true
console.log(false || "oranges"); // oranges
console.log("" || "cucumbers");  // cucumbers 

// Coalescing Assignment

console.log("==============");

console.log(0 ?? "Human"); /*0 : 0 is a false so using "??" its treated
                                 like a true instead of false */
console.log("" ?? "Koalas"); // "" has an empty object to itself so it true just like the 0
console.log(null ?? "Tiger"); /* even you put undefined , null , 0 or the false itself 
                                 it turn to true cause of Nullish Coalescing */
/*
    1. Create an array with the following strings :
        - "Mercury"
        - "Venus"
        - "Earth"
        - "Mars"
    
    2. Add the strings "Jupiter to the "End" of the array.
    3. Add the string  "Sun" to the "Start" of the array.
    4. Remove the last two strings from the array.
    4. Remove the first two string from the array.
*/

const planets = ["Mercury", "Venus", "Earth", "Mars"];
console.log("Planets :", planets);

planets.push("Jupiter"); 
console.log("Adding Jupiter in the array : ", planets);

planets.unshift("Sun");
console.log("Adding Sun in the array : ", planets);

planets.pop();
planets.pop();
console.log("Removing to elements at the End of the array :", planets);

planets.shift();
planets.shift();
console.log("Removing to elements at the Start of the array :", planets);

/*
    Create a variable called "bakery" that points to an array
    Fill the array with the following String:
        - "Cakes"
        - "Cookies"
        - "Bread"
        - "Scone"

    Print out bakery to make sure it has the 4 Strings in it.

    Create another variable called "myBakery" and assign it to "bakery"
    that we declared previously

    Add the following items in "myBakery":
        - "Croissant" // Cravings na nmn
        - "Granola"
    
    Print out the myBakery and bakery observe the contents

    Why is this ?

    NightDev : Because it has the same array 

*/

const bakery = ["Cakes", "Cookies", "Bread", "Scone"];
console.log("Main Array : \n", bakery);
let myBakery = bakery;
myBakery.push("Croissant", "Granola");

console.log("Test1 :\n", bakery);
console.log("Test2 :\n", myBakery);

/*
    unshift() method helps you to add an element to the beginning of an array

    For example we have an array we used the example in push.js

        - const name = ["name1" , "name2"];

    then we unshift an element called, for example my name

        - name.unshift("Sherwin");

    when we print it, it shows in the output that my name has been deleted on the list

        - console.log(name);

    expected output :

        - ["Sherwin" , "name1" , "name2"]
*/

const animals = ["Monkey", "Dog", "Cat", "Koala", "Mouse"];

console.log(animals);

animals.unshift("llama")// Add llama in the beginning of the array
console.log(animals);
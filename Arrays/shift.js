/*
    shift() method helps you to delete an element to the beginning of an array and re index it

    For example we have an array we used the example in unshift.js

        - const animals = [ 'llama', 'Monkey', 'Dog', 'Cat', 'Koala', 'Mouse' ]

    then we shift an element called, for example the added animal in unshift.js

        - name.shift();

    when we print it, it shows in the output that my name has been deleted on the list

        - console.log(animals);

    expected output :

        - ['Monkey', 'Dog', 'Cat', 'Koala', 'Mouse']
*/

const animals = ["Monkey", "Dog", "Cat", "Koala", "Mouse"];
animals.unshift("llama");
console.log(animals);
animals.shift();
console.log(animals);
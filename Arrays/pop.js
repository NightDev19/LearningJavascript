/*
    pop() Method helps you to delete the latest item in the array 

    For example we have an array we used the example in push.js

        - const name = ["name1" , "name2" , "Sherwin"];

    then we delete an item called, for example my name

        - name.pop();

    when we print it, it shows in the output that my name has been deleted on the list

        - console.log(name);

    expected output :

        - ["name1" , "name2"]
*/

const animals = ["Monkey", "Dog", "Cat", "Koala", "Mouse"];

animals.push("Cow"); // it insert the string "cow"
console.log(animals); 
animals.pop(); // it deletes the string "cow"
animals.pop(); // it deletes the string "Mouse"
animals.pop(); // it delete the string  "Koala"
console.log(animals);
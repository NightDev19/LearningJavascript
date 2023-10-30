/*
    push() Method helps you to add new item in the array 
    For example we have an array has 2 items

        - const name = ["name1" , "name2"];

    then we add new item called for example my name

        - name.push("Sherwin");

    when we print it, it shows in the output that my name is on the list

        - console.log(name);

    expected output :

        - ["name1" , "name2" , "Sherwin"]
*/

const animals = ["Monkey", "Dog", "Cat", "Koala", "Mouse"];
console.log(animals);
console.log(animals.length);
animals.push("cow");
console.log(animals);
console.log(animals.length);

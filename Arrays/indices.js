const animals = ["Monkey", "Dog", "Cat", "Koala" ,"Mouse"];
console.log(animals);

const Monkey = animals[0]; // [0] is a indices or index
console.log(Monkey);

// Think how to get Koala
console.log(animals[3]);
console.log("---------");
// printing it one by one using a loop 
for (let i = 0; i < animals.length; i++) { // .length function is to define what is the length of the array 
    console.log(animals[i]);
}

/*
    Write a function called 'chill' that does the following:
    1. Print out at the start : "Doing some chilling"
    2. Then prints out:
        "Chills...1"
        "Chills...2"
        "Chills...3"
        .
        .
        .
        "Chills...10"
    3. Then finally prints out : "That was ice cold!"

    When you are done , call the function once
*/

const chill = () => {
  console.log("Doing some chilling"); // 1

  for (let i = 1; i <= 10; i++) {
    //2
    console.log("Chill...", i);

    if (i === 10) {
      //3
      console.log("That was ice cold!");
    }
  }
};
chill(); // Calling function

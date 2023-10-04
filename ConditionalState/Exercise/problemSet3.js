/*
    Spot the bug!!!
    Should print : "Most places considered you an adult"
    but it doesn't why? 

    // Code

    const age = 20;

    if (age < 3) {
    console.log("You are a baby!");
    } else if (age >= 3) {
    console.log("You are an elementary school kid!");
    } else if (age >= 13){
        console.log("Nice you are a teenager");
    } else if(age >= 18){
        console.log("Most places considered you an adult");
    }else {
        console.log("What should i do");
    }

*/

// Solution

const age = 10;

if (age < 3) {
  console.log("You are a baby!");
} else if (age <= 13) {
  console.log("You are an elementary school kid!");
} else if (age <= 18) {
  console.log("Nice you are a teenager");
} else if (age >= 18) {
  console.log("Most places considered you an adult");
} else {
  console.log("What should i do");
}

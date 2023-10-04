/*
    Create a for loop that will print out all the even numbers
    between 10 and 40

    Do the same for all odds numbers as well
*/

for(let num = 10 ; num <= 40; num+=1){
    if(num % 2 === 0){
        console.log(`Even : ${num}`);
    }else{
        console.log(`Odd  : ${num}`);
    }
}
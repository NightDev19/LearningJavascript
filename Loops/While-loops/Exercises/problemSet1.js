/*
    1. Create a variable called "loggedIn" that start off as false.
    2. Create a while loop that loops while "loggedIn" is false.
    3. Each loop print out : "Incorrect Login Credentials!"
    4. After 3 loop iterations, change "loggedIn" to be true.
    5. After the loops is done print out : "Successfully Logged In"

    "HINT" : Be careful for an infinite loop
    "HINt" : Use CMD + C or CTRL + C to get out of an infinite loop
*/

let loggedIn = false;
let iterations = 1;
while(!loggedIn){ // while(loggedIn !== true)
    console.log("Incorrect Login Credentials!");
    if(iterations >= 3){
        loggedIn =true;
        console.log("Successfully Logged In");
    }
    iterations++;
}
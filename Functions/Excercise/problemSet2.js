/*

    Write a function called "login"
    1. This function has 2 parameters:
        - username : this should be a string
        - password : this should be a string

    2. Return true in the ff.:
        - username is "admin" (any password, doesn't matter)
        - username is "monkey" and password is "123"
        - username is "moomoo" and password is "farm"

    3. In all other case , return false

    4. Test the function like so:
        - const test = login('hello', 'meow'); // "test" should be false
        - const test2 = login('admin', 'lol'); // "test2" should be true
        - const test3 = login('monkey', '123'); // "test3" should be true
        - const test4 = login('moomoo', 'farm'); // "test4" should be true
        - const test5 = login('moomoo', 'moo'); // "test5" should be false

*/

const login = (username, password) => {
  if (
    username === "admin" ||
    (username === "monkey" && password === "123") ||
    (username === "moomoo" && password === "farm")
  ) {
    return true;
  } else {
    return false;
  }
};

const test = login("hello", "meow"); // "test" should be false
const test2 = login("admin", "lol"); // "test2" should be true
const test3 = login("monkey", "123"); // "test3" should be true
const test4 = login("moomoo", "farm"); // "test4" should be true
const test5 = login("moomoo", "moo"); // "test5" should be false
console.log(`${test}\n${test2}\n${test3}\n${test4}\n${test5}`);

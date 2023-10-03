/*
    First, Lookup how logical AND , OR and Nullish assignment work using Google,

    This is my own Search please read it <NightDev/>
    +======== AND ==========+
    DESCRIPTION : Logical AND (&&) evaluates operands from left to right, returning immediately with the value of the first 
    falsy operand it encounters; if all values are truthy, the value of the last operand is returned.

    If a value can be converted to true, the value is so-called truthy. If a value can be converted to false, the value is 
    so-called falsy.

    EXAMPLES : result = "" && "foo"; // result is assigned "" (empty string)
            result = 2 && 0; // result is assigned 0
            result = "foo" && 4; // result is assigned 4

    +======== OR ==========+
    DESCRIPTION : The logical OR (||) (logical disjunction) operator for a set of operands is true if and only if one or more 
    of its operands is true. It is typically used with boolean (logical) values. When it is, it returns a Boolean value. 
    However, the || operator actually returns the value of one of the specified operands, so if this operator is used with 
    non-Boolean values, it will return a non-Boolean value.
    
    EXAMPLES :
    function A() {
        console.log("called A");
        return false;
    }
    function B() {
        console.log("called B");
        return true;
    }

    console.log(B() || A());
    // Logs "called B" due to the function call,
    // then logs true (which is the resulting value of the operator)

    +======== Nullish coalescing ==========+
    DESCRIPTION : The nullish coalescing operator can be seen as a special case of the logical OR (||) operator. 
    The latter returns the right-hand side operand if the left operand is any falsy value, not only null or undefined. 
    In other words, if you use || to provide some default value to another variable foo, you may encounter unexpected behaviors
    if you consider some falsy values as usable (e.g., '' or 0). See below for more examples.
    
    The nullish coalescing operator has the fifth-lowest operator precedence, directly lower than || and directly higher than 
    the conditional (ternary) operator.

    It is not possible to combine both the AND (&&) and OR operators (||) directly with ??. A syntax error will be thrown in 
    such cases.

    EXAMPLES : (null || undefined) ?? "foo"; // returns "foo"

    const nullValue = null;
    const emptyText = ""; // falsy
    const someNumber = 42;

    const valA = nullValue ?? "default for A";
    const valB = emptyText ?? "default for B";
    const valC = someNumber ?? 0;

    console.log(valA); // "default for A"
    console.log(valB); // "" (as the empty string is not null or undefined)
    console.log(valC); // 42

    after you reading it,

    Then try the following examples.
    
    1.  let username = " ";
        username  &&= "tiger";

    2.  let vip = 0;
        vip ||= 3;

    3.  let loggedIn = null;
        loggedIn ??= 0;

    Log each of values out to see the results.

    This is very very challenging, it might take several times or coming back to it in the future when it come relevant.
*/
let username = "";
username  &&= "tiger";
console.log(username)

let vip = 0;
vip ||= 3;
console.log(vip);

let loggedIn = null;
loggedIn ??= 0;
console.log(loggedIn);
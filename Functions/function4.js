const hello = () => {
  console.log("Hello!");
};
hello();

const result = hello();
console.log(result); // it is undefined by default if do you not override it and provide your own return value

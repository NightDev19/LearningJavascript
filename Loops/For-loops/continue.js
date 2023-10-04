for (let i = 0/*Initializer*/; i < 100/* Condition */; i += 10/*Updater*/) {
  console.log(i);
  if (i === 20) {
    i += 20;
    continue; // it goes back to the updater and didn't run the code below ↓
  }
  console.log("Loop number ", i);

  if (i === 60) {
    break; // it stop the code
  }
}

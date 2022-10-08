/*
    Task 1
    - Create a function that would swap the value of x and y using only x and y as variables.
    - x and y must be numeric.
    - return -1 if x and y is not numeric.
    - print the swapped values in the console

    Task 2
    - invoke the function "swap"
*/

function swap(x, y) {
  // Task 1: Add code here
  if ((typeof x == "number") & (typeof y == "number")) {
    y = [x, (x = y)][0];
    console.log("x = " + x);
    console.log("y = " + y);
  } else {
    console.log(-1);
  }
}

// Task 2: Add code here
module.exports = swap(1, 2);

// Create the `series` variable
var series = [0, 1];

while (series.length < 10) {
  // Pop the last two numbers from the array
  let num1 = series.pop();
  let num2 = series.pop();

  // Calculate the sum of these two numbers
  let sum = num1 + num2;

  //Push the two numbers back onto the array
  series.push(num2);
  series.push(num1);

  //Push the sum onto the array
  series.push(sum);
}

// Print the Fibonacci sequence to the console
console.log(series);
// the first ten numbers should be
// 0 1 1 2 3 5 8 13 21 34

console.log("This is the first line of code in app.js.");
// Keep the line above as the first line of code
// Write your code here:


// Delay this function let the other 2 go async then run this
const usingSTO = () => {
  console.log("This is the middle of synchronous code.");
}

setTimeout(usingSTO, 2000);

// Keep the line below as the last line of code:
console.log("This is the last line of code in app.js.");

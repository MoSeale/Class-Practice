// grab references to the input element and the output div
// @TODO: YOUR CODE HERE
var sentence = d3.select("input")

// Function to reverse a string
function reverseString(str) {
  return str.split("").reverse().join("");
}

// Function to handle input change
function handleChange(event) {
  // grab the value of the input field
  // @TODO: YOUR CODE HERE
  var string = d3.select("")
  

  // clear the existing output
  // @TODO: YOUR CODE HERE

  // reverse the input string
  // @TODO: YOUR CODE HERE

  // Set the output text to the reversed input string
  // @TODO: YOUR CODE HERE
}

// Attach an event to detect changes to the input field.
// @TODO: YOUR CODE HERE
// grab references to the input element and the output div
var text = d3.select("#text");
var output = d3.select(".output");
// Function to reverse a string
function reverseString(str) {
  return str.split("").reverse().join("");
}
// Function to handle input change
function handleChange(event) {
  // grab the value of the input field
  var inputText = d3.event.target.value;
  // reverse the input string
  var reversedInput = reverseString(inputText);
  // Set the output text to the reversed input string
  output.text(reversedInput);
}
text.on("change", handleChange);
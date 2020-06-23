/*********************************************
 * YOUR CODE HERE!                           *
 ********************************************/
const calculate= require('.calculate-back-end.js')


const number1= getInput(0)
const number2= getInput(1)
const operand = getInput(2)

const result = calculate(number1,number2,operand)

console.log(result);




/******************************************
 * OUR CODE BELOW--DON'T TOUCH!           *
 *****************************************/

function getInput(i) {
  return process.argv[i + 2];
}

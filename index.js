const Calculator = require('./src/calculator');

let calculator = new Calculator(2, 3);
console.log(calculator.add());
console.log(calculator.subtract());
console.log(calculator.multiplie());
console.log(calculator.divide());
let invalidCalculator = new Calculator('a', 3);
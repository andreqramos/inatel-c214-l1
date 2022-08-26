const validate = require('validate.js');
const IsNumber = require('./validate');

class Calculator {
    constructor(num1, num2){
        const validateNumbers = validate({num1, num2},  IsNumber.isNumber);        
        if(validateNumbers !== undefined){
            throw new TypeError("Parameters 'num1' and 'num2' must be numbers.");
        }
        this.num1 = num1;
        this.num2 = num2;
    }
    add() {
        let result = this.num1 + this.num2;
        return result;
    }
    subtract() {
        let result = this.num1 - this.num2;
        return result;
    }
    multiplie() {
        let result = this.num1 * this.num2;
        return result;
    }
    divide() {
        let result = this.num1 / this.num2;
        return result;
    }
    power() {
        let result = Math.pow(this.num1, this.num2);
        return result;
    }
};

module.exports = Calculator;
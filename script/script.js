'use strict';
const buttons = document.querySelectorAll('.btn');
const numberBtn = document.querySelectorAll('.number');
const previousOperand = document.querySelector('.previous-operand');
const currentOperand = document.querySelector('.current-operand');
/////////////////////////
const zero = document.querySelector('#zero');
const one = document.querySelector('#one');
const two = document.querySelector('#two');
const three = document.querySelector('#three');
const four = document.querySelector('#four');
const five = document.querySelector('#five');
const six = document.querySelector('#six');
const seven = document.querySelector('#seven');
const eight = document.querySelector('#eight');
const nine = document.querySelector('#nine');

/////////////////////////
const sumBtn = document.querySelector('#sum');
const subtractBtn = document.querySelector('#subtract');
const multiplyBtn = document.querySelector('#multiply');
const divideBtn = document.querySelector('#divide');

const equalityOperator = document.querySelector('.equals');
const decimalBtn = document.querySelector('.decimal');
/////////////////
const clearBtn = document.querySelector('.clear');
const deleteBtn = document.querySelector('.delete');
/////////////////
const display = document.querySelector('.display');

let firstNumber;
let secondNumber;
let operator;

let values = [];
let values2 = [];

buttons.forEach(function(btn) {
	btn.addEventListener('click', function() {
		const value = this.textContent;
		values.push(value);
		firstNumber = values.join('');
		previousOperand.textContent = firstNumber;
		console.log(firstNumber, typeof firstNumber);
	});
});

/////////////////////////////////////////

const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const multiply = function(num1, num2) {
	return num1 * num2;
};

const divide = function(num1, num2) {
	return num1 / num2;
};

//////////////////////////////////////////////

const operatorHelper = (value) => {
	operator = +this.textContent;
	previousOperand.textContent = value;
	values = [];
};

sumBtn.addEventListener('click', function() {
	operatorHelper('+');
	const value = this.textContent;
	values2.push(value);
	secondNumber = values2
		.filter(function(element) {
			return typeof element === 'number';
		})
		.join('');
	previousOperand.textContent = secondNumber;
	console.log(operator, typeof operator);
	console.log(secondNumber, typeof secondNumber);
});

subtractBtn.addEventListener('click', function() {
	operatorHelper('-');
});

multiplyBtn.addEventListener('click', function() {
	operatorHelper('*');
});

divideBtn.addEventListener('click', function() {
	operatorHelper('/');
});

//////////////////////////////////////////////
const operate = function(firstNumber, secondNumber, operator) {
	switch (operator) {
		case '+':
			return add(firstNumber, secondNumber);
		case '-':
			return subtract(firstNumber, secondNumber);
		case '*':
			return multiply(firstNumber, secondNumber);
		case '/':
			return divide(firstNumber, secondNumber);
		default:
			break;
	}
};

/////////////////EQUALITY OPERATOR////////////////

equalityOperator.addEventListener('click', function() {
	const totalNumber = operate(firstNumber, secondNumber, operator);
	display.textContent = totalNumber;
});

//////////////////DELETE BUTTON////////////////////////////////

// deleteBtn.addEventListener('click', function() {
// 	display.textContent = totalNumber.slice(0, -1);
// });

///////////////CLEAR BUTTON/////////////////

clearBtn.addEventListener('click', function() {
	values = [];
	mainNumber.textContent = '';
	previousOperand.textContent = ' ';
});

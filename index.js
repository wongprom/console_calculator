alert('Welcome to my Calculator');

let num1, num2, calculateMethod, answer;
let isValid = false;

// Calculate functions
const add = (a, b) => a + b;
const sub = (a, b) => a - b;
const div = (a, b) => a / b;
const mul = (a, b) => a * b;

// Validation
const isNumber = (input) => {
  return !isNaN(input) && input !== null && input !== '';
};

const isValidCalculateMethod = (input) => ['/', '*', '-', '+'].includes(input);

// Input 1
while (!isValid) {
  num1 = prompt('Please enter the first number');
  if (isNumber(num1)) {
    num1 = parseInt(num1);
    isValid = true;
  } else {
    alert('Invalid input. Please enter a valid number.');
  }
}

isValid = false;

// Input 2
while (!isValid) {
  num2 = prompt('Please enter the second number');
  if (isNumber(num2)) {
    num2 = parseInt(num2);
    isValid = true;
  } else {
    alert('Invalid input. Please enter a valid number.');
  }
}

isValid = false;

// Input 3
while (!isValid) {
  calculateMethod = prompt('Please enter calculation method: /, *, -, +');
  if (isValidCalculateMethod(calculateMethod)) {
    isValid = true;
  } else {
    alert('Invalid input. Please enter a valid calculation method: /, *, -, +');
  }
}

// Calculate answer based on method
switch (calculateMethod) {
  case '/':
    answer = div(num1, num2);
    break;
  case '*':
    answer = mul(num1, num2);
    break;
  case '+':
    answer = add(num1, num2);
    break;
  case '-':
    answer = sub(num1, num2);
    break;
  default:
    console.log('Validation funcs did not pass!');
}

alert(`The result of ${num1} ${calculateMethod} ${num2} is ${answer}`);

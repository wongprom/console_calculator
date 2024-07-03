alert('Welcome to my Calculator');

let calculateMethod, answer;

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

const getValidInput = (promptMessage, validationFunction, errorMessage) => {
  let input;
  let isValid = false;
  while (!isValid) {
    input = prompt(promptMessage);
    if (validationFunction(input)) {
      isValid = true;
    } else {
      alert(errorMessage);
    }
  }
  return input;
};

// Input 1
const num1 = parseInt(
  getValidInput(
    'Please enter the first number',
    isNumber,
    'Invalid input. Please enter a valid number.'
  )
);

// Input 2
const num2 = parseInt(
  getValidInput(
    'Please enter the first number',
    isNumber,
    'Invalid input. Please enter a valid number.'
  )
);

// Input 3
let isValid = false;
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

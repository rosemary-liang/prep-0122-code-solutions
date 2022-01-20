function addTwoNumbers(num1, num2) {
  return num1 + num2;
}
var sum = addTwoNumbers(2, 2);
console.log('sum', sum);

function convertHoursToMinutes(hours) {
  return hours * 60;
}
var minutes = convertHoursToMinutes(10);
console.log('hours converted to', minutes, 'minutes');

function getGreeting(name) {
  return 'Hello ' + name + '!';
}
var greeting = getGreeting('World');
console.log('Greeting:', greeting);

function addAndMultiplyBy5(num1, num2) {
  return ((num1 + num2) * 5);
}
var addAndMultiplyResult = addAndMultiplyBy5(10, 5);
console.log('addAndMultiplyResult: ', addAndMultiplyResult);

function multiplyAndDivideBy5(num1, num2) {
  return ((num1 * num2) / 5);
}
var multiplyAndDivideResult = multiplyAndDivideBy5(35, 10);
console.log('multiplyAndDivideResult: ', multiplyAndDivideResult);

function subtractTwoNumbers(num1, num2) {
  return num1 - num2;
}
var subtractTwoNumbersResult = subtractTwoNumbers(22, 7);
console.log('subtractTwoNumbersResult: ', subtractTwoNumbersResult);

function getCircleCircumference(radius) {
  return 2 * Math.PI * radius;
}
var CircleCircumferenceResult = getCircleCircumference(5);
console.log('CircleCircumferemce: ', CircleCircumferenceResult);

function getFullName(firstName, lastName) {
  return firstName + ' ' + lastName;
}
var fullName = getFullName('Juan', 'Ramirez');
console.log('fullName: ', fullName);

function cube(number) {
  return number ** 3;
}
var cubeResult = cube(5);
console.log('cubeResult: ', cubeResult);

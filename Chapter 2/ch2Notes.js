/*
Keyword 'let' defines a binding.
Bindings act as tentacles, rather than boxes.
They don't contain values, they grasp them.
Two bindings can refer to the same value.
A program can access only the values that it still has a reference to.
*/

let ten = 10;
console.log(ten * ten);
// -> 100

let mood = 'light';
console.log(mood);
// -> light
mood = 'dark';
console.log(mood);
// -> dark

let luigisDebt = 140;
luigisDebt = luigisDebt - 35;
console.log(luigisDebt);
// -> 105

let undefinedBinding;
console.log(undefinedBinding);
// -> undefined

let one = 1,
	two = 2;
console.log(one + two);
// -> 3

// ----------

/*
Keyword 'var' decalres a binding in pre-2015 JS.
Keyword 'const' defines a constant, which points at the same value for its entire lifecycle.
*/

var name = 'Ayda';
const greeting = 'Hello ';
console.log(greeting + name);
// -> Hello Ayda

// ----------

/*
'prompt' function creates a simple dialog box from a browser.
Good for simple user input, but unable to alter styling.
*/

passcode = prompt('Enter passcode');
console.log("User's passcode: " + passcode);
// -> User's passcode: ...

console.log(Math.max(2, 4));
// -> 4

console.log(Math.min(2, 4) + 100);
// -> 102

// ----------

/*
Linear execution
*/

let theNumber = Number(prompt('Pick a number'));
console.log('Your number is the square root of ' + theNumber * theNumber);
// -> Your number is the square root of ...

if (1 + 1 == 2) console.log("It's true");
// -> It's true

// ----------

/*
Conditional execution
*/

let theNumber = Number(prompt("Pick a number"));
if (theNumber === 0 || theNumber === 1) {
	console.log("The square root of " + theNumber + " is itself!");
} else if (!Number.isNaN(theNumber)) {
	console.log("Your number is the square root of " + theNumber * theNumber);
} else {
	console.log("ERROR: You did not enter a valid number.");
};

// ----------

/*
While and do-while loops
*/

let number = 0;
while (number <= 12) {
	console.log(number);
	number += 2;
};
// -> 0
// -> 2
// -> ... 12

let result = 1;
let counter = 0;
while (counter < 10) {
	result *= 2;
	counter++;
};
console.log(result);
// -> 1024

let yourName;
do {
	yourName = prompt("Who are you?");
} while (!yourName);
console.log(yourName);

// ----------

/*
For loops
*/

for (let number = 0; number <= 12; number += 2) {
	console.log(number);
};
// -> 0
// -> 2
// -> ... 12

let result = 1;
for (let counter = 0; counter < 10; counter++) {
	result = result * 2;
};
console.log(result);
// -> 1024

// ----------

/*
Keyword "break" exits a loop body.
Keyword "continue" exits a loop iteration and continues its next iteration.
*/

for (let current = 20; ; current++) {
	if (current % 7 == 0) {
		console.log(current);
		break;
	};
};
// -> 21

// ----------

/*
Switches
*/

// Switch using ifs
if (x == "value1") action1();
else if (x == "value2") action2();
else if (x == "value3") action3();
else defaultAction();

switch (prompt("What is the weather like?")) {
	case "rainy":
		console.log("Remember to bring an umbrella.");
		break;
	case "sunny":
		console.log("Dress lightly.");
	case "cloudy":
		console.log("Go outside.");
		break;
	default:
		console.log("Unknown weather type!");
		break;
};
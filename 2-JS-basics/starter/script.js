// coding challenge 1
// var johnMass, johnHeight, johnBmi, markMass, markHeight, markHigherBmi;

// johnMass = 65;
// johnHeight = 1.67;
// johnBmi = johnMass / (johnHeight * johnHeight);

// markMass = 70;
// markHeight = 1.92;
// markBmi = markMass / (markHeight * markHeight);


// // console.log(markHigherBmi);
// if (markBmi > johnBmi){
// 	console.log('Mark\'s BMI is greater than John\'s BMI');
// } else {
// 	console.log('John\'s BMI is greater than Mark\'s BMI');
// }

// console.log('Mark: ' + markBmi)
// console.log('John: ' + johnBmi);


//  Boolean logic
// var firstName = 'John';
// var civilStatus = 'single';
// var isMarried = false;

// if (isMarried) {
// 	console.log(firstName + ' is married');
// } else {
// 	console.log (firstName + ' is not married');
// }

// var firstName = 'John';
// var age = 16;

// if (age < 13 ) {
// 	console.log(firstName + " is a child");
// } elseif (age >= 13 && age < 20 ) {
// 	console.log(firstName + " is a teenager ");
// } elseif (age >= 20 && age < 35) {
// 	console.log(firstName + " is a young adult ");
// } else {
// 	console.log(firstName + " is an adult");
// }

// The Ternary Operator and Switch Statements

// var firstName = 'John';
// var age = 21;
// Ternary Operator
// age >= 21 ? console.log(firstName + ' drinks beer.') : console.log(firstName + ' drinks juice');

// var drink = age >= 21 ? 'beer' : 'juice';
// console.log(drink);

// if (age >=21) {
// 	var drink = 'beer';
// } else {
// 	var drink = 'juice';
// }

// console.log(drink);

//Switch Statment
//simple way of replacing an if-else statement.

// var job = 'driver';
// switch (job) {
// 	case 'teacher' :
// 	case 'instructor' :
// 		console.log(firstName + ' teaches kids to code.');
// 		break;
// 	case 'driver' :
// 		console.log(firstName + ' drives an Uber in Lisbon.');
// 		break;
// 	case 'designer' :
// 		console.log( firstName + ' designs beautiful websites.');
// 		break;
// 	default:
// 		console.log(firstName + ' does something else.');
// }

// var firstName = 'John';
// var age = '21';

// switch (true) {
// 	case age < 13:
// 		console.log(firstName + " is a child.");
// 		break;
// 	case age >= 13 && age < 20:
// 		console.log(firstName + " is a teenager. ");
// 		break;
// 	case age >= 20 &&  age < 35 :
// 		console.log(firstName + ' is a young adult.');
// 		break;
// 	defult:
// 		console.log(firstName + ' is an adult.');
// 		break;
// }

//Truthy and Falsy Values
// falsy values : undefined, null, 0, '', NAN
// truthy values: NOT falsy values.

// var height = 23;

// if (height || height === 0) {
// 	console.log('Variable is defined.');
// } else {
// 	console.log('Variable has NOT been defined.');
// }

// // Equality operators
// if (height === '23'){
// 	console.log('The == operator does type coercion!');
// 	}

//  Coding Challenge  II
// var johnTeamAverage, mikeTeamAverage, maryTeamAverage;

// johnTeamAverage = (89 + 120 + 103) / 3;
// mikeTeamAverage =  (116 + 94 + 123) / 3;
// maryTeamAverage = (97 + 134 + 105) / 3;


// console.log('John\'s team average: ' + johnTeamAverage, ', Mike\'s team average: ' + mikeTeamAverage,
// 	'Mary\'s team average: ' + maryTeamAverage);

// if (johnTeamAverage > mikeTeamAverage && johnTeamAverage > maryTeamAverage) {
// 	console.log('Johns team average is the highest.');
// } else if (mikeTeamAverage > johnTeamAverage && mikeTeamAverage > maryTeamAverage) {
// 	console.log ('Mike\'s team average is the highest.');
// } else if (maryTeamAverage > johnTeamAverage && maryTeamAverage > mikeTeamAverage) {
// 	console.log('Mary\'s team average is the highest.');
// } else if (maryTeamAverage === johnTeamAverage && maryTeamAverage > mikeTeamAverage) {
// 	console.log('John and Mary\'s teams tied for first place in a draw.');
// } else if (maryTeamAverage === mikeTeamAverage && maryTeamAverage > johnTeamAverage) {
// 	console.log('Mary and Mike\'s teams are tied for first in a draw');
// } else if (johnTeamAverage === mikeTeamAverage && johnTeamAverage > maryTeamAverage) {
// 	console.log('John and Mike\'s teams are tied for first in a draw');
// } else if (johnTeamAverage === mikeTeamAverage && johnTeamAverage === maryTeamAverage) {
// 	console.log('John, Mike and Mary\'s teams are tied');
// }

// 	console.log('something else');
// }

// Functions

// function calculateAge(year) {
// 	return 2018 - year;
// };
// var ageJohn = calculateAge(1990);
// var ageMike = calculateAge(1948);
// var ageJane = calculateAge(1969);

// console.log(ageJohn, ageMike, ageJane);

// console.log(ageJohn);

// function yearsToRetirement(year, firstName) {
// 	var age = calculateAge(year)
// 	var retirement = 65 - age;
// 	if (retirement > 0) {
// 		console.log(firstName + ' retires in ' + retirement + ' years.');
// 	} else {
// 		console.log(firstName + ' is already retired.');
// 	}
// }

// yearsToRetirement(1990, 'John');
// yearsToRetirement(1948, 'Mike');
// yearsToRetirement(1969, 'Jane');

// Function statements and Expressions

// Function Declairation
// function whatDoyouDo = function(job, firstName){};

// Function expresion
// var whatDoYouDo = function(job, firstName) {
// 	switch(job) {
// 		case 'teacher' :
// 			return firstName + ' teaches kids how to code.';
// 		case 'driver' :
// 			return firstName + ' drives a cab in Lisbon.';
// 		case 'designer' :
// 			return firstName + ' designs beautiful websites.';
// 		default:
// 			return firstName + ' does something else.';
// 	}
// };

// console.log(whatDoYouDo('teacher', 'John'));
// console.log(whatDoYouDo('designer', 'Jane'));
// console.log(whatDoYouDo('retired', 'Mark'));

//expressions always produce a value.
//  2 + 3 is an expression
//  whatDoYouDo('teacher', 'John');
//  typeof 23

// when JS expects a value, you must always write an expression.

// Statements prerform actions, but don't produce any immediate value
//  if / else
//  while
//  function declairations

// expressions prodcuce an immediate result, declairations do not.


//  Arrays;
//  Initalize new array
// var names = ['John', 'Mark', 'Jane']; //more used
// var years = new Array(1990, 1969, 1948); // less common

// console.log(names[2]);
// console.log(names.length);

// //  Mutate array data
// names[1] = 'Ben';
// console.log(names);

// names[names.length] = 'Mary';
// console.log(names);


// //  Different Data Types
// var john = ['John', 'Smith', 1990, 'designer', false];

// // Methods
// //  .push
// //  .unshift
// john.push('blue');
// console.log(john);

// john.unshift('Mr.');
// console.log(john);

// john.pop();
// console.log(john);

// john.shift()
// console.log(john);

// // return element of position of array
// //  most useful to test if an element is present in an array.
// console.log(john.indexOf(1990));
// console.log(john.indexOf(23));

// console.log(john.indexOf('designer'));
// var isDesigner = john.indexOf('designer') === -1 ? 'John is NOT a designer.': 'John is a designer';
// console.log(isDesigner);

// Coding challenge.
// var total = [124, 48, 268];
// var tipAmount = [];
// var finalTotal = [];

// function tips (mealTotal) {
// 	if (mealTotal < 50) {
// 		var tipped = mealTotal * .2;
// 	} else if (mealTotal >= 50 && mealTotal < 200) {
// 		var tipped = mealTotal * .15;
// 	} else {
// 		var tipped = mealTotal * .1;
// 	}
// 	tipAmount.push(tipped);
// 	finalTotal.push(mealTotal + tipped);

// }
// console.log(tipAmount);
// console.log(finalTotal);

// tips(total[0]);
// tips(total[1]);
// tips(total[2]);


//  objects & properties

// Arrays order matters, objects order doesn't matter
// object literals use curly braces
// var john = {
// 	firstName: 'John',
// 	lastName: 'Smith',
// 	birthYear: 1990,
// 	family: ['Jane', 'Mark', 'Bob', 'Emily'],
// 	job: 'teacher',
// 	isMarried: false
// };
//  // object literal is curly brackets
// //  key (firstName), value (John);

// console.log(john);
// console.log(john.firstName);
// var x = 'birthYear';
// console.log(john[x]);


// john.job = 'designer';
// john['isMarried'] = true;
// console.log(john);

// // new object syntax;
// var jane = new Object();
// jane.firstName = 'Jane';
// jane.birthYear = 1969;
// jane['lastName'] = 'Smith';
// console.log(jane);

//  Objects and Methods

// functions attached to objects are called methods.

// var john = {
// 	firstName: 'John',
// 	lastName: 'Smith',
// 	birthYear: 1993,
// 	family: ['Jane', 'Mark', 'Bob', 'Emily'],
// 	job: 'teacher',
// 	isMarried: false,
// 	calculateAge: function() {
// 			this.age = 2018 - this.birthYear;
// 	}
// };

// john.calculateAge();
// console.log(john);

//  Coding Challenge IV

// var john = {
// 	firstName: 'John',
// 	lastName: 'Smith',
// 	mass: 65,
// 	height: 1.67,
// 	calculateBmi: function() {
// 		this.bmi = this.mass / (this.height * this.height);
// 		return this.bmi;
// 	}
// };
// var mark = {
// 	firstName: 'Mark',
// 	lastName: 'White',
// 	mass: 95,
// 	height: 1.92,
// 	calculateBmi: function() {
// 		this.bmi = this.mass / (this.height * this.height);
// 		return this.bmi;
// 	}

// };

// if ( john.calculateBmi() > mark.calculateBmi()) {
// 	console.log(john.firstName + ' ' + john.lastName + ' has a BMI higher than ' + mark.firstName + ' ' + mark.lastName + '.');
// } else if (mark.bmi > john.bmi) {
// 	console.log(mark.firstName + ' ' + mark.lastName + ' has a BMI higher than ' + john.firstName + ' ' + john.lastName + '.');
// } else {
// 	console.log(john.firstName + ' ' + john.lastName + ' has the same BMI as ' + mark.firstName + ' ' + mark.lastName + '.');
// };


//  loops and iteration

// for ( var i = 3; i < 10; i += 3)  {
// 	console.log(i);
// }

var john = ['John', 'Smith', 1990, 'designer', false];

// for (var i = 0; i < john.length; i++) {
// 	console.log(john[i]);
// }

var i = 0;
while (i < john.length) {
	console.log(john[i]);
	i++;
}
/*var Person = function(name, yob, job) {
	this.name = name;
	this.yob = yob;
	this.job = job;
}

var Place = function(city, country, duration) {
	this.city = city;
	this.country = country;
	
}

var john = new Person('John', 1990, 'teacher');
var jane = new Person('Jane', 1968, 'engineer');
var mark = new Person('Mark', 1932, 'rockstar');


var stop0 = new Place('Christchurch', 'New Zealand', 4)
var stop1 = new Place('Aukland', 'New Zealand', 1);
var stop2 = new Place('Melbourne', 'Australia', 3)



Place.prototype.schedule = function () {
	console.log(8 - duration)
}

Person.prototype.calculateAge = function() {
	console.log(2019 - this.yob);
}
Person.prototype.lastName = 'Smith';

john.calculateAge();
jane.calculateAge();
mark.calculateAge();
*/
//  Object.Create
// var personProto = {
// 	calculateAge: function(){
// 		console.log(2019 - this.yearOfBirth)
// 	}
// };

// var john = Object.create(personProto);
// john.name = 'John';
// john.yearOfBirth = 1990;
// john.job = 'teacher';

// var jane = Object.create(personProto, {
// 	name: { value: 'Jane'},
// 	yearOfBirth: {value: 1969},
// 	job: {value: 'designer'}
// });


//  Primitives vs objects

// primitives
// let a = 23
// let b = a

// a =  46
// console.log(a, b); // 46, 23

// //  Objects
// var obj1 = {
// 	name: 'John',
// 	age: 29
// };

// var obj2 = obj1;

// obj1.age = 30;

// console.log(obj1, obj2); // 30, 30

// // Functions
// var age = 25; // copy bc it's  a primitive
// var obj = {
// 	name: 'Amy',
// 	city: 'Los Angeles' // refernce 
// };

// function change(a, b) {
// 	a = 30;
// 	b.city = 'Christchurch';
// }

// change(age, obj);
// console.log(age, obj.city)

// //  functions are also objects
// //  functions are instance of object type
// //  functions behaves like any other object;
// //  we can store functions in a variable;
// //  we can pass functions as arguements to other functions
// //  we can return a function from a function.

// var years = [ 1990, 1965, 1937, 2005, 1998];
// var fahrenheit = [40, 60, 80, 100, 110];

// function cToF(deg){
// 	var celsius = [];
// 	for (i = 0; i < deg.length; i++) {
// 		celsius.push((Math.round((deg[i]-32)* 5/9)));
// 	}
// 	console.log(celsius);
// }
// cToF(fahrenheit);

// console.log(cTemp());

// function arrayCalc(array, fctn) {
// 	var arrRes = [];
// 	for (var i = 0; i < array.length; i++){
// 		arrRes.push(fctn(array[i]));
// 	}
// 	return arrRes;
// }

// function calculateAge(el) {
// 	return 2019 - el;
// }

// function isFullAge(el) {
// 	return el >= 18;
// }

// function maxHeartRate(el) {
// 	if(el >= 18 && el <= 81){
// 		return Math.round(206.9 -(0.67*el));
// 	} else {
// 		return -1;
// 	}	
// }

// var ages = arrayCalc(years, calculateAge);
// var fullAges = arrayCalc(ages, isFullAge);
// var maxBPM = arrayCalc(ages, maxHeartRate);

// console.log(ages);
// console.log(fullAges);
// console.log(maxBPM);


// function interviewQuestion(job) {
// 	if (job === 'designer') {
// 		return function(name) {
// 			console.log(name + ' , can you please explain what UX design is?');
// 		}
// 	} else if (job === 'teacher') {
// 		return function(name) {
// 			console.log(name +', which subject do you teach?');
// 		}
// 	} else {
// 		return function(name) {
// 			console.log('Hello ' + name + ', what do you do?');
// 		}
// 	}
// }

// var teacherQuestion = interviewQuestion('teacher');
// var designerQuestion = interviewQuestion('designer');
// var engineerQuestion = interviewQuestion('engineer');

// teacherQuestion('John');
// designerQuestion('John');
// engineerQuestion('John');


// interviewQuestion('teacher')('Mark');

// IFFE
// not for reusable code, for data privacy and code modularity

// function game() {
// 	var score = Math.random() *10;
// 	console.log(score >= 5);
// }
// game();

// (function(goodLuck) {
// 	var score = Math.random() *10;
// 	console.log(score >= 5 - goodLuck);
// })(5);
// console.log(score); //hidden

// closures

// function retirement(retirementAge) {
// 	var a = ' years left until reitrement.';
// 	return function(yearOfBirth) {
// 		var age = 2019 - yearOfBirth;
// 		console.log((retirementAge - age) + a);
// 	}
// }

// // retirement(66)(1990);
// var retirementUs = retirement(66);
// var retirementEurope = retirement(65);
// var retirementIceland =  retirement(67);
// retirementUs(1990);
// retirementEurope(1990);
// retirementIceland(1990)

// exerciser re-write interview question with closures.

// function interviewQuestion(job) {
// 	//note vars defined here would be available in below function.
// 	return function (name) {
// 		if(job === 'teacher') {
// 			console.log(name + ', which subject do you teach?');
// 		} else if (job === 'designer') {
// 			console.log(name + ', could you please explain what UX design is?');
// 		} else {
// 			console.log('What do you do ' + name + '?');
// 		}
// 	}
// }

// interviewQuestion('teacher')('John');
// interviewQuestion('designer')('Marc');
// interviewQuestion('engineer')('Mary');


/*
--- Let's build a fun quiz game in the console! ---

1. Build a function constructor called Question to describe a question. A question should include:
a) question itself
b) the answers from which the player can choose the correct one (choose an adequate data structure here, array, object, etc.)
c) correct answer (I would use a number for this)

2. Create a couple of questions using the constructor

3. Store them all inside an array

4. Select one random question and log it on the console, together with the possible answers (each question should have a number) (Hint: write a method for the Question objects for this task).

5. Use the 'prompt' function to ask the user for the correct answer. The user should input the number of the correct answer such as you displayed it on Task 4.

6. Check if the answer is correct and print to the console whether the answer is correct ot nor (Hint: write another method for this).

7. Suppose this code would be a plugin for other programmers to use in their code. So make sure that all your code is private and doesn't interfere with the other programmers code (Hint: we learned a special technique to do exactly that).
*/



// let Question = function(question, correctAnswer) {
// 	this.question = question;
// 	this.correctAnswer = correctAnswer;
// }

// var question1 = new Question('Are Java & JavaScript the same?', '1');
// 
// let answer = prompt();
// console.log(answer);



// function Question(question, possibleAnswers, correctAnswer) {
// 	this.question = question;
// 	let answer = prompt(question);
// 	console.log(possibleAnswers);
// 	if(answer === correctAnswer) {
// 		console.log('that\'s right')
// 	} else {
// 		console.log('try again')
// 	}
// }



// var Question = function(question, possibleAnswers, correctAnswer) {
// 	this.question = question,
// 	this.possibleAnswers =possibleAnswers
// 	this.correctAnswer = correctAnswer
// }

// Question.prototype.

// var question1 = ('Are Java and JavaScript the same?', '0: Yes, 1: No', '1');


//  Create three y/n questions and set their answers
// 'Are Java and JavaScript the same?', 1;
// 'Does 3 + 4 = 9', 0
// 'Does Amy want a tesla?', 0


// Select each question randomly
let random = Math.round(Math.random() * 3);
console.log('random question number: ' + random);
//  print possible answers to console 
console.log('0: Yes, 1: No');
// Choose question
var answer;

var Question = function(question, correctAnswer) {
	this.question = question;
	this.correctAnswer = correctAnswer;
}

var question1 = new Question('Are Java and JavaScript the same?', '1');
var question2 = new Question('Does 3 + 4 = 9', '0');
var question3 = new Question('Does Amy want a tesla?', '0');

if (random === 0) {
	answer = prompt(question1.question);
	if (answer === question1.correctAnswer) {
		console.log('Yes, that\'s right.')
	} else {
		console.log('Better luck next time.')
	}
} else if (random === 1) {
	answer = prompt(question2.question);
	if (answer === question2.correctAnswer) {
		console.log('Yes, that\'s right.')
	} else {
		console.log('Better luck next time.')
	}
} else if (random === 2) {
	answer = prompt(question3.question);
	if (answer === question3.correctAnswer) {
		console.log('Yes, that\'s right.')
	} else {
		console.log('Better luck next time.')
	}
} else {
	console.log('Oops! Something went wrong');
}

console.log(answer);

// assign correct answer and user answer,
// log the result to the console (if /else)
// console.log('that\'s right');
// console.log('better luck next time');



// assign user input to a var

//  use the var to check the correct answer


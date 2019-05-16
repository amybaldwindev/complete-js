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
let a = 23
let b = a

a =  46
console.log(a, b); // 46, 23

//  Objects
var obj1 = {
	name: 'John',
	age: 29
};

var obj2 = obj1;

obj1.age = 30;

console.log(obj1, obj2); // 30, 30

// Functions
var age = 25; // copy bc it's  a primitive
var obj = {
	name: 'Amy',
	city: 'Los Angeles' // refernce 
};

function change(a, b) {
	a = 30;
	b.city = 'Christchurch';
}

change(age, obj);
console.log(age, obj.city)

//  functions are also objects
//  functions are instance of object type
//  functions behaves like any other object;
//  we can store functions in a variable;
//  we can pass functions as arguements to other functions
//  we can return a function from a function.

var years = [ 1990, 1965, 1937, 2005, 1998];

function arrayCalc(array, fctn) {
	var arrRes = [];
	for (var i = 0; i < array.length; i++){
		arrRes.push(fctn(array[i]));
	}
	return arrRes;
}

function calculateAge(el) {
	return 2019 - el;
}

function isFullAge(el) {
	return el >= 18;
}

function maxHeartRate(el) {
	if(el >= 18 && el <= 81){
		return Math.round(206.9 -(0.67*el));
	} else {
		return -1;
	}	
}

var ages = arrayCalc(years, calculateAge);
var fullAges = arrayCalc(ages, isFullAge);
var maxBPM = arrayCalc(ages, maxHeartRate);

console.log(ages);
console.log(fullAges);
console.log(maxBPM);
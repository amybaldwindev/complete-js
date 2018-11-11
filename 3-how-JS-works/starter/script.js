///////////////////////////////////////
// Lecture: Hoisting
// calculateAge(1995);

// hoisting only works for function decairation
function calculateAge(year) {
    console.log(2018 - year)
}

 // not function expressions as below
// retirement(1990);

var retirement = function (year) {
    console.log(65 - (2018 - year));
}

// variables that don't have a value yet will always be undefinde
console.log(age);
var age = 23;


function foo() {
    var age = 65;
    console.log(age);
}
foo();
console.log(age);

// use case for hoisting is that we can use function declairations before they
// are used in the code






///////////////////////////////////////
// Lecture: Scoping


// First scoping example

/*
var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        console.log(a + b + c);
    }
}
*/



// Example to show the differece between execution stack and scope chain

/*
var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        third()
    }
}

function third() {
    var d = 'John';
    console.log(a + b + c + d);
}
*/



///////////////////////////////////////
// Lecture: The this keyword










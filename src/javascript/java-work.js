//////////////////////////////////
// Lecture: Hoisting

/*
// functions
calculateAge(1965);

function calculateAge(year) {
    console.log(2016 - year);
}


// retirement(1990);
var retirement = function(year) {
    console.log(65 - (2016 - year));
}

// vaiables

console.log(age)
var age = 23;

function foo() {
    console.log(age);
    var age = 65;
    console.log(age);
}
foo();
console.log(age)
*/


/////////////////////////////////////////
// Lecture: Scoping
// meaning of scoping chain? Scoping answers the queastions "where can we access a certain  Variables
// Each new function creates a scope: the space/ environment, in which the variables it defines are accessible.
// Lexical scoping:  a function that is lexically within another function gets access to the outer function

// Example to show the difference between execution stack and scope chain


// The Execution stack comes from down to top /and while Scope chain comes from up to the down



// first scoping example

/*
var a = 'Hello';
first();

function first() {
    var b = 'Hi';
    second();
    

    function second() {
        var c = 'Hey';
        third();
        // console.log(a +  b + c)
    }
}

function third() {
    var d = 'John';
    console.log(a + d)
}
*/


//////////////////////////
// Lecture:The this Keyword
// the 'This' Keyword
// 1: Regular function call: the This Keyword points at the globla object, (the window object, in the briwser). IS also called the default
// 2: Method call: the This Variable points to the object that is calling the method
// 3: The this Keyword is not assigned a value until a function where it is defines is actually called

// console.log(this)


/*
calculateAge(1985)

function calculateAge(year) {
    console.log(2016 - year);
    console.log(this)
}
*/

var John = {
    name: 'john',
    yearOfBirth: 1990,
    calculateAge: function() {
        console.log(this);
        console.log(2016 - this.yearOfBirth)


        // function innerFunction() {
        //     console.log(this);
        // }
        // innerFunction();

    }

}

John.calculateAge();

var mike = {
    name: 'mike',
    yearOfBirth: 1984,
};

// method borrowing

mike.calculateAge = John.calculateAge;
mike.calculateAge();





























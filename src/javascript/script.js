// variable and data type

/*
var firstName = 'chebe';
console.log(firstName);

var lastName = 'conicy';
var lastName = 21;

var fullAge = true;

console.log(lastName);
*/



// type correction

/***
var firstName = 'chebe';
var age = 21;

console.log(firstName + ' ' + age)


var job, isMarried;
job = 'Teacher';
isMarried = false;

console.log(firstName + ' is a ' + age + ' year old ' + job + ': is he mareied ' + isMarried);


// variable mutation
age = 'twenty one';
job = 'dancer';

alert(firstName + ' is a ' + age + ' year old ' + job + ': is he mareied ' + isMarried);

var LastName = prompt('what is his Name?');
console.log(firstName + ' ' + LastName);
***/

/**************** 
 Basic operators
**/
// var year, yearvictor, yeardan;
// now = 2020;
// ageVictor = 21;
// ageChebe = 25;


// math operator
/****
yearvictor = now - ageVictor;
yeardan = now - ageChebe;

console.log(yearvictor);

console.log(now + 2);
console.log(now * 2);
console.log(now / 2);
console.log(now - 2);
console.log(now > 2);
console.log(now < 2);
console.log(now % 2);
*****/

// Logical operator
/***
var babyOlder = ageVictor > ageChebe;
console.log(babyOlder);

// typeof babyOlder
console.log(typeof babyOlder);
console.log(typeof ageVictor);
console.log(typeof 'chebe');
var x;
console.log(x);
***/

/******************
 * operator precedence
****/
/***
var now = 2021;
var yearvictor = 2000;
var fullAge = 21;

var isFullAge = now - yearvictor >= fullAge;  // true
console.log(isFullAge);


var ageVictor = now - yearvictor;
var ageChebe = 25;
var average = (ageVictor + ageChebe) / 2;
console.log(average);
*/


// multiple assignments
/**************
var x, y;
x = y = (3 + 5) * 4 - 6; // 8 * 4 - 6 // 32 - 6
console.log(x, y);

// more operator 
x *= 2;
console.log(x)
x += 10;
console.log(x);

x++;
console.log(x)

++x;
console.log(x)

++x;
console.log(x)
****/


// chanlenge 1

/* 
mark and John are trying to compare their BMI (Body mass Index),
which is calculated using the formular:
BMI = Mass / height^2 = Mass / (height * height).
(Mass in kg and height in meters).

1. Store Mark's and John mass and height in Variables
2. Calculate both their BMIs
3. create a boolean variable containing information about whether
mark has a height BMI than John.
4. Print a string to the console containing the variable from step 3.
(Something Like "Is mark's BMI height than John's? true").
*/

// function differences(){
//  var MarksHeight=1.7;
//  var JohnHeight=2.5;
//  var JohnMass=65;
//  var MarkMass=56;
//  const JohnBMI=(JohnMass)/JohnHeight*JohnHeight;
//  const MarkBMI=Math.floor(MarkMass)/MarksHeight*MarksHeight;
//   if(JohnBMI<MarkBMI)return true;
//   else{
//       return false;
//   }
// }
// console.log(differences());
 



// var massMark = 67; //kg
// var heightMark = 1.57; //meters

// var massJohn = 89; //kg
// var heightJohn = 1.89; //meters

// var BMIMark = massMark / (heightMark * heightMark);
// var BMIJohn = massJohn / (heightJohn * heightJohn);
// console.log(BMIMark, BMIJohn);

// var markheightBMI = BMIMark > BMIJohn;
// console.log('if chebe\'s BMI is higher than John\'s BMI ' +
// markheightBMI);

// var johnheightBMI = BMIJohn > BMIMark;
// console.log('if john\'s BMI is higher than mark\'s BMI ' + 
// johnheightBMI)


/********************
 * if or else statement
*********** */


// var firstName = 'chebe';
// var civilStatus = 'single';

// if (civilStatus === 'married') {
//     console.log(firstName + ' is married ')
// } else {
//     console.log(firstName + ' will hopelly marry soon :)')
// }

// var isMarried = true;
// if (isMarried) {
//     console.log(firstName + ' is married ')
// } else {
//     console.log(firstName + ' will hopelly marry soon :)')
// }

// var massMark = 67; //kg
// var heightMark = 1.57; //meters

// var massJohn = 89; //kg
// var heightJohn = 1.89; //meters

// var BMIMark = massMark / (heightMark * heightMark);
// var BMIJohn = massJohn / (heightJohn * heightJohn);


// if (BMIMark > BMIJohn) {
//    console.log('mark\'s BMI is higher than John\'s. ')
// } else {
//     console.log('John\'s BMI is higher than Mark\'s. ')

// }


/***********************
* Boolean Logic
*********** */



// var firstName = 'chebe';
// var  age = 20;

// if (age < 13) {
//     console.log(firstName + ' is a boy ')
// } else if (age >= 13 && age < 20) {  // between 13 and 20 === age >= 13 AND age < 20
//     console.log(firstName + ' is a teenager ')
// } else if (age >= 20 && age < 30) {
//     console.log(firstName + ' is a teenager ')
// } else {
//     console.log(firstName + ' is a man ')
// }


/*********************
*  The Ternary opeartor and switch statements 
************* */
//  The Ternary opeartor 

/** 
var firstName = 'chebe';
var age = 20;

age >= 18 ? console.log(firstName + ' drinks beer ') 
:  console.log(firstName + ' drinks juice ') 

var drinks = age >= 18 ? 'beer' : 'juice';
console.log(drinks)


if (age >= 18) {
   var drinks =  'beer';
} else {
    var drinks = 'juice';
}
console.log(drinks)

// switch statement
var job = 'instructor';
switch (job) {
    case 'teacher':
    case 'instructor':
    console.log(firstName + ' teaches kids how to code')
    break;
    case 'driver':
    console.log(firstName + ' drives to owerri imo state every good day of his entire life')
    break;
    case 'designer':
    console.log(firstName + ' designs my beautiful website ever')
    break;
    default:
    console.log(firstName + ' does something else in his life')
}

age = 18;
switch (true) {
    case age < 13:
    console.log(firstName + ' is a boy ')
    break;
    case  age >= 13 && age < 20:
    console.log(firstName + ' is a teenager ')
    break;
    case  age >= 20 && age < 30:
    console.log(firstName + ' is a young man ')
    break;
    default:
    console.log(firstName + ' is a man ')
}
/** 





/***********************
 * truthly and  falsy values equality operators
********** */

// falsy value: is undefined , null, 0, '', NaN;
// truthly value: is NOT falsy value


// var height;
// height = 35;
// if (height || height === 0) {
//     console.log('variable is defined');
// } else {
//     console.log('veriable has NoT been defined')
// }


/************************
* CHALLENAGE 2
************************** */
/*

john and mike both play baskeball in different teams. In the latest 3 game, John's team scored
89, 120, 103 points, while Mike's team scored 116, 94,123 points


1. calculate the average score for each team
2. Decide which teams wins in average (heighest average score), and
print to the console. Also include the average score in the output
3. then change the scores to show different winners.
Don't forget to take into account there might be a drew (the 
same average score)

4.EXTRA: mary also plays basketball and her team score 97, 134,
and 105 points. Like before log the average winner to the console.
HINT: you will need the && operator to take the decition. 

5. Like before, change the score to generate different winners,
keeping in mind there might be drews.


/************
* solution
***** */


// var Johnscore = (189 + 120 + 103) / 3;
// var MikeScore = (129 + 116 + 123) / 3;
// var maryscore = (97 + 134 + 105) / 3;
// console.log(Johnscore, MikeScore, maryscore)

// if (Johnscore > MikeScore && maryscore) {
//     console.log('john\'s team wins with ' + Johnscore + ' points ')
// } else if (MikeScore > Johnscore && maryscore) {
//     console.log('mike\'s team wins with ' + MikeScore + ' points ')
// } else if (maryscore > Johnscore && MikeScore) {
//     console.log('mary\'s team wins with ' + maryscore + ' points ')
// } else {
//     console.log('there is a drew')
// }

// if (Johnscore > MikeScore) {
//     console.log('john\'s team wins with ' + Johnscore + ' points ')
// } else if (MikeScore > Johnscore) {
//     console.log('mike\'s team wins with ' + MikeScore + ' points ')
// } else {
//     console.log('there is drew')
// }



/*******************
*  Functions
**************/

/*
function calculateAge(birthyear) {
    return 2021 - birthyear;
}
var ageChebe = calculateAge(2000);
var ageOlumachi = calculateAge(1948);
var ageJane = calculateAge(2001);
console.log(ageChebe, ageOlumachi, ageJane);


function yearUntilRetirement(year, firstName) {
    var age = calculateAge(year);
    var retirement = 65 - age;
    if (retirement > 0) {
        console.log(firstName + ' retires in ' + retirement + ' year. ')
    } else {
        console.log(firstName + ' is already retired. ')
    }
   
}

yearUntilRetirement(1990, 'chebe')
yearUntilRetirement(1948, 'olumachi')
yearUntilRetirement(1969, 'jane')
/*



/*******************
*  Functions Statement and Expressions
**************/
 
// function declaration
// function whatDoYouDo(job, firstName) {}


// function expression
/*
var whatDoYouDo = function(job, firstName) {
    switch(job) {
        case 'teacher':
            return firstName + ' teaches kid how to code'
        case 'driver':
            return firstName + ' drives to owerri imo state every good day '
        case 'designer':
            return firstName + ' designes my beautiful website '
        default:
            return firstName + ' does something else ' 
    }
}

console.log(whatDoYouDo('teacher', 'chebe'));
console.log(whatDoYouDo('driver', 'conicy'));
console.log(whatDoYouDo('designer', 'remond'));
console.log(whatDoYouDo('retirement', 'jane'));
/*


/*******************
*  Arrays
**************/

// initialize Array

// var names = ['chebe', 'victor', 'conicy']
// var years = new Array(1999, 1969, 1948);
// console.log(names[2])
// console.log(names.length)

// Mutate Array data

// names[2] = 'remond'
// names[names.length] = 'married'
// names[names.length] = 'programmer'
// console.log(names)

// Diferent data type

// var chebe = ['chebe', 'remond', 2000, 'designer', 'teacher', 'false']

// chebe.push('blue')
// chebe.unshift('mr chebe')
// chebe.pop()
// chebe.pop()
// chebe.shift()
// console.log(chebe)

// console.log(chebe.indexOf('teacher'))

// var isdesigner = chebe.indexOf('designer') === -1 ? 'chebe is Not a designer' :
// 'chebe is a designer'
// console.log(isdesigner)


/*******************
*  Challenge 3
******** */


// John and his family went on a holiday and went to 3 different restaurrant.
// The bill were $124, $48 and $268.

// To tip the waiter a fair amount, John created a simply tip calculator( as
// a function). He likes to tip 20% of the bill is less than $50, 15% when
// the bill is between $50 and $200, and 10% if the bill is more than $200

// In the end, John would like to have 2 arrays:
// 1. Containing all three tips (one for each bill)
// 1. Containing all three final paid (bill + tip).

// (Note: To calculate 20% of a value, simply multiply if with 20/100 = 0.2) 


/*
function tipCalculator(bills) {
    var percentage;
    if (bills < 50) {
        percentage = .2;
    } else if (bills >= 50 && bills < 200) {
        percentage = .15;
    } else {
        percentage = .1;
    }
    return percentage * bills;
}

var bills = [124, 48, 268];
var tips = [tipCalculator(bills[0]), 
            tipCalculator(bills[1]),
            tipCalculator(bills[2])];

var finalValue = [bills[0] + tips[0],
                  bills[1] + tips[1],
                  bills[2] + tips[2]]

console.log(tips, finalValue)            
/*


/********
* objects and properties
**********/

// object literal

// var chebe = {
//     firstName: 'remond', 
//     lastName: 'conicy',
//     birthyear: 2000,
//     family: ['jane', 'mark', 'bob', 'Emily'],
//     job: 'teacher',
//     ismarried: false
// };


// console.log(chebe.firstName)
// var x = 'birthyear';
// console.log(chebe['lastName'])
// console.log(chebe[x])

// chebe.job = 'designer';
// chebe['ismarried'] = true
// console.log(chebe)

// new object syntax
// var jane = new Object();
// jane.firstName = 'jane';
// jane.birthyear = 2000;
// jane['lastName'] = 'conicy';
// console.log(jane)

/********
* objects and Methods
**********/

// var chebe = {
//     firstName: 'remond', 
//     lastName: 'conicy',
//     birthyear: 2000,
//     family: ['jane', 'mark', 'bob', 'Emily'],
//     job: 'teacher',
//     ismarried: false,
//     calcAge: function() {
//         this.age = 2021 - this.birthyear;
//     }
// };

// chebe.calcAge()  
// console.log(chebe)



/************************
* CHALLENAGE 4
************************** */
// let's remember the first coding challenge where mark and john compiare their BMIs.
// Let's now implement the same functionality with object and methods.

// 1. Then, each of them, create an object with properties for their full name, mass, and height
// 2. Then, add a method to each object to calculate the BMI. Save the BMI to the object and also
// return it from the method.
// 3. IN the end, log to the console who has the heighest BMI, together with the full
// name and the respective BMI. Don't forget they might have the same NMI

// Remember: BMI = mass / height^2 = mass / (height * height). (mass kg and height meter)



// var mark = {
//     fullName: 'chebe conicy',
//     mass: 192,
//     height: 1.95,
//     calcBMI: function() {
//         this.bmi = this.mass / (this.height * 
//         this.height);
//         return this.bmi;
//     }
// }

// var john = {
//    fullName: 'chebe jonathan',
//    mass: 78,
//    height: 1.69,
//    calcBMI: function() {
//         this.bmi = this.mass / (this.height * 
//         this.height);
//         return this.bmi;
//     }
// }


// if (john.calcBMI() > mark.calcBMI()) {
//     console.log(john.fullName + ' has a highest BMI of ' +
//     john.bmi)
// } else if (mark.bmi > john.bmi) {
//     console.log(mark.fullName + ' has a highest BMI of ' +
//     mark.bmi)
// } else {
//     console.log(' they has same BMI')
// }


/***********
 *  Loops and iteration
**************/

/*
// for loop
for (var i = 1; i <= 20; i+= 2) {
    console.log(i)
}


var chebe = ['chebe', 'remond', 2000, 'designer', 'false', 'blue']
for (var i = 0; i < chebe.length; i++) {
    console.log(chebe[i])
}


//while loop
var i = 0;
while (i < chebe.length) {
    console.log(chebe[i]);
    i++;
}
*/


/*
// continue and break statement
var chebe = ['chebe', 'remond', 2000, 'designer', 'false', 'blue']
for (var i = 0; i < chebe.length; i++) {
    if (typeof chebe[i] !== 'string') continue
    console.log(chebe[i])
}

var chebe = ['chebe', 'remond', 2000, 'designer', 'false', 'blue']
for (var i = 0; i < chebe.length; i++) {
    if (typeof chebe[i] !== 'string') break
    console.log(chebe[i])
}


//looping backwords
for (var i = chebe.length -2; i >= 0; i--) {
    console.log(chebe[i])
}

*/



// function skip(num) {
//     for (var i = 0; i <= num/2; i+= 3)
//     console.log(i)
// }
// console.log(skip(8))



// challenge 5

/*
var john = {
    fullName: 'chebe Jonathan',
    bills: [124, 48, 269, 180, 42],
    calcTips: function() {
        this.tips = [];
        this.finalValue = [];

        for (var i = 0; i < this.bills.length; i++) {

          // Determine percentage based on tiping rules
          var percentage;
          var bill = this.bills[i];
          
          if (bill < 50) {
            percentage = .2;
          } else if (bill >= 50 && bill < 200) {
            percentage = .15;
          } else {
            percentage = .1;
          }


          // Add results to the corresponding arrays
          this.tips[i] = bill * percentage;
          this.finalValue[i] = bill + bill * percentage;
        }
    }
}

var mark = {
    fullName: 'mark Jonathan',
    bills: [77, 475, 110, 45],
    calcTips: function() {
        this.tips = [];
        this.finalValue = [];

        for (var i = 0; i < this.bills.length; i++) {

          // Determine percentage based on tiping rules
          var percentage;
          var bill = this.bills[i];
          
          if (bill < 100) {
            percentage = .2;
          } else if (bill >= 100 && bill < 300) {
            percentage = .1;
          } else {
            percentage = .25;
          }


          // Add results to the corresponding arrays
          this.tips[i] = bill * percentage;
          this.finalValue[i] = bill + bill * percentage;
        }
    }
}


function calcAverage(tips) {
    var sum = 0;
    for (var i = 0; i < tips.length; i++) {
        sum = sum + tips[i];
    }
    return sum / tips.length;
}



// Do the calculations
john.calcTips();
mark.calcTips();

john.average = calcAverage(john.tips);
mark.average = calcAverage(mark.tips);
console.log(john, mark)

if (john.average > mark.average) {
    console.log(john.fullName + '\'s family pays higher tips, with an average of $' +
    john.average)
} else if (mark.average > john.average) {
    console.log(mark.fullName + '\'s family pays higher tips, with an average of $' +
    mark.average)
}
*/



/*
// functions
function calcAverage(year) {
    console.log(2021 - year)
}

calcAverage(2000)


// retirement(2000)
var retirement = function(year) {
    console.log(65 - (2016 - year ));
}


// variables

console.log(age)
var age = 21;

function foo() {
    console.log(age)
    var age = 65;
    console.log(age);
}

foo();
console.log(age)
*/

// console.log(this)

/*
function calcAge(year) {
    console.log(2021 - year)
    console.log(this)
}
calcAge(2000)
*/

/*
var chebe = {
    name: 'conicy',
    yearOfBirth: 2000,
    calculateAge: function() {
       console.log(this)
       console.log(2021 - this.yearOfBirth)


       
    //    function innerfunction() {
    //        console.log(this)
    //    }
    //    innerfunction();
       
    }

   
};
chebe.calculateAge();
*/


/*
var mike = {
    name: 'mike',
    yearOfBirth: 1984
};

mike.calculateAge = chebe.calculateAge;
mike.calculateAge();
*/


/***
 *  function constructor
***************/

/*
var john = {
    name: 'john',
    yearOfBirth: 2000,
    job: 'coder'
};


var Person = function(name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
   
}


Person.prototype.calculateAge = function() {
    console.log(2021 - this.yearOfBirth);
}

Person.prototype.lastName = 'conicy';

var john = new Person('john', 2000, 'coder');
var jane = new Person('jane', 1996, 'teacher');
var baby = new Person('baby', 1976, 'designer')



john.calculateAge()
jane.calculateAge()
john.calculateAge()



console.log(john.lastName);
console.log(jane.lastName);
console.log(baby.lastName);
*/

// object.create
/*
var personProto = {
    calculateAge: function() {
         console.log(2021 - this.yearOfBiryh)
    }
}
 
var john = Object.create(personProto);
john.name = 'john';
john.yearOfBirth = 2000;
john.job = 'reacher';


var jane = Object.create(personProto,
{
    name: { value: 'jane' },
    yearOfBirth: { value: 1965 },
    job: { value: 'designer' }
});
*/

// primitives vs objects
/*
var a = 23;
var b = a;
a = 63;
console.log(a)
console.log(b)

// object
var obj1 = {
    name: 'chebe',
    age:  21
};

var obj2 = obj1;
obj1.age = 30;
obj1.name = 'pingo4'
console.log(obj1.age);
console.log(obj1.name);
console.log(obj2.age);


// functions
var age = 21;
var obj = {
    name: 'chebe',
    city: 'owerri'
};

function change(a,b) {
    a.name = 30;
    b.city = 'owerri town'
};

change(age,obj);

console.log(age)
*/

/////////////////////
// lecture: passing functions as arguments

var years = [1990, 1965, 1937, 2005, 1998];

function arrayCalc(arr, fn) {
    var arraRes = [];
    for (var i = 0; i < arr.length; i++) {
        arraRes.push(fn(arr[i]));
    }
    return arraRes;
}


function calculateAge(el) {
    return 2021 - el;
}

function maxHeartRate(el) {
    return el >= 18;
}


var ages = arrayCalc(years, calculateAge);
var rates = arrayCalc(ages, maxHeartRate);


console.log(ages)
console.log(rates)
















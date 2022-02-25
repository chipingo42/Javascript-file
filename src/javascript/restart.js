/**
 * variables and data types
*/

/*
var firstName = 'chebe';
console.log(firstName)

var lastName = 'conicy';
var age = 21;
console.log(lastName + ' is ' + age + ' years old')

var job;
console.log(job)

var job = 'driver';
console.log(job)
*/

/*************
 Varable multation and type coorection
******************/
/*
var firstName = 'conicy';
var age = 21;
console.log(firstName + ' ' + age)



var job, isMarried;
job = 'teacher';
isMarried = false;
console.log(firstName + ' is a ' + age + ' year old ' + job +'. is he married? ' + isMarried )

// Variable mutation
age = 'twenty one';
job = 'coder';

alert(firstName + ' is a ' + age + ' year old ' + job +'. is he married? ' + isMarried )

var lasName = prompt('wht is his last name?')
console.log(firstName + ' ' + lasName)
*/

/**
 * Basic operators
*/

// math operators
/*
var year, yearConicy, yearRemond;
now = 2021;
ageChebe = 21;
ageRemond = 32;


yearConicy = now - 21;
yearRemond = now - 24;
console.log(yearConicy)

console.log(now + 2)
console.log(now * 2)
console.log(now / 10)

// Logical operators
var chebeOlder = ageChebe < ageRemond;
console.log(chebeOlder)


// typeof operators
console.log(typeof chebeOlder)
console.log(typeof ageChebe)
console.log(typeof 'chebe is older than remond')
var x;
console.log(typeof x)
*/

/***
 * operator precedence
***/

/*
var now = 2018;
var yearConicy = 1989;
var fullAge = 18;

//  multiple operators
var isfullAge = now - yearConicy >= fullAge;
console.log(isfullAge)

// Grouping
var ageChebe = now - yearConicy;
var ageRemond = 35;
var average = (ageChebe + ageRemond) / 2;
console.log(average)

 Multiple assignments
var x, y;
x = y = (3 + 5) * 4 - 6;
console.log(x, y) 
*/


/***
 * chanllenge 1
***/

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

/*
var markMass = 78; // kg
var markHeight = 1.78; // meters

var johnMass = 87; // kg
var johnHeight = 1.95; //meters

var BMImark = markMass / (markHeight * markHeight);
var BMIjohn = johnMass / (johnHeight * johnHeight);
console.log(BMImark, BMIjohn)

var markHigherBMI = BMImark > BMIjohn;
console.log('is mark\'s BMI higher than john\'s? ' + markHigherBMI)
*/

/*********
 * else statement
********/

/*
var firstName = 'chebe';
var civilsatus = 'singel';

if (civilsatus === 'married') {
    console.log(firstName + ' is married'); 
}  else {
    console.log(firstName + ' will hopelly marry soon')
}


var isMarried = true;
if (isMarried) {
    console.log(firstName + ' is married'); 
}  else {
    console.log(firstName + ' will hopelly marry soon')
}


var markMass = 78; // kg
var markHeight = 1.78; // meters

var johnMass = 92; // kg
var johnHeight = 1.95; //meters

var BMImark = markMass / (markHeight * markHeight);
var BMIjohn = johnMass / (johnHeight * johnHeight);

if (BMImark > BMIjohn) {
    console.log('mark\'s BMI higher than john\'s.')
}  else {
    console.log('john\'s BMI higher than mark\'s.')
}
*/

/*****
 * Boolean logic
******/

/*
var firstName = 'victor';
var age = 20;

if (age < 13) {
    console.log(firstName + ' is a boy');
} else if  (age >= 13 && age < 20) {
    console.log(firstName + ' is a teenager');
} else if (age >= 20 && age < 30) {
    console.log(firstName + ' is a young man');
} else {
    console.log(firstName + ' is a man');
}
*/

/*******************
 *  the ternary operator and swicth statement
**************** */

/*
//ternary operator
var firstName = 'chebe';
var age = 14;

age >= 18 ? console.log(firstName + ' drinks beer.'): 
console.log(firstName + ' drinks juice')


var drink = age >= 18 ? 'beer' : 'juice';
console.log(drink )


// swicth statement
var job = 'teacher';
switch (job) {
    case 'teacher':
        console.log(firstName + ' teaches how to code')
        break;
    case 'driver':
        console.log(firstName + ' drives to ghana')
        break;
    case 'designer':
        console.log(firstName + ' designes our beatiful website')
        break;    
    default:
        console.log(firstName + ' does something else')    
            
}

age = 30;
switch (true) {
    case age < 13:
        console.log(firstName + ' is a boy');
        break;
    case age >= 13 && age < 20:
        console.log(firstName + ' is a teenager');
        break;
    case age >= 20 && age < 30:
        console.log(firstName + ' is a young man');
        break;
    default:
        console.log(firstName + ' is a man');   

}
*/

/************
 * Trupthy and Falsy values and equality operator
***************/

// falsy values: understand, null, 0, '', NaN







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
/*
var scoreJohn = (189 + 120 + 103 ) / 3;
var scoreMike = (129 + 94 + 123) / 3;
var scoreMary = (97 + 134 + 105) / 3;
console.log(scoreJohn, scoreMike, scoreMary);


if (scoreJohn > scoreMike && scoreJohn > scoreMary) {
    console.log('john\'s team wins with ' + scoreJohn +' points')
}  else if (scoreMike > scoreJohn && scoreMike > scoreMary) {
    console.log('mike\'s team wins with ' + scoreMike +' points') 
}  else if (scoreMary > scoreJohn && scoreMary > scoreMike ) {
    console.log('mary\'s team wins with ' + scoreMary +' points')
}  else {
    console.log('There is a drew')
}
*/


/*
if (scoreJohn > scoreMike) {
    console.log('john\'s team wins with ' + scoreMike +' points');
} else if (scoreMike > scoreJohn) {
    console.log('mike\'s team wins with ' + scoreJohn +' points');
} else {
    console.log('There is a drew');

}
*/



/*************
 * Functions
**************/

/*
function calculateAge(birthdate) {
    return 2021 - birthdate;
}


var ageChebe = calculateAge(2000);
var ageRemond = calculateAge(1948);
var ageJane = calculateAge(1969);
console.log(ageChebe, ageRemond, ageJane);




function yearuntilRetirement(year, firstName) {
    var age = calculateAge(year);
    var retirement = 65 - age;
    console.log(firstName + ' retires in ' + retirement + ' years.')
}


yearuntilRetirement(1990, 'chebe')
yearuntilRetirement(1948, 'conicy')
yearuntilRetirement(1969, 'jane')
*/


/************
 * function statement and Expressions
*****************/

// function decleration
// function whatDoYouDo(job, firstName)

/*
// function expressions
var whatDoYouDo = function(job, firstName) {
    switch(job) {
        case 'teacher':
            return (firstName + ' teaches me how to code');
        case 'driver':
            return (firstName + ' drives to owerri everyday');
        case 'designer':
            return (firstName + ' designs our beautiful website ');
        default:
            return (firstName + ' does something else')            
    }
}

console.log(whatDoYouDo('teacher', 'chebe'));
console.log(whatDoYouDo('designer', 'conicy'));
console.log(whatDoYouDo('driver', 'conicy'));
console.log(whatDoYouDo('retired', 'chebe'));
*/


/***********
 * Arrays 
*************/

/*
// initialize new data
var names = ['chebe', 'conicy', 'victor'];
var years = new Array(1990, 1969, 1948);

console.log(names[2])
console.log(names.length)

// Mutate array data
names[1] = 'ping4';
names[names.length] = 'mike';
console.log(names)

// Different data types
var chebe = ['john', 'smith', 1990, 'teacher', 'designer',
false];

chebe.push('blue')
chebe.pop()
chebe.pop()
chebe.shift()
console.log(chebe)


console.log(chebe.indexOf(1990));

var isDesigner = chebe.indexOf('designer') === -1 ? 'chebe is NoT a designer' :
' chebe is a designer';
*/





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



/**************** 
 *  solution 3
******************/

/*
function tipCalculator(bill) {
    var percentage;
    if (bill < 50) {
        percentage = .2;
    } else if (bill >= 50 && bill < 200) {
        percentage = .15;
    } else {
        percentage = .1;
    }
    return percentage * bill;
}

console.log(tipCalculator(30))

var bill = [124, 48, 269];
var tips = [tipCalculator(bill[0]),
            tipCalculator(bill[1]),
            tipCalculator(bill[2])];

finalValues = [bill[0] + tips[0],
               bill[1] + tips[1],
               bill[2] + tips[2]]; 

console.log(tips, finalValues);            
*/


/**************
 * objects and properties
******************/

/*
// object literl
var john = {
    firstName: 'remond',
    lastName: 'conicy',
    birthYear: 2000,
    family: ['jane', 'kingsely', 'victor'],
    job: 'coder',
    isMarried: false

};

console.log(john)
console.log(john.firstName)
console.log(john['isMarried'])
var x = 'birthYear';
console.log(john[x])

john.job = 'designer';
john.lastName = 'chebe';
john['isMarried'] = true;
console.log(john)

//  new object syntax
var jane = new Object();
jane.firstName = 'jane';
jane.birthYear = 1998;
jane['lastName'] = 'smith';
console.log(jane)
*/

/**************
 *  object and methods
********** */

/*
var john = {
    firstName: 'remond',
    lastName: 'conicy',
    birthYear: 2000,
    family: ['jane', 'kingsely', 'victor'],
    job: 'coder',
    isMarried: false,
    calcAge: function() {
        this.age = 2021 - this.birthYear;
    }
};

john.calcAge()
console.log(john)
*/

/****************
*  coding chanllenge 4
******************/


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

//


/*
var john = {
    fullName: 'chebe conicy',
    mass: 192, //kg
    height: 1.95, //meters
    calcBMI: function() {
       this.bmi = this.mass / (this.height * this.height) 
         return this.bmi;
        
    }

}

var mark = {
    fullName: 'mark victor',
    mass: 78, //kg
    height: 1.69, //meters
    calcBMI: function() {
       this.bmi = this.mass / (this.height * this.height) 
        return this.bmi;
        
    }
}


if (john.calcBMI() > mark.calcBMI()) {
    console.log(john.fullName + ' has a higher BMI of ' +
    mark.bmi);
} else if (mark.bmi > john.bmi) {
    console.log(mark.fullName + ' has a higher BMI of ' +
    john.bmi);
} else {
    console.log('hey has same BMI')
}
*/

/*************
*  Loops and iteration
****************/

/*
//  for loops
for (var i = 0; i < 10; i++) {
    console.log(i)
}

// counts until 20
for (var i = 1; i <= 20; i += 2) {
    console.log(i)
}

// i = 0, 0 < 10 true, log i to the console, i++
// i = 1, 1 < 10 true, log i to the console, i++
//....
// i = 9, 9 < 10 true, log i to the console, i++
// i = 10, 10 < 10 false, log i to the console, i++

var chebe = ['john', 'smith', 1990, 'teacher', 'designer',
false, 'blue'];
for (var i = 1; i < chebe.length; i++) {
    console.log(chebe[i]);
}


// while loops
var i = 0;
while(i < chebe.length) {
    console.log(chebe[i]);
    i++;
}


// continue and break statements
var chebe = ['john', 'smith', 1990, 'teacher', 'designer',
false, 'blue'];
for (var i = 0; i < chebe.length; i++) {
    if (typeof chebe[i] !== 'string') continue;
    console.log(chebe[i]);
}

var chebe = ['john', 'smith', 1990, 'designer',
false, 'blue'];
for (var i = 0; i < chebe.length; i++) {
    if (typeof chebe[i] !== 'string') break;
    console.log(chebe[i]);
}

// looping backwards
var chebe = ['john', 'smith', 1990, 'designer',
false, 'blue'];
for (var i = chebe.length - 1; i >= 0; i--) {
    console.log(chebe[i]);
}
*/

/************
* chanllenge 5
*************/
/*
var john = {
    fullName: 'chebe conicy',
    bills: [124, 48, 268, 42],
    calcTips: function() {
       this.tips = [];
       this.finaValues = [];   
       
       
       for (var i = 0; i < this.bills.length; i++) {
           var percentage;
           var bill = this.bills[i];

           if (bill < 50) {
               percentage = .2;
           } else if (bill >= 50 && bill < 200) {
               percentage = .15;
           } else {
               percentage = .1;
           }
           this.tips[i] = bill * percentage;
           this.finaValues[i] = bill + bill * percentage;
       }
    }
    
}


var mark = {
    fullName: 'mark conicy',
    bills: [77, 475, 45],
    calcTips: function() {
       this.tips = [];
       this.finaValues = [];   
       
       
       for (var i = 0; i < this.bills.length; i++) {
           var percentage;
           var bill = this.bills[i];

           if (bill < 100) {
               percentage = .2;
           } else if (bill >= 100 && bill < 300) {
               percentage = .1;
           } else {
               percentage = .25;
           }
           this.tips[i] = bill * percentage;
           this.finaValues[i] = bill + bill * percentage;
       }
    }
    
}



function calcverage(tips) {
    var sum = 0;
    for(var i = 0; i < tips.length; i++) {
        sum = sum + tips[i];
    }
    return sum / tips.length;
}

john.calcTips();
mark.calcTips();

john.average = calcverage(john.tips);
mark.average = calcverage(mark.tips);
console.log(john, mark)

if (john.average > mark.average) {
    console.log(john.fullName + '\'s family pays higher tips, with an average of $' + john.average);
} else if (mark.average > john.average) {
    console.log(mark.fullName + '\'s family pays higher tips, with an average of $' + mark.average);

}
*/































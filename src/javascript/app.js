
/************************
 *  Arrays
 *********************** */


 //initialize new array
//  var names = ['chebe', 'remond', 'conicy']
// //  var year = new Array(1990, 1969, 1948);

//  console.log(names[2]);
//  console.log(names.length);

//  // Mutate array data
//  names[1] = 'pingo'
//  names[5] = 'pinto'
// console.log(names)



//  differnt data types
// var chebe = ['victor', 'remond', 1990, 'designer', false];

// chebe.push('blue')
// chebe.unshift('mr.')
// console.log(chebe)

// chebe.pop();
// chebe.pop();
// chebe.shift(chebe)
// console.log(chebe)

// console.log(chebe.indexOf(23));

// var isDesigner = chebe.indexOf('designer') === -1 ? 'chebe is not a designer' :
// 'chebe is a designer'
// console.log(isDesigner)


// function tipcalculator(bile) {
//     var percentage;
//     if (bile < 50) {
//         percentage = .2;
//     } else if (bile >= 50 && bile < 200) {
//         percentage = .15;
//     } else {
//          percentage = .1;
//     }
//     return percentage * bile;

// }

// var bile = [124, 48, 268];
// var tips = [tipcalculator(bile[0]), 
//            tipcalculator(bile[1]),
//            tipcalculator(bile[2])];
      
//   var finalcheck = [bile[0] + tips[0],
//                     bile]         

// console.log(tips)




/************************
 * function statemrnt and Expresstion
 * ************************** */

 //function declaration
 //  var whatDoyouDo = function(job, firstName) {}


 // function expresstion
//  var whatDoyouDo = function(job, firstName) {
//      switch(job) {
//          case 'teacher':
//              return firstName + ' teches kids how to code '
//          case 'driver':
//              return firstName + ' drives a cab in imo state '
//          case  'designer':
//              return firstName + ' designs beautiful website '
//          default:
//              return firstName + ' does something else '
//      }
//  }


//  console.log(whatDoyouDo('teacher', 'victor'))
//  console.log(whatDoyouDo('driver', 'chebe'))
//  console.log(whatDoyouDo('designer', 'remond'))














/*********************
 * functions
 ********************** */

// function calculateage (birthyear) {
//       return 2021 - birthyear;
//   }

// var victor = calculateage(1986);
// var remond = calculateage(1948);
// var conicy = calculateage(1976);
// console.log( victor, remond, conicy);


// function yearuntilRetirement(year, firstName) {
//     var age = calculateage(year);
//     var retirement = 65 - age;

//     if (retirement > 0) {
//         console.log(firstName + ' retires in ' + retirement + ' yaer. ')        
//     } else {
//         console.log(firstName + ' is already been retired. ')
//     }
    
// }

// yearuntilRetirement(1986, 'victor')
// yearuntilRetirement(1948, 'remond')
// yearuntilRetirement(1976, 'conicy')



// var scorechebe = (189 + 120 + 103) / 3;
// var scoreremond = (129 + 94 + 123) / 3;
// var scoremary = (97 + 134 + 105) / 3;
// console.log(scorechebe, scoreremond, scoremary);

// if (scorechebe > scoreremond) {
//     console.log('chebe\'s team wins with ' + scorechebe + ' points ');
// } else if (scoreremond > scorechebe) {
//     console.log('remond\'s team wins with ' + scoreremond + ' points ')
// } else {
//     console.log('there is a drew')
// }





   
    

// var firstName = 'chebe';
//      age = 14;

//  age >=  18 ? console.log(firstName + ' drink beer.')   
// : console.log(firstName + ' drinks juice. ')

// var drink = age >= 18 ? 'beer' : 'juice'
// console.log(drink);

// // if (age >= 18) {
// //     var drink = 'beer';
// // }  else {
// //     var drink = 'juice'
// // }



// var job = 'teacher'
// switch (job) {
//     case 'remond':
//         console.log(firstName + ' is learning javascript at the first time in his life ')
//         break;
//     case 'teacher':
//         console.log(firstName + ' teaches kids how to code. ');
//         break;
//     case 'driver':
//         console.log(firstName + ' drives an uber in imo state. ');
//         break;
//     case 'designer':
//         console.log(firstName + ' desins beautiful website. ');  
//         break;
//     default:
//         console.log(firstName + ' does something else. ');    
        
// }

// age = 22;
// switch (true) {
//     case age < 13:
//         console.log(firstName + ' is a boy ');
//         break;
//     case age >= 13 && age < 20:
//         console.log(firstName + ' is a teenager ');
//         break;
//     case  age >= 20 && age < 30:
//         console.log(firstName + ' is a young man ');
//         break;
//     default:
//         console.log(firstName + ' is a man ')         
// }






// if (age < 13) {
//     console.log(firstName + ' is a boy ')
// } else if (age >= 13 && age < 20) {
//     console.log(firstName + ' is a teenager ')
// } else if (age >= 20 && age < 30) {
//     console.log(firstName + ' is a young man ')
// } else {
//     console.log(firstName + ' is a man ')
// }













// var firstName = 'remond';
//  var age = 20;



// if (age < 13) {
//     console.log(firstName + ' is a boy ')
// } else if (age >= 13 && age < 20) {
//     console.log(firstName + ' is a teenager ')
// } else if (age >= 20 && age < 30) {
//     console.log(firstName + ' is a young man ')
// } else {
//     console.log(firstName + ' is a man ')
// }














// var chebechi = 78; // kg
// var conicyremond = 1.69; // meters

// var chebemark = 92;
// var chebehight = 1.95;

// var victorBMI = chebechi / (conicyremond * conicyremond);
// var conicyBMI = chebemark / (chebehight * chebehight);

// console.log(victorBMI, conicyBMI);

// var chebehigherBMI = victorBMI > conicyBMI;

// console.log('if conicy\'s BMI higher than victor\'s?' + chebehigherBMI);



// var firstName = 'chebe';
// var civilstatus = 'single'

// if (civilstatus === 'married') {
//     console.log(firstName + ' is married')
// } else {
//     console.log(firstName + ' we will marry soon :)')
// }


// var ammarried = true;

// if (ammarried) {
//     console.log(firstName + ' is married')
// } else {
//     // console.log(firstName + ' we will marry soon :)')
// }


// var chebechi = 78; // kg
// var conicyremond = 1.69; // meters

// var chebemark = 92;
// var chebehight = 1.95;

// var victorBMI = chebechi / (conicyremond * conicyremond);
// var conicyBMI = chebemark / (chebehight * chebehight);

// if (victorBMI > conicyBMI) {
//      console.log('victor\' BMI is higher than conicy\'')
// } else {
//     console.log('conicy\' BMI is higher than victor\'')
// }





















// var chebe = 2018 - 28


// console.log(chebe)






// multiple assignment
// var x, y;
// x = y = (3 + 4) * 4 - 6; // 8 * 4 - 6 //32 - 6 // 26

// console.log(x, y)



//  more operators
// x *= 2;
// console.log(x)
// x += 10;

// console.log(x)

// x--;
// console.log(x)
















// // scope
// var a = 'a';
// let b = 'b';
// const c = 'c'

// // function scope
// function function_scope() {
//     var a = 'A';
//     let b = 'B';
//     const c = 'C'  
//     console.log('function_scope:' + a,b,c);
// }
// function_scope();

// if(true) {
//     let a = 'AA';
//     let b = 'BB';
//     const c = 'CC';
//     console.log('Block_scope:' + a,b,c);
// }


// for(var a = 0; a < 10; a++)
//          console.log(a)



// console.log('gloobla:' + a,b,c);

// let urlLocation = window.location;


// console.log(urlLocation.host)
// console.log(urlLocation.hostname)
// console.log(urlLocation.port)
// console.log(urlLocation.search)

// console.log(urlLocation)







// let height, width;

// height = window.outerHeight;
// width= window.outerWidth;


// if(width >1000) {
//     document.body.style.backgroundColor = 'red';
// } else if (width > 500) {
//     document.body.style.backgroundColor = 'blue';
// } else {
//     document.body.style.backgroundColor = 'green';
// }


// height = window.innerHeight;
// width= window.innerWidth;

// console.log(height);
// console.log(width);




// if(confirm('Are you Sure')) {
//     console.log('Deleted.....')
// } else {
//     console.log('Nothing Happens')
// }




// function getchebe() {
//     console.log('downloading....')
// }

// setTimeout(function() {
//     console.log('complete......')
// }, 400)

// getchebe();





// let mycar = {
//     modek: 'camero',
//     engine: 6.0,
//     year:  1960,
//     make: 'chevy'
// }

// for(let key in mycar) {
//     console.log(`${key} : ${mycar[key]}`);
// }
















// const chebe = ['Homework', 'Food', 'project', 'Learn js'];

// for(let i =0; i < chebe.length; i++) {
//     console.log(chebe[i])
// }


// chebe.forEach(function(assigment, index) {
//      console.log(`${index} : ${assigment}`)
// })


// const shope = [
//     {id: 1, product: 'Book'},
//     {id: 2, product: 'shirt'},
//     {id: 3, product: 'album'}
// ];

// const productname = shope.map(function(productname) {
//     return productname.product;
// });

// console.log(productname);




// let i = 0;

// do {
//     console.log(`number: ${i}`)
//     i++
// } while(i < 10)








































// let i = 0;

// while(i < 10) {
//     console.log(`number: ${i}`)
//     i++
// }

// const shope = ['product 1', 'product 2', 'product 3'];

// let i = 0;

// while(i < shope.length) {
//     console.log(`product: ${shope[i]}`)
//     i++
// }




// const musicplayer = {
//     play: function(id) {
//         console.log(`playing song with the ID: $(id)`);
//     },
//     pause: function() {
//         console.log('pause')
//     }
// }


// musicplayer.play(30)

// musicplayer.pause();

// musicplayer.remove = function(id) {
//     console.log(`playing song with the ID: $(id)`)

// }

// musicplayer.remove(20)


// console.log('chebe')
// alert()



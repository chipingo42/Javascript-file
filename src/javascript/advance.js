/*
// Concatenating
let band = 'metallica';
    song = 'Enter Sandman';
;

let songPlaying;

songPlaying = 'songPlaying: ' + song + ' by ' + band;
// songPlaying += 'songPlaying: ' + song + ' by' + band;

console.log(songPlaying)


// Another Concatenating
let learning;

learning = 'modern' ;

learning  += ' Javascript';
learning += ' at udemy';
learning += ' at home learning'

console.log(learning)
*/



/*************Strings Method  ******************* */

let learning = 'learning Javascript is great!'
const email = 'james@gmail.com';

let output;

// Length
output = learning.length;

// concating
output = learning.concat(' and real', ' and also fun')
// uppercase words
output = learning.toUpperCase();
// lowercase words  
output = learning.toLowerCase();
// IndexOf
output = learning.indexOf('Javascript');
output = learning.indexOf('PHP');
// check if @ exist on the form

output= email.indexOf('@');
// Substrings
output = learning.substring(0, 10)
output = learning.substring(4, 10)
// Substrings from the end 
output = learning.substring( learning.length - 5)
// slice
output = learning.slice(0, 10)
output = learning.slice(-6)
// split
output = learning.split(' ')
// Example of split
const hobbies = 'read, walk, listen to music, write, learn to program'
output = hobbies.split(', ')
// Replace
output = learning.replace('Javascript', 'Modern Javascript')
// include
output = learning.includes('Javascript')
output = learning.includes('PHP')
// Repeat

let great = "hello "
output = great.repeat(8)

if(output > 0) {
    console.log('Valid email')
} else {
    console.log('Invalid email')
}



console.log(output)

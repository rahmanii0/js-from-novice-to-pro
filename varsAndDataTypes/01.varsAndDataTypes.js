/* 
    JavaScript intro 
    Variables, newKeyWords & Data Types
*/

// How To log some data to Console Window
console.log('hell FROM CONSOLE ');

// variable and constants 

// use let keyWord
let age = 10;
let year = 2020;
console.log(age,year);

// overRide age variable 
age = 30; 
console.log(age) // age is 30 now


//Use const keyWord 
const points = 100 ;
console.log(points); // The output is 100

// Try to overRide Points constant 
// OverRidden cann't be done with a Constant 
// points = 200;
// console.log(points) // Uncaught TypeError: Assignment to constant variable.
/* 


// Data Types in Javascript 
Number => 1,2,3,177
String => 'hello world' , "Abdelrahamn Mohamed"
Boolean => true / false
Null => Explicitly set a variable with no value
Undefined => For variables that have not been defined
Object => Complex data structures - arrays,Dates,Literals etc
Symbol => Used with objects
*/


// Strings
console.log('hello world');

let email = 'el_rahmanii@outlook.com';
console.log(email); // el_rahmanii@outlook.com


// string concatenation
let firstName = 'Abdelrahman';
let lastName = 'Mohamed';
let fullName = firstName + ' ' + lastName;
console.log(fullName);

// getting characters
console.log(fullName[0]);  // output is A

//string lenght
console.log(fullName.length); //19

//string methods
console.log(fullName.toUpperCase()); //ABDELRAHMAN MOHAMED
console.log(email.indexOf('@')); // 11
console.log(fullName.lastIndexOf('n')); // give us the position of last 'n' in the full name
console.log(fullName.slice(0,11)); // gine us the part from 0 to 11 .SO it returns Abdelrahman 
console.log(fullName.substr(0,11)) // this one is like slice(), ut the second argument represent the how many chars we want to cutoff
console.log(fullName.replace('A','a')) // Abdelrahman



// Numbers
let raduis = 10;
const pi = 3.14;

// math operators + - * / ** %
// order of operation - B I D M A S 
let result = pi * raduis**2
console.log(result)

let likes = 10 ; 
likes = likes + 1; //11
//short hand vesrion 
likes++; //11 , itis adding one 
likes += 10 ; // 20  here we add 10 to number of likes wich is 10 so it's 20
likes -= 5 ; // 15 
likes /= 2 ; // 20

console.log(5/'hello'); // NaN means not a number 
console.log('the blog has' + likes + 'likes'); // the blog has 10 likes 

// template strings
const title = 'Intro to JavaScript';
const author = 'Abdelrahman';
const views = 30;

// concatenation way 
let output = 'the blog called ' + title + ' by ' + author + ' has '  + views + ' views'; 
console.log(output); //the blog called Intro to JavaScript by Abdelrahman has 30 views

// template string way 
let out = `the blog called ${title} by ${author} has ${views} views`;
console.log(out); //the blog called Intro to JavaScript by Abdelrahman has 30 views

// creating html templates
 let html = `
 <h2>${title}</h2>
 <p>${author}</p>
 <span> this blog has ${views} views </span>
 `;
 console.log(html);

 // The End for now ! :)

 







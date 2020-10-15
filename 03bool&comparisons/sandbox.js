// booleans & comparisons
console.log(true,false);

//return boleans using methods
let email = 'el_rahmanii@outlook.com';
console.log(email.includes('@')); // here we check if email has @ sympol and it returns true beacuse it contains @

let friends = ['abdelrahman','hameed','amr','ragab'];
console.log(friends.includes('mahmoud')); // it will return false because mahmoud is not exsits in friens array

// comparison operators
let age = 25;
console.log(age == 25); //here we asked if varible age is equal to 25 and it return true 
console.log(age == 30); //here we asked if varible age is equal to 30 and it return false because it's equal to 25
console.log(age != 30); //here we asked if varible age is not equal to 30 and it return true because it's not equal 30
console.log(age > 20); //here we check if age is greater than 20 and it's true
console.log(age < 20); //here we check if age is less than 20 and it's false 
console.log(age <= 25); // here we check if age is less than or equal 25 and it return true cause it's equal to 25
console.log(age >= 30);  // here we check if age is greater than or equal to 30 and it's false beacuse age is 25


//check strings
let name = 'rahmanii';
console.log(name == 'rahmanii'); // here we check if the name is rahmanii and it returns true
console.log(name == 'Rhamanii'); // hrere this Rhamnanii starts with upperletter so it's not equal to rahmanii so th return false

//loose comparison 
console.log(age == 25); // as we said above it's true
console.log(age == '25'); //it's also true cause of that js takes this '25' string and make it number like age varible type and we called this loose comparison

//strict comparison
console.log(age === 25); // here it retruns true 
console.log(age === '25'); //here it will return false because we compare here the value and type and this called strict comparison 
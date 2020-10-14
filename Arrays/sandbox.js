// Arrays form
let friends = ['abdelrahman','hameed','amr','ragab'];

// to get hameed from the array 
console.log(friends[1]); //hameed , here i asked to get the index number 1 from the friends array

//arrays's methods in javaScript
console.log(friends.length); // i asked to get the lenght of friends array it's 4
console.log(friends.join(',')); // here we eill put , after each name in the array like this abdelrahman,hameed,amr,ragab
console.log(friends.indexOf('ragab')); // here we get out the number of index that relate to ragab it's 3
console.log(friends.concat(['mansy','raef'])); // we add these two new name to our friends array it's now ["abdelrahman", "hameed", "amr", "ragab", "mansy", "raef"]
let friend = friends.push('dahy');//here we push another member to our original array ["abdelrahman", "hameed", "amr", "ragab", "dahy"]
console.log(friends.pop());// here pop method will remove the last name in our array wich is dahy it is always removing the last index in array

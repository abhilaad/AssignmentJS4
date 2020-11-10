// 5. Write a JavaScript program to remove duplicate items from an array
// (ignore case sensitivity).

const distinct = function getUnique(array){
    var uniqueArray = [];
    
    // Loop through array values
    for(var value of array){
        if(uniqueArray.indexOf(value) === -1){
            uniqueArray.push(value);
        }
    }
    return uniqueArray;
}

var names = ["Aman", "Raj", "Joe", "Rohit", "Raj", "Ramesh"];
var uniqueNames = distinct(names);
console.log(uniqueNames);


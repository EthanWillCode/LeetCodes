//constraints as understood
//any num in array is a num between 0 & 9
//array will not be empty, but may have a zero value in it

let test1 = [1,2,3];
let test2 = [4,3,2,1];
let test3 = [9];
let test4 = [0];
let test5 = [9,9,9,9,9,9];


var plusOne = function(digits) {
    let newArr = digits.reverse();
    console.log(newArr);
    // for(let i = 0; i<newArr.length; i++){

    // }
    return newArr;
};

console.log(plusOne(test1));
console.log(plusOne(test2));
console.log(plusOne(test3));
console.log(plusOne(test4));
console.log(plusOne(test5));
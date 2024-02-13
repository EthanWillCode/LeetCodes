//constraints as understood
//any num in array is a num between 0 & 9
//array will not be empty, but may have a zero value in it

let test1 = [1,2,3];
let test2 = [4,3,2,1];
let test3 = [9];
let test4 = [0];



var plusOne = function(digits) {
    if(digits[digits.length -1] !=9){
        digits[digits.length -1] +=1;
    } else {
        digits[digits.length -1] = 0;
        digits[digits.length -2]  
    }
};
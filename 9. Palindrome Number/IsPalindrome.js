let test1 = 121;
let test2 = -121;
let test3 = 10;




var isPalindrome = function(x) {
    let hold = x.toString();
    hold = hold.split("").reverse().join("");
    if(x=== Number(hold)){
        return true;
    } else {
        return false;
    }
};

console.log(isPalindrome(test1));
console.log(isPalindrome(test2));
console.log(isPalindrome(test3));
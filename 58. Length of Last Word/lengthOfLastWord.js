
let s1 = "Hello World";
let s2 = "   fly me   to   the moon  ";
let s3 = "luffy is still joyboy";
let s4 = 'a';



var lengthOfLastWord = function(s) {
    let newS = s.trimEnd();
//    console.log(newS)
    let counter = 0
    let i = newS.length-1
    while(newS[i]!=' ' && i > -1){
        counter++
        i--
    }
    return counter;
};

console.log(lengthOfLastWord(s1));
console.log(lengthOfLastWord(s2));
console.log(lengthOfLastWord(s3));
console.log(lengthOfLastWord(s4));
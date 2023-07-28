const map1 = new Map();
map1.set("I", 1);
map1.set("V", 5);
map1.set("X", 10);
map1.set("L", 50);
map1.set("C", 100);
map1.set("D", 500);
map1.set("M", 1000);


let test1 = 3;
let test2 = 58;
let test3 = 1994;

var intToRoman = function(num) {
    let i = num;
    let output = [];
    while(i > 0){
        if(i >= 1000){
            output.push('M')
            i -= 1000
        }else if(i>=900){
            output.push('CM')
            i -= 900
        }else if(i>=500){
            output.push('D')
            i -= 500
        }else if(i>=400){
            output.push('CD')
            i -= 400
        }else if(i>=100){
            output.push('C')
            i -= 100
        }else if(i>=90){
            output.push('XC')
            i -= 90
        }else if(i>=50){
            output.push('L')
            i -= 50
        }else if(i>=40){
            output.push('XL')
            i -= 40
        }else if(i>=10){
            output.push('X')
            i -= 10
        }else if(i>=9){
            output.push('IX')
            i -= 9
        }else if(i>=5){
            output.push('V')
            i -= 5
        }else if(i>=4){
            output.push('IV')
            i -= 4
        }else{
            output.push('I')
            i -= 1
        }
    }
    return output.join("");
};


// test1 should yield "III";
// test2 should yield "LVIII";
// test3 should yield "MCMXCIV";

console.log(intToRoman(test1));
console.log(intToRoman(test2));
console.log(intToRoman(test3));
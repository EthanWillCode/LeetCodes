let test1 = "III";
let test2 = "LVIII";
let test3 = "MCMXCIV";

var romanToInt = function(s) {
    let arr = s.split("");
    let output = 0;
    const map1 = new Map();
    map1.set("I", 1);
    map1.set("V", 5);
    map1.set("X", 10);
    map1.set("L", 50);
    map1.set("C", 100);
    map1.set("D", 500);
    map1.set("M", 1000);
    for(let i =0; i<arr.length;i++){
        let value = map1.get(arr[i])
        let nextValue = map1.get(arr[i+1])
        if(nextValue === null || nextValue === undefined){
            output += value;
        }else if(value >= nextValue){
            output += value;
        }else{
            output -= value;
        }
    }
    return output;
};
//should give 3
//currently -3
console.log(romanToInt(test1));
//should give 58
//currently 52
console.log(romanToInt(test2));
//should give 1994
//currently 1984
console.log(romanToInt(test3));
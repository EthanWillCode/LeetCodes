let test1 = [1,2,3,4,5,6,6,6,6,6,6];
let test2 = [0,1,2,2];
let test3 = [-1,-1,0,5,6]

var removeDuplicates = function(nums) {
    let newArr = [];
    for(i=0;i<nums.length;i++){
        if(!newArr.includes(nums[i])){
            newArr.push(nums[i])
        }
    }
    return newArr;
};

console.log(removeDuplicates(test1));
console.log(removeDuplicates(test2));
console.log(removeDuplicates(test3));
//console.log(removeDuplicates(test4));
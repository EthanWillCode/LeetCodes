let nums1 = [2,7,11,15];
let nums2 = [3,2,4];
let nums3 = [3,3];

let target1 = 9;
let target2 = 6;
let target3 = 6;


var twoSum = function(nums, target) {
    for(let i =0; i<nums.length;i++){
        for(let j =1; j<nums.length; j++){
            if(i != j && nums[i] + nums[j] === target){
                return [i,j];
            }
        }
    }
};

console.log(twoSum(nums1,target1));
console.log(twoSum(nums2,target2));
console.log(twoSum(nums3,target3));
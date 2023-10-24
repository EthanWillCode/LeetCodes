let s1 = "abcabcbb";
let s2 = "bbbbb";
let s3 = "pwwkew";
let s4 = "abcdefgabc"

var lengthOfLongestSubstring = function(s) {
    let lengthOfLongestSubstringSoFar = 0;

    for(i=0;i<s.length;i++){
        let counter = 1;
        let j = i+1;
        let hold =[s[i]]
        while(s[i]!=s[j] && j< s.length ){
            hold.push(s[j])
            counter++;
            j++
            if(hold.includes(s[j])){
            
                break;
            }
        }
        if(counter > lengthOfLongestSubstringSoFar){
            lengthOfLongestSubstringSoFar = counter;
        }

        if(lengthOfLongestSubstring > (s.length -i)) {
            break;
        }
    }
    return lengthOfLongestSubstringSoFar;
};


console.log(lengthOfLongestSubstring(s1));
console.log(lengthOfLongestSubstring(s2));
console.log(lengthOfLongestSubstring(s3));
console.log(lengthOfLongestSubstring(s4));
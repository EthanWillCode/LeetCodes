
// Definition for singly-linked list.
function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

var node1C = new ListNode(3);
var node1B = new ListNode(4, node1C);
var node1A = new ListNode(2, node1B);

var node2C = new ListNode(4);
var node2B = new ListNode(6, node2C);
var node2A = new ListNode(5, node2B);


console.log(node1A)

var addTwoNumbers = function(l1, l2) {
    let holdArr = [0];
        for(let i=0; l1.next != undefined && l2.next !=undefined; i++){
                let newVal = l1.val + l2.val + holdArr[i]
                if(newVal < 10) {
                    holdArr[i] = newVal;
                    console.log(newVal)
                } else {
                    holdArr[i] = newVal-10;
                    holdArr[i +1] = 1;
                } 
                l1 = l1.next;
                l2 = l2.next;
        }
        console.log(holdArr)
        for(let i = 0; i< holdArr.length)
    };
    

console.log(addTwoNumbers(node1A, node2A));
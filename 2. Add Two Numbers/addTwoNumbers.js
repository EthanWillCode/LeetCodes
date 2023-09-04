
// Definition for singly-linked list.
  function ListNode(val, next) {
      this.val = (val===undefined ? 0 : val)
      this.next = (next===undefined ? null : next)
 }
 

var node1A = ListNode(2, node1B);
var node1B = ListNode(4, node1C);
var node1C = ListNode(3);

var node2A = ListNode(5, node2B);
var node2B = ListNode(6, node2C);
var node2C = ListNode(4);

var addTwoNumbers = function(l1, l2) {
    let arr1 = [];
    let arr2 = [];
    
    const extract = (node, arr) => {
        
    }
    extract(l1, arr1)
    extract(l2, arr2)
    return arr1
};

console.log(addTwoNumbers(node1A, node2A));
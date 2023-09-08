
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
    let arr1 = [];
    let arr2 = [];
    let newArr = [];

    function extract(node, arr){

        while(node.next != null){
            arr.push(node.val);
            node = node.next
        }
        arr.push(node.val);
    }

    extract(l1,arr1);
    extract(l2,arr2);

    

    //re-node-ify
    newArr.reverse();
    



};

console.log(addTwoNumbers(node1A, node2A));
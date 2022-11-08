// Javascript Code
// Time Complexity: O(N)
// Auxiliary Space: O(1)

var head;

class Node {
  constructor(val) {
    this.data = val;
    this.next = null;
  }
}

/* Function to reverse the linked list */
function reverse(node) {
  var prev = null;
  var current = node;
  var next = null;
  while (current != null) {
    next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }
  node = prev;
  return node;
}

// prints content of double linked list
function printList(node) {
  while (node != null) {
    console.log(node.data + " ");
    node = node.next;
  }
}

// Driver Code

head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(5);

console.log("Given linked list: ");
printList(head);
head = reverse(head);
console.log(" ");
console.log("Reversed linked list: ");
printList(head);

// Output:
// Given linked list:
// 1
// 2
// 3
// 4
// 5

// Reversed linked list:
// 5
// 4
// 3
// 2
// 1

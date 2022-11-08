// Javascript Code
// Time complexity: O(N)
// Space complexity: O(1)

// Head of list
var head;

// Linked list Node
class Node {
  constructor(val) {
    this.data = val;
    this.next = null;
  }
}

// Function to delete the nth node from the end of the given linked list
function deleteNode(key) {
  // First pointer will point to the head of the linked list
  var first = head;

  // Second pointer will point to the Nth node from the beginning
  var second = head;
  for (i = 0; i < key; i++) {
    // If count of nodes in the given linked list is <= N
    if (second.next == null) {
      // If count = N i.e. delete the head node
      if (i == key - 1) head = head.next;
      return;
    }
    second = second.next;
  }

  // Increment both the pointers by one until second pointer reaches the end
  while (second.next != null) {
    first = first.next;
    second = second.next;
  }

  // First must be pointing to the Nth node from the end by now
  // So, delete the node first is pointing to
  first.next = first.next.next;
}

// Function to insert a new Node at front of the list
function push(new_data) {
  var new_node = new Node(new_data);
  new_node.next = head;
  head = new_node;
}

// Function to print the linked list
function printList() {
  var tnode = head;
  while (tnode != null) {
    console.log(tnode.data + " ");
    tnode = tnode.next;
  }
}

// Driver code

push(7);
push(1);
push(3);
push(2);

console.log("Created Linked list is: ");
printList();
console.log(" ");

var N = 1;
deleteNode(N);

console.log("Linked List after Deletion is: ");
printList();

// Output:
/* Created Linked list is: 
2 
3 
1 
7 
 
Linked List after Deletion is: 
2 
3 
1  */

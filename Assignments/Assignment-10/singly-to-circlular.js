// Javascript Code
// Time Complexity: O(N)
// Space Complexity: O(1)

/* Linked list node */
class Node {
  constructor(val) {
    this.data = val;
    this.next = null;
  }
}

// Function that convert singly linked list into circular linked list.
function circular(head) {
  // declare a node variable start and assign head node into start node.
  start = head;

  // check that while head.next not equal to null then head points to next node.
  while (head.next != null) head = head.next;

  // if head.next points to null then start assign to the head.next node.
  head.next = start;
  return start;
}

function push(head, data) {
  // Allocate dynamic memory for newNode.
  newNode = new Node();

  // Assign the data into newNode.
  newNode.data = data;

  // newNode.next assign the address of head node.
  newNode.next = head;

  // newNode become the headNode.
  head = newNode;

  return head;
}

// Function that display the elements of circular linked list.
function displayList(node) {
  start = node;

  while (node.next != start) {
    console.log(" " + node.data);
    node = node.next;
  }

  // Display the last node of
  // circular linked list.
  console.log(" " + node.data);
}

// Driver Code

// Start with empty list
head = null;

// Using push() function to convert singly linked list 17.22.13.14.15
head = push(head, 15);
head = push(head, 14);
head = push(head, 13);
head = push(head, 22);
head = push(head, 17);

// Call the circular_list function that convert singly linked list to circular linked list.
circular(head);

console.log("Display list: ");
displayList(head);

/* Output: Display list: 
        17
        22
        13
        14
        15 */

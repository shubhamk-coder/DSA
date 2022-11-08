// Javascript Code
// Time complexity: O(N)
// Space complexity: O(1)
class Node {
  constructor(key) {
    this.key = key;
    this.next = null;
  }
}

// A utility function to print a linked list
function printList(head) {
  while (head != null) {
    console.log(head.key + " ");
    head = head.next;
  }
  console.log("<br>");
}

// Function to detect first node of loop
// in a linked list that may contain loop
function detectLoop(head) {
  // Create a temporary node
  let temp = new Node();
  while (head != null) {
    // This condition is for the case
    // when there is no loop
    if (head.next == null) {
      return false;
    }

    // Check if next is already
    // pointing to temp
    if (head.next == temp) {
      return true;
    }

    // Store the pointer to the next node
    // in order to get to it in the next step
    let next = head.next;

    // Make next point to temp
    head.next = temp;

    // Get to the next node in the list
    head = next;
  }

  return false;
}

// Driver code
let head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(5);

// Create a loop for testing(5 is pointing to 3) /
head.next.next.next.next.next = head.next.next;

let found = detectLoop(head);
if (found) console.log("Loop Found");
else console.log("No Loop");

// Output: Loop Found

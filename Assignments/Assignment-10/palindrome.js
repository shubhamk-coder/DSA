// Javascript Code
// Time Complexity: O(N)
// Auxiliary Space: O(1)

// Head of list
var head;
var slow_ptr, fast_ptr, second_half;

// Linked list Node
class Node {
  constructor(val) {
    this.data = val;
    this.next = null;
  }
}

// Function to check if given linked list is palindrome or not
function isPalindrome(head) {
  slow_ptr = head;
  fast_ptr = head;
  var prev_of_slow_ptr = head;

  // To handle odd size list
  var midnode = null;

  // Initialize result
  var res = true;

  if (head != null && head.next != null) {
    // Get the middle of the list. Move slow_ptr by 1 and fast_ptr by 2, slow_ptr will have the middle node
    while (fast_ptr != null && fast_ptr.next != null) {
      fast_ptr = fast_ptr.next.next;

      // We need previous of the slow_ptr for linked lists with odd elements
      prev_of_slow_ptr = slow_ptr;
      slow_ptr = slow_ptr.next;
    }

    // fast_ptr would become NULL when there are even elements in the list and not NULL for
    // odd elements. We need to skip the middle node for odd case and store it somewhere
    // so that we can restore the original list
    if (fast_ptr != null) {
      midnode = slow_ptr;
      slow_ptr = slow_ptr.next;
    }

    // Now reverse the second half and ompare it with first half
    second_half = slow_ptr;

    // NULL terminate first half
    prev_of_slow_ptr.next = null;

    // Reverse the second half
    reverse();

    // compare
    res = compareLists(head, second_half);

    // Construct the original list back Reverse the second half again
    reverse();

    if (midnode != null) {
      // If there was a mid node (odd size case) which was not part of either first half
      // or second half.
      prev_of_slow_ptr.next = midnode;
      midnode.next = second_half;
    } else prev_of_slow_ptr.next = second_half;
  }
  return res;
}

// Function to reverse the linked list. Note that this function may change the head
function reverse() {
  var prev = null;
  var current = second_half;
  var next;
  while (current != null) {
    next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }
  second_half = prev;
}

// Function to check if two input lists have same data
function compareLists(head1, head2) {
  var temp1 = head1;
  var temp2 = head2;

  while (temp1 != null && temp2 != null) {
    if (temp1.data == temp2.data) {
      temp1 = temp1.next;
      temp2 = temp2.next;
    } else return false;
  }

  // Both are empty return 1
  if (temp1 == null && temp2 == null) return true;

  // Will reach here when one is NULL and other is not
  return false;
}

// Push a node to the linked list. Note that this function changes the head
function push(new_data) {
  // Allocate the Node & Put in the data
  var new_node = new Node(new_data);

  // link the old list off the new one
  new_node.next = head;

  // Move the head to point to new Node
  head = new_node;
}

// A utility function to point a given linked list
function printList(ptr) {
  while (ptr != null) {
    console.log(ptr.data + "->");
    ptr = ptr.next;
  }
  console.log("NULL ");
}

// Driver code
// Start with the empty list
var str = [1, 2, 3, 2, 1];
// var str = ["a", "b", "a", "c", "a", "b", "a"];
var string = str.toString();

for (i = 0; i < str.length; i++) {
  push(str[i]);
}
printList(head);
if (isPalindrome(head) != false) {
  console.log("Is Palindrome");
  console.log(" ");
} else {
  console.log("Not Palindrome");
  console.log(" ");
}

// Output :
/* 1->
2->
3->
2->
1->
NULL 
Is Palindrome */

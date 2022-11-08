// Javascript Code
/* Time Complexity: 
Push operation : O(1). Same as pop operation in stack.
Pop operation : O(N). The difference from above method is that in this method 
element is returned and all elements are restored back in a single call.
Space Complexity: O(N). Use of stack for storing values. */

class Queue {
  constructor() {
    this.s1 = [];
    this.s2 = [];
  }

  // Enqueue an item to the queue
  enQueue(x) {
    // Push item into the first stack
    this.s1.push(x);
  }

  // Dequeue an item from the queue
  deQueue() {
    // if both stacks are empty
    if (this.s1.length == 0 && this.s2.length == 0) {
      console.log("Q is empty");
      exit(0);
    }

    // if s2 is empty, move
    // elements from s1
    if (this.s2.length == 0) {
      while (this.s1.length != 0) {
        this.s2.push(this.s1[0]);
        this.s1.shift();
      }
    }

    // return the top item from s2
    let x = this.s2[0];
    this.s2.shift();
    return x;
  }
}

// Driver code
let q = new Queue();
q.enQueue(1);
q.enQueue(2);
q.enQueue(3);

console.log(q.deQueue());
console.log(q.deQueue());
console.log(q.deQueue());

// Output:
/* 
1
2
3
 */

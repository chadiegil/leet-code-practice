// definition of the list node
function ListNode(val) {
  this.val = val;
  this.next = null;
}

// the input values
const values = [3, 2, 0, -4];

// creation of the list
let head = null;
let tail = null;

for (let i = 0; i < values.length; i++) {
  const newNode = new ListNode(values[i]);

  if (!head) head = newNode;

  if (tail) tail.next = newNode;

  tail = newNode;
}

console.log(head);

var hasCycle = function (head) {
  let fast = head;
  let slow = head;

  while (fast && fast.next) {
    fast = fast.next.next;
    slow = slow.next;

    if (fast === slow) return true;
  }
  return false;
};

console.log(hasCycle(head));

/**
 * Problem link -> https://leetcode.com/problems/merge-two-sorted-lists/
 * */

const { LinkedList } = require("../singlyLinkedList");

// Class to create a demo node
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

// Actual function to do the operation
function merge(head1, head2) {
  let ptr1 = head1;
  let ptr2 = head2;

  const dummyNode = new Node(-1);
  let current = dummyNode;

  while (ptr1 && ptr2) {
    if (ptr1.data > ptr2.data) {
      current.next = ptr2;
      ptr2 = ptr2.next;
      current = current.next;
    } else {
      current.next = ptr1;
      ptr1 = ptr1.next;
      current = current.next;
    }
  }

  if (ptr1) {
    current.next = ptr1;
  }

  if (ptr2) {
    current.next = ptr2;
  }

  return dummyNode.next;
}

const ll1 = new LinkedList();
const ll2 = new LinkedList();

ll1.insertLast(1);
ll1.insertLast(2);

ll2.insertLast(1);
ll2.insertLast(3);
ll2.insertLast(4);

const resultll = new LinkedList();
resultll.head = merge(ll1.head, ll2.head);
resultll.printListData();

class Node {
  constructor(data) {
    this.data = data;
    this.previous = null;
    this.next = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  //   Function to insert an element at the beginning of the linked list
  //   insertFirst(data){
  //     const
  //   }

  // Function to insert an element at last
  push(data) {
    let node = new Node(data);

    if (this.tail) {
      this.tail.next = node;
      node.previous = this.tail;
      return (this.tail = node);
    }

    this.head = this.tail = node;
  }

  //   Function to print all the values of the linked list
  printElements() {
    let element = this.head;
    while (element.next) {
      console.log(element.data);
      element = element.next;
    }
    console.log(element.data);
  }

  //   Function to print the elements in reverse fashion
  printReverse() {
    let element = this.tail;
    // console.log(element);
    while (element.previous) {
      console.log(element.data);
      element = element.previous;
    }
    console.log(element.data);
  }
}

const ll = new DoublyLinkedList();
ll.push(100);
ll.push(200);
ll.push(400);
ll.push(500);
ll.push(600);

ll.printElements();
ll.printReverse();
// console.log(ll);

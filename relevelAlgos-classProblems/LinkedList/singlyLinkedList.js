// Creating a class that will be used for creating each node of the linked list
class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

// Creating a class that will be used for creating a linked list
class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  // Function to insert first node of the list
  insertFirst(data) {
    this.head = new Node(data, this.head);
    this.size++;
  }

  //   Function to insert the last node of a list
  insertLast(data) {
    const node = new Node(data);

    //   If the list is empty then insert the node as a first node
    if (!this.head) {
      return this.insertFirst(node);
    }

    let listElement = this.head;

    while (listElement.next) {
      listElement = listElement.next;
    }

    listElement.next = node;
    this.size++;
  }

  //   Function to insert a node at a particular index
  insertAt(data, index) {
    const node = new Node(data);

    if (index > this.size) {
      return console.log("provided index doesn't exist");
    }

    if (index === 0) {
      return this.insertFirst(data);
    }

    let currentListElement = this.head;
    let previousListElement;

    for (let i = 0; i < index; i++) {
      previousListElement = currentListElement;
      currentListElement = currentListElement.next;
    }

    node.next = currentListElement;

    previousListElement.next = node;

    this.size++;
  }

  //   Function to print the data of the whole list
  printListData() {
    let listElement = this.head;
    while (listElement) {
      console.log(listElement.data, this.size);
      listElement = listElement.next;
    }
  }
}

const ll = new LinkedList();

const node1 = 100;
const node2 = 200;
const node3 = 400;
const node4 = 50;

ll.insertFirst(node1);
ll.insertFirst(node2);
ll.insertLast(node3);
ll.insertAt(node4, 2);

ll.printListData();

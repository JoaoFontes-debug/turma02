//lista simplesmente encadeada

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class linkedList {
  //construtor da lista
  constructor() {
    this.head = null;
    this.size = 0;
  }
  //metodo para adicionar nó a lista
  add(data) {
    let newNode = new Node(data);

    if (this.head === null) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next !== null) {
        current = current.next;
      }

      current.next = newNode;
    }

    this.size++;
  }

  insertAt(data, index) {
    if (index < 0 || index > this.size) {
      return console.log("index fora dos limites!");
    }

    let newNode = new Node(data);
    let current = this.head;
    let previous;

    if (index === 0) {
      newNode.next = this.head;
      this.head = newNode;
    } else {
      for (let i = 0; i < index; i++) {
        previous = current;
        current = current.next;
      }

      newNode.next = current;
      previous.next = newNode;
    }
  }

  removeFrom() {
    if (index < 0 || index > this.size) {
      return console.log("index fora dos limites!");
    }

    let current = this.head;
    let previous;

    if (index === 0) {
      this.head = current.next;
    } else {
      for (let i = 0; i < index; i++) {
        previous = current;
        current = current.next;
      }

      previous.nest = current.next;
    }

    this.size = this.size - 1;
    return current.data;
  }

  indexOf(data) {
    let current = this.head;
    let index = 0;

    while (current !== null) {
      if (current.data === data) {
        return index;
      }
      index++;
      current = current.next;
    }

    return -1;
  }

  isEmpty() {
    return this.size === 0;
  }

  //metodo para imprimir lista
  printList() {
    let current = this.head;
    while (current !== null) {
      console.log(current.data);
      current = current.next;
    }
  }
}

let list = new linkedList();

list.add("formaçao +praTi");
list.add(29);
list.add("hey YOU");
list.add(30);
list.printList();
list.insertAt("elemento no meio", 2);
list.printList();
console.log(list.isEmpty());
console.log(list.indexOf("elemento no meio"));

const node = (value = null, next = null) => {
  const newNode = {
    value,
    next,
  };
  return newNode;
};

const linkedList = () => {
  let head = null;

  const tail = () => {
    let currentNode = head;
    while (currentNode.next !== null) {
      currentNode = currentNode.next;
    }
    return currentNode;
  };

  const size = () => {
    let counter = 0;
    let currentNode = head;
    while (currentNode.next !== null) {
      counter += 1;
      currentNode = currentNode.next;
    }
    return counter;
  };

  const addFirst = (value) => {
    head = node(value);
  };

  const append = (value) => {
    if (head === null) addFirst(value);
    else {
      tail().next = node(value);
    }
  };

  const prepend = (value) => {
    if (head === null) addFirst(value);
    else {
      const oldHead = head;
      head = node(value);
      head.next = oldHead;
    }
  };

  return {
    get head() {
      return head;
    },
    get tail() {
      return tail();
    },
    get size() {
      return size();
    },
    append,
    prepend,
  };
};

const myLinkedList = linkedList();
myLinkedList.prepend(420);
myLinkedList.append(100);
myLinkedList.append(150);
myLinkedList.prepend(69);
console.log(myLinkedList.head);
console.log(myLinkedList.head.next);
console.log(`Size: ${myLinkedList.size}`);
console.log(myLinkedList.tail);

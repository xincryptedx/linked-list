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

  const at = (index) => {
    if (!Number.isInteger(index) || index < 0) return undefined;
    let currentNode = head;
    let currentIndex = 0;
    while (currentIndex < index) {
      currentIndex += 1;
      currentNode = currentNode.next;
      if (currentNode === null) return undefined;
    }
    return currentNode;
  };

  const pop = () => {
    let currentNode = head;
    let previousNode = null;
    while (currentNode.next) {
      previousNode = currentNode;
      currentNode = currentNode.next;
    }
    if (currentNode === head) head = null;
    else if (currentNode && previousNode) {
      previousNode.next = null;
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
    at,
    pop,
  };
};

const myLinkedList = linkedList();
myLinkedList.prepend(420);
myLinkedList.append(100);
myLinkedList.append(150);
myLinkedList.prepend(69);
console.log(myLinkedList.tail);
myLinkedList.pop();
console.log(myLinkedList.tail);

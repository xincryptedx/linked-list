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
    while (currentNode && currentNode.next !== null) {
      currentNode = currentNode.next;
    }
    return currentNode;
  };

  const size = () => {
    let counter = 1;
    let currentNode = head;
    if (!currentNode) return 0;
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
    while (currentNode && currentNode.next) {
      previousNode = currentNode;
      currentNode = currentNode.next;
    }
    if (currentNode === head) head = null;
    else if (currentNode && previousNode) {
      previousNode.next = null;
    }
  };

  const contains = (value) => {
    let currentNode = head;
    while (currentNode) {
      if (currentNode.value === value) return true;
      currentNode = currentNode.next;
    }
    return false;
  };

  const find = (value) => {
    let currentNode = head;
    let currentIndex = 0;
    while (currentNode) {
      if (currentNode.value === value) return currentIndex;
      currentIndex += 1;
      currentNode = currentNode.next;
    }
    return null;
  };

  const toString = () => {
    let returnString = "";
    let currentNode = head;
    while (currentNode) {
      returnString += `( ${currentNode.value} ) -> `;
      currentNode = currentNode.next;
    }
    returnString += "null";
    return returnString;
  };

  const insertAt = (value, index) => {
    let currentIndex = 0;
    let currentNode = head;
    let previousNode = null;
    if (!currentNode) {
      prepend(value);
      return;
    }
    while (currentNode) {
      if (currentIndex === index && !previousNode) {
        prepend(value);
        return;
      }
      if (currentIndex === index && previousNode) {
        previousNode.next = node(value, currentNode);
        return;
      }
      previousNode = currentNode;
      currentNode = currentNode.next;
      currentIndex += 1;
    }
    throw new Error("Index not found. Cannot add value to list.");
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
    contains,
    find,
    toString,
    insertAt,
  };
};

window.linkedList = linkedList();

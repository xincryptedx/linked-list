const node = (value = null, next = null) => {
  const newNode = {
    value,
    next,
  };
  return newNode;
};

const linkedList = () => {
  let head = null;

  const addFirst = (value) => {
    head = node(value);
  };

  const append = (value) => {
    if (head === null) addFirst(value);
    else {
      let currentNode = head;
      while (currentNode.next != null) {
        currentNode = currentNode.next;
      }
      currentNode.next = node(value);
    }
  };

  return {
    get head() {
      return head;
    },
    append,
  };
};

const myLinkedList = linkedList();
myLinkedList.append(100);
myLinkedList.append(150);
console.log(myLinkedList.head);
console.log(myLinkedList.head.next);

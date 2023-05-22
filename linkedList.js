const node = (value = null, next = null) => {
  const newNode = {
    value,
    next,
  };
  return newNode;
};

const linkedList = () => {
  const list = { head: null };

  const addFirst = (value) => {
    list.head = node(value);
  };

  const append = (value) => {
    if (list.head === null) addFirst(value);
    else {
      let currentNode = list.head;
      while (currentNode.next != null) {
        currentNode = currentNode.next;
      }
      if (currentNode.next === null) {
        currentNode.next = node(value);
      }
    }
  };

  return { list, append };
};

const myLinkedList = linkedList();
myLinkedList.append(100);
console.log(myLinkedList.head);

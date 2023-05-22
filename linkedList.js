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
    // Check for head
    // Set head to the current node
    // While current node next isn't null set current node to next node
    // When current node next IS null, insert the new node with provided value
  };

  return { list };
};

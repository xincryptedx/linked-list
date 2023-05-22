const node = (value = null, next = null) => {
  const newNode = {
    value,
    next,
  };
  return newNode;
};

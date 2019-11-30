export const applyDrag = (arr, dragResult) => {
  // const { removedIndex, addedIndex, payload, element } = dropResult;
  const { removedIndex, addedIndex, payload } = dragResult
  if (removedIndex === null && addedIndex === null) return arr
  // console.log('removedIndex: ',removedIndex, 'addedIndex: ',addedIndex, 'payload: ',payload);
  
  const result = [...arr];
  // result[addedIndex] = payload;

  let itemToAdd = payload
  if (removedIndex !== null) {
    itemToAdd = result.splice(removedIndex, 1)[0];
  }

  if (addedIndex !== null) {
    result.splice(addedIndex, 0, itemToAdd);
  }

  return result
};

export const generateItems = (count, creator) => {
  const result = []
  for (let i = 0; i < count; i++) {
    result.push(creator(i))
  }
  return result
};

export const emptyTable = () => {
  const result = [];
  for (let i = 0; i < 7; i++) {
    result.push([{id: i, title: `Something ${i}`}, {id: i+1, title: `Something ${i}`}, {id: i+2, title: `Something ${i}`}] )
  }
  return result;
};
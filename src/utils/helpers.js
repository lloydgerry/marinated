export const applyDrag = (arr, dragResult) => {
  const { removedIndex, addedIndex, payload } = dragResult;
  if (removedIndex === null && addedIndex === null) return arr;
  console.log('removedIndex: ',removedIndex, 'addedIndex: ',addedIndex, 'payload: ',payload);
  // console.log(dragResult);
  // console.log(payload.title);
  const result = arr;
  console.log(payload.props);
  
  if (payload.props.onTable === false) {
    console.log(payload.props.recipe.title);
    result[addedIndex].title = payload.props.recipe.title;
    result[addedIndex].props.recipe = payload.props.recipe;
    // result[addedIndex].props.onTable = true;
  } else {
    let itemToAdd = payload
    if (removedIndex !== null) {
      itemToAdd = result.splice(removedIndex, 1)[0];
    }

    if (addedIndex !== null) {
      result.splice(addedIndex, 0, itemToAdd);
    }
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

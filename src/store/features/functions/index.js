const getArrayIndexByObjectId = (array, objectId) => {
  let arrayIndex;

  array.forEach((item, index) => {
    if (item.id === objectId) arrayIndex = index;
  })

  return arrayIndex;
}

export {
  getArrayIndexByObjectId
}
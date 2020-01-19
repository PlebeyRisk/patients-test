export const getObjectByAttr = (arr, attrName, attrValue) => {
  let foundValues = arr.filter((obj) => obj[attrName] === attrValue);
  if (foundValues.length === 0) {
    return null;
  }
  return foundValues[0];
};
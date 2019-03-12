// Write your solution in this file!
let driver = { }

function updateDriverWithKeyAndValue(obj, key, value) {
  return {...obj, [key]: value };
}

function destructivelyUpdateDriverWithKeyAndValue(obj, key, value) {
  obj[key] = value;
  return obj;
}

function deleteFromDriverByKey(obj, key) {
  const newObj = {...obj};
  console.log(delete newObj[key]);
  return newObj;
}

function destructivelyDeleteFromDriverByKey(obj, key) {
  console.log(delete obj[key]);
  return obj;
}
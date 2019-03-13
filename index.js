// Write your solution in this file!
 const driver = {}; //create an object
//
function updateDriverWithKeyAndValue(driver, key, value){
  return Object.assign({}, driver, {[key]: value});//update the driver with Object.assign() without changing the drive's data.
}


//
// function destructivelyUpdateDriverWithKeyAndValue(driver, key, value){
//   driver[key] = valuel;
//   return driver
// }
//
// function deleteFromDriverByKey(driver, key) {
//   const newDriver = Object.assign({}, driver);
//
//   delete newDriver[key];
//   return newDriver
// }
//
// function destructivelyDeleteFromDriverByKey(driverObj, key){
//   delete driver[key];
//   return driver
// }





function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
  driver[key] = value;

  return driver;
}

function deleteFromDriverByKey(driver, key) {
  const newObj = Object.assign({}, driver);

  delete newObj[key];

  return newObj;
}

function destructivelyDeleteFromDriverByKey(driver, key) {
  delete driver[key];

  return driver;
}

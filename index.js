const driver = {key: "value1"};

let updateDriverWithKeyAndValue = (object, key, value) => {
   return Object.assign({}, object, {[key]:value});
};

let destructivelyUpdateDriverWithKeyAndValue = (object, key, value) => {
   object[key] = value
   return object
};

let deleteFromDriverByKey = (object, key) => {
   let objectCopy = {...object}
   delete objectCopy[key]
   return objectCopy
};

let destructivelyDeleteFromDriverByKey = (object, key) => {
   delete object[key]
   return object
};
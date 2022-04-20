exports.extractObjectKeys = (arr, filter) => {
  if (typeof arr[0] !== "object") {
    return console.log("The array must be an array of objects");
  }

  const arrayLength = arr.length;
  const result = [];

  return arr.map((el) => {
    return filter(el);
  });
};

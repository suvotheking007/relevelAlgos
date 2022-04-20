exports.createArrayOfArrays = (length) => {
  const result = [];

  for (let i = 0; i < length; i++) {
    const arr = [];
    result.push(arr);
  }

  return result;
};

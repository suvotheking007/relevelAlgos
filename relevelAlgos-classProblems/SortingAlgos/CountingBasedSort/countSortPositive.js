/**
 * Counting sort on an array consisting of all positive elements
 * */

const { createArrayOfArrays } = require("../../utils/creators/array.creator");
const { extractObjectKeys } = require("../../utils/extractors/array.extractor");
const {
  shuffledNumbers,
  shuffledColoredNumbers,
} = require("../../payloads/array.payload");

// Sorting by counting on an array of positive numbers -------------------------------------------------
function countSort(arr, filter) {
  let elementsArray = arr;
  let result = [];

  if (typeof arr[0] === "object") {
    // If the provided array is an array of objects then extract the key as per the provided filter

    if (filter === undefined) {
      return console.log(
        "In case you provided an array of objects, you need to specify the filter on which you want the sorting to be done"
      );
    }

    elementsArray = extractObjectKeys(arr, filter);
  }

  const maxElement = Math.max(...elementsArray);
  const arrayLength = arr.length;

  /**
   * Creation of the frequency array
   * Since the created frequency array is an array of 0 based indexing and therefore the max element cannot be incorporated in this array so "maxElement" is incremented by 1
   */
  const frequencyArray = createArrayOfArrays(maxElement + 1);

  if (typeof arr[0] === "object") {
    // If the provided array is an array of objects then accumulate the objects of same filter-value in one element of the frequency array

    for (let i = 0; i < arrayLength; i++) {
      const filterValue = filter(arr[i]);
      frequencyArray[filterValue].push(arr[i]);
    }
  } else {
    //   If the provided array is a normal array then accumulate the elements of the same value in one element of the frequency array

    for (let i = 0; i < arrayLength; i++) {
      frequencyArray[arr[i]].push(arr[i]);
    }
  }

  //   Filling up the result array
  const frequencyArrayLength = frequencyArray.length;
  for (let i = 0; i < frequencyArrayLength; i++) {
    const elementLength = frequencyArray[i].length;

    if (elementLength > 0) {
      for (let j = 0; j < elementLength; j++) {
        result.push(frequencyArray[i][j]);
      }
    }
  }

  return result;
}

console.log(shuffledNumbers);
console.log(countSort(shuffledNumbers));

console.log(shuffledColoredNumbers);
console.log(countSort(shuffledColoredNumbers, (el) => el.value));

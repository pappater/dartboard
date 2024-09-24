// To find the missing numbers from the array
const array = [5, 2, 9, 1, 5, 6];
const computedArray = [];
// Sort the data
array.map((data) => {
  if (computedArray && computedArray.length) {
    computedArray.map((iData, iIndex) => {
      if (iData > data) {
        computedArray.splice(iIndex, 0, data);
      } else {
        computedArray.push(data);
      }
    });
  } else {
    computedArray.push(data);
  }
});
// Remove duplicate if any
const removedDuplicateData = [];
for (let i = 0; i <= computedArray.length - 1; i++) {
  let index = removedDuplicateData.indexOf(computedArray[i]);
  if (index === -1) {
    removedDuplicateData.push(computedArray[i]);
  } else {
  }
}
// Find Min and Max
const min = removedDuplicateData[0];
const max = removedDuplicateData[removedDuplicateData.length - 1];

const missingValue = [];
const sequence = [];
for (let i = min; i <= max; i++) {
  sequence.push(i);
  let index = removedDuplicateData.indexOf(i);
  if (index === -1 && index !== 0) {
    missingValue.push(i);
  }
}

console.log("missingValue", missingValue);
console.log("sequence", sequence);

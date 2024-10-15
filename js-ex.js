// 1. Write a function that takes an array of numbers, filters out the odd numbers, squares the even numbers, and returns the result.
const processArray = (arr) => {
  if (!Array.isArray(arr)) {
    throw "Not an array or some of its element is not a number";
  }
  const evenNumbers = arr.filter((num) => num % 2 === 0);
  const squareNumbers = evenNumbers.map((num) => num * 2);
  return squareNumbers;
};

processArray([12, 4]);

// 2. Write a function that takes an object of people with their ages and returns an array of names of people who are 18 or older.
const people = {
  Alice: 25,
  Bob: 16,
  Charlie: 18,
};

const filterAdults = (people) => {
  const entries = Object.entries(people);
  const adults = entries.filter(([name, age]) => age >= 18);
  const adultsName = adults.map(([name]) => name);
  return adultsName;
};
filterAdults(people);

// 3. Write a function that takes an array of transactions (objects with amount and type) and returns the total amount for each transaction type (income, expense).
const transactions = [
  { type: "income", amount: 100 },
  { type: "expense", amount: 50 },
  { type: "income", amount: 200 },
];

const transactionTotal = (transactions) => {
  if (!Array.isArray(transactions)) {
    throw "Not an array of transaction";
  }
  const totals = transactions.reduce((acc, transaction) => {
    const { type, amount } = transaction;
    acc[type] = (acc[type] || 0) + amount;
    return acc;
  }, {});
  console.log(totals);
};

transactionTotal(transactions);

// 4. Write a function to deeply copy a nested object without using JSON.parse/stringify (to avoid issues with functions, dates, etc.).
const deepCopy = (obj) => {
  if (obj !== "object" || obj === null) {
    return obj;
  }
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      copy[key] = deepCopy(obj[key]);
    }
  }
};
const original = { a: 1, b: { c: 2 } };
const copy = deepCopy(original);

console.log(copy);

const flattenArray = (arr) => {
  return arr.reduce((acc, value) => {
    return Array.isArray(value)
      ? acc.concat(flattenArray(value))
      : acc.concat(value);
  }, []);
};
console.log(flattenArray([1, [2, [3, [4, 5]]]])); // Output: [1, 2, 3, 4, 5]

// 5.Given an array of objects, write a function to group these objects by a specified property.

const data = [
  { name: "Alice", city: "New York" },
  { name: "Bob", city: "London" },
  { name: "Charlie", city: "New York" },
];
const groupBy = (obj, property) => {
  return obj.reduce((acc, value) => {
    const key = value[property];
    if (!acc[key]) {
      acc[key] = [];
    }
    acc[key].push(value);
    return acc;
  }, {});
};
console.log(groupBy(data, "city"));
// Output: { 'New York': [{...}, {...}], 'London': [{...}] }

// 6.Write a function to find all duplicates in an array.

const findDuplicates = (arr) => {
  const uniqueArr = [];
  arr.forEach((num) => {
    if (!uniqueArr.includes(num)) {
      uniqueArr.push(num);
    }
  });
  return uniqueArr;
};
console.log(findDuplicates([1, 2, 3, 4, 1, 2, 5, 5, 5])); // Output: [1, 2]

// 7.Write a function that splits an array into sub-arrays (chunks) of a given size.
const chunkArray = (arr, size) => {
  const output = [];
  for (let i = 0; i < arr.length; i += size) {
    output.push(arr.slice(i, i + size));
  }
  return output;
};

console.log(chunkArray([1, 2, 3, 4, 5, 6], 3)); // Output: [[1, 2], [3, 4], [5, 6]]

// 8.Write a function that returns the intersection of two arrays (i.e., elements that appear in both arrays).
const intersectArrays = (arr1, arr2) => {
  return arr2.reduce((acc, value) => {
    if (arr1.includes(value)) acc.push(value);
    return acc;
  }, []);
};

console.log(intersectArrays([1, 2, 3], [2, 3, 4])); // Output: [2, 3]

// 9. Write a function that takes an array of words and returns the longest word.
const findLongestWord = (words) => {
  return words.reduce(
    (longest, word) => (longest.length > word.length ? longest : word),
    ""
  );
};
console.log(findLongestWord(["apple", "banana", "watermelon", "peach"]));
// Output: 'watermelon'

// 9.Write a function that splits an array into two sub-arrays based on a given condition.
const partition = (arr, callback) => {
  return arr.reduce(
    (acc, value) => {
      callback(value) ? acc[0].push(value) : acc[1].push(value);
      return acc;
    },
    [[], []]
  );
};

console.log(partition([1, 2, 3, 4, 5], (x) => x % 2 === 0));
// Output: [[2, 4], [1, 3, 5]]

// 10.Write a function that "zips" two arrays together into a single array of pairs.
const zip = (arr1, arr2) => {
  return arr1.map((data, index) => [data, arr2[index]]);
};
console.log(zip(["a", "b", "c"], [1, 2, 3]));
// Output: [['a', 1], ['b', 2], ['c', 3]]

// 11. Write a function that removes all falsy values (false, 0, "", null, undefined, and NaN) from an array.
const removeFalsyValues = (arr) => {
  return arr.filter((item) => item);
};
console.log(removeFalsyValues([0, 1, false, 2, "", 3, "hello", NaN, null, 4]));
// Output: [1, 2, 3, 'hello', 4]

// 12. Write a function that returns an array of unique elements from two input arrays.
const uniqueElements = (arr1, arr2) => {
  const combined = [...arr1, ...arr2];
  console.log(combined);
  return [...new Set(combined)];
};
console.log(uniqueElements([1, 2, 3], [3, 4, 5]));
// Output: [1, 2, 3, 4, 5]

// 13 Write a function that finds both the minimum and maximum values in an array.
const findMinMax = (arr) => {
  return arr.reduce(
    (acc, value) => {
      acc.min = Math.min(acc.min, value);
      acc.max = Math.max(acc.max, value);
      return acc;
    },
    {
      min: arr[0],
      max: arr[0],
    }
  );
};
console.log(findMinMax([3, 1, 4, 1, 5, 9]));
// Output: { min: 1, max: 9 }

// 14.Write a function that flattens a 2D array (array of arrays) into a single array.

const flatten2DArray = (arr) => {
  return arr.reduce((acc, value) => {
    return acc.concat(value);
  }, []);
};
console.log(
  flatten2DArray([
    [1, 2],
    [3, 4],
    [5, 6],
  ])
);
// Output: [1, 2, 3, 4, 5, 6]

// 15. Write a function that counts how many times each element appears in an array and returns an object with the counts.
const countOccurrences = (arr) => {
  return arr.reduce((acc, value) => {
    acc[value] = (acc[value] || 0) + 1;
    return acc;
  }, {});
};
console.log(
  countOccurrences(["apple", "banana", "apple", "orange", "banana", "banana"])
);
// Output: { apple: 2, banana: 3, orange: 1 }

// 16. Write a function that merges two sorted arrays into one sorted array.
const mergeSortedArrays = (arr1, arr2) => {
  const combined = [...arr1, ...arr2];
  return combined.sort();
};
console.log(mergeSortedArrays([1, 3, 5], [2, 4, 6]));
// Output: [1, 2, 3, 4, 5, 6]

// 17. Write a function that converts an array of key-value pairs into an object.
const arrayToObject = (arr) => {
  return arr.reduce((acc, [key, value]) => {
    acc[key] = value;
    return acc;
  }, {});
};
console.log(
  arrayToObject([
    ["name", "Alice"],
    ["age", 25],
    ["city", "Paris"],
  ])
);
// Output: { name: 'Alice', age: 25, city: 'Paris' }

// 18. Write a function that moves all zeroes in an array to the end while preserving the order of other elements.?
const moveZeroes = (arr) => {
  const nonZeros = arr.filter((num) => num);
  const zeros = arr.filter((num) => num === 0);
  return [...nonZeros, ...zeros];
};

console.log(moveZeroes([0, 1, 0, 3, 12])); // Output: [1, 3, 12, 0, 0]

// 19. Write a function that finds all missing numbers in an array where the numbers should be in a sequence (e.g., [1, 2, 3, 5, 6] should return [4]).
const findMissingNumbers = (arr) => {
  const missingNumbers = [];
  const max = arr.sort().slice(-1);
  for (let i = 1; i <= max; i++) {
    if (!arr.includes(i)) missingNumbers.push(i);
  }
  return missingNumbers;
};
console.log(findMissingNumbers([3, 7, 1, 8, 4, 5])); // Output: [6]

// 20. Write a function that mimics JavaScript's native filter method on arrays.

const customFilter = (arr, callback) => {
  const result = [];
  arr.forEach((num) => {
    if (callback(num)) {
      result.push(num);
    }
  });
  return result;
};
console.log(customFilter([1, 2, 3, 4], (num) => num % 2 === 0)); // Output: [2, 4]

// 21. Write a function that mimics JavaScript's native reduce method on arrays.
const customReduce = (arr, callback, init) => {
  let value = init;
  arr.forEach((num) => {
    value = callback(value, num);
  });
  return value;
};
console.log(customReduce([1, 2, 3, 4], (acc, val) => acc + val, 0)); // Output: 10

//  22. Write a function that reverses an array in place without using the built-in reverse method.
const reverseArrayInPlace = (arr) => {
  const result = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    result.push(arr[i]);
  }
  return result;
};
console.log(reverseArrayInPlace([4, 1, 2, 3, 4, 5])); // Output: [5, 4, 3, 2, 1]

// 23. Write a function that finds the k-th largest element in an unsorted array.

const findKthLargest = (arr, k) => {
  return arr.sort((a, b) => b - a)[k - 1];
};

console.log(findKthLargest([3, 2, 1, 5, 6, 4], 3)); // Output: 5

const flatten = (arr) => {
  return arr.reduce((acc, value) => {
    return Array.isArray(value)
      ? acc.concat(flatten(value))
      : acc.concat(value);
  }, []);
};

console.log(flatten([1, [2, [3, [4]], 5]]));
// Output: [1, 2, 3, 4, 5]

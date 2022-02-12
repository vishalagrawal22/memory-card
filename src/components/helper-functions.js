// [min, max]
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// [rangeStart, rangeEnd]
function getDistinctNumberArrayInRange(rangeStart, rangeEnd, arrayLength) {
  const numbers = new Set();
  let ptr = 0;
  while (ptr !== arrayLength) {
    const number = getRandomInt(rangeStart, rangeEnd);
    if (!numbers.has(number)) {
      numbers.add(number);
      ptr++;
    }
  }
  return Array.from(numbers);
}

function deepCopy(original) {
  return JSON.parse(JSON.stringify(original));
}

function swapIndex(array, index1, index2) {
  const temp = array[index1];
  array[index1] = array[index2];
  array[index2] = temp;
}

function shuffle(og_array) {
  const array = deepCopy(og_array);
  let index = array.length - 1;
  while (index !== 0) {
    let pick = getRandomInt(0, index);
    swapIndex(array, index, pick);
    index--;
  }
  return array;
}

export { getRandomInt, getDistinctNumberArrayInRange, shuffle };

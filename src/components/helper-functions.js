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

export { getRandomInt, getDistinctNumberArrayInRange };

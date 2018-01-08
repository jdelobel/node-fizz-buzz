'use strict';

/**
 * FizzBuzz module.
 * @module fizzBuzz
 */

/**
 * Get the result.
 * If the given number is a multiple of 3 result is "Fizz".</br>
 * If the given number is a multiple of 5 result is "Buzz"
 * If the given number is a multiple of 3 and 5 result is "FizzBuzz"
 * If the given number is not a multiple of 3 or 5 result is the number to string format
 * @param {number} number - The number (between 1 and 100)
 * @return {string} The result
 */
const getResult = number => {
  if (number <= 0) throw new Error('Number must be positive');
  if (number > 100) throw new Error('Number must lower than 100');
  const results = [];

  if (number % 3 === 0) results.push('Fizz');
  if (number % 5 === 0) results.push('Buzz');
  if (!results.length) results.push(number);
  return results.join('');
};

/**
 * Get the results based on the start and end numbers
 * @see getResult
 * @param {number} min - The number to start
 * @param {number} max - The number to end
 * @return {string} The results
 */
const getResults = (min, max) => {
  const output = [];
  for (var i = min; i <= max; i++) {
    output.push(getResult(i));
  }
  return output.join('');
};

module.exports = {
  getResult: getResult,
  getResults: getResults
};

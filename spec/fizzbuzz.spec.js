'use strict';

const fizzBuzz = require('../fizzBuzz');

describe('fizzBuzz', () => {
  it('fizzBuzz should throw an error because number is négative', () => {
    try {
      fizzBuzz.getResult(-1);
      expect(true).toBe(false); // should not happen
    } catch (err) {
      expect(err.message).toBe('Number must be positive');
    }
  });
  it('fizzBuzz should throw an error because number is greater than 100', () => {
    try {
      fizzBuzz.getResult(101);
      expect(true).toBe(false); // should not happen
    } catch (err) {
      expect(err.message).toBe('Number must lower than 100');
    }
  });
  it('fizzBuzz should return Fizz', () => {
    const result = fizzBuzz.getResult(3);
    expect(result).toBe('Fizz');
  });
  it('fizzBuzz should return Buzz', () => {
    const result = fizzBuzz.getResult(5);
    expect(result).toBe('Buzz');
  });
  it('fizzBuzz should return fizzBuzz', () => {
    const result = fizzBuzz.getResult(15);
    expect(result).toBe('FizzBuzz');
  });
  it('fizzBuzz should return 16', () => {
    const result = fizzBuzz.getResult(16);
    expect(result).toBe('16');
  });
  it('fizzBuzz should return the final result', () => {
    const result = fizzBuzz.getResults(1, 100);
    expect(result).toBe('12Fizz4BuzzFizz78FizzBuzz11Fizz1314FizzBuzz16\
17Fizz19BuzzFizz2223FizzBuzz26Fizz2829FizzBuzz3132Fizz34BuzzFizz37\
38FizzBuzz41Fizz4344FizzBuzz4647Fizz49BuzzFizz5253FizzBuzz56Fizz58\
59FizzBuzz6162Fizz64BuzzFizz6768FizzBuzz71Fizz7374FizzBuzz7677Fizz\
79BuzzFizz8283FizzBuzz86Fizz8889FizzBuzz9192Fizz94BuzzFizz9798FizzBuzz');
  });
});

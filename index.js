'use strict';

const fizzBuzz = require('./fizzBuzz');

if(process.argv.length != 4){
  console.log('You have to passe 2 numbers in argument');
  process.exit();
}
const results = fizzBuzz.getResults(process.argv[2],process.argv[3]);
console.log(results);

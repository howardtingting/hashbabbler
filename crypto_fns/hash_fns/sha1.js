//FOLLOWS the MD5 algorithm as derived from https://en.wikipedia.org/wiki/MD5#Algorithm
const sha1cc = require('../../build/Release/sha1cc');

const sha1fn = sha1cc();

const processInputStr = function(inputStr) {
  //Check inputStr is valid str
  //Return as valid string if not
  return inputStr;
}

const sha1 = function(inputStr) {
  //convert inputObj to str
  //if file, set up fs read, read string in chunks, concatenate, then hash
  console.log(`Calling sha1 on \'${processInputStr(inputStr)}\'`);
  return sha1fn(inputStr);
}

module.exports = sha1;

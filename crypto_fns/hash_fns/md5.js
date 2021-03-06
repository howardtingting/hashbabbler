//FOLLOWS the MD5 algorithm as derived from https://en.wikipedia.org/wiki/MD5#Algorithm
const md5cc = require('../../build/Release/md5cc');

const md5fn = md5cc();

const processInputStr = function(inputStr) {
  //Check inputStr is valid str
  //Return as valid string if not
  return inputStr;
}

const md5 = function(inputStr) {
  //convert inputObj to str
  //if file, set up fs read, read string in chunks, concatenate, then hash
  console.log(`Calling md5 on \'${processInputStr(inputStr)}\'`);
  return md5fn(inputStr);
}

module.exports = md5;

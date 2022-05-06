function reverse(word) {
  const wordArray = word.split("")
  const reversedWordArray = wordArray.reverse()
  const reversedWord = reversedWordArray.join("")
  return reversedWord
  // return word.split("").reverse().join

}


function isPalindrome(word) {

//  how do we reverse a string?
const reversedWord = reverse(word)

// check reversed word
if (word === reversedWord) {
  return true
 } else {
   return false
 }
}

/* 
  Add your pseudocode here

  check the string and return true
  else
  return false
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");

  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome

let assert = require('assert')

/*
  Given the variable 'statement' below, write a function that reverses
  the letters in each word, but leaves the words in the same order
*/

let statement = 'Penn Mutual is a company that sells life insurance'

function reverseLetters(str) {
  // PLACE YOUR CODE BELOW
  
  // Util to reverse word
  const reverseWord = (word) => { 
    let reverseWord = word.split("").reverse().join("")
    return reverseWord
  }
  
  // conver to array
  let statementArr = str.split(" ")
  
  // iterate over statement
  var reversedStatementArr = []
  statementArr.forEach(word => {
    reversedStatementArr.push(reverseWord(word))  // push reverse each word
  })
  
  // convert to string
  let reversedStatement = reversedStatementArr.join(" ")
  
  return reversedStatement

  // PLACE YOUR CODE ABOVE
}

let reversedWords = reverseLetters(statement)

assert.equal(reversedWords, 'nneP lautuM si a ynapmoc taht slles efil ecnarusni', 'Strings are not equal') || console.log('Success')

console.log(reversedWords)

/*
  Your console output should look like the following
  when run with "node 8_reverse_words.js":

Success
nneP lautuM si a ynapmoc taht slles efil ecnarusni

*/
function paintMixer(color1, color2) {
  /*
  Add code here that will take the two string params and
  return a value as to what those two colors would create when mixed:

  * blue and red should mix to return 'purple'
  * green and red should mix to return 'brown'
  * blue and yellow should mix to return 'green'
  * anything with unknown colors should return a result of 'unknown'.

  The order of the params should not matter.
  */
  // PLACE YOUR CODE BELOW

  // create arr to check includes against
  let colorArr = [color1, color2]

  // known conditions
  if (colorArr.includes("red") && colorArr.includes("blue")) {
    return "purple"
  } 
  else if (colorArr.includes("red") && colorArr.includes("blue")) {
    return "brown"
  }
  else if (colorArr.includes("blue") && colorArr.includes("yellow")) {
    return "green"
  }
  else {
    return "unknown"
  }

  // PLACE YOUR CODE ABOVE
}

paintMixer('blue', 'red') === 'purple' && console.log('First mix worked')
paintMixer('red', 'blue') === 'purple' && console.log('Second mix worked')
paintMixer('green', 'red')=== 'brown' && console.log('Third mix worked')
paintMixer('blue', 'yellow') ==='green' && console.log('Fourth mix worked')
paintMixer('apple', 'frog') ==='unknown' && console.log('Apples and frogs don\'t mix, as expected')

/*
If everything works, you should see the following on the console
when run with "node 3_logic.js":

First mix worked
Second mix worked
Third mix worked
Fourth mix worked
Apples and frogs don't mix, as expected
*/
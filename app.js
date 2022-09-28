const calculator = {
  sum: function (numA, numB) {
    console.log(numA + numB);
  },

  minus: function(numA, numB) {
    console.log(numA - numB);
  },

  multiple: function(numA, numB) {
    console.log(numA * numB);
  },

  divide: function(numA, numB) {
    console.log(numA / numB)
  },

  powerOf: function(numA, numB) {
    console.log(numA ** numB)
  }
}

calculator.sum(24, 89);
calculator.minus(43, 13);
calculator.multiple(13, 25);
calculator.divide(46,77);
calculator.powerOf(3, 5);
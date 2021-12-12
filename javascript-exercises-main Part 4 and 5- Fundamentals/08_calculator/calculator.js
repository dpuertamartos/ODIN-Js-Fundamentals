const add = function() {
  let result = 0
  for(let i=0;i<arguments.length;i++){
    result = result + arguments[i]
  }
  return result
};

const subtract = function() {
  return arguments[0] - arguments[1]
};

const sum = function(array) {
  let result = 0
  for(let i=0;i<array.length;i++){
    result = result + array[i]
  }
  return result
};

const multiply = function(array) {
  let result = 1
  for(let i=0;i<array.length;i++){
    result = result * array[i]
  }
  return result
};

const power = function() {
  return arguments[0]**arguments[1]
};

const factorial = function(number) {
  let result = 1
  for(let i=number; i>0; i--){
    result = i * result
  }
	return result
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};

const removeFromArray = function(array, elementsToRemove) {
    for(let i = 1; i<arguments.length; i++){
        array = array.filter(element => element !== arguments[i])
    }
    return array
};

// Do not edit below this line
module.exports = removeFromArray;

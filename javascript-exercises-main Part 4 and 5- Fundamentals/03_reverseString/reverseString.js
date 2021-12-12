const reverseString = function(str) {
    let reversedString =""
    for (let i=str.length-1; i>-1; i=i-1){
        reversedString = reversedString + str[i]
    }
    return reversedString
};
// Do not edit below this line
module.exports = reverseString;

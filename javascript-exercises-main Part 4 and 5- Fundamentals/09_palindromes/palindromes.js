const reverseString = function(str) {
    let reversedString =""
    for (let i=str.length-1; i>-1; i=i-1){
        reversedString = reversedString + str[i]
    }
    return reversedString
};

const palindromes = function (string) {
    const clearString = string.replace(/[&\/\\#,+()$! ~%.'":*?<>{}]/g, '');
    return clearString.toLowerCase() === reverseString(clearString).toLowerCase()
};

// Do not edit below this line
module.exports = palindromes;

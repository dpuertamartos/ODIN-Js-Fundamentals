const repeatString = (string, times) => {
    if(times<0){return "ERROR"}
    let addedString = ""
    for(i=0;i<times;i++){addedString = addedString + string}
    return addedString
}

// Do not edit below this line
module.exports = repeatString;

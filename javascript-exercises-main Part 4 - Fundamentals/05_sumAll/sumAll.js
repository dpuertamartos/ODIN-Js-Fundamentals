const sumAll = function(int1, int2) {
    if(int1<0||int2<0||typeof int1 !== "number"||typeof int2 !== "number"){return "ERROR"}
    let sum = 0;
    for(let i = Math.min(...arguments); i<Math.max(...arguments)+1; i++){
        sum = sum + i;
    }
    return sum
};

// Do not edit below this line
module.exports = sumAll;

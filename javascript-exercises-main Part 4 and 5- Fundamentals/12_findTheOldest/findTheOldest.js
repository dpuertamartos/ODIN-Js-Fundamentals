const findTheOldest = function(objectsArray) {
    const arrayAges = objectsArray.map(o=>{
        if(!o.yearOfDeath){
            return 2021 - o.yearOfBirth
        }
        else{return o.yearOfDeath - o.yearOfBirth}
    })
    
    return objectsArray[arrayAges.indexOf(Math.max(...arrayAges))]
};

// Do not edit below this line
module.exports = findTheOldest;

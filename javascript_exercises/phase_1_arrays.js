Array.prototype.uniq = function() {
    let array = [];
    this.forEach(function(el) {
        if (!array.includes(el)) {
            array.push(el);
        }
    })
    return array;
}

Array.prototype.twoSum = function() {
    let newArr = [];
    for (let i = 0; i < this.length - 1; i++) {
        for(let j = i + 1; j < this.length; j++) {
            if (this[i] + this[j] === 0) {
                newArr.push([i, j]);
            }
        }
    }
    return newArr;
}

// Array.prototype.transpose = function() {
//     let newLength = this[0].length;
//     let newArr = Array(newLength).fill([]);
//     for (i = 0; i < newLength; i++) {
//         for (j = 0; j < this.length; j++) {
//             newArr[i].push(this[j][i]);
//         }
//     }
//     return newArr
// }



Array.prototype.transpose = function() {
    let finalArr = [];
    let i = 0;
    while (i < this[0].length) {
        let newArr = [];
        this.forEach((subArr) =>
            newArr.push(subArr[i]))
        finalArr.push(newArr)
        i++
    }
    return finalArr
}
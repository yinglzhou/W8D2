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
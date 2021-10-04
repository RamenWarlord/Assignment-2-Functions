// FOR EACH //
Array.prototype.myEach = function (callbackFn) {
  for (let i = 0; i < this.length; i++) {
    if(this[i]===undefined) continue;
    //element, index, array
    callbackFn(this[i], i, this);
};

// MAP //
Array.prototype.myMap = function (callbackFn) {
    let arr = [...this];
    for(let i = 0; i < this.length; i++){
        if(this[i]===undefined) continue;
        arr[i] = callbackFn(this[i], i, this);
    }
    return arr;
};

// FILTER //
Array.prototype.myFilter = function (callbackFn) {
    let arr = [];
    for(let i = 0; i < this.length; i++){
        if(this[i]===undefined) continue;
        if(callbackFn(this[i], i, this)){
            arr.push(this[i]);
        }
    }
    return arr;
};

// SOME //
Array.prototype.mySome = function (callbackFn) {
    for(let i = 0; i < this.length; i++){
        if(this[i]===undefined) continue;
        if(callbackFn(this[i], i, this)){
            return true;
        }
    }
    return false;
};

// EVERY //
Array.prototype.myEvery = function () {};

// REDUCE //
Array.prototype.myReduce = function () {};

// INCLUDES //
Array.prototype.myIncludes = function () {};

// INDEXOF //
Array.prototype.myIndexOf = function () {};

// PUSH //
Array.prototype.myPush = function () {};

// LASTINDEXOF //
Array.prototype.myLastIndexOf = function () {};

// KEYS //
Object.grabKeys = function () {};

// VALUES //
Object.grabValues = function () {};

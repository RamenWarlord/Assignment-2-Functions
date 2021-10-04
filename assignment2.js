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
};

// FILTER //
Array.prototype.myFilter = function () {};

// SOME //
Array.prototype.mySome = function () {};

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

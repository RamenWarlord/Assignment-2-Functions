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
Array.prototype.myEvery = function (callbackFn) {
    for(let i = 0; i < this.length; i++){
        if(this[i]===undefined) continue;
        if(!callbackFn(this[i], i, this)){
            return false;
        }
    }
    return true;
};

// REDUCE //
Array.prototype.myReduce = function (callbackFn, initVal) {
    let num = 0;
    if(!isNaN(initVal)){
        num = initVal;
    }
    for(let i = 0; i < this.length; i++){
        if(this[i]===undefined) continue;
        num = callbackFn(num, this[i]);
    }
    return num;
};

// INCLUDES //
Array.prototype.myIncludes = function (searchElement, fromIndex) {
    let i = 0;
    if(fromIndex < 0){
        i = this.length + fromIndex;
        if(i < 0)
            i = 0;
    }else{
        i = fromIndex;
    }
    while(i < this.length){
        if(this[i]===undefined) {
            i++;
            continue;
        }
        if(this[i] === searchElement)
            return true;
        i++;
    }
    return false;
};

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

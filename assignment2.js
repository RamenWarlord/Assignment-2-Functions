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
Array.prototype.myIndexOf = function (searchElement, fromIndex) {
    if(fromIndex < 0){//negative
        fromIndex = -fromIndex;//positive of
        if(fromIndex >= this.length)//if bigger
            fromIndex = 0;
    }else{//positive
        if(fromIndex >= this.length)//bigger
            return -1;
    }

    while(fromIndex < this.length){
        if(this[fromIndex]===undefined) {
            fromIndex++;
            continue;
        }

        if(this[fromIndex] === searchElement)
            return fromIndex;
        fromIndex++;
    }
    return -1;
};

// PUSH //
Array.prototype.myPush = function (...args) {
    let arg_i = 0;
    let length = this.length;

    for(let i = length; i < length + args.length; i++){
        this[i] = args[arg_i];
        arg_i++;
    }
    return this.length;
};

// LASTINDEXOF //
Array.prototype.myLastIndexOf = function (searchElement, fromIndex) {
    if(fromIndex >= 0){//pos
        if(fromIndex >= this.length)
            return -1
    }else{//neg
        fromIndex = this.length + fromIndex;
        if(fromIndex < 0)
            return -1;
    }
    
    for(let i = this.length-1; i > fromIndex; i--){
        if(this[fromIndex]===undefined)
            continue;
        if(this[fromIndex]===searchElement)
            return fromIndex;
    }
    return -1;
};

// KEYS //
Object.grabKeys = function (obj) {
    let keys = []
    for(var key in obj){
        keys.push(key);
    }
    return key;
};

// VALUES //
Object.grabValues = function () {};

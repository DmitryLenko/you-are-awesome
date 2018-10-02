// DO WHATEVER YOU WANT HERE

const createEnumerableProperty = (prop) => {
    Object.defineProperty(Object.prototype, prop, {
        writable: true,
        enumerable: true,
        configurable: true
    })
    return prop;
};
const createNotEnumerableProperty = (prop) => { 
    Object.defineProperty(Object.prototype, prop, {
        get: () => {return result},
        set: (prop) =>{result = prop},
        enumerable: false,
        configurable: true
    })
    return prop;
};
const createProtoMagicObject = () => {
    function Magic() {}
    Magic.__proto__ = Magic.prototype;
    return Magic;
};

const incrementor = () => { 
  let res = 1;
  let carring = () => {
    ++res;
    return carring;
  };
  carring.valueOf =  () => {
    toBuffer(res);
    return res;
  };
  return carring;
};
const asyncIncrementor = () => {
    let number = toBuffer(number);
    return Promise.resolve(++number);
};

const createIncrementer = () => {
    let res = generator();
    function* generator() {
      let value = 1;
        while(true){
            yield value;
            value++;
        }
    }
    return res;
};
 


// return same argument not earlier than in one second, and not later, than in two
const returnBackInSecond = (param) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(param);
          }, 1000)
      })
};
const getDeepPropertiesCount = (obj, count) => {               
    if (typeof count === 'undefined') {
        count = [];
    }
    if (typeof obj === 'object') {
        for (let i in obj) {
            if (typeof obj[i] === 'object') {
                count.push(obj[i]);
                getDeepPropertiesCount(obj[i], count);
            } 
        }
        
    }
    return count.length;
};

const createSerializedObject = () => {
};

const toBuffer = (res) => {
};

const sortByProto = (array) => {
    return array.sort();
};

exports.createEnumerableProperty = createEnumerableProperty;
exports.createNotEnumerableProperty = createNotEnumerableProperty;
exports.createProtoMagicObject = createProtoMagicObject;
exports.incrementor = incrementor;
exports.asyncIncrementor = asyncIncrementor;
exports.createIncrementer = createIncrementer;
exports.returnBackInSecond = returnBackInSecond;
exports.getDeepPropertiesCount = getDeepPropertiesCount;
exports.createSerializedObject = createSerializedObject;
exports.sortByProto = sortByProto;
/**
 * 如果对象是类数组
 */
var obj = {
    0: 1, 1: 2, length: 2
}
function isClassArray(obj) {
    let obj = Array.from(obj);
    for (let k of obj) {
        console.log(k);
    }
}

isClassArray(obj);

/**
 * 对象不是类数组
 * 思路：
 * 给对象添加一个[Symbol.iterator]属性，指向一个迭代器
 */

var obj1 = {
    a: 1,
    b: 2,
    c: 3
}

obj1[Symbol.iterator] = function () {
    var keys = Object.keys(this);
    var count = 0;
    return {
        next() {
            if (count < keys.length) {
                return { value: obj1[keys[count++]], done: false }
            } else {
                return { value: undefined, done: true }
            }
        }
    }
}
for (let k of obj) {
    console.log(k);
}

var obj2 = {
    a: 1,
    b: 2,
    c: 3
};

obj[Symbol.iterator] = function () {
    var keys = Object.keys(obj);
    for (var k of keys) {
        yield[k, obj[k]]
    }
}

for (let [k, v] of obj) {
    console.log(k, v);
}

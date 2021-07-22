/**
 * 1.创建一个空对象
 * 2.获取原型，设置原型
 */

function objectFacory() {
    let newObject = null;
    //通过Array原型上的shift拿到第一个参数
    let constructor = Array.prototype.shift.call(arguments);
    let result = null;

    //判断constructor 是否是一个函数
    if (typeof constructor !== 'function') {
        console.error('error');
        return;
    }

    //通过object.create创建一个构造函数为constructor 的对象
    newObject = Object.create(constructor.prototype);
    //替换this
    result = constructor.apply(newObject, arguments);

    let flag = result & (typeof result === 'function' || typeof result === 'object');

    return flag ? result : newObject;

}
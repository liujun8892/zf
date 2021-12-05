// 一、 扩展运算符
// 1. 合并数组
// let concatArr1 = [1,2,3]
// let concatArr2 = [4,5,6]
// let concatArr = [...concatArr1,...concatArr2]
// console.log(concatArr);

// 2. 合并对象
// let mergeObj1 = {name: '孙圣东'}
// let mergeObj2 = {age: 18}
// let mergeObj = {...mergeObj1,...mergeObj2}
// console.log(mergeObj);

// 3. 扩展运算符只能拷贝第一层的对象
// let mergeObj1 = {name: '孙圣东'}
// let mergeObj2 = {friend: {name: '刘翔'}}
// let mergeObj = {...mergeObj1,...mergeObj2}
// mergeObj2.friend.name = '翔刘'
// console.log(mergeObj);

// 4. 要想用扩展运算符拷贝多层数据， 需要提前知道数据结构
// let mergeObj1 = {name: '孙圣东'}
// let mergeObj2 = {friend: {name: '刘翔'}}
// let newMergeObj2 = {...mergeObj2, friend: {...mergeObj2.friend}}
// let mergeObj = {...mergeObj1,...newMergeObj2}
// mergeObj2.friend.name = '翔刘'
// console.log(mergeObj);

// 5. 使用JSON 搭配扩展运算符 解决多层拷贝问题、
// let mergeObj1 = {name: '孙圣东'}
// let mergeObj2 = {friend: {name: '刘翔'}}
// let mergeObj = {...mergeObj1,...mergeObj2}
// mergeObj = JSON.parse(JSON.stringify(mergeObj))
// mergeObj2.friend.name = '翔刘'
// console.log(mergeObj);

// 6. 使用JSON 搭配扩展运算符 解决多层拷贝的弊端
// let mergeObj1 = {name: '孙圣东', paly: ()=> {console.log('唱、跳、rap');}, music: null, sex: undefined}
// let mergeObj2 = {friend: {name: '刘翔'}}
// let mergeObj = {...mergeObj1,...mergeObj2}
// mergeObj = JSON.parse(JSON.stringify(mergeObj))
// mergeObj2.friend.name = '翔刘'
// console.log(mergeObj);

// 7. 自己实现深拷贝的方法
// 判断类型方法 typeof  instanceof  Object.protorype.toString.call  constructor
function deepClone(obj,hash = new WeakMap()) {
    // 1. 空obj 直接返回 ; 因为 null ==  undefined 为true ， 所以只需要判断一个就可以了
    if(obj == null) return obj
    // 2. 特殊的 类型
    if( obj  instanceof Date) return new Date(obj)
    if( obj instanceof RegExp) return new RegExp(obj)
    // 3. 如果不是对象，想方法之类的没必要拷贝直接返回
    if( typeof obj  != 'object') return obj

    // 4.是对象， 要不就是{} 对象， 要不就是[] 对象
    // obj.constructor 是对象的构造方法， new 这个构造方法可以得到一个同类型对象
    if(hash.has(obj)) return hash.get(obj)
    let cloneObj = new obj.constructor
    hash.set(obj,cloneObj)
    for (let key in obj) {
        console.log(key);
        // 只考虑自己的属性，不需要拷贝继承的
        if(obj.hasOwnProperty(key)) {
            cloneObj[key] = deepClone(obj[key], hash) 
        }
    }
    return cloneObj
}

// let obj = [{name: '张易发', age: 18, friend: {name: '张立'}}, {name: '鲁班7号', age: 18}] 
let obj ={name: '张易发', age: 18, friend: {name: '张立'}}
obj.circle = obj
let cloneObj = deepClone(obj)
// obj.friend.name = '666'
console.log(cloneObj);


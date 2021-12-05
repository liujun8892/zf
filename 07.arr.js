// 数组的方法 es5 forEach reduce map filter some every
// es6 find findIndex

// 1. reduce 收敛方法
let arr = [1, 2, 3, 4, 5]
let sum = arr.reduce((x, y) => x + y)
console.log(sum);

// 2. reduce 数组嵌套对象求和, 可以传第二个参数, 初始化的参数
let arr2 = [{ price: 300, count: 2 }, { price: 400, count: 3 }, { price: 500, count: 4 }]
let sum2 = arr2.reduce((x, y) => x + y.price * y.count, 0)
console.log(sum2);

// 3. reduce 合并两个对应数组为对象
let arrKey = ['name', 'age']
let arrValue = ['zs', 18]
// let obj = arrKey.reduce((x,y,i) => {
//     x[y] = arrValue[i]
//     return x
// },{})
let obj = arrKey.reduce((x, y, i) =>
    (x[y] = arrValue[i], x)
    , {})
console.log(obj);

// 4. reduce 的高级用法
function sum3(x, y) {
    return x + y
}
function toUpperCase(str) {
    return str.toUpperCase()
}
function add(str) {
    return `****${str}****`
}

let _r = add(toUpperCase(sum3('zfpw', 'jw')))
console.log(_r);


// reduce 实现
// function compose(...fns) {
//     return function (str1,str2) {
//         let lastMethod = fns.pop()
//       return  fns.reduceRight((x,y) => {
//             return y(x)
//         },lastMethod(str1,str2))
//     }
// }

// 5. reduce 在react源码中使用
let compose = (...fns) => (...agrs) => {
    let lastMethod = fns.pop()
    return fns.reduceRight((x, y) => y(x), lastMethod(...agrs))
}


// function compose2(...fns) {
//     return fns.reduce((x,y) => {
//         return (...args) => x(y(...args))
//     })
// }

// react  源码中

function sum3(x, y) {
    return x + y
}
function toUpperCase(str) {
    return str.toUpperCase()
}
function add(str) {
    return `****${str}****`
}
let str = add(toUpperCase(sum3('zfpw', 'jw')))
console.log(str, '111');
let compose2 = (...fns) => fns.reduce((a, b) => (...args) => a(b(...args)))
let reduce_str = compose2(add, toUpperCase, sum3)('zfpw', 'jw')
console.log(reduce_str, '222');

// 6. 自己实现reduce
Array.prototype.reduce = function (callback, prev) {
    for (let i = 0; i < this.length; i++) {
        if (prev == undefined) {
            prev = callback(this[i], this[i + 1], i + 1, this)
            i++;
        } else {
            prev = callback(prev,this[i],i,this)
        }
    }
    return prev
}

let __r =[1,2,3].reduce((a,b) => a +b, 10 )

console.log(__r);
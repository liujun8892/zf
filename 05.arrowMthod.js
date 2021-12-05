// 1. 没有this 2. 没有arguments
// 1. 体现
let sum = (x,y) => x + y
console.log(sum(1,2));

// 2. 单个参数， 返回值简写
let increment = x => ++x
// console.log(increment(1));

// 3. 高级函数
let sumHoc = (x) => {
    return (y) => {
        return x + y
    }
}

// 简写
let sumHoc2 = x => y => x + y
// console.log(sumHoc(1)(2));

// 4. 返回一个对象
let backFunc = age => ({age})
// console.log(backFunc(18));

// 5. 测试this指向
let a = 1
let objA = {
    a: 2,
    fn: function () {
        console.log(this.a);
    }
}

let objB = {
    a: 2,
    fn:  () => {
        console.log(this.a);
    }
}

objA.fn()


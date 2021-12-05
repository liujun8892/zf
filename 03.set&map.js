// 1 set 去重
// let collectionOne = new Set([1,2,3,4,1,3]) 
// // 添加
// collectionOne.add('5')
// // 删除
// collectionOne.delete(1)
// console.log(collectionOne);
// collectionOne.

// collectionOne.forEach(v => {console.log(v);})

// 2. 两个数组中的去重数组
let arr1 = [1,2,3,4,3,2,1] 
let arr2 = [4,5,6,5,6,7]

function union(arr1, arr2) {
    let unionArr = new Set([...new Set(arr1), ...new Set(arr2)]) 
    return  [...unionArr]
}

// console.log(union(arr1, arr2));

// 3. 两个数组取交集数组
function intersection(arr1, arr2) {
    // let unionArr = new Set([...new Set(arr1), ...new Set(arr2)]) 
    let set2 = new Set(arr2);
    let  intersectionArr = [...new Set(arr1)].filter(v => set2.has(v))
    return  intersectionArr
}

// console.log(intersection(arr1, arr2));

// 4. 两个数组取交集数组
function diff(arr1, arr2) {
    // let unionArr = new Set([...new Set(arr1), ...new Set(arr2)]) 
    let set2 = new Set(arr2);
    let  intersectionArr = [...new Set(arr1)].filter(v => !set2.has(v))
    return  intersectionArr
}

// console.log(diff(arr1, arr2));



// map 
let map1 = new Map()
map1.set('name','张三')
map1.set('name','李四')
let obj = {'name':'jack'}
map1.set(obj,666)
obj = null
// console.log(map1);

// weakmap

let map2 = new WeakMap()
let obj2 = {'name':'jack'}
map2.set(obj2,'123')
map2.set(obj2,'456')
obj2 = null
// map2.set('name','李四')
console.log(map2);
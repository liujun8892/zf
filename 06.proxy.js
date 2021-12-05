// Object.defineProperty 不能监控数组的变化，需要重写数组 的方法， vue3中使用的是proxy对

// 更新时的操作
function update(key,val) {
    console.log(key,val, '更新视图');
}

let arr  = [1,2,3,4]
let proxy = new Proxy(arr, {
    set(target,key,value) {
        update(key,value)
        return Reflect.set(target,key,value)
        // target[key] =value
    },
    get(target,key){
        return Reflect.get(target,key)
    }
}) 

proxy.push(1)

console.log( proxy[0] = 100);

console.log(proxy);
// 1. Object.defineProerty
let obj = {}
let nameV = ''
Object.defineProperty(obj, 'name', {
    enumerable: true, // 可枚举
    configurable: true, // 可配置
    get() {
        return nameV + '---读拦截'
    },
    set(val) {
        nameV = '写拦截---' + val 
    }
   // writable: true,   // 可重写
    // value: '张三'  // 值
})
obj.name = '李四'
// console.log(obj.name);

// 2. getter 和 setter 的简写
let obj2 = {
    value: '', 
    get name () {
        return  this.value + '---读拦截'
    },
    set name (val) {
       this.value =  '写拦截--' + val
    },
}

obj2.name  = 'javascript'

// console.log(obj2.name);

// 3. 实现vue中的数据劫持
let people = {
    name: '圣光',
    age: 6,
    friend: {
        sex: 'man'
    },
    likes: ['play','sing','rap']
}
// 观察方法
function observe(obj) {
    if( typeof obj !== 'object') return
    for(let key in obj) {
        defineReactive(obj, key , obj[key])
    }
}
// 更新时的操作
function update(val) {
    console.log(val, '更新视图');
}
// 双向数据响应式
function defineReactive(obj, key , value) {
    observe(value)
    Object.defineProperty(obj, key , {
        get() {
            return value
        },
        set(val) {
            if(value !== val) {
                observe(val)
                update(val)
                value = val 
            }
        }
    })
}

observe(people)

people.friend.sex = 'woman'

people.friend = {
   age: 18
}

people.friend.age = 19

let methods = ['push','slice','pop','sort','reverse','unshift']

methods.forEach(v => {
    let oldMethod = Array.prototype[v];
    Array.prototype[v] = function () {
        update();
        oldMethod.call(this,...arguments);
    }
})

people.likes.push('item...')

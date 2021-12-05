// ES5 中的构造方法
// function Animal(name) {
//     this.name = name
//     this.skill = ['eat','foot']
// }

// Animal.prototype.address = [{location: '地球'}]

// let animal1  = new Animal('猴子')
// let animal2  = new Animal('小狗')

// console.log(animal1.skill === animal2.skill);
// console.log(animal1.address === animal2.address);

// 原型链
// console.log(animal1.__proto__ === Animal.prototype);
// 构造器
// console.log(animal1.constructor === Animal);

// console.log(Animal.__proto__ === Function.prototype);
// console.log(animal1.__proto__.__proto__ === Object.prototype);
// console.log( Object.prototype.__proto__);

// 二 继承
// 1. 继承实例上的属性
function Animal(name) {
    this.name = name
    this.skill = ['eat','foot']
    this.play = ['football']
}

function Tiger(name) {
    this.name = name
    this.skill = ['eat','foot']
    // Animal.call(this)
}

// 2. __proto__

// function Tiger(name) {
//     this.name = name
//     this.skill = ['eat','foot']
// }

let tiger = new Tiger('小老虎')
// Tiger.prototype.__proto__ = Animal.prototype;

// 3. Object create
Tiger.prototype = Object.create(Animal.prototype);

console.log(tiger.play);






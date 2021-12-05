// 一 var的不好地方

// 1. var 声明的变量 （污染全局变量）
// var globalVar = '老铁，666'
// console.log(window.globalVar);

// 2. var 会造成变量提升
// console.log(improveVar);
// var improveVar = '老铁，没毛病'

// 3. var 可以重复申明
// var repeatVar = '从前有座山，山里有座庙，庙里有个老和尚在说：'
// var repeatVar = '从前有座山，山里有座庙，庙里有个老和尚在说：'
// var repeatVar = '从前有座山，山里有座庙，庙里有个老和尚在说：'
// console.log(repeatVar);

// 二、 let 的好处
// 1. 块级作用域
// {
//     let bolckVar = '快域'
// }
// console.log(bolckVar);

// 2. 块级作用域的提升做法
// for (let i =0 ;i < 5; i++) {
//     setTimeout(()=>{
//         console.log(i);
//     })
// }

// 3. 暂存死区
// let blockVarDied = '死海'
// {
//     console.log(blockVarDied);
//     let blockVarDied = '死死海'
// }

// 三、 const 常量
// 1. cosnt 申明的常量简单数据类型不可变
// const finalVar = '万古长存'
// finalVar = '枯木逢春'
// console.log(finalVar);

const finalObjVar = {title: '万古长存'}
finalObjVar.title = '枯木逢春'
console.log(finalObjVar);

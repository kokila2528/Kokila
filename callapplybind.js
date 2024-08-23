// use of call() when a method is created 
// let std1={
//     name:"koki",
//     age:6,
//     result:function(){console.log(`${this.name} is ${this.age} years old`)} //a fun written inside an object is method
// }
// let std2={name:"sham",age:10}
// std1.result()
// //std1.result.call(std2)

// when function is declared globally how to use call()
// let std1={
//     name:"koki",
//     age:6
// }
// let result=function(){console.log(`${this.name} is ${this.age} years old`)}
// let std2={name:"savi", age:"10"}
// result.call(std1)
// result.call(std2)

//printing a method inside obj
// let std1={ name:"koki",age:"6",res:function(){console.log(`${this.name}---${this.age}`)}}
// std1.res();

//using bind()
// let std1={
//         name:"koki",
//         age:6
//     }
//     let result=function(){console.log(`${this.name} is ${this.age} years old`)}
//     let std2={name:"savi", age:"10"}
//    let print= result.bind(std1)
//    let print2= result.bind(std2)
//    print()
//    print2()
    
//use of call() and apply() by passing parameters
// let std1={
//         name:"koki",
//         age:6,
//         result:function(rec){console.log(`${this.name} is ${this.age} years old and ${rec}`)}
//     }
//     let std2={name:"sham",age:10}
//     std1.result()
//     std1.result.call(std2,"happy")
//     std1.result.apply(std2,["happy"])


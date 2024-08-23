//this behaviour in global context
//console.log(this)     


//this behaviour in function context
// function fun()
// {
//     console.log(this)
// }
// fun()

// function fun()
// {
//     let a=20
//     function fun2()
//     {
//         a=40
//         console.log(a)    //no need of giving (this.a) because in function it will refer to its lexical scope   
//     }                    // only in object creation we use this 
//     return fun2
// }
// let res=fun()
// res()

//this keyword behaviour inside the constructor function
function info(n,a)
{
    this.name=n;
    this.age=a

}
let std1=new info("koki",35)
let std2=new info("savi",30)
console.log(std1)


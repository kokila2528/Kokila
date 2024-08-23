// function fun()
// {
//     var a=10
//     console.log(a);
// }
// fun()                               //op: 10

// {let b=20
    
    
// }
// console.log(b);

// let a=10
// let b=20
// let c=30
// if(a>b && a>c)
// {
// console.log("a is larrgest");
// }
// else if(b>a && b>c)
// {
//     console.log("b is largest");
    
// }

// else if(c>a && c>b)
// {
//     console.log("c is largest");
    
// }

// let a='20'
// let b=20
// console.log(a==b);

// let a=10
// let b=20
// function fun1()
// {
//     function fun2()
//     {
//         let c=40
//         console.log(a+b+c);
        
//     }
//     fun2()
// }
// fun1()

// let n=[1,2,3,4,5]
// let newarr=n.map((ele)=>{
//     return (ele+3)
// })
// console.log(newarr);



// let arr=[1,2,3,4]
// arr.forEach((ele)=>{
//    let  a=ele*2;
//     console.log();
//     //process.stdout.write(a)
    
// })


// call snippet

// function test(arg1,arg2,arg3){
//     console.log(this.val,arg1,arg2,arg3);

// }
// test.call({val:'22'},10,20,30) 
// test.apply({val:"kokila"},[10,20,30])     // apply 

// bind
// function test(arg1,arg2){
 
//   console.log(this.val,arg1,arg2);    
// }
//    let add=test.bind({val:'11'},10,20)
//     add();

// const person={
//     name:"John",
//     greet:()=>{
//         console.log(person.name);
        
//     }
// }
// person.greet()

// function fun(name)
// { this.name=name
//     console.log(name);
    
// }

// let a=[1,2,5,1,2,6,7,2]
// let arr=a.filter((ele,index)=>{
//     return a.indexOf(ele)===index
//     })
// console.log(arr);


// let std1={name:"Kokila",grade:"B.Sc", result:function(){
//     console.log(`${this.name} and ${this.grade}`);

    
function fun1(callback)
{
    
    setTimeout(()=>{
        console.log(" good Morning");
        callback()
    },6000)
    
    
}
function fun2()
{
    console.log("Good Evening");
   
}
fun1(fun2)

















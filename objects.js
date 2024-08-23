//creating object through literals
// let obj={
//     fname:"firstname",
//     lname:"lastname",
//     age:"100"
// }
// //console.log(obj.lname);
// console.log(obj.hasOwnProperty('age'));
// console.log(Object.keys(obj));
// console.log(Object.values(obj))

//function inside obj
// let obj={
//          fname:"firstname",
//          lname:"lastname",
//          age:"100",
//          greet:function()
//          {
//             console.log("good");
//          }

// }
// console.log(obj.lname);
// obj.greet();

//creating array inside object
// let obj={
//     fname:"tom",
//     lname:"jerry",
//     age:"100",
//     greet:function()
//     {
//         console.log("good morning");
//     },
//     arr:[2023,2024]
// }
// console.log(obj.fname)
// obj.greet()

//creating an object inside another object
// let obj={
//         fname:"tom",
//          lname:"jerry",
//          age:"100",
//          greet:function()
//          {
//              console.log("good morning");
//          },
//          obj2:{
//             fname1:"harry",
//             lname1:"potter"
//          }
//         }
//         console.log(obj.fname1)

//deleting an array inside object
// let obj={
//     fname:"tom",
//     lname:"jerry",
//     age:"100",
//     greet:function()
//     {
//         console.log("good morning");
//     },
//     arr:[2023,2024]
// }

// delete obj.arr[1]
// console.log(obj.arr[1])
// console.log(obj)

// creating obj through constructor function
// function details(f,l,a)
// {
//     this.fname=a
//     this.lname=l
//     this.age=a
// }

// let person1=new details("koki","jerry",30)
// let person2=new details("savi","raja",40)
// //console.log(person1);
//console.log(person2);
//console.log(person1.hasOwnProperty('fname'));
//console.log(Object.keys(person1));

// creating class constructor
// class data{
//     constructor(name){
//         this.name=name
//     }
// }
// let person1=new data("koki")
// console.log(person1.name)
// console.log(person1)
// console.log(person1.hasOwnProperty('name'));
// console.log(Object.keys(person1));

// example2 for class constructor
// class info{
//     constructor(name,age){
//         this.pname=name
//         this.page=age

//     }
// }

// let p1=new info("naveen","40")
// const p2=new info("ritu",12)
// console.log(p1)
// console.log(p2)

//creating object using object constructor
// let emp1=new Object()
// emp1.name="kokila"
// console.log(emp1)
// console.log(emp1.hasOwnProperty('nameage'));
// console.log(Object.keys(emp1));

// function demo(){
//     var a=10
//    function sam()
//    {
//     console.log(a)
//    }
//    return sam()
// }
// demo()

// function details(f,l,a)
// {
//     this.fname=f
//     this.lname=l
//     this.age=a
//}

// creating object thro construction function using function expression
// let details1=function(f,l,a)
// {
//     this.fname=f
//     this.lname=l
//     this.age=a

// }
// let person1=new details1("koki","jerry",30)
// let person2=new details1("savi","raja",40)
// console.log(person1);
// console.log(person2);
// console.log(person1.hasOwnProperty('fname'));
// console.log(Object.keys(person1));
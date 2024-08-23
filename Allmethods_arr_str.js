//add an value to array
// let arr=[1,2,3]
// arr.push(4)
// console.log(arr)

//remove last element from array
// let arr=[1,2,3,4]
// //arr.pop()
// //console.log(arr)
// //arr.pop()
// //console.log(arr)
// delete arr[1]
// console.log(arr)

//splice() prg
// let arr=[1,2,3,4,5]
// let a=arr.splice(2,2,48,96)
// console.log(a);
// console.log(arr);

//slice()
// let arr=[1,2,3,4,5]
// let a=arr.slice(2,4)
// console.log(a);
// console.log(arr)

//concat()
// let arr=[1,2,3]
// let arr1=[4,5,6]
// let a=arr.concat(arr1)
// console.log(a)

// //shift()
// let arr=[1,2,3,55,66]
// arr.shift(55)
// console.log(arr)

//unshift
// let arr=[1,2,3,55,66]
// arr.unshift(99,45)
// console.log(arr)

//foreach
// let arr=[1,2,3,4]
// arr.forEach((element,index) => {
//     let a=element*2
//     console.log(a)
    
// });

//filter()
// let arr=[1,45,89,79,56]
// let a=arr.filter((Element,index)=>{
//     return Element%2==0
// })
// console.log(a);

//find()
// let arr=[64,869,75,"hi"]
// let num=arr.find(function fun(num){
//     return num>75
// })
// console.log(num);

// //find()
// let arr=[1,45,89,79,56]
// let a=arr.find((Element)=>{
//     return Element%2==0
// })
// console.log(a);

//findindex()
// let arr=[11,"33",22,33,44]
// let a=arr.findIndex((element)=>{return element<55})
// console.log(a);

//reduce()  to do sum of an array 
//let arr=[11,22,33]
// let a=arr.reduce((b,c)=>{return b+c})
// console.log(a);

//flat()
// let arr=[[1,2],[3,4],[5,6]]
// let newarr=arr.flat()
// console.log(newarr);

//flatMap()
// let arr=[1,2,3,4,5]
// let a=arr.flatMap((x)=>x*2);
// console.log(a);


//map()
// let arr=[1,2,3,4]
// let a=arr.map((x)=>x*2)
// console.log(a);

//chartAt()
// const  str="hello"
// console.log(str.charAt(1));
// console.log(str.charAt(str.length-1));

//charcodeAt()
// const  str="hello"
// console.log(str.charCodeAt(1));

//includes()
// let str="kokila"
// console.log(str.includes("i"));

//indexof()
// let str="helloworld!"
// console.log(str.indexOf("world"));

//match()
// let str="hello, world!,world"
// console.log(str.match(/hello/g));

//change the particular string to lowercase
// let str="Hello WORLD!"
// console.log(str.toLowerCase());


//split
// let str="I am learning javascript"
// //console.log(str.length);
// let a=str.split();

//using search() in function
// let str="User savitha as logged in with invlaid password"
// //function fun(str,substring){
//  //   return str.search(substring)!==-1
// //}
// let a=(str,substring)=>{return str.search(substring)!==-1}
// console.log(a(str,"jasddsd"));

//filter
let num=[1,2,3,4];
let evens=num.filter(num=>num%2===0);
console.log(evens);






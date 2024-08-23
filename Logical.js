//swapping two number
/*let a=10
let b=20
let temp=a
a=b
b=temp
console.log(a)
console.log(b)*/

//factorial
/*let a=5
let fact=1
for(let i=5;i>=1;i--)
{
    fact=fact*i;
}
console.log(fact)*/

//prime number
/*let a=8
let count=0
for(let i=1;i<=7;i++)
{
    if(a%i==0)
        count++
}
if(count==2)
    {
        console.log("Its a prime no ")
    }
    else
    {
        console.log("Its not a prime no")
    }
*/

//reverse the given string
// let s="I am learning javascript"
// let rev=" ";
// let arr=s.split(" ");
// console.log(arr)
// for(let i=arr.length-1;i>=0;i--)
// {
//     rev=rev+" "+arr[i];
// }
// console.log(rev)

//Fibonnaci series
// let fib1=0
// let fib2=1
// console.log(fib1+" "+fib2)
// for(let i=0;i<=10;i++)
// {
//     let fib3=fib1+fib2
//     console.log(fib3+" ")
//     fib1=fib2
//    fib2 =fib3
   
// }

//removing duplicates in array using Set
// let arr=[1,2,3,1,4,5,6,3,5]
// let newarr=[...new Set(arr)];
// console.log(newarr);

//removing duplicates in array using filter
let arr=[1,3,2,4,1,4,2]
let res=arr.filter((ele,index)=>
{
    return arr.indexOf(ele)===index
})
console.log(res);




//removing duplicates from three array
// let arr1=[1,2,3,5,6,1,4]
// let arr2=[3,5,7,4,6,8,9]
// let arr3=[3,5,6,7,8,9,3,4]
// //let newarr=[...arr1,...arr2,...arr3]
//console.log(newarr);
// let res=[...new Set(arr1,arr2,arr3)]
// console.log(res);

//removing duplicates from a string
//  let str="i am kokila"
// let newstr=[...new Set(str)]
// console.log(newstr);
// let jo=newstr.toString()             //op: i, ,a,m,k,o,l   
// let jo1=newstr.join('')             //op : i amkol
// console.log(jo);
// console.log(jo1);






//reverse each word in the given string 
// const str="I am learning javascript"
// const spstr=str.split("")
// const rev=spstr.reverse().join("")
// console.log(rev);

//swap two string
// let a="Kokila";
// let b=20;
// [a,b]=[b,a]
// console.log(a);
// console.log(b);

//get the substring
// let str="I am learning javascript"
// let sub=str.substring()
// console.log(sub);

//covert string to array
// const str="I am learning java"
// let arr=str.split(" ")
// console.log(arr);
// //convert array to string
// let rr=arr.join(' ')                      //  I am learning java
//                                           //  I,am,learning,java
// let rr1=arr.toString()
// console.log(rr);
// console.log(rr1);

//swap two words in the same string
// let str="I am learning javascript"
// let arr=str.split(" ")
// //console.log(arr[0]);

// let temp=arr[0]
// arr[0]=arr[arr.length-1]
// arr[arr.length-1]=temp
// for(let i=0;i<arr.length;i++)
// {
//     process.stdout.write(arr[i]+" ");                      //javascript am learning I 
    
// }



















      








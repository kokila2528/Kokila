// let a=new Promise((resolve,reject)=>{
//     console.log("Launching FB");
//     setTimeout(()=>{
//         resolve("Hello")
//         reject("error")
//     },4000);
// })
// a.then((r)=>{console.log(r);}).catch((s)=>{console.log(s);})
// a.then(()=>{let b=new Promise((resolve,reject)=>{
//     console.log("search for shoes");
//     setTimeout(()=>{resolve("found shoes")
//         reject("not found shoes")
//     },2000);
// })
// b.then((d)=>{console.log(d);}).catch((e)=>{console.log(e);})})

var a
var b=10
console.log(a);
function fun()
{
    var a=10;
    console.log(a);
}
fun()
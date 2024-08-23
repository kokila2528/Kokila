document.getElementById("a").onclick=demo 
function demo(){document.getElementById("a").innerHTML="clicked"}

document.getElementById("b").onclick=demo1
function demo1(){document.getElementById("b").innerHTML=Date()}

document.getElementById("c").onclick=demo2
let d=new Date()
function demo2(){document.getElementById("c").innerHTML=d.getMonth()}

document.getElementById("aaa").innerHTML="hi"
document.getElementById("bbb").innerHTML="good evening"
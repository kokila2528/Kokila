// function myDisplayer()
// {

// }
// function mycalculator(num1,num2)
// {
//     let sum=num1+num2;
//     return sum;
// }

//example for callback()
function greet(name)
{
    console.log('Hello' +name);
}
function user(callback)
{
    const name="hello";
    callback(name)
}
user(greet)
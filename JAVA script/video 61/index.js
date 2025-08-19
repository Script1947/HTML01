/* Create a faulty calculator using JavaScript

This faulty calculator does following:
1. It takes two numbers as input from the user
2. It perfoms wrong operations as follows:

+ ---> -
* ---> +
- ---> /
/ ---> **


It performs wrong operation 10% of the times

*/


let random = Math.random()
console.log(random)

let a = prompt("enter your first number");
let b =  prompt("enter your opertion");
let c = prompt("enter your second  number");

let obj ={
    "+" :"-" ,
    "*" : "+",
    "-" : "/" ,
    "/" : "**"

}

if(random <0.10){
    //croccect operation
    console.log(`the result is ${a} ${b} ${c}`)
    alert(`the result is ${eval(`${a} ${b} ${c}`)}`)
}


else{
    //wrong operation  ke liye object ka role layenge
     
    b =obj[b]
    console.log(`the result is ${a} ${b} ${c}`)
    alert(`the result is ${eval(`${a} ${b} ${c}`)}`)
}
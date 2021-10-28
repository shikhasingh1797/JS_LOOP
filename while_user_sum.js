let n=require("readline-sync");
let num=parseInt(n.question("How many times you want to take input : "));
var i=0
var sum=0
while(i<num){
    let num=parseInt(n.question("enter number: "));
    sum=sum+num
    i=i+1}
console.log("Sum =",sum)
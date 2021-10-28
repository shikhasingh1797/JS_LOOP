let n=require("readline-sync");
let num=parseInt(n.question("enter number: "));
var i=0
var sum=0
while(i<=num){
    sum=sum+i
    i=i+1
}
console.log("Sum =",sum)
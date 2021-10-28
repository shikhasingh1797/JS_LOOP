let n=require("readline-sync");
let num=parseInt(n.question("enter number: "));
var sum=0
var i=0
do{
    sum=sum+i
    i=i+1
console.log("Sum =",sum)
}
while(i<=num)
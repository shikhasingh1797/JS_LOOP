let n=require("readline-sync");
let num=parseInt(n.question("enter number: "));
var sum=0
for(i=0;i<=num;i++){
    sum=sum+i
}
console.log("Sum =",sum)
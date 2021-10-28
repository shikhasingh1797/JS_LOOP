let n=require("readline-sync");
var num=parseInt(n.question("How many times you want add: "));
var sum=0
for (let i=0;i<num;i++) {
    var a=parseInt(n.question("enter number: "));
    sum=sum+a
}
console.log("Sum =",sum)
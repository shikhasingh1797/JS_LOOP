let n=require("readline-sync");
let num=parseInt(n.question("enter number: "));
var i=1
do{
    console.log(num,"*",i,"=",num*i)
    i=i+1
}
while(i<=10)
let n=require("readline-sync");
let num=parseInt(n.question("enter number: "));
var i=1
do{
    if(i%7==0){
        console.log(i)
    }
    i=i+1
}
while(i<=num)
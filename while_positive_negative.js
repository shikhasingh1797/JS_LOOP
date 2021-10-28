let n=require("readline-sync");
var num=parseInt(n.question("How many times you want add: "));
var i=1
var s=""
while (i<=num){
    if (i%2==0){
        s=s+i*-1+""+","
    }
    else{
        s=s+i+""+","
    }
    i=i+1
}
console.log(s)
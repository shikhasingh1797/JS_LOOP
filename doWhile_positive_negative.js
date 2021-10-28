let n=require("readline-sync");
var num=parseInt(n.question("Enter number : "));
var i=1
var s=""
do{
    if (i%2==0){
        s=s+i*-1+""+","
    }
    else{
        s=s+i+""+","
    }
    i=i+1
}
while (i<=num)
console.log(s)
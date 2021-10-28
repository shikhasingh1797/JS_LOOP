let n=require("readline-sync");
let num=parseInt(n.question("enter number: "));
for(var i=1;i<=num;i++){
    if(i%7==0){
        console.log(i)
    }
}
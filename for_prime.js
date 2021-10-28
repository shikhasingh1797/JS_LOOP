var n=require("readline-sync");
const num=n.question("enter number: ");
var count=0
for (i=0;i<num;i++){
    if(num%i==0){
        count=count+1
    }
}
if (count===1) {
       console.log("prime number")
}
else {
   console.log("not prime number")
}
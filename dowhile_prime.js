var n=require("readline-sync");
const num=n.question("enter number: ");
let i=2
var count=0;
do{
       if (num%i===0) {
       count=count+1
       }
       i++;
}
while(i<num)
if (count===0) {
       console.log("prime number")
}
else {
   console.log("not prime number")
}
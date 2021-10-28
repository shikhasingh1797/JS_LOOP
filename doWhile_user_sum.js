let n=require("readline-sync");
var num=parseInt(n.question("How many times you want to take input : "));
var i=0
var sum=0
do{
    var num=parseInt(n.question("Enter num : "))
    sum=sum+num;
    i=i+1;
console.log(sum)
}
while(i<num)
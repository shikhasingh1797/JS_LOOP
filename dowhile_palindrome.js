const n=require("readline-sync");
var name=n.question("enter name: ")
const store=name;
var string=""
var i=store.length-1
do{
    string=string+name[i]
    i=i-1
}
while (i>=0)
if (store===string){
    console.log("It is Palindrome String")
}
else{
    console.log("It is not Palindrome String")
}
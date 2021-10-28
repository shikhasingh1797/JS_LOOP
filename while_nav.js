let n=require("readline-sync");
var num=parseInt(n.question("Enter number : "));
var i=1
while(i<=num){
    if(i%3==0 && i%7==0){
        console.log(i,"Navgurukul")
    }
    else if(i%7==0){
        console.log(i,"Guru")
    }
    else if(i%3==0){
        console.log(i,"Nav")
    }
    else{
        console.log(i)
    }
    i=i+1
}
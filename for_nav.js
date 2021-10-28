let n=require("readline-sync");
var num=parseInt(n.question("Enter number : "));
for(var i=1;i<=num;i++){
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
}
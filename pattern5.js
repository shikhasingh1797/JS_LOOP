let n = 5; 
let string = "";

for(let i = 1; i <= n; i++) { 
  for(let j = 0; j <n; j++) { 
    string += i;
  }
  string += "\n";
}
console.log(string);
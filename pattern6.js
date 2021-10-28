let n = 1; 
let string = "";

for(let i = 5; i >= n; i--) { 
  for(let j = 1; j <=5; j++) { 
    string += i;
  }
  string += "\n";
}
console.log(string);
let a = prompt("Enter the first string:");
let b = prompt("Enter the second string:");
function isAnagram(a,b){
     stra = a.toLowerCase().split("").sort().join("");
     strb = b.toLowerCase().split("").sort().join("");
     if (stra === strb){
          console.log("true")
     }
     else
          console.log("false")  
}
isAnagram(a,b)    
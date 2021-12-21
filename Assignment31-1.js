function isAnagram(a, b) {
    stra = a.toLowerCase().split("").sort().join("")
    strb = b.toLowerCase().split("").sort().join("")
    stra.length;
    strb.length;
    return Boolean(stra === strb); 
}
let a = prompt("Enter the first string:");
let b = prompt("Enter the second string:");
let s = isAnagram(a, b)
if(s == true){
    console.log("\"" + a + "\" and \"" + b + "\" are anagrams");
}
else
    console.log("\"" + a + "\" and \"" + b + "\" are not anagrams");
isAnagram(a, b)     
function isAnagram(a, b) {
    if (a.length != b.length) {
         return false;
    }
    stra = a.toLowerCase();
    strb = b.toLowerCase();
    aStra = stra.split("");
    aStrb = strb.split("");
    console.log(stra,strb);
    console.log(aStra,aStrb);
    // stra = a.toLowerCase().split("").sort().join("")
    // strb = b.toLowerCase().split("").sort().join("")
    return Boolean(stra === strb);
}
let a = prompt("Enter the first string:");
let b = prompt("Enter the second string:");
let s = isAnagram(a, b)
if (s == true) {
    console.log("\"" + a + "\" and \"" + b + "\" are anagrams");
}
else
    console.log("\"" + a + "\" and \"" + b + "\" are not anagrams");
isAnagram(a, b)    
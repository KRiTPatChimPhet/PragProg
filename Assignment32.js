let n = prompt("What is your name?");
let s = prompt("What is surname?");
let usex = prompt("What gender are you?");
n = n[0].toUpperCase(1)+n.substring(1,n.length());
s = s[0].toUpperCase(1)+s.substring(1,s.length());
let sex = usex.toUpperCase();
if(sex == "M"){
     console.log("My name is Mr.",n,s);
}
else {if(sex == "F"){
     console.log("My name is Ms.",n,s);
}}
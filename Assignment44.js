do{
    minimum = Number(prompt("What's the minimum length?"));
    if(minimum == "" || minimum == NaN){
    alert("Please enter a number.");
    }
}while(minimum == "" || minimum == NaN );
console.log("What's the minimum length? " + minimum);

do{
    special = Number(prompt("How many special characters?"));
    if(special == "" || special == NaN){
    alert("Please enter a number.");
    }
}while(special == "" || special == NaN);
console.log("How many special characters? " + special);

do{
    numbers = Number(prompt("How many numbers?"));
    if(numbers == "" || numbers == NaN){
    alert("Please enter a number.");
    }
}while(numbers == "" || numbers == NaN);
console.log("How many numbers? " + numbers);

let aPassword = Array();
let text = "";

let spac = "~!#@$%^&*()_+*/|?\.[]{}=-%";
for (let i = 0; i < special; i++) {
    text = spac[Math.floor(Math.random() * spac.length)];
    aPassword.push(text);
}

let numric = "0123456789";
for (let i = 0; i < numbers; i++) {
    text = numric[Math.floor(Math.random() * numric.length)];
    aPassword.push(text);
}

let c = Math.floor(Math.random() * 5);
let charac = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
let ch = (minimum + c) - (special + numbers);
for (let i = 0; i < ch; i++) {
    text = charac[Math.floor(Math.random() * charac.length)];
    aPassword.push(text);
}

let pass = Array();
let randompass = "";
let p = 0;
while (pass.length < aPassword.length) {
    p = Math.floor(Math.random() * aPassword.length);
    if (pass.indexOf(p) < 0) {
        pass.push(p);
    }
}

for (let i = 0; i < (minimum +c); i++) {
    randompass += (aPassword[pass[i]]);
}
console.log("Your password is " + randompass);
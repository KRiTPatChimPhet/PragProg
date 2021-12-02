let orderAmount = Number(prompt("What is the order amount?"));
console.log("What is the order amount?",orderAmount);
let theState = prompt("What is the state?");
console.log("What is the state?",theState);
let tax;
let total;
if (theState == "WI"){
    tax = orderAmount * (5.5/100);
    total = orderAmount + tax ;
    console.log("The sub total is: ",orderAmount,"\n The tax is:",tax);
}
if (theState == "MN"){
    total = orderAmount;
}
console.log("The total is:",total);
let orderAmount = Number(prompt("What is the order amount?"));
let theState = prompt("What is the state?");
let subTotal;
let tax;
let total;
let total1;
if (theState === 'WI'){
     subTotal = "The subtotal is $ %d ."+orderAmount+".";
     tax = "The tax is $0.55."
     total = "The total is $ %d ."+(orderAmount+0.55)
} 
if (theState === 'MN'){
    total = "The total is $"+orderAmount+"."
}
console.log("What is the order amount? ",orderAmount,"\n",
            "What is the state?",theState,"\n",
            subTotal,"\n",tax,"\n",total);
var P = Number(prompt("Enter the principal"));
var r = Number(prompt("Enter the rate of interest"));
var t = Number(prompt("Enter the number of year"));
var A = P*(1+(r/100)*t);
console.log("Enter the principal:",P,"\n",
            "Enter the rate of interest:",r,"\n",
            "Enter the number of year:",t,"\n",
            "After",t,"years at",r+"\%, the investment will be worth ฿"+A+".")
var P = Number(prompt("Enter the principal"))
var R = Number(prompt("Enter the rate of interest"))
var t = Number(prompt("Enter the number of years"))
var n = Number(prompt("Enter the number compounded of years"))
var r = R / 100
var A = Math.ceil(P * ((1 + (r / n))**(n * t)));
console.log("Enter the principal:",P,"\n",
            "Enter the rate of interest:",R,"\n",
            "Enter the number of years:",t,"\n",
            "Enter the number compounded of years",n,"\n",
            "After",t,"years at",R+"\%, the investment will be worth ฿"+A)
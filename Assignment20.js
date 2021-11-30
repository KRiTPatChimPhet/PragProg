var P = Number(prompt("What is the principal amount?"))
var R = Number(prompt("What is the rate?"))
var t = Number(prompt("What is the number of years?"))
var n = Number(prompt("What is the number of times the interest compounded per year?"))
var r = R /100;
var A = (P * ((1 + r/n)**(n*t))).toFixed(2);
console.log("What is the principal amount?",P,"\n",
            "What is the rate?",R,"\n",
            "What is the number of years?",t,"\n",
            "What is the number of times the interest compounded per year?",n,"\n",
            "",P,"invested at",R+"\% for",t,"years \n",
            "compounded",n,"times per year is ฿"+A+"\.")
var Euros = Number(prompt("How many euros are you exchanging?"))
var Rate = Number(prompt("What is the exchange rate? "))
var Convertable = ((Euros*Rate)/100).toFixed(2);
console.log("How many euros are you exchanging?",Euros,"\n",
            "What is the exchange rate?",Rate,"\n",
            "",Euros,"euros at an exchange rate of",Rate,"is",Convertable,"U.S. dollars.")
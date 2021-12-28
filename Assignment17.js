let PriceItem1 = Number(prompt("Enter the price of item 1 :"));
let QuantityItem1 = Number(prompt("Enter the quantity of item 1 :"));
let PriceItem2 = Number(prompt("Enter the price of item 2 :"));
let QuantityItem2 = Number(prompt("Enter the quantity of item 2 :"));
let PriceItem3 = Number(prompt("Enter the price of item 3 :"));
let QuantityItem3 = Number(prompt("Enter the quantity of item 3 :"));
let Item1 = PriceItem1 * QuantityItem1;
let Item2 = PriceItem2 * QuantityItem2;
let Item3 = PriceItem3 * QuantityItem3;
let SubTotal = Item1 + Item2 + Item3;
let Tax = (SubTotal * 5.5) / 100;
let Total = SubTotal + Tax;
console.log("Enter the price of item 1 :",PriceItem1,"\n",
            "Enter the quantity of item 1 :",QuantityItem1,"\n",
            "Enter the price of item 2 :",PriceItem2,"\n",
            "Enter the quantity of item 2 :",QuantityItem2,"\n",
            "Enter the price of item 3 :",PriceItem3,"\n",
            "Enter the quantity of item 3 :",QuantityItem3,"\n",
            "Subtotal: ฿"+SubTotal,"\n",
            "Tax: ฿"+Tax,"\n",
            "Total: ฿"+Total)
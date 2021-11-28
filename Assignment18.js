var PriceItem1 = parseInt(prompt("Enter the price of item 1 :"));
var QuantityItem1 = parseInt(prompt("Enter the quantity of item 1 :"));
var PriceItem2 = parseInt(prompt("Enter the price of item 2 :"));
var QuantityItem2 = parseInt(prompt("Enter the quantity of item 2 :"));
var PriceItem3 = parseInt(prompt("Enter the price of item 3 :"));
var QuantityItem3 = parseInt(prompt("Enter the quantity of item 3 :"));
var Item1 = PriceItem1 * QuantityItem1;
var Item2 = PriceItem2 * QuantityItem2;
var Item3 = PriceItem3 * QuantityItem3;
var SubTotal = Item1 + Item2 + Item3;
var Tax = (SubTotal * 5.5) / 100;
var Total = SubTotal + Tax;
console.log("Enter the price of item 1 :",PriceItem1,"\n",
            "Enter the quantity of item 1 :",QuantityItem1,"\n",
            "Enter the price of item 2 :",PriceItem2,"\n",
            "Enter the quantity of item 2 :",QuantityItem2,"\n",
            "Enter the price of item 3 :",PriceItem3,"\n",
            "Enter the quantity of item 3 :",QuantityItem3,"\n",
            "Subtotal: ฿"+SubTotal,"\n",
            "Tax: ฿"+Tax,"\n",
            "Total: ฿"+Total)
let supTotal = 0;
let item = 0;
let text = "";

do {
    item++;
    quantity = prompt("Enter the quantity of item " + item + ":");
    if (isNaN(quantity)) {
        window.alert("กรุณากรอกตัวเลข");
    }
    else {
        price = prompt("Enter the price of item " + item + ":");
        if (isNaN(price)) {
            window.alert("กรุณากรอกตัวเลข");
        }
        else
            text += ("Enter the quantity of item " + item + ": " + quantity + "\n" +
                "Enter the price of item " + item + ": " + price + "\n")
    }
    supTotal = supTotal + (price * quantity)
} while (quantity != "")

let tax;
tax = (supTotal * 5.5) / 100;

let total;
total = supTotal + tax;

console.log(text
    , "Subtotal:", supTotal, "\n"
    , "Tax:", tax, "\n"
    , "Total:", total, "\n")
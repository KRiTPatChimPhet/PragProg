let inputString
do {
    inputString = prompt("What is the input string?");
    if (inputString == ""){
	window.alert("กรุณากรอกข้อมูล")
    }
} while (inputString == "");
let length = inputString.length;
console.log("What is the input string?", inputString,
            "\n"+inputString, "has", inputString.length, "characters.");
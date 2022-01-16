let high = prompt("Choose a height : ", "ft,inch,cm");
let cm = "";
let kg = "";
if (high == "ft") {
    do {
        foot = Number(prompt("How tall are you :"));
        if (isNaN(foot) || foot == "") {
            window.alert("กรุณากรอกเป็นตัวเลข");
        }
    } while (isNaN(foot) || foot == "");
    cm = (foot * 30.48).toFixed(2);
    console.log("How tall are you : "+cm);
}

if (high == "inch") {
    do {
        inch = Number(prompt("How tall are you :"));
        if (isNaN(inch) || inch == "") {
            window.alert("กรุณากรอกเป็นตัวเลข");
        }
    } while (isNaN(inch) || inch == "");
    cm = (inch * 2.54).toFixed(2);
    console.log("How tall are you : "+ cm);
}

if (high == "cm") {
    do {
        cm = Number(prompt("How tall are you :"));
        if (isNaN(cm) || cm == "") {
            window.alert("กรุณากรอกเป็นตัวเลข");
        }
    } while (isNaN(cm) || cm == "");
    console.log("How tall are you : "+cm);
}

let weight = prompt("Choose a weight : ", "kg,lb");

if (weight == "kg") {
    do {
        kg = Number(prompt("How much do you weigh :"));
        if (isNaN(kg) || kg == "") {
            window.alert("กรุณากรอกเป็นตัวเลข");
        }
    } while (isNaN(kg) || kg == "");
    console.log("How much do you weigh : "+kg);
}

if (weight == "lb") {
    do {
        lb = Number(prompt("How much do you weigh :"));
        if (isNaN(lb) || lb == "") {
            window.alert("กรุณากรอกเป็นตัวเลข");
        }
    } while (isNaN(lb) || lb == "");
    kg = (lb / 2.2046).toFixed(2);
    console.log("How much do you weigh : "+kg);
}

let bmi = ((kg / (cm * cm)) * 10000).toFixed(2);

if (bmi <= 18.6) {
    console.log("Your BMI is " + bmi);
    console.log("you are too skinny You should eat enough food.");
}
else if (bmi <= 25) {
    console.log("Your BMI is " + bmi);
    console.log("You are within the ideal weight range.");
}
else if (bmi <= 29.9) {
    console.log("Your BMI is " + bmi);
    console.log("you are fat You should control your weight and exercise.");
}
else {
    console.log("Your BMI is " + bmi);
    console.log("You are overweight. You should see your doctor.");
}
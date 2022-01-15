let cm = Number(prompt("ส่วนสูง"));
let bmi;
if (cm) {
    let kg = Number(prompt("น้ำหนัก"));
    bmi = (kg / (cm * cm)) * 10000
    if (kg) {
        if (bmi <= 18.6) {
            console.log("Your BMI is " + bmi)
            console.log("you are too skinny You should eat enough food.");
        }
        else if (bmi <= 25) {
            console.log("Your BMI is " + bmi)
            console.log("You are within the ideal weight range.");
        }
        else if (bmi <= 29.9) {
            console.log("Your BMI is " + bmi)
            console.log("you are fat You should control your weight and exercise.");
        }
        else {
            console.log("Your BMI is " + bmi)
            console.log("You are overweight. You should see your doctor.")
        }
    }
    else {
        console.log("กรุณากรอกเป็นตัวเลข")
    }
}
else {
    console.log("กรุณากรอกเป็นตัวเลข")
}
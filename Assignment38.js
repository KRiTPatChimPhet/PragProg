let intensity = 0;
let a = 55;
do {
    restingHR = Number(prompt("Resting Pulse :"));
} while (isNaN(restingHR) || restingHR == 0);
do {
    age = Number(prompt("Age :"));
} while (isNaN(age) || age == 0);
console.log("Resting Pulse: " + restingHR + " Age: " + age + "\n"
    + "Intensity | Rate\n "+"---------|------")
do {
    intensity = a / 100
    targetHeartRate = (((220 - age) - restingHR) * intensity) + (restingHR * 1)
    console.log(a + "% | " + Math.round(targetHeartRate) + " bpm")
    a += 5
} while (a < 96)
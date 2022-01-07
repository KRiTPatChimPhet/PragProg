let aName = ["John Smith", "Jackie Jackson", "Chris Jones", "Amanda Cullen", "Jeremy Goodwin"];
console.log("There are", aName.length, "employees:");
for (let i = 0; i < aName.length; i++) {
    console.log(aName[i]);
}
let inputName = prompt("Enter an employee name to remove?");
console.log("Enter an employee name to remove: " + inputName);
let n = aName.indexOf(inputName);
aName.splice(n, 1);
console.log("\nThere are", aName.length, "employees:");
for (let i = 0; i < aName.length; i++) {
    console.log(aName[i]);
}
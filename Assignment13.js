var CurrentAge = parseInt(prompt("What i your current year?"))
var AgeRetire = parseInt(prompt("At what age would you like to retire?"))
var CurrentYear = new Date().getFullYear()
console.log("What i your current year?" ,CurrentAge, "\n" + 
            "At what age would you like to retire?" ,AgeRetire, "\n" +
            "You have" + " " + (AgeRetire - CurrentAge) + "year left until you can retire." + "\n" +
            "It's" + " " + CurrentYear + "\, so you can retire in" + " "  + (AgeRetire - CurrentAge + CurrentYear) + "\." )
let pAgain;
do {
    random = Math.random();
    console.log("Let's play Guess the Number.");
    console.log(random);

    do {
        level = prompt("Pick a difficulty level (1, 2, or 3): ");
    } while (!/[1-3]/.test(level));
    levelrandom = Math.floor(random * (10 ** level));
    console.log("Pick a difficulty level (1, 2, or 3): " + level);
    console.log(levelrandom);

    let j = 1;
    let num = prompt("I have my number. What's your guess?")
    console.log("I have my number. What's your guess?", num)
    do {
        
        if (num > levelrandom) {
            console.log("Too hight.");
        }
        else if (num < levelrandom) {
            console.log("Too low.");
        }
        else if (num == "") {
        }
        if(num == levelrandom){
            break;
        }
        num = prompt("Guess again: ");
        console.log("Guess again: " + num)
        j++
    } while (num != levelrandom)
    console.log("You got it in",j,"guesses!");

    
    do {
        pAgain = prompt("Play again? ")
        if (pAgain == "n") {
            console.log("Good bye.")
            break;
        }
    } while (!/[n,y]/.test(pAgain))

} while (pAgain == "y")
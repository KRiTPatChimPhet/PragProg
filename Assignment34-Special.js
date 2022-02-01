let input;
let checkMassege;
let arrayInput = ["Enter the first name:", "Enter the last name:", "Enter the ZIP code:", "Enter an employee ID:"];
let lMessage;
function validateInputSpecial(checkInput, localI) {
    if (localI == 0) {
        if (isNaN(checkInput)) {
            if (checkInput != "") {
                if (checkInput.length < 2) {
                    lMessage = "'" + checkInput + "'" + " is not a valid first name. It is too short.\n"
                } else lMessage = ""
            } else lMessage = "The first name must be filled in.\n"
        } else lMessage = "The first name must be filled in.\n"
    } else if (localI == 1) {
        if (isNaN(checkInput)) {
            if (checkInput != "") {
                if (checkInput.length < 2) {
                    lMessage = "'" + checkInput + "'" + " is not a valid last name. It is too short.\n"
                } else lMessage = ""
            } else lMessage = "The last name must be filled in.\n"
        } else lMessage = "The last name must be filled in.\n"
    } else if (localI == 2) {
        if (!isNaN(checkInput)) {
            if (checkInput == "") {
                lMessage = " The ZIP code must be numeric.\n"
            } 
        } else lMessage = " The ZIP code must be numeric.\n"
    } else if (localI == 3) {
        if (checkInput.length == 7) {
            if (/[a-zA-Z]/.test(checkInput[0]) &&
                /[a-zA-Z]/.test(checkInput[1])) {
                if ((checkInput[2]) == "-") {
                    if (/[0-9]/.test(checkInput[3]) &&
                        /[0-9]/.test(checkInput[4]) &&
                        /[0-9]/.test(checkInput[5]) &&
                        /[0-9]/.test(checkInput[6])) {
                        lMessage = "";
                    } else lMessage = "'"+checkInput+"' is not a valid ID.\n";
                } else lMessage ="'"+checkInput+"' is not a valid ID.\n";
            } else lMessage ="'"+checkInput+"' is not a valid ID.\n";
        } else lMessage ="'"+checkInput+"' is not a valid ID.\n";
    }
    return lMessage
}
for (let i = 0; i < 4; i++) {
    do {
        input = prompt(arrayInput[i])
        checkMassege = validateInputSpecial(input, i)
        console.log(checkMassege)
    } while (checkMassege != "")
    console.log(arrayInput[i], input)
}
function validateInput(lFirstName, lLastName, lZipCode, lEmployee) {
    lMessage = "";
    if (lFirstName == "") {
        lMessage = lMessage + ("The first name must be filled in.\n");
        if (lLastName == "") {
            lMessage = lMessage + ("The last name must be filled in.\n");
            if (isNaN(lZipCode)) {
                lMessage = lMessage + ("The ZIP code be numric.\n");
                if (/[^a-z]/.test(lEmployee[0]) ||
                    /[^a-z]/.test(lEmployee[1]) ||
                    (lEmployee[2]) != "-" ||
                    isNaN(lEmployee[3]) ||
                    isNaN(lEmployee[4]) ||
                    isNaN(lEmployee[5]) ||
                    isNaN(lEmployee[6])) {
                    lMessage = lMessage + ("\'" + lEmployee + "\' is not a valid ID.\n");;
                }
            }
            else if (/[^a-z]/.test(lEmployee[0]) ||
                /[^a-z]/.test(lEmployee[1]) ||
                (lEmployee[2]) != "-" ||
                isNaN(lEmployee[3]) ||
                isNaN(lEmployee[4]) ||
                isNaN(lEmployee[5]) ||
                isNaN(lEmployee[6])) {
                lMessage = lMessage + ("\'" + lEmployee + "\' is not a valid ID.\n");;
            }
        } else if (lLastName.length < 2) {
            lMessage = lMessage + (lLastName + " is not a valid last name. It is too short.\n");
            if (isNaN(lZipCode)) {
                lMessage = lMessage + ("The ZIP code be numric.\n");
                if (/[^a-z]/.test(lEmployee[0]) ||
                    /[^a-z]/.test(lEmployee[1]) ||
                    (lEmployee[2]) != "-" ||
                    isNaN(lEmployee[3]) ||
                    isNaN(lEmployee[4]) ||
                    isNaN(lEmployee[5]) ||
                    isNaN(lEmployee[6])) {
                    lMessage = lMessage + ("\'" + lEmployee + "\' is not a valid ID.\n");;
                }
            }
            else if (/[^a-z]/.test(lEmployee[0]) ||
                /[^a-z]/.test(lEmployee[1]) ||
                (lEmployee[2]) != "-" ||
                isNaN(lEmployee[3]) ||
                isNaN(lEmployee[4]) ||
                isNaN(lEmployee[5]) ||
                isNaN(lEmployee[6])) {
                lMessage = lMessage + ("\'" + lEmployee + "\' is not a valid ID.\n");;
            }
        }
        else {
            if (isNaN(lZipCode)) {
                lMessage = lMessage + ("The ZIP code be numric.\n");
                if (/[^a-z]/.test(lEmployee[0]) ||
                    /[^a-z]/.test(lEmployee[1]) ||
                    (lEmployee[2]) != "-" ||
                    isNaN(lEmployee[3]) ||
                    isNaN(lEmployee[4]) ||
                    isNaN(lEmployee[5]) ||
                    isNaN(lEmployee[6])) {
                    lMessage = lMessage + ("\'" + lEmployee + "\' is not a valid ID.\n");;
                }
            }
            else if (/[^a-z]/.test(lEmployee[0]) ||
                /[^a-z]/.test(lEmployee[1]) ||
                (lEmployee[2]) != "-" ||
                isNaN(lEmployee[3]) ||
                isNaN(lEmployee[4]) ||
                isNaN(lEmployee[5]) ||
                isNaN(lEmployee[6])) {
                lMessage = lMessage + ("\'" + lEmployee + "\' is not a valid ID.\n");;
            }
        }
    } else if (lFirstName < 2) {
        lMessage = lMessage + ("\'" + lFirstName + "\' is not a valid first name. It is too short.\n");
        if (lLastName == "") {
            lMessage = lMessage + ("The last name must be filled in.\n");
            if (isNaN(lZipCode)) {
                lMessage = lMessage + ("The ZIP code be numric.\n");
                if (/[^a-z]/.test(lEmployee[0]) ||
                    /[^a-z]/.test(lEmployee[1]) ||
                    (lEmployee[2]) != "-" ||
                    isNaN(lEmployee[3]) ||
                    isNaN(lEmployee[4]) ||
                    isNaN(lEmployee[5]) ||
                    isNaN(lEmployee[6])) {
                    lMessage = lMessage + ("\'" + lEmployee + "\' is not a valid ID.\n");;
                }
            }
            else if (/[^a-z]/.test(lEmployee[0]) ||
                /[^a-z]/.test(lEmployee[1]) ||
                (lEmployee[2]) != "-" ||
                isNaN(lEmployee[3]) ||
                isNaN(lEmployee[4]) ||
                isNaN(lEmployee[5]) ||
                isNaN(lEmployee[6])) {
                lMessage = lMessage + ("\'" + lEmployee + "\' is not a valid ID.\n");;
            }
        } else if (lLastName.length < 2) {
            lMessage = lMessage + (lLastName + " is not a valid last name. It is too short.\n");
            if (isNaN(lZipCode)) {
                lMessage = lMessage + ("The ZIP code be numric.\n");
                if (/[^a-z]/.test(lEmployee[0]) ||
                    /[^a-z]/.test(lEmployee[1]) ||
                    (lEmployee[2]) != "-" ||
                    isNaN(lEmployee[3]) ||
                    isNaN(lEmployee[4]) ||
                    isNaN(lEmployee[5]) ||
                    isNaN(lEmployee[6])) {
                    lMessage = lMessage + ("\'" + lEmployee + "\' is not a valid ID.\n");;
                }
            }
            else if (/[^a-z]/.test(lEmployee[0]) ||
                /[^a-z]/.test(lEmployee[1]) ||
                (lEmployee[2]) != "-" ||
                isNaN(lEmployee[3]) ||
                isNaN(lEmployee[4]) ||
                isNaN(lEmployee[5]) ||
                isNaN(lEmployee[6])) {
                lMessage = lMessage + ("\'" + lEmployee + "\' is not a valid ID.\n");;
            }
        }
        else {
            if (isNaN(lZipCode)) {
                lMessage = lMessage + ("The ZIP code be numric.\n");
                if (/[^a-z]/.test(lEmployee[0]) ||
                    /[^a-z]/.test(lEmployee[1]) ||
                    (lEmployee[2]) != "-" ||
                    isNaN(lEmployee[3]) ||
                    isNaN(lEmployee[4]) ||
                    isNaN(lEmployee[5]) ||
                    isNaN(lEmployee[6])) {
                    lMessage = lMessage + ("\'" + lEmployee + "\' is not a valid ID.\n");;
                }
            }
            else if (/[^a-z]/.test(lEmployee[0]) ||
                /[^a-z]/.test(lEmployee[1]) ||
                (lEmployee[2]) != "-" ||
                isNaN(lEmployee[3]) ||
                isNaN(lEmployee[4]) ||
                isNaN(lEmployee[5]) ||
                isNaN(lEmployee[6])) {
                lMessage = lMessage + ("\'" + lEmployee + "\' is not a valid ID.\n");;
            }
        }
    } else if (lFirstName > 2) {
        if (lLastName == "") {
            lMessage = lMessage + ("The last name must be filled in.\n");
            if (isNaN(lZipCode)) {
                lMessage = lMessage + ("The ZIP code be numric.\n");
                if (/[^a-z]/.test(lEmployee[0]) ||
                    /[^a-z]/.test(lEmployee[1]) ||
                    (lEmployee[2]) != "-" ||
                    isNaN(lEmployee[3]) ||
                    isNaN(lEmployee[4]) ||
                    isNaN(lEmployee[5]) ||
                    isNaN(lEmployee[6])) {
                    lMessage = lMessage + ("\'" + lEmployee + "\' is not a valid ID.\n");;
                }
            }
            else if (/[^a-z]/.test(lEmployee[0]) ||
                /[^a-z]/.test(lEmployee[1]) ||
                (lEmployee[2]) != "-" ||
                isNaN(lEmployee[3]) ||
                isNaN(lEmployee[4]) ||
                isNaN(lEmployee[5]) ||
                isNaN(lEmployee[6])) {
                lMessage = lMessage + ("\'" + lEmployee + "\' is not a valid ID.\n");;
            }
        } else if (lLastName.length < 2) {
            lMessage = lMessage + (lLastName + " is not a valid last name. It is too short.\n");
            if (isNaN(lZipCode)) {
                lMessage = lMessage + ("The ZIP code be numric.\n");
                if (/[^a-z]/.test(lEmployee[0]) ||
                    /[^a-z]/.test(lEmployee[1]) ||
                    (lEmployee[2]) != "-" ||
                    isNaN(lEmployee[3]) ||
                    isNaN(lEmployee[4]) ||
                    isNaN(lEmployee[5]) ||
                    isNaN(lEmployee[6])) {
                    lMessage = lMessage + ("\'" + lEmployee + "\' is not a valid ID.\n");;
                }
            }
            else if (/[^a-z]/.test(lEmployee[0]) ||
                /[^a-z]/.test(lEmployee[1]) ||
                (lEmployee[2]) != "-" ||
                isNaN(lEmployee[3]) ||
                isNaN(lEmployee[4]) ||
                isNaN(lEmployee[5]) ||
                isNaN(lEmployee[6])) {
                lMessage = lMessage + ("\'" + lEmployee + "\' is not a valid ID.\n");;
            }
        }
        else {
            if (isNaN(lZipCode)) {
                lMessage = lMessage + ("The ZIP code be numric.\n");
                if (/[^a-z]/.test(lEmployee[0]) ||
                    /[^a-z]/.test(lEmployee[1]) ||
                    (lEmployee[2]) != "-" ||
                    isNaN(lEmployee[3]) ||
                    isNaN(lEmployee[4]) ||
                    isNaN(lEmployee[5]) ||
                    isNaN(lEmployee[6])) {
                    lMessage = lMessage + ("\'" + lEmployee + "\' is not a valid ID.\n");;
                }
            }
            else if (/[^a-z]/.test(lEmployee[0]) ||
                /[^a-z]/.test(lEmployee[1]) ||
                (lEmployee[2]) != "-" ||
                isNaN(lEmployee[3]) ||
                isNaN(lEmployee[4]) ||
                isNaN(lEmployee[5]) ||
                isNaN(lEmployee[6])) {
                lMessage = lMessage + ("\'" + lEmployee + "\' is not a valid ID.\n");;
            }
        }
        
    } else {
        lMessage = lMessage + "There were no errors found."
    }
    return lMessage;
}
//Main Programe Start
let firstName = prompt("Enter the first name.");
let lastName = prompt("Emter the last name");
let zipCode = Number(prompt("Enter the ZIP code."));
let employeeId = prompt("Enter an employee ID");
let checkMassege = validateInput(firstName, lastName, zipCode, employeeId);
console.log(checkMassege);
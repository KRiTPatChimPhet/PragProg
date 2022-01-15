let person = [
    { LastName: "Johnson", FirstName: "John", Position: " Manager", SeparationDate: " 2016-12-31\n" },
    { LastName: "Xiong", FirstName: "Tou", Position: " Software Engineer", SeparationDate: " 2016-10-05\n" },
    { LastName: "Michaelson", FirstName: "Michaela", Position: " District Manager", SeparationDate: " 2015-12-19\n" },
    { LastName: "Jacobson", FirstName: "Jake", Position: " Programmer", SeparationDate: "\n" },
    { LastName: "Jackson", FirstName: "Jacquelyn", Position: " DBA", SeparationDate: "\n" },
    { LastName: "Weber", FirstName: "Sally", Position: " Web Developer", SeparationDate: " 2015-12-18\n" }
];

function getFullName(item) {
    return [item.FirstName, item.LastName, item.Position, item.SeparationDate];
}
let persons = person.map(getFullName).sort();

let search = prompt("Enter a search string: ");
let localSearch;
let sortName;
let sortPst;
console.log("Enter a search string: " + search + "\nResults:\n" +
    "Name                 | Position          | Separation Date\n" +
    "---------------------|-------------------|----------------\n");

for (let i = 0; i < persons.map(getName).length; i++) {
    localSearch = persons.map(getName)[i].indexOf(search);
    if (localSearch >= 0) {
        sortName = persons.map(getName)[i];
        sortPst = persons.map(getPst)[i];
        console.log(tile(sortName, sortPst) + persons.map(getSeparation)[i]);
    }
}

function getName(item) {
    return [item[0], item[1]].join(" ");
}

function getPst(item) {
    return [item[2]].join(" ");
}

function getSeparation(item) {
    return [item[3]].join(" ");
}

function tile(localSortName, localSortPst) {
    let countPst = 20 - localSortPst.length;
    let countName = 22 - localSortName.length;
    for (let i = 0; i < countPst - 1; i++) {
        localSortPst += " ";
    }
    for (let i = 0; i < countName - 1; i++) {
        localSortName += " ";
    }
    localSortPst += "|";
    localSortName += "|";
    return localSortName + localSortPst;
}
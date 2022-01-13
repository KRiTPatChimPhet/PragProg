let persons = [
    {Lastname:"Johnson        |",Firstname :"John ",Position:" Manager           |",SeparationDate:" 2016-12-31\n"},
    {Lastname:"Xiong           |",Firstname :"Tou ",Position:" Software Engineer |",SeparationDate:" 2016-10-05\n"},
    {Lastname:"Michaelson |",Firstname :"Michaela ",Position:" District Manager  |",SeparationDate:" 2015-12-19\n"},
    {Lastname:"Jacobson       |",Firstname :"Jake ",Position:" Programmer        |",SeparationDate:"\n"},
    {Lastname:"Jackson   |",Firstname :"Jacquelyn ",Position:" DBA               |",SeparationDate:"\n"},
    {Lastname:"Weber         |",Firstname :"Sally ",Position:" Web Developer     |",SeparationDate:" 2015-12-18\n"}
];

function getFullName(item) {
    return [item.Firstname,item.Lastname,item.Position,item.SeparationDate].join(" ");
}

let fullName = persons.map(getFullName).sort();
console.log("Name                 | Position           | Separation Date\n"+
            "---------------------|--------------------|----------------"+"\n"+fullName.join(""));
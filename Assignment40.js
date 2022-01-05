let quiz = prompt("คุณต้องการถามอะไร?");
let array = ["ใช่", "ไม่ใช่", "ยังไม่แน่นอน", "ยังไม่ควรบอกคุณในตอนนี้"];
let rArray = Math.floor(Math.random() * 4);
console.log("คุณต้องการถามอะไร? "+quiz,"\n"+array[rArray]);
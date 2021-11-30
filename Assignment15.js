var People = parseInt(prompt("How many people?"))
var ManyPizzas = parseInt(prompt("How many pizzas do you have?"))
var Pieces = ManyPizzas * 8
var PiecesPerson = Math.floor(Pieces / People);
var Leftover = Math.ceil(Pieces-(PiecesPerson * People));
console.log("How many people?",People,"\n",
            "How many pizzas do you have?",ManyPizzas,"\n",
            "",People,"people with",ManyPizzas,"pizzas","\n",
            "Each person gets",PiecesPerson,"pieces of pizza.","\n",
            "There are",Leftover,"leftover pieces.",)
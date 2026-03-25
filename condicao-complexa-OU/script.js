//Declaração de variáveis e entrada de dados
let idade = Number(prompt("insira sua idade"));
let estudante = prompt("É estudante?(sim ou não)");
let professor = prompt("É professor? (sim ou não)");

if (idade >= 60 || estudante === "sim" || professor === "sim") {
    alert("Tem direito a desconto");
} else {
    alert("Não tem desconto");
}
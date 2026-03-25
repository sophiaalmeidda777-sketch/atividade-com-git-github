let renda = Number(prompt("insira a sua renda"));
// ! símbolo de negação
// isNan: is not (verifica se NÃO é um número)
if(!isNaN(renda));{
    if (renda >= 3000) {
        let nomelimpo = prompt("Nome limpo? (sim ou nao)");
        if (nomelimpo === "sim"){
            alert("Financiamento aprovado");
        } else {
            alert("Nome negativado");
        }
    } else {
        alert("Renda insuficiente");
    }
}
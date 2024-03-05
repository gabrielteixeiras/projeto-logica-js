alert("Boas vindas ao jogo do número secreto");
let numeroMaximo = 200;
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);
let numeroEscolhido;
let tentativas = 1;


while (numeroEscolhido != numeroSecreto) {
    numeroEscolhido = prompt(`Escolha um número entre 1 e ${numeroMaximo}`);

    if (numeroEscolhido == numeroSecreto) {
        break;
    } else {
        if (numeroSecreto > numeroEscolhido) {
            alert(`O número secreto é maior que ${numeroEscolhido}!`);
        } else {
            alert(`O número secreto é menor que ${numeroEscolhido}!`);
        }
        tentativas++
    }
}

let palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa";

alert(`Boa! Você descobriu o número secreto ${numeroSecreto} em ${tentativas} ${palavraTentativa}, parabéns.`);
alert("Boas vindas ao jogo do número secreto");
let numeroSecreto = 10;
let numeroEscolhido = prompt("Escolha um número entre 1 e 10");

if (numeroEscolhido == numeroSecreto) {
    alert(`Boa! Você descobriu o número secreto ${numeroSecreto}, parabéns.`);
} else {
    alert("Puts, não foi dessa vez. Tente novamente!");
    prompt("Escolha outro número entre 1 e 10");
}

//
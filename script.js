function jogo1() {
    const numeroSecreto = Math.floor(Math.random() * 10) + 1;
    const palpite = prompt("Chute o número secreto (1 a 10):");
    if (parseInt(palpite) === numeroSecreto) {
        alert("Parabéns! Você é mt bom!");
    } else {
        alert(`Errado! O número era ${numeroSecreto}.`);
    }
}

function jogo2() {
    let qtdNotas = parseInt(prompt("De quantos números quer fazer a média?"));
    let soma = 0;

    for (let i = 1; i <= qtdNotas; i++) {
        let nota = parseFloat(prompt("Digite a nota " + i + ":"));
        soma += nota;
    }

    let media = soma / qtdNotas;
    alert("A média das " + qtdNotas + " notas é " + media);
}

function jogo3() {
    let numero1 = parseFloat(prompt("Digite o primeiro número:"));
    let numero2 = parseFloat(prompt("Digite o segundo número:"));
    let soma = numero1 + numero2;
    alert("A soma dos dois números é: " + soma);
}

function comprar() {
    let tipo = document.getElementById('tipo-ingresso');
    let qtd = parseInt(document.getElementById('qtd').value);
    let qtdInput = document.getElementById('qtd').value;

    if (qtdInput == 0) {
        alert('Por favor, insira uma quantidade válida.');
        return;
    }else if (qtdInput > 10) {
        alert('Limite atingido. O limite por pessoa são 10 ingressos.');
        return;
    }

    
    
    if(tipo.value == 'pista') {
        comprarPista(qtd);
    } else if (tipo.value == 'superior') {
        comprarSuperior(qtd);
    }else if (tipo.value == 'inferior') {
        comprarInferior(qtd);
    }
}

function comprarPista(qtd) {
    let qtdPista = parseInt (document.getElementById('qtd-pista').textContent);

    if (qtd > qtdPista) {
        alert('Quantidade indisponivel!');
    } else {
        qtdPista = qtdPista - qtd;
        document.getElementById('qtd-pista').textContent = qtdPista;
        alert('Compra realizada com sucesso')
    }
}

function comprarSuperior(qtd) {
    let qtdSuperior = parseInt (document.getElementById('qtd-superior').textContent);

    if (qtd > qtdSuperior) {
        alert('Quantidade indisponivel!');
    } else {
        qtdSuperior = qtdSuperior - qtd;
        document.getElementById('qtd-superior').textContent = qtdSuperior;
        alert('Compra realizada com sucesso')
    }
}

function comprarInferior(qtd) {
    let qtdInferior = parseInt (document.getElementById('qtd-inferior').textContent);

    if (qtd > qtdInferior) {
        alert('Quantidade indisponivel!');
    } else {
        qtdInferior = qtdInferior - qtd;
        document.getElementById('qtd-inferior').textContent = qtdInferior;
        alert('Compra realizada com sucesso')
    }
}
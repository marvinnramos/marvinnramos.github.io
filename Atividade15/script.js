function fatorial() {
    var numerodigitado = parseInt(document.getElementById('numerodigitado').value);
    var resposta = document.getElementById('resposta');
    var resultado = 1;

    for(var contador = 1; contador <= numerodigitado; contador++) {
        resultado *= contador;
    }
    resposta.innerHTML = resultado;
}
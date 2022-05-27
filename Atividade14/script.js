function botao() {
    var numero = document.getElementById("numerodigitado").value;
    var numero_inteiro = Number(numero);

    if(numero_inteiro%2 == 0) {
        alert(numero_inteiro + " é par!");
    } else {
        prompt(numero_inteiro + " é impar!");
    }
}
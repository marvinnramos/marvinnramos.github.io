var ehPalindromo = function (string) {
    if (string == string.split('').reverse().join('')) {
        alert(string + ' é um palindromo.');
    }
    else {
        prompt(string + ' não é um palindromo.');
    }
}

document.getElementById('conteudo').onsubmit = function() {
    ehPalindromo(document.getElementById('textodigitado').value);
}
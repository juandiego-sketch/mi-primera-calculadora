function suma() {
    var valorx = document.getElementById('valor1').value;
    var valory = document.getElementById('valor2').value;
    var resultado = parseFloat(valorx) + parseFloat(valory);
    document.getElementById('resultado').innerHTML = resultado;
}

function resta() {
    var valorx = document.getElementById('valor1').value;
    var valory = document.getElementById('valor2').value;
    var resultado = parseFloat(valorx) - parseFloat(valory);
    document.getElementById('resultado').innerHTML = resultado;
}

function multiplicacion() {
    var valorx = document.getElementById('valor1').value;
    var valory = document.getElementById('valor2').value;
    var resultado = parseFloat(valorx) * parseFloat(valory);
    document.getElementById('resultado').innerHTML = resultado;
}

function division() {
    var valorx = document.getElementById('valor1').value;
    var valory = document.getElementById('valor2').value;
    var resultado = parseFloat(valorx) / parseFloat(valory);
    document.getElementById('resultado').innerHTML = resultado;
}
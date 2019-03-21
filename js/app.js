var operandoa;
var operandob;
var operacion;

// Variables

var uno = document.getElementById("1");
var dos = document.getElementById("2");
var tres = document.getElementById("3");
var cuatro = document.getElementById("4");
var cinco = document.getElementById("5");
var seis = document.getElementById("6");
var siete = document.getElementById("7");
var ocho = document.getElementById("8");
var nueve = document.getElementById("9");
var cero = document.getElementById("0");
var resultado = document.getElementById("display");
var resetear = document.getElementById("on");
var raiz = document.getElementById("raiz");
var punto = document.getElementById("punto");
var igual = document.getElementById("igual");
var division = document.getElementById("dividido");
var multiplicacion = document.getElementById("por");
var resta = document.getElementById("menos");
var suma = document.getElementById("mas");


// Eventos

uno.onclick = function() {
    if (resultado.innerHTML == "0") {
        resultado.innerHTML = "";
    }
    if (resultado.innerHTML.length >= 8) {

    } else {
        resultado.innerHTML += "1";
    }

}

dos.onclick = function() {
    if (resultado.innerHTML == "0") {
        resultado.innerHTML = "";
    }
    if (resultado.innerHTML.length >= 8) {

    } else {
        resultado.innerHTML += "2";
    }

}

tres.onclick = function() {
    if (resultado.innerHTML == "0") {
        resultado.innerHTML = "";
    }
    if (resultado.innerHTML.length >= 8) {

    } else {
        resultado.innerHTML += "3";
    }

}

cuatro.onclick = function() {
    if (resultado.innerHTML == "0") {
        resultado.innerHTML = "";
    }
    if (resultado.innerHTML.length >= 8) {

    } else {
        resultado.innerHTML += "4";
    }

}

cinco.onclick = function() {
    if (resultado.innerHTML == "0") {
        resultado.innerHTML = "";
    }
    if (resultado.innerHTML.length >= 8) {

    } else {
        resultado.innerHTML += "5";
    }

}

seis.onclick = function() {
    if (resultado.innerHTML == "0") {
        resultado.innerHTML = "";
    }
    if (resultado.innerHTML.length >= 8) {

    } else {
        resultado.innerHTML += "6";
    }

}

siete.onclick = function() {
    if (resultado.innerHTML == "0") {
        resultado.innerHTML = "";
    }
    if (resultado.innerHTML.length >= 8) {

    } else {
        resultado.innerHTML += "7";
    }

}

ocho.onclick = function() {
    if (resultado.innerHTML == "0") {
        resultado.innerHTML = "";
    }
    if (resultado.innerHTML.length >= 8) {

    } else {
        resultado.innerHTML += "8";
    }

}

nueve.onclick = function() {
    if (resultado.innerHTML == "0") {
        resultado.innerHTML = "";
    }
    if (resultado.innerHTML.length >= 8) {

    } else {
        resultado.innerHTML += "9";
    }

}

cero.onclick = function() {
    if (resultado.innerHTML == "0") {
        resultado.innerHTML = "";
    }
    if (resultado.innerHTML.length >= 8) {

    } else {
        resultado.innerHTML += "0";
    }

}


resetear.onclick = function(e) {
    reset();

}
punto.onclick = function() {
    resultado = resultado + ".";
    if (resultado != "0") {
        resultado = resultado + ".";
    } else {
        resultado =
            resultado.slice(1);
    }
}
punto.onclick = function(e) {

    resultado.textContent = resultado.textContent + ".";
}


// Operaciones

function reset() {
    resultado.textContent = "0";
    operandoa = 0;
    operandob = 0;
    operacion = "";
}

suma.onclick = function(e) {
    operandoa = resultado.textContent;
    operacion = "+";
    limpiar();
}

resta.onclick = function(e) {
    operandoa = resultado.textContent;
    operacion = "-";
    limpiar();
}

multiplicacion.onclick = function(e) {
    operandoa = resultado.textContent;
    operacion = "*";
    limpiar();
}

division.onclick = function(e) {
    operandoa = resultado.textContent;
    operacion = "/";
    limpiar();
}

igual.onclick = function(e) {
    operandob = resultado.textContent;
    resolver();
}

function limpiar() {
    resultado.textContent = "";
}

function resolver() {
    var res = 0;
    switch (operacion) {
        case "+":
            res = parseFloat(operandoa) + parseFloat(operandob);
            break;
        case "-":
            res = parseFloat(operandoa) - parseFloat(operandob);
            break;
        case "*":
            res = parseFloat(operandoa) * parseFloat(operandob);
            break;
        case "/":
            res = parseFloat(operandoa) / parseFloat(operandob);
            break;
    }
    reset();
    resultado.textContent = res;
}
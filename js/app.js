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
var signo = document.getElementById("sign");
var isSign = false;
var isPunto = false;

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
    if (resultado.innerHTML.indexOf(".") == -1) {
        resultado.innerHTML += ".";
    }
}

sign.onclick = function() {
    isSign = !isSign;

    if (isSign && resultado.innerHTML > "0") {
        resultado.innerHTML = "-" + resultado.innerHTML;
    } else {
        resultado.innerHTML =
            resultado.innerHTML.slice(1);
    }
}

// Listeners

uno.addEventListener("mousedown", function() {
    uno.setAttribute("style", "transform:scale(0.95,0.95)")
})
uno.addEventListener("mouseout", function() {
    uno.setAttribute("style", "transform:scale(1,1)")
})
dos.addEventListener("mousedown", function() {
    dos.setAttribute("style", "transform:scale(0.95,0.95)")
})
dos.addEventListener("mouseout", function() {
    dos.setAttribute("style", "transform:scale(1,1)")
})
tres.addEventListener("mousedown", function() {
    tres.setAttribute("style", "transform:scale(0.95,0.95)")
})
tres.addEventListener("mouseout", function() {
    tres.setAttribute("style", "transform:scale(1,1)")
})
cuatro.addEventListener("mousedown", function() {
    cuatro.setAttribute("style", "transform:scale(0.95,0.95)")
})
cuatro.addEventListener("mouseout", function() {
    cuatro.setAttribute("style", "transform:scale(1,1)")
})
cinco.addEventListener("mousedown", function() {
    cinco.setAttribute("style", "transform:scale(0.95,0.95)")
})
cinco.addEventListener("mouseout", function() {
    cinco.setAttribute("style", "transform:scale(1,1)")
})
seis.addEventListener("mousedown", function() {
    seis.setAttribute("style", "transform:scale(0.95,0.95)")
})
seis.addEventListener("mouseout", function() {
    seis.setAttribute("style", "transform:scale(1,1)")
})
siete.addEventListener("mousedown", function() {
    siete.setAttribute("style", "transform:scale(0.95,0.95)")
})
siete.addEventListener("mouseout", function() {
    siete.setAttribute("style", "transform:scale(1,1)")
})
ocho.addEventListener("mousedown", function() {
    ocho.setAttribute("style", "transform:scale(0.95,0.95)")
})
ocho.addEventListener("mouseout", function() {
    ocho.setAttribute("style", "transform:scale(1,1)")
})
nueve.addEventListener("mousedown", function() {
    nueve.setAttribute("style", "transform:scale(0.95,0.95)")
})
nueve.addEventListener("mouseout", function() {
    nueve.setAttribute("style", "transform:scale(1,1)")
})
cero.addEventListener("mousedown", function() {
    cero.setAttribute("style", "transform:scale(0.95,0.95)")
})
cero.addEventListener("mouseout", function() {
    cero.setAttribute("style", "transform:scale(1,1)")
})
sign.addEventListener("mousedown", function() {
    sign.setAttribute("style", "transform:scale(0.95,0.95)")
})
sign.addEventListener("mouseout", function() {
    sign.setAttribute("style", "transform:scale(1,1)")
})
raiz.addEventListener("mousedown", function() {
    raiz.setAttribute("style", "transform:scale(0.95,0.95)")
})
raiz.addEventListener("mouseout", function() {
    raiz.setAttribute("style", "transform:scale(1,1)")
})
division.addEventListener("mousedown", function() {
    division.setAttribute("style", "transform:scale(0.95,0.95)")
})
division.addEventListener("mouseout", function() {
    division.setAttribute("style", "transform:scale(1,1)")
})
multiplicacion.addEventListener("mousedown", function() {
    multiplicacion.setAttribute("style", "transform:scale(0.95,0.95)")
})
multiplicacion.addEventListener("mouseout", function() {
    multiplicacion.setAttribute("style", "transform:scale(1,1)")
})
punto.addEventListener("mousedown", function() {
    punto.setAttribute("style", "transform:scale(0.95,0.95)")
})
punto.addEventListener("mouseout", function() {
    punto.setAttribute("style", "transform:scale(1,1)")
})
resta.addEventListener("mousedown", function() {
    resta.setAttribute("style", "transform:scale(0.95,0.95)")
})
resta.addEventListener("mouseout", function() {
    resta.setAttribute("style", "transform:scale(1,1)")
})
igual.addEventListener("mousedown", function() {
    igual.setAttribute("style", "transform:scale(0.95,0.95)")
})
igual.addEventListener("mouseout", function() {
    igual.setAttribute("style", "transform:scale(1,1)")
})
suma.addEventListener("mousedown", function() {
    suma.setAttribute("style", "transform:scale(0.95,0.95)")
})
suma.addEventListener("mouseout", function() {
    suma.setAttribute("style", "transform:scale(1,1)")
})
resetear.addEventListener("mousedown", function() {
    resetear.setAttribute("style", "transform:scale(0.95,0.95)")
})
resetear.addEventListener("mouseout", function() {
    resetear.setAttribute("style", "transform:scale(1,1)")
})

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

    if (resultado.textContent.length <= 8) {
        resultado.textContent = res;
    }
    if (resultado.textContent.length > 8) {
        resultado.textContent = res.toExponential(2);
    }
}
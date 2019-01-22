//Declaración de variables
var nombreUsuario = "Acamica",
    saldoCuenta = 20000,
    limiteExtraccion = 4000,
    agua = 350,
    teléfono = 425,
    luz = 210,
    internet = 570,
    total = 1555;

//Ejecución de las funciones que actualizan los valores de las variables en el HTML.

window.onload = function() {
    cargarNombreEnPantalla();
    actualizarSaldoEnPantalla();
    actualizarLimiteEnPantalla();
}

//Funciones que tenes que completar .......poner limite extraccion diaria

// funcion para cambiar el limite de extraccion de la cuenta

function cambiarLimiteDeExtraccion() {
    var monto = prompt("ingresa el nuevo limite de extraccion") * 1;
    if (menorACero(monto) == true) {
        alert("monto invalido");
    } else if (anular(monto) == true) {
        alert("operacion cancelada");
    } else if (confirmar() == false) {
        alert("operacion cancelada");
    } else {
        limiteExtraccion = monto;
        actualizarLimiteEnPantalla();
        alert("Tu nuevo limite de extraccion es de $ " + limiteExtraccion);
    }
}


//funcion para extraer dinero

function extraerDinero() {
    var extraccion = prompt("Ingresa el monto a Retirar") * 1;
    saldoAnterior = saldoCuenta;
    if (menorACero(extraccion)) {
        alert("monto invalido");
    } else if (isNaN(extraccion)) {
        alert("monto invalido");
    } else if (extraccion >= limiteExtraccion) {
        alert("El monto a extraer debe ser menor a " + limiteExtraccion);
    } else if (extraccion > saldoCuenta) {
        alert("saldo insuficiente");
    } else if (extraccion % 100 != 0) {
        alert("solo puedes retirar billetes de $100");
    } else if (confirmar() == false) {
        alert("operacion cancelada");
    } else {
        resta(extraccion);
        actualizarSaldoEnPantalla();
        alert("tu saldo anterior era $ " + saldoAnterior +
            "\nRetiraste $ " + extraccion +
            "\nsaldoactual $ " + saldoCuenta
        );

    }
}

//funcion para realizar deposito de dinero

function depositarDinero() {
    var monto = prompt("ingrese el monto a depositar") * 1,
        saldoAnterior = saldoCuenta;
    if (menorACero(monto)) {
        alert("monto invalido");
    } else if (anular(monto)) {
        alert("monto invalido");
    } else if (confirmar() == false) {
        alert("operacion cancelada");
    } else {
        suma(monto);
        actualizarSaldoEnPantalla();
        alert("tu saldo anterior era $ " + saldoAnterior +
            "\ndepositaste $ " + monto +
            "\nsaldoactual $ " + saldoCuenta
        );
    }
}


//funcion para pagar servicios

function pagarServicio() {
    var servicio = prompt("Seleccioná el numero del servicio que deseas abonar" +
            "\n1-Agua $ 350" +
            "\n2-Teléfono $425" +
            "\n3-Luz $210" +
            "\n4-Internet $ 570" +
            "\n5-total $ 1555"
        ) * 1,
        saldoAnterior = saldoCuenta;

    switch (servicio) {
        case 1:
            pagar(agua, saldoAnterior);
            break
        case 2:
            pagar(teléfono, saldoAnterior);
            break
        case 3:
            pagar(luz, saldoAnterior);
            break
        case 4:
            pagar(internet, saldoAnterior);
            break
        case 5:
            pagar(total, saldoAnterior);
            break
        default:
            alert("Operación inválida");
    }
}

// funcion para transferir dinero a cuentas amigas

function transferirDinero() {
    var transferir = prompt("ingresa el monto que deseas transferir") * 1;
    if (menorACero(transferir)) {
        alert("monto invalido");
    } else if (anular(transferir)) {
        alert("monto invalido");
    } else {
        var cuenta = prompt("ingresa el numero de cuenta") * 1,
            saldoAnterior = saldoCuenta;
        switch (cuenta) {
            case 1234567:
                anular(transferir);
                pagar(transferir, saldoAnterior);
                break
            case 7654321:
                anular(transferir);
                pagar(transferir, saldoAnterior);
                break
            default:
                alert("Operación inválida");
        }
    }
}

//funcion para cargar sesion

function iniciarSesion() {
    var un = document.loginform.usr.value,
        pw = document.loginform.pword.value,
        nombreUsuario = "Acamica",
        seguridad = "4772";

    if ((un == nombreUsuario) && (pw == seguridad)) {
        alert("bienvenido/a Acamica ya puedes comenzar a realizar operaciones")
        return true;
    } else {
        alert("Usuario o contraseña incorrecto");
        return false;
    }
}

//Funciones que actualizan el valor de las variables en el HTML

function cargarNombreEnPantalla() {
    document.getElementById("nombre").innerHTML = "Bienvenido/a " + nombreUsuario;
}

function actualizarSaldoEnPantalla() {
    document.getElementById("saldo-cuenta").innerHTML = "$" + saldoCuenta;
}

function actualizarLimiteEnPantalla() {
    document.getElementById("limite-extraccion").innerHTML = "Tu límite de extracción es: $" + limiteExtraccion;
}

//funciones complementarias

function suma(x) {
    saldoCuenta = saldoCuenta + x;
}

function menorACero(valor) {
    if (valor <= 0) {
        return true
    }
}

function resta(x) {
    saldoCuenta = saldoCuenta - x;
}

function anular(x) {
    if (x == null) {
        return true
    }

}

function pagar(x, y) {

    if (x > saldoCuenta) {
        alert("saldo insuficiente");
    } else if (confirmar() == false) {
        alert("operacion cancelada");
    } else {
        resta(x)
        actualizarSaldoEnPantalla()
        alert("tu saldo anterior era $ " + y +
            "\nUtilizaste  $ " + x +
            "\nsaldoactual $ " + saldoCuenta
        );
    }
}

function confirmar() {
    if (confirm('confirmas la operacion')) {
        return true;
    } else {
        return false;
    }
}
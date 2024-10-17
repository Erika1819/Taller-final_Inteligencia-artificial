let balance = 1000;  // Saldo inicial
let users = ["12345", "67890"];  // Usuarios válidos

// Validar usuario
function validateUser() {
    let userId = document.getElementById('userId').value;
    if (users.includes(userId)) {
        document.getElementById('login-section').style.display = "none";
        document.getElementById('atm-section').style.display = "block";
        document.getElementById('user').innerText = userId;
        document.getElementById('balance').innerText = balance;
    } else {
        alert("Usuario no válido");
    }
}

// Consultar saldo
function consultarSaldo() {
    alert("Su saldo actual es: $" + balance);
}

// Retirar dinero
function retirar() {
    let cantidad = parseFloat(prompt("¿Cuánto desea retirar?"));
    if (cantidad > balance) {
        alert("No tiene suficiente saldo.");
    } else if (cantidad > 0) {
        balance -= cantidad;
        alert("Retiro exitoso. Su saldo actual es: $" + balance);
        document.getElementById('balance').innerText = balance;
    } else {
        alert("Por favor, ingrese una cantidad válida.");
    }
}

// Consignar dinero
function consignar() {
    let cantidad = parseFloat(prompt("¿Cuánto desea consignar?"));
    if (cantidad > 0) {
        balance += cantidad;
        alert("Consignación exitosa. Su saldo actual es: $" + balance);
        document.getElementById('balance').innerText = balance;
    } else {
        alert("Por favor, ingrese una cantidad válida.");
    }
}

// Añadir event listener al botón de despedida
document.getElementById('salir-btn').addEventListener('click', despedida);

// Evento de despedida
function despedida() {
    alert("Gracias por usar nuestro servicio.");
    document.getElementById('atm-section').style.display = "none";
    document.getElementById('goodbye-section').style.display = "block";
    setTimeout(function() {
        location.reload();  // Reiniciar la página después de 3 segundos
    }, 3000);
}

// Añadir event listeners a los botones
document.getElementById('consultar-btn').addEventListener('click', consultarSaldo);
document.getElementById('retirar-btn').addEventListener('click', retirar);
document.getElementById('consignar-btn').addEventListener('click', consignar);

// Evento de despedida
function despedida() {
    document.getElementById('atm-section').style.display = "none";
    document.getElementById('goodbye-section').style.display = "block";
    setTimeout(function() {
        location.reload();  // Reiniciar la página
    }, 3000);
}

// Añadir event listeners a los botones
document.getElementById('consultar-btn').addEventListener('click', consultarSaldo);
document.getElementById('retirar-btn').addEventListener('click', retirar);
document.getElementById('consignar-btn').addEventListener('click', consignar);

// Añadir event listener al botón de despedida
document.getElementById('salir-btn').addEventListener('click', despedida);

// Evento de despedida
function despedida() {
    alert("Gracias por usar nuestro servicio.");
    document.getElementById('atm-section').style.display = "none";
    document.getElementById('goodbye-section').style.display = "block";
    setTimeout(function() {
        location.reload();  // Reiniciar la página después de 3 segundos
    }, 3000);
}

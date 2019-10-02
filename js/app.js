
var user = document.getElementById('user');
var pass = document.getElementById('pass');

function inicio() {
    if (user.value.length == 0 || pass.value.length == 0) {
        alert("Incompleto")
    } else {
        if (user.value == "admin" && pass.value == "admin") {
            window.location = "inicioadministrador.html";
            alert("correcto");
            console.log("Usuario: " + user.value);
            console.log("Contraseña: " + pass.value);
            console.log("Credenciales validas");

        } else {
            if (user.value == "usuario" && pass.value == "usuario") {
                window.location = "index.html";
                alert("correcto");
                console.log("Usuario: " + user.value);
                console.log("Contraseña: " + pass.value);
                console.log("Credenciales validas");

            } else {
                alert("usuario y/o contraseña incorrectos");
            }
        }
    }
}
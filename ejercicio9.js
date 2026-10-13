let usuario = "admin";
let contrasena = "1234";

if (usuario === "admin") {
    if (contrasena === "12345") {
        console.log("Acceso concedido");
    } else {
        console.log("Contraseña incorrecta");
    }
} else {
    console.log("Usuario no encontrado");
}
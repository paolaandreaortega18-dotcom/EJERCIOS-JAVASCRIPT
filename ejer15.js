let n = 5;

for (let i = 1; i <= 2 * n - 1; i++) {

    let fila = "";
 
    let cantidad;

    if (i <= n) {
        cantidad = 2 * i - 1;
    } else {
        cantidad = 2 * (2 * n - i) - 1;
    }

    let espacios = (2 * n - 1 - cantidad) / 2;

    fila = " ".repeat(espacios);

    fila = fila + "*".repeat(cantidad);

    console.log(fila);
}
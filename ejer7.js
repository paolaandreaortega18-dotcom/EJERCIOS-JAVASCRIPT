let n = 5;

for (let i = 1; i <= n; i++) {

    let fila = "";

    for (let j = 1; j <= i; j++) {
        fila = fila + j + " ";
    }

    for (let j = i - 1; j >= 1; j--) {
        fila = fila + j + " ";
    }

    console.log(fila);
}

for (let i = n - 1; i >= 1; i--) {

    let fila = "";

    for (let j = 1; j <= i; j++) {
        fila = fila + j + " ";
    }

    for (let j = i - 1; j >= 1; j--) {
        fila = fila + j + " ";
    }

    console.log(fila);
}
for (let numero = 2; numero <= 1000; numero++) {

    let esPrimo = true;

    for (let divisor = 2; divisor < numero; divisor++) {

        if (numero % divisor === 0) {
            esPrimo = false;
            break;
        }
    }

    if (esPrimo) {
        console.log(numero);
    }
}

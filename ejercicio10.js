let totalCompra = 150000;
let esCliente = true;
let descuento = 0;
let valorDescuento = 0;
let totalPagar = 0;

if (totalCompra > 100000) {
    if (esCliente == false) {
        descuento = 20;
    } else {
        descuento = 10;
    }
} else {
    if (esCliente == true) {
        descuento = 5;
    } else {
        descuento = 0;
    }
}

valorDescuento = totalCompra * descuento / 100;
totalPagar = totalCompra - valorDescuento;

console.log("Valor de la compra:");
console.log(totalCompra);
console.log("Descuento:");
console.log(descuento);
console.log("Valor del descuento:");
console.log(valorDescuento);
console.log("Total a pagar:");
console.log(totalPagar);
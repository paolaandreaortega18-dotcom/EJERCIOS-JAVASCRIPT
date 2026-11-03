let suma1 = 0;
let i = 1;

do {
    suma1 = suma1 + i;
    i++;
} while (i <= 100);

console.log("Suma con do-while: " + suma1);



let suma2 = 0;
let j = 1;

while (j <= 100) {
    suma2 = suma2 + j;
    j++;
}

console.log("Suma con while: " + suma2);



let suma3 = 0;

for (let k = 1; k <= 100; k++) {
    suma3 = suma3 + k;
}

console.log("Suma con for: " + suma3);
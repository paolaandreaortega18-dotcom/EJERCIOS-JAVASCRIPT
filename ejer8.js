const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Ingrese la cantidad de filas: ", function(respuesta) {
  let n = Number(respuesta);

  for (let i = 1; i <= n; i++) {
    let fila = "";
    for (let j = 1; j <= i; j++) {
      fila = fila + j + " ";
    }
    console.log(fila);
  }

  rl.close();
});
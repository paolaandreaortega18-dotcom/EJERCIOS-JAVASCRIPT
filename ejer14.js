const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Ingrese la cantidad de filas: ", (respuesta1) => {
  let m = Number(respuesta1);

  rl.question("Ingrese la cantidad de columnas: ", (respuesta2) => {
    let n = Number(respuesta2);

    rl.question("Ingrese el carácter: ", (caracter) => {

      for (let i = 1; i <= m; i++) {
        let fila = "";
        for (let j = 1; j <= n; j++) {
          fila = fila + caracter + " ";
        }
        console.log(fila);
      }

      rl.close();
    });
  });
});
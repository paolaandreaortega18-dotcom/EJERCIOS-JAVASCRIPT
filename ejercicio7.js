let nota = 94;

if (nota < 0 || nota > 100) {
    console.log("Nota inválida");
} else if (nota >= 90) {
    console.log("Calificación: A");
} else if (nota >= 80) {
    console.log("Calificación: B");
} else if (nota >= 70) {
    console.log("Calificación: C");
} else if (nota >= 60) {
    console.log("Calificación: D");
} else {
    console.log("Calificación: F");
}
let n = 5;

for (let i = 1; i <= n; i++) {

    for (let j = n - i; j > 0; j--) {
    
        process.stdout.write(" ");
    }

    for (let j = 1; j < 2 * i; j++) {
        process.stdout.write("*");
    }

    console.log();
}
for (let i = n - 1; i >= 1; i--) {

    for (let j = n - i; j > 0; j--) {
        process.stdout.write(" ");
    }

    for (let j = 1; j < 2 * i; j++) {
        process.stdout.write("*");
    }
    console.log();
}
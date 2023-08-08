// ini tidak bisa diubah
const readline = require("readline");
const rl= readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});    

rl.question("Masukkan sebuah kalimat: ", (kalimat) => {
        const kalimattrimmed = kalimat.trim();
        console.log(`Kalimat setelah di trim: ${kalimattrimmed}`);
        rl.close();
    });
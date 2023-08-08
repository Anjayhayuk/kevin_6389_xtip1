// ini tidak bisa diubah
const readline = require("readline");
const rl= readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});    

rl.question("Masukkan sebuah kalimat: ", (kalimat) => {
        const kalimatlowercase = kalimat.toLowerCase();
        console.log(`Kalimat dalam huruf kecil: ${kalimatlowercase}`);
        rl.close();
    });

    
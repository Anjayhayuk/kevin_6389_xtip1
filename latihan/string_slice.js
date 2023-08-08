// ini tidak bisa diubah
const readline = require("readline");
const rl= readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});    

rl.question("Masukkan sebuah kalimat: ", (kalimat) => {
    rl.question("Masukkan indeks awal: ", (startIndex) => {
        rl.question("Masukkan indeks akhir: ", (endIndex) => {
            startIndex = Number(startIndex);
            endIndex = Number(endIndex);
            const slicesubstring = kalimat.slice(startIndex, endIndex);
            console.log(`hasil slice dari indeks ${startIndex} hingga ${endIndex}: ${slicesubstring}`);
            rl.close();
        });
    });
});
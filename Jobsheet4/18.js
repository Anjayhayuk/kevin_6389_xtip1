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
            const substringresult = kalimat.substring(startIndex, endIndex);
            console.log(`Hasil substring dari indeks ${startIndex} hingga ${endIndex}: ${substringresult}`);
            rl.close();
        });
    });
});

//Masukkan sebuah kalimat: SMK Strada Jakarta
//Masukkan indeks awal: 0
//Masukkan indeks akhir: 3
//Hasil substring dari indeks 0 hingga 3: SMK

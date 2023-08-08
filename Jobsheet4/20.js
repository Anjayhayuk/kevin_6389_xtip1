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

//Masukkan sebuah kalimat: Universitas Sudirman merupakan universitas yang terleta
//k di kota Purwokerto
//Masukkan indeks awal: 3
//Masukkan indeks akhir: 10
//Hasil substring dari indeks 3 hingga 10: versita

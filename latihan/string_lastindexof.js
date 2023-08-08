// ini tidak bisa diubah
const readline = require("readline");
const rl= readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});    

rl.question("Masukkan sebuah kalimat: ", (kalimat) => {
    rl.question("Masukkan kata yang ingin anda cari: ", (kataCari) => {
        const indekskataterakhir = kalimat.lastIndexOf(kataCari);
        if (indekskataterakhir !== -1) {
            console.log(`Kata '${kataCari}' ditemukan pada indeks terakhir: ${indekskataterakhir}`);
        } else {
            console.log(`Kata '${kataCari}' tidak ditemukan dalam kalimat.`);
        }
        rl.close();
    });
});
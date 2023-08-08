// ini tidak bisa diubah
const readline = require("readline");
const rl= readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});    

rl.question("Masukkan sebuah kalimat: ", (kalimat) => {
    rl.question("Masukkan kata yang ingin anda cari: ", (kataCari) => {
        const indekskata = kalimat.indexOf(kataCari);
        if (indekskata !== -1) {
            console.log(`Kata '${kataCari}' ditemukan pada indeks: ${indekskata}`);
        } else {
            console.log(`Kata '${kataCari}' tidak ditemukan dalam kalimat.`);
        }
        rl.close();
    });
});

//Masukkan sebuah kalimat: Ibu ani pergi ke sebuah pasar untuk membeli buah apel d
//an buah melon
//Masukkan kata yang ingin anda cari: apel
//Kata 'apel' ditemukan pada indeks: 49

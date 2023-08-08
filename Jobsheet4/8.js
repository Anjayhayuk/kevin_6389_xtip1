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

//Masukkan sebuah kalimat: I love programming
//Masukkan kata yang ingin anda cari: g
//Kata 'g' ditemukan pada indeks: 10

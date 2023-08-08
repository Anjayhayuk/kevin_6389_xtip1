// ini tidak bisa diubah
const readline = require("readline");
const rl= readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});    

rl.question("Masukkan sebuah kalimat: ", (kalimat) => {
    rl.question("Masukkan indeks awal: ", (startIndex) => {
        rl.question("Masukkan panjang substring: ", (length) => {
            startIndex = Number(startIndex);
            length = Number(length);
            const substringresult = kalimat.substr(startIndex, length);
            console.log(`hasil substring dari indeks ${startIndex} dengan panjang ${length}: ${substringresult}`);
            rl.close();
        });
    });
});

//Masukkan sebuah kalimat: Bahasa yang digunakan untuk membuat aplikasi mobile ada
//lah Kotlin dan Javascript
//Masukkan indeks awal: 7
//Masukkan panjang substring: 8
//hasil substring dari indeks 7 dengan panjang 8: yang dig

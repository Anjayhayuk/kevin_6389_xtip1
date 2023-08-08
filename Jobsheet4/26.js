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

//Masukkan sebuah kalimat: Welcome to the world of programming
//Masukkan indeks awal: 11
//Masukkan panjang substring: 5
//hasil substring dari indeks 11 dengan panjang 5: the w

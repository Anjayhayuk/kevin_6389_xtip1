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

//Masukkan sebuah kalimat: Jika anda ingin menjadi orang sukses, jangan berhenti u
//ntuk bermimpi
//Masukkan indeks awal: 7
//Masukkan panjang substring: 60
//hasil substring dari indeks 7 dengan panjang 60: da ingin menjadi orang sukses,
//jangan berhenti untuk bermimp

// ini tidak bisa diubah
const readline = require("readline");
const rl= readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});    

rl.question("Masukkan kalimat pertama: ", (kalimat1) => {
    rl.question("Masukkan kalmat kedua: ", (kalimat2) => {
        const kalimatGabungan = kalimat1.concat(kalimat2);
        console.log(`Hasil penggabungan: ${kalimatGabungan}`);
        rl.close();
    })
})

//Masukkan kalimat pertama: Hello
//Masukkan kalmat kedua:  world
//Hasil penggabungan: Hello world

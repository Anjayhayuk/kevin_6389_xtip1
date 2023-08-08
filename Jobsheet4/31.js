const readline = require("readline");
const rl= readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});    

rl.question("Masukkan sebuah kalimat: ", (kalimat) => {
        const kalimatuppercase = kalimat.toUpperCase();
        console.log(`Kalimat dalam huruf besar: ${kalimatuppercase}`);
        rl.close();
    });

  //  Masukkan sebuah kalimat: Data analyst merupakan pekerjaan yang dibutuhkan bebera
//pa perusahaan
//Kalimat dalam huruf besar: DATA ANALYST MERUPAKAN PEKERJAAN YANG DIBUTUHKAN BEBE
//RAPA PERUSAHAAN

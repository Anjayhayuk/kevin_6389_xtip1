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

  //  Masukkan sebuah kalimat: Node.js itu asik sekali loh
//Kalimat dalam huruf besar: NODE.JS ITU ASIK SEKALI LOH

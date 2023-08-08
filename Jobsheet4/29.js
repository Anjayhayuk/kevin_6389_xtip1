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

   // Masukkan sebuah kalimat: I love Programming
//Kalimat dalam huruf besar: I LOVE PROGRAMMING

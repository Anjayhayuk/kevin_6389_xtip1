// ini tidak bisa diubah
const readline = require("readline");
const rl= readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});    

// charAt
rl.question("Masukkan sebuah kalimat: ", (inputString) => {
    rl.question("Masukkannindeks yang ingin anda cek: ", (index) => {
        index = Number(index);
        if (index >= 0 && index < inputString.length) {
            const character = inputString.charAt(index);
            console.log(`Karakter pada indeks ${index}: ${character}`)
        } else {
            console.log("Indeks tidak valid!");
        }
        rl.close();
    });
});

//Masukkan sebuah kalimat: Republik Indonesia
//Masukkannindeks yang ingin anda cek: 7
//Karakter pada indeks 7: k
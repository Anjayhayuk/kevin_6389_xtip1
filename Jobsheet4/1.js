// ini tidak bisa diubah
const readline = require("readline");
const rl= readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});     

rl.question("Masukkan sebuah kalimat: ", (inputString) => {
    // Contoh property length
    console.log(`Panjang kalimat: ${inputString.length}`);
    rl.close();
});
// Masukkan sebuah kalimat: Budi adalah seorang siswa jurusan RPL yang tinggal dida
// erah Bekasi
// Panjang kalimat: 66

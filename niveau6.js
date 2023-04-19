function table(){
    const prompt = require("prompt-sync")();
    const base = +prompt("entrez la base: ");
    const borneinf = +prompt("entrez la borne inferieur: ");
    const bornesup = +prompt("entrez la borne superieur:")
    for (let i = borneinf; i <= bornesup; i++){
        console.log(base+" x "+i+" = "+(base*i))
    }
}
table();
function equalLength(){
    const prompt = require("prompt-sync")();
    const rep1 = prompt("Entrez un mot ");
    const rep2 = prompt("Entrez un autre mot ");
    const long1 = rep1.length;
    const long2 = rep2.length;
    if (long1 == long2){
        console.log(long1 == long2);
    }
}
equalLength();

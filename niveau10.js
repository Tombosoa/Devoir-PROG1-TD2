const prompt = require("prompt-sync")();
const rep = prompt("saisir un mot: ");
let text = rep.split('');
const re = prompt("saisir une caractere: ");
function cherche(mot){
    let k = 0;
    for (let j = 0; j < text.length; j++){
        if (mot == text[j])
        k++;
    }
    return k;
}
console.log(re+" : est répété "+ cherche(re)+" fois");
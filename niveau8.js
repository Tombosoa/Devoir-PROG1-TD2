let tab = [];
function countAdults(){
    const prompt = require("prompt-sync")();
    const rep = +prompt("entre l'age: ");
    tab.push(rep);
    const quest = prompt("voulez vous en rajouter un age? ");
    if (quest == "non"){
        const major = tab.filter(n => n >= 18);
        console.log(major.length);
    }
    else if (quest == "oui"){
        return countAdults();
    }
}
countAdults();
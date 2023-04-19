const tab = new Array();
function pair(){
    const prompt = require("prompt-sync")();
    const rep = +prompt("Ajoutez un chiffre ");
    tab.push(rep)
    const quest = prompt("voulez vous en rajouter un autre? ")
    if (quest == "non"){
        const paire = tab.filter(n => n%2 == 0);
        console.log(paire);
        console.log("il y a "+paire.length+" nb paire dans le tableau");
    }
    else if(quest == "oui"){
        return pair();
    }
}

pair();
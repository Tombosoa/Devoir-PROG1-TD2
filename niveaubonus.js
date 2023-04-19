const prompt = require("prompt-sync")();
const en = +prompt("saisir n: ");
const pe = +prompt("saisir p: ");

function factorielle(n){
    if (n == 0)
    return 1;
    return factorielle(n - 1)*n;
}

function combinaison(n,p){
   let combi = (factorielle(n))/((factorielle(p))*(factorielle(n - p)));
   console.log(combi);
}

combinaison(en, pe);

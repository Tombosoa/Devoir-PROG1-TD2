/*const tab = [3, 4, 5, 23];
let sup = tab.reduce(function(a,b){return Math.max(a, b);})
let inf = tab.reduce(function(a,b){return Math.min(a, b);})
console.log(sup, inf);*/

let tab = [];
function search_max(){
    const prompt = require("prompt-sync")();
    const rep = +prompt("saisir un nombre: ")
    tab.push(rep);
    const quest = prompt("voulez vous en saisir un autre? ");
    if (quest == "non"){
        let sup = tab.reduce(function(a, b){return Math.max(a, b);})
        console.log("Le plus grand nb est: "+sup);
    }
    else if (quest == "oui"){
        return search_max();
    }
}
search_max();

let tab1 = [];
function search_min(){
    const prompt = require("prompt-sync")();
    const rep = +prompt("saisir un nombre: ")
    tab1.push(rep);
    const quest = prompt("voulez vous en saisir un autre? ");
    if (quest == "non"){
        let inf = tab1.reduce(function(a, b){return Math.min(a, b);})
        console.log("La plus petite nb est "+inf);
    }
    else if (quest == "oui"){
        return search_min();
    }
}
search_min();
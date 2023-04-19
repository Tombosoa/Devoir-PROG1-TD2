function convertisseur(){
    const prompt = require("prompt-sync")();
    const rep = +prompt("saisir le nombre à convertir ");
    /*const tab = ['1-en mm ', '2-en inch ', '3-en px ', '4-en pt ', '5-en pc '];
    console.log(tab[0], tab[1], tab[2], tab[3], tab[4]);
    const choix = +prompt("Choisir l'unité que vous voulez le convertir ")*/
    const enmm = rep*10;
    const enpx = rep*37.79;
    const eninch = rep/2.54;
    const enpt = eninch*72;
    const enpc = rep*3.24078e-19;
    /*if (choix == 1){
        console.log(enmm+" mm")
    }
    else if(choix == 2){
        console.log(eninch+" inch")
    }
    else if(choix == 4){
        console.log(enpt+" pt")
    }
    else if(choix == 5){
        console.log(enpc+" pc")
    }*/
    console.log(enmm+" mm, "+eninch+" inch, "+enpt+" pt, "+enpx+" px,"+enpc+" pc.")
    const quest = prompt("voulez vous saisir une autre valeur? ");
    if (quest == "non"){
        return 0;
    }
    else if (quest == "oui"){
        return convertisseur();
    }
    
}
convertisseur();
function ageInDays(){
    const prompt = require("prompt-sync")();
    const rep = +prompt("Veuillez saisir votre age ");
    let indays = rep * 365;
    console.log("vous avez "+indays+" jours");
}
ageInDays();
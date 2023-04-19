function fois(n,p){
    let somme = 0;
    for (let i = 0; i < p; i++) {
        somme = somme + n;
    }
    return somme;
}
console.log(fois(3,8));
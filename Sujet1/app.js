// Fonction calc
function calc(array, n1, n2){
    let somme = 0;
    if (n1 <= 0 || n1 > array.lengh || n2 <= 0 || n2 > array.lengh) {
        console.error("n1 et n2 doivent être compris entre 0 et la taille du tableau");
    } else {
        for(let i = n1; i <= n2; i++) {
            somme += array[i];
        }
        return somme;
    }

}

console.log(calc([0,4,12,111,536,796,57,88,336], 2,6));
console.log(calc([0,4,12,111,536,796,57,88,336], 0,20));

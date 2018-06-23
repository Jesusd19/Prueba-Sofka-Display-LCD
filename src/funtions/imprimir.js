function print(numeroImprimir, arrayAux) {
    var b = [arrayAux.length];
    for (let i = 0; i < arrayAux.length; i++) {
        b[i] = arrayAux[i].concat(" ", numeroImprimir[i].toString());
    }
    return b;    
}
function cleanPrint(aux) {
    var b = [];
    for (let i = 0; i < aux.length; i++) {
        b[i] = aux[i].replace(/,/g, ' ');
    }
    for (let j = 0; j < b.length; j++) {
        console.log(b[j]);
    }
}
module.exports = {
    print,
    cleanPrint
}

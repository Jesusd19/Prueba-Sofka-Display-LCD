const { print, cleanPrint } = require('./imprimir');
const { numberOne, numberZero, numberTwo, numberThree, numberFour, numberFive, numberSix,
    numberSeven, numberEight, numberNine, numberTen } = require('./generarMatriz');

function opcionesImprimirNumeros(size, numerosGraficar) {
    var arrayAux = new Array((2 * (size)) + 3);
    arrayAux.fill("");
    for (let i = 0; i < numerosGraficar.length; i++) {
        switch (+numerosGraficar[i]) {
            case 0:
                arrayAux = print(numberZero(size), arrayAux);
                break;
            case 1:
                arrayAux = print(numberOne(size), arrayAux);
                break;
            case 2:
                arrayAux = print(numberTwo(size), arrayAux);
                break;
            case 3:
                arrayAux = print(numberThree(size), arrayAux);
                break;
            case 4:
                arrayAux = print(numberFour(size), arrayAux);
                break;
            case 5:
                arrayAux = print(numberFive(size), arrayAux);
                break;
            case 6:
                arrayAux = print(numberSix(size), arrayAux);
                break;
            case 7:
                arrayAux = print(numberSeven(size), arrayAux);
                break;
            case 8:
                arrayAux = print(numberEight(size), arrayAux);
                break;
            case 9:
                arrayAux = print(numberNine(size), arrayAux);
                break;
            default:
                break;
        }
    }
    cleanPrint(arrayAux);
}

module.exports = {
    opcionesImprimirNumeros
}

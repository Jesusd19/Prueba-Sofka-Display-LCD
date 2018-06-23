/*****  size+2 columnas y 2*size + 3 filas. *****/
var vertical = "|", horizontal = "-";

function matrizDefault(size) {
    var [filas, columnas] = [2 * size + 3, size + 2];
    matrix = new Array(filas);
    for (let i = 0; i < filas; i++) {
        matrix[i] = new Array(columnas).fill(" ");
    }
    return matrix;
}

function numberZero(size) {
    var numberZeroMatriz = matrizDefault(size);

    for (let i = 1; i < numberZeroMatriz.length - 1; i++) {
        numberZeroMatriz[i][0] = vertical;
        numberZeroMatriz[i][numberZeroMatriz[0].length - 1] = vertical;

    }

    for (let j = 1; j < numberZeroMatriz[0].length - 1; j++) {
        numberZeroMatriz[0][j] = horizontal;
        numberZeroMatriz[numberZeroMatriz.length - 1][j] = horizontal;

    }
    numberZeroMatriz[Math.floor((numberZeroMatriz.length) / 2)][numberZeroMatriz[0].length - 1] = " ";
    numberZeroMatriz[Math.floor((numberZeroMatriz.length) / 2)][0] = " ";
    return numberZeroMatriz;
}

function numberOne(size) {
    var numberOneMatriz = matrizDefault(size);
    for (let i = 1; i < numberOneMatriz.length - 1; i++) {
        numberOneMatriz[i][numberOneMatriz[0].length - 1] = vertical;
    }
    numberOneMatriz[Math.floor((numberOneMatriz.length) / 2)][numberOneMatriz[0].length - 1] = " ";
    return numberOneMatriz;
}


function numberTwo(size) {
    var numberTwoMatriz = matrizDefault(size);
    for (let i = 1; i < numberTwoMatriz[0].length - 1; i++) {
        numberTwoMatriz[0][i] = horizontal;
        numberTwoMatriz[Math.floor((numberTwoMatriz.length) / 2)][i] = horizontal;
        numberTwoMatriz[numberTwoMatriz.length - 1][i] = horizontal;
    }
    for (let j = 1; j < numberTwoMatriz.length - 1; j++) {
        if ((numberTwoMatriz.length / 2) - 1 > j)
            numberTwoMatriz[j][numberTwoMatriz[0].length - 1] = vertical;
        if ((numberTwoMatriz.length / 2) < j)
            numberTwoMatriz[j][0] = vertical;

    }
    return numberTwoMatriz;
}

function numberThree(size) {
    var numberThreeMatriz = matrizDefault(size);
    for (let i = 1; i < numberThreeMatriz[0].length - 1; i++) {
        numberThreeMatriz[0][i] = horizontal;
        numberThreeMatriz[Math.floor((numberThreeMatriz.length) / 2)][i] = horizontal;
        numberThreeMatriz[numberThreeMatriz.length - 1][i] = horizontal;
    }

    for (let j = 1; j < numberThreeMatriz.length - 1; j++) {
        numberThreeMatriz[j][numberThreeMatriz[0].length - 1] = vertical;
    }
    numberThreeMatriz[Math.floor((numberThreeMatriz.length) / 2)][numberThreeMatriz[0].length - 1] = " ";

    return numberThreeMatriz;
}

function numberFour(size) {
    var numberFourMatriz = numberOne(size);

    for (let j = 1; j < numberFourMatriz.length - 1; j++) {
        if ((numberFourMatriz.length / 2) - 1 > j)
        numberFourMatriz[j][0] = vertical;
    }
    for (let j = 1; j < numberFourMatriz[0].length; j++) {
        numberFourMatriz[Math.floor(numberFourMatriz.length / 2)][j] = horizontal;
    }
    numberFourMatriz[Math.floor((numberFourMatriz.length) / 2)][numberFourMatriz[0].length - 1] = " ";
    return numberFourMatriz;
}

function numberFive(size) {
    var numberFiveMatriz = matrizDefault(size);
    for (let i = 1; i < numberFiveMatriz[0].length - 1; i++) {
        numberFiveMatriz[0][i] = horizontal;
        numberFiveMatriz[Math.floor((numberFiveMatriz.length) / 2)][i] = horizontal;
        numberFiveMatriz[numberFiveMatriz.length - 1][i] = horizontal;
    }
    for (let j = 1; j < numberFiveMatriz.length - 1; j++) {
        if ((numberFiveMatriz.length / 2) < j)
        numberFiveMatriz[j][numberFiveMatriz[0].length - 1] = vertical;
        if ((numberFiveMatriz.length / 2) - 1 > j)
        numberFiveMatriz[j][0] = vertical;

    }
    return numberFiveMatriz;
}

function numberSix(size) {
    var numberSixMatriz = numberFive(size);
    for (let i = 1; i < numberSixMatriz.length - 1; i++) {
        if (Math.floor((numberSixMatriz.length) / 2) < i)
        numberSixMatriz[i][0] = vertical;
    }
    return numberSixMatriz;
}

function numberSeven(size) {
    var numberSevenMatriz = numberOne(size);
    for (let i = 1; i < numberSevenMatriz[0].length - 1; i++) {
        numberSevenMatriz[0][i] = horizontal;
    }
    numberSevenMatriz[0][numberSevenMatriz[0].length - 1] = " ";
    return numberSevenMatriz;
}

function numberEight(size) {
    var numberEightMatriz = numberZero(size);
    for (let i = 1; i < numberEightMatriz[0].length - 1; i++) {
        numberEightMatriz[Math.floor((numberEightMatriz.length) / 2)][i] = horizontal;
    }
    return numberEightMatriz;
}

function numberNine(size) {
    var numberNineMatriz = numberThree(size);
    for (let i = 1; i < (numberNineMatriz.length - 1) / 2; i++) {
        numberNineMatriz[i][0] = vertical;
    }
    return numberNineMatriz;
}


module.exports = {
    matrizDefault,
    numberOne,   
    numberZero, 
    numberTwo, 
    numberThree, 
    numberFour, 
    numberFive, 
    numberSix,
    numberSeven, 
    numberEight, 
    numberNine
}
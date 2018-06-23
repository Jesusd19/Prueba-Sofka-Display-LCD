function validacion(entrada) {
    var regexp = /([1-9]|10),\d+/;
    let matchs = Object.assign([], entrada.match(regexp));
    if (matchs[0] !== entrada) {
        throw new TypeError('El numero digitado no corresponde a lo esperado... Recuerde la estructura: 1,1234 4,5214 10,7548');
    } else {
        var cut = entrada.split(',');
        var size = +cut[0];
        var numbers = cut[1].split("").map((number) => +number);
    }
    return { size, numbers };
}
module.exports = {
    validacion
};
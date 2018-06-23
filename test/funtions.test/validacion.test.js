const { validacion } = require('../../src/funtions/validacion');

describe('validacion, todas la veces que debe de saltar el throw', () => {
    test('Si tienen letras antes de la , manda un CustomError', () => {
        expect(() => validacion("n,125")).toThrowError();
    });
    test('Si tienen letras despues de la , manda un CustomError', () => {
        expect(() => validacion("4,12k5")).toThrowError();
    });
    test('Si tiene el primer numero mayor que 10', () => {
        expect(() => validacion("12,7885")).toThrowError();
    });
    test('Si tienen el primer numero es menor que 1', () => {
        expect(() => validacion("0,44465")).toThrowError();
    });
    test('Si solo tiene la ,', () => {
        expect(() => validacion(",")).toThrowError();
    });
    test('Si no tiene nada despues de la ,', () => {
        expect(() => validacion("4521,")).toThrowError();
    });
    test('si no tienen nada antes ,', () => {
        expect(() => validacion(",95841")).toThrowError();
    });
    test('si hay espacios entre los numeros ,', () => {
        expect(() => validacion("1, 1 2 5")).toThrowError();
    });
    test('si hay le paso por parametro una sola letra', () => {
        expect(() => validacion("a")).toThrowError();
    });
    test('si hay le paso por parametro un solo numero', () => {
        expect(() => validacion("4")).toThrowError();
    });
    test('Si no le paso nada', () => {
        expect(() => validacion("")).toThrowError();
    });
    test('Si le paso varias separaciones con la ,', () => {
        expect(() => validacion("1,5,54,")).toThrowError();
    });
});

describe('Otros test', () => {
    test('si los numeros retornados corresponden al input', () => {
        var size = 1;        
        for (let index = 1; index <= 10; index++) {
            let inputs = size + ",7854"
            let validacion_input = validacion(inputs);
            expect(validacion_input.size).toBe(size);
            expect(validacion_input.numbers).toEqual([7, 8, 5, 4]);
            size++;
        }
    });
});


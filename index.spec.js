const numeroNarcisista = require('./index')

describe('index.js', () => {
    it('Deve retornar true se o número 153 for narcisista', () => {
        expect(numeroNarcisista(153)).toBe(true);
    });

    it('Deve retornar false se o número 122 não for narcisista', () => {
        expect(numeroNarcisista(122)).toBe(false);
    });


});
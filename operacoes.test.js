const { soma, subtracao, multiplicacao, divisao } = require('./operacoes');

// Testes para a função soma
test('a soma de 1 + 2 é igual a 3', () => {
    expect(soma(1, 2)).toBe(3);
});

// Testes para a função subtracao
test('a subtracao de 5 - 2 é igual a 3', () => {
    expect(subtracao(5, 2)).toBe(3);
});

// Testes para a função multiplicacao
test('a multiplicacao de 7 * 2 é igual a 14', () => {
    expect(multiplicacao(7, 2)).toBe(14);
});

// Testes para a função divisao
test('a divisao de 8 / 2 é igual a 4', () => {
    expect(divisao(8, 2)).toBe(4);
});

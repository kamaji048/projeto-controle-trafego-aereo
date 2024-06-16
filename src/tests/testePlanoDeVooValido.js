const assert = require('assert');

// Teste para validar a criação de um plano de voo válido
function testePlanoDeVooValido() {
  const piloto = new Piloto(1, 'João', 'ativo');
  const aeronave = new Aeronave('PP-ABC', 'passageiros', 800, 1500, 'Companhia X');
  const aerovia = new Aerovia('A1', 'Aeroporto A', 'Aeroporto B', 1000);
  const dataHora = new Date(2024, 6, 17, 15, 0, 0);
  const plano = new PlanoDeVoo(null, 1, 'PP-ABC', dataHora, aerovia, 30000, []);

  assert.strictEqual(plano.validarPlano(piloto, aeronave, aerovia, []), true);
}

testePlanoDeVooValido();

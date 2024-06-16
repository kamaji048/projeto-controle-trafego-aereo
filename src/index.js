const Piloto = require('./classes/Piloto');
const Aeronave = require('./classes/Aeronave');
const Aerovia = require('./classes/Aerovia');
const PlanoDeVoo = require('./classes/PlanoDeVoo');
const { listarAerovias, listarAltitudesLivres, submeterPlanoDeVoo, listarPlanoDeVoo } = require('./funcoes/funcoes');

// Exemplo de uso:

// Criar pilotos
const piloto1 = new Piloto(1, 'João', 'ativo');

// Criar aeronaves
const aeronave1 = new Aeronave('PP-ABC', 'passageiros', 800, 1500, 'Companhia X');

// Criar aerovias
const aerovia1 = new Aerovia('A1', 'Aeroporto A', 'Aeroporto B', 1000);

// Listar aerovias entre dois aeroportos
const aerovias = [aerovia1];
console.log(listarAerovias('Aeroporto A', 'Aeroporto B', aerovias));

// Listar altitudes livres em uma determinada aerovia e horário
const planosDeVoo = [];
const horario = new Date(2024, 6, 17, 15, 0, 0);
console.log(listarAltitudesLivres(aerovia1, horario, planosDeVoo));

// Submeter um plano de voo para aprovação
const plano1 = new PlanoDeVoo(null, 1, 'PP-ABC', horario, aerovia1, 30000, []);
const pilotos = [piloto1];
const aeronaves = [aeronave1];
const planoId = submeterPlanoDeVoo(plano1, pilotos, aeronaves, aerovias, planosDeVoo);
console.log('Plano de voo aprovado com ID:', planoId);

// Listar plano de voo pelo número
console.log(listarPlanoDeVoo(planoId, planosDeVoo));

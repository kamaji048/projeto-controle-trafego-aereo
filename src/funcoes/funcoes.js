const Piloto = require('../classes/Piloto');
const Aeronave = require('../classes/Aeronave');
const Aerovia = require('../classes/Aerovia');
const PlanoDeVoo = require('../classes/PlanoDeVoo');

function listarAerovias(aeroportoA, aeroportoB, aerovias) {
  return aerovias.filter(a => a.aeroportoOrigem === aeroportoA && a.aeroportoDestino === aeroportoB);
}

function listarAltitudesLivres(aerovia, horario, planosDeVoo) {
  const altitudesLivres = [25000, 26000, 27000, 28000, 29000, 30000, 31000, 32000, 33000, 34000, 35000];
  const ocupadas = planosDeVoo
    .filter(plano => plano.aerovia.id === aerovia.id && plano.dataHora.getTime() === horario.getTime())
    .map(plano => plano.altitude);
  return altitudesLivres.filter(altitude => !ocupadas.includes(altitude));
}

function submeterPlanoDeVoo(plano, pilotos, aeronaves, aerovias, planosDeVoo) {
  const piloto = pilotos.find(p => p.matricula === plano.matriculaPiloto);
  const aeronave = aeronaves.find(a => a.prefixo === plano.prefixoAeronave);
  const aerovia = aerovias.find(a => a.id === plano.aerovia.id);
  const altitudesOcupadas = planosDeVoo.filter(p => p.dataHora.getTime() === plano.dataHora.getTime() && p.aerovia.id === aerovia.id);

  if (plano.validarPlano(piloto, aeronave, aerovia, altitudesOcupadas)) {
    plano.id = planosDeVoo.length + 1;
    planosDeVoo.push(plano);
    return plano.id;
  } else {
    return null;
  }
}

function listarPlanoDeVoo(id, planosDeVoo) {
  return planosDeVoo.find(plano => plano.id === id);
}

module.exports = {
  listarAerovias,
  listarAltitudesLivres,
  submeterPlanoDeVoo,
  listarPlanoDeVoo
};

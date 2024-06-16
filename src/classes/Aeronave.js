class Aeronave {
  constructor(prefixo, tipo, velocidadeCruzeiro, autonomia, especifico) {
    this.prefixo = prefixo;
    this.tipo = tipo;
    this.velocidadeCruzeiro = velocidadeCruzeiro;
    this.autonomia = autonomia;
    this.especifico = especifico; // Pode ser empresa, passageiros ou carga
  }

  validarAutonomia(tamanhoAerovia) {
    return this.autonomia >= tamanhoAerovia * 1.1;
  }
}

module.exports = Aeronave;

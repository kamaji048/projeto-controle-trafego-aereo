class PlanoDeVoo {
  constructor(id, matriculaPiloto, prefixoAeronave, dataHora, aerovia, altitude, slotsOcupados, cancelado = false) {
    this.id = id;
    this.matriculaPiloto = matriculaPiloto;
    this.prefixoAeronave = prefixoAeronave;
    this.dataHora = dataHora;
    this.aerovia = aerovia;
    this.altitude = altitude;
    this.slotsOcupados = slotsOcupados;
    this.cancelado = cancelado;
  }

  validarPlano(piloto, aeronave, aerovia, altitudesOcupadas) {
    console.log('Validando plano de voo...');
    console.log('Piloto:', piloto);
    console.log('Aeronave:', aeronave);
    console.log('Aerovia:', aerovia);
    console.log('Altitudes Ocupadas:', altitudesOcupadas);

    if (piloto.estadoHabilitacao !== 'ativo') {
      console.log('Falha na validação: piloto não está ativo.');
      return false;
    }
    if (!aeronave.validarAutonomia(aerovia.tamanho)) {
      console.log('Falha na validação: autonomia da aeronave insuficiente.');
      return false;
    }
    if (!this.validarAltitude(aeronave.tipo)) {
      console.log('Falha na validação: altitude inválida para o tipo de aeronave.');
      return false;
    }
    if (!this.validarHorario(aeronave.tipo)) {
      console.log('Falha na validação: horário inválido para o tipo de aeronave.');
      return false;
    }
    if (!this.validarSlotsOcupados(altitudesOcupadas)) {
      console.log('Falha na validação: slots ocupados.');
      return false;
    }
    console.log('Plano de voo validado com sucesso.');
    return true;
  }

  validarAltitude(tipoAeronave) {
    if (tipoAeronave === 'passageiros' && this.altitude < 28000) return false;
    if (tipoAeronave === 'particular' && (this.altitude < 25000 || this.altitude > 27000)) return false;
    return true;
  }

  validarHorario(tipoAeronave) {
    const hora = this.dataHora.getHours();
    if (tipoAeronave === 'carga' && (hora >= 6 || hora < 0)) return false;
    return true;
  }

  validarSlotsOcupados(altitudesOcupadas) {
    return !altitudesOcupadas.some(slot => slot.altitude === this.altitude);
  }
}

module.exports = PlanoDeVoo;

// fazendo a validação da data
export function validarData(data = '') {
    // criando data do evento
    const dataEvento = new Date(data);

    // criando data atual
    const hoje = new Date();

    // fazendo a verificação
    if (dataEvento < hoje) {
        return false;
    }
    return true;
}
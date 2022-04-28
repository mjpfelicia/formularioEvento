// lista vazia
const listaDeEventos = []
    /**
     * função para salva evento
     * @param {{tipoEvento:string, dataEvento:string, qtdPessoas:number}} evento 
     * @param {Array<number>} listaDeConvidados 
     * @returns 
     */
    // função para salva evento
export function salvarEvento(evento, listaDeConvidados) {
    // criando variável do tipo objeto para evento,lista de convidado
    const eventosConvidados = { evento, listaDeConvidados };
    // add evento e lista de convidado na lista vazia
    listaDeEventos.push(eventosConvidados);

    // escrevendo na tela para lista eventos data qtb de convidados 
    eventoCriado.innerHTML = `Eventos cadastrado [${listaDeEventos.length}]<br>
    
    <table id="tabelaDeEventos">
        <tr>
            <th>Tipo de Evento</th>
            <th>Data do Evento</th>
            <th>Quantidade Convidados</th>
        </tr>
        ${listaDeEventos.map(p => {
            return `
            <tr>
                <td>${p.evento.tipoEvento}</td> 
                <td>${p.evento.dataEvento}</td> 
                <td>${p.evento.qtdPessoas}</td> 
            </td>
            `
        })}
    </table>`
    // retorna a lista depois de add o que foi pedido
    return listaDeEventos;
}
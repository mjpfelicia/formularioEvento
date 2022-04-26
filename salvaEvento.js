const listaDeEventos = []
export function salvarEvento(evento, listaDeConvidados) {
    console.log("evento criado")
    listaDeEventos.push({ evento, listaDeConvidados });

    return listaDeEventos;
}
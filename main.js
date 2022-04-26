import { validar } from './validaForm.js';
import ('./listaDeConvidados.js')
import { salvarEvento } from './salvaEvento.js';

// pegar os elemento para o modal e guarda en uma variável
const modal = document.getElementById("myModal");
const btn = document.getElementById("myBtn");
const span = document.getElementsByClassName("close")[0];

// escultado o click
btn.onclick = function() {
        // deixando o modal visível
        modal.style.display = "block";
    }
    // esculta o click
span.onclick = function() {
        // escondendo o modal
        modal.style.display = "none";
    }
    // Quando o usuário clicar em qualquer lugar fora do modal, feche-o
window.onclick = function(event) {

    if (event.target === modalista) {
        modalista.style.display = "none";
    }
}

// criando variáveis para guarda um valor 
const criarEvent = document.querySelector('#criarEvento');

// esperando um click
criarEvent.addEventListener('click', (ev) => {
    //  variáveis que vao espera um click 
    const inputGroups = document.querySelectorAll('.input-group');
    const msgErro = document.querySelectorAll('.msgError')
        // criando uma função 
    validar(inputGroups, msgErro);

    const [nomeEvento, dataEvento, qtdParticipantes] = inputGroups;

    console.log({ inputGroups })

    const evento = {
        tipoEvento: nomeEvento.value,
        dataEvento: dataEvento.value,
        Qtdpessoas: qtdParticipantes.value
    };

    console.log({
        evento
    })
    const convidados = [];


    const eventos = salvarEvento(evento, convidados);
    console.log({ eventos })

})
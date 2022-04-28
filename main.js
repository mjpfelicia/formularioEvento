import { validar } from './validaForm.js';
import { salvarEvento } from './salvaEvento.js';

// pegar os elemento para o modal-content-convidados e guarda en uma variável
const modal = document.getElementById("modalConvidados");
const btnMY = document.getElementById("cadastroConvidados");
const spanMy = document.getElementsByClassName("close")[0];

// escultado o click
btnMY.onclick = function() {
        // deixando o modal visível
        modal.style.display = "block";
    }
    // esculta o click
spanMy.onclick = function() {
        // escondendo o modal
        modal.style.display = "none";
        console.log("e este")
    }
    // Quando o usuário clicar em qualquer lugar fora do modal, feche-o
window.onclick = function(event) {

        console.log("eee", event.target)

        if (event.target === modal) {
            modal.style.display = "none";
        }
    }
    // fim do modal


// pegar os elemento para o myModal-eventos e guarda en uma variável
const modalEventos = document.getElementById("myModal-eventos");
const btnEventos = document.getElementById("btnlistaDeEventos");
const spanEventos = document.getElementsByClassName("close-eventos")[0];

// Quando o usuário clicar no botão, abra o modal
btnEventos.onclick = function() {
        modalEventos.style.display = "block";
    }
    // Quando o usuário clicar em <span> (x), feche o modal
spanEventos.onclick = function() {
    modalEventos.style.display = "none";
}

// Quando o usuário clicar em qualquer lugar fora do modal, feche-o
window.onclick = function(event) {

    if (event.target === modalEventos) {
        modalEventos.style.display = "none";
    }
}

// fim do modal
// pegar os elemento para o myModal-listade-convidados e guarda en uma variável
const modalista = document.getElementById("myModal-listade-convidados");
const btn = document.getElementById("btnModal");
const span = document.getElementsByClassName("close-x")[0];

// Quando o usuário clicar no botão, abra o modal
btn.onclick = function() {
        modalista.style.display = "block";
    }
    // Quando o usuário clicar em <span> (x), feche o modal
span.onclick = function() {
    modalista.style.display = "none";
}

// Quando o usuário clicar em qualquer lugar fora do modal, feche-o
window.onclick = function(event) {

    if (event.target === modalista) {
        modalista.style.display = "none";
    }
}

// fim do modal


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

    const evento = {
        tipoEvento: nomeEvento.value,
        dataEvento: dataEvento.value,
        qtdPessoas: qtdParticipantes.value
    };

    const convidados = [{
        nome: 'Teste',
        idade: 30,
        email: 'email@email.com'
    }];
    const eventos = salvarEvento(evento, convidados);

})
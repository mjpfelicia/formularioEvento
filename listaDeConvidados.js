// pegar os elemento para o  modal e guarda en uma variável
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

    if (event.target == modalista) {
        modalista.style.display = "none";
    }
}
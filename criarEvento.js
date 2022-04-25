const btnCriarEvento = document.querySelector('#criarEvento')

// Para criar o evento:
const disparaEvento = new Event('Click');
// Para ouvir o evento:

btnCriarEvento.addEventListener('Click', function() {
    console.log('Evento criado com sucesso');

});

btnCriarEvento.addEventListener('click', function() {
    // Disparar o evento:
    criarEvento.dispatchEvent(disparaEvento);
});
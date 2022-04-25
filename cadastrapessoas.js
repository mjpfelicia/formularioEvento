const btn = document.querySelector('.btn-cadastra');
const msgErro = document.querySelector('.msgNaoPodeParticipa')
const pessoas = [];


btn.addEventListener("click", (ev) => {
    const nome = '' + document.querySelector("#nome").value;
    const idade = document.querySelector("#idade").value;
    const pessoa = { nome, idade: +idade };
    pessoas.push(pessoa);

    if (!podeParticipar(pessoa)) {
        msgErro.style.display = 'block';

    }
    console.log({ pessoas });

})

function podeParticipar(pessoa) {

    if (pessoa.idade > 18) {
        return true;
    }

    return false;
}
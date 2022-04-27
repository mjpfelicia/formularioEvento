const lista = [];

function listaConvidados() {
    const msgErro = document.querySelector('.msgNaoPodeParticipa')
    const msgQuantidadePessoa = document.querySelector('.erro-quantidade')
    const recebeNome = document.querySelector("#campoConvidado").value;
    const idade = document.querySelector("#idade").value;
    const emailConvidado = email.value;
    const convidados = qtdconvidados.value

    const pessoa = {
        nome: recebeNome,
        idade: +idade,
        email: emailConvidado
    };

    if (pessoa.idade < 18) {
        msgErro.style.display = 'block';
        return;
    }

    if (lista.length >= +convidados) {
        msgQuantidadePessoa.style.display = 'flex';
        return;
    }

    lista.push(pessoa);
    quantidadeConvidado.innerHTML = `No momento sua lista está com [${lista.length}] convidado(s)<br>
    <ol>
            ${lista.map(p => {
                return `
                <li>${p.nome} ${p.idade} ${p.email}<l/i>
                `
            })}
    </ol>`
}
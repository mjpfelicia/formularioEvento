// criando lista vazia
const lista = [];

function listaConvidados() {
    const msgErro = document.querySelector('.msgNaoPodeParticipa')
    const msgQuantidadePessoa = document.querySelector('.erro-quantidade')
    const recebeNome = document.querySelector("#campoConvidado").value;
    const idade = document.querySelector("#idade").value;
    const emailConvidado = email.value;
    const convidados = qtdconvidados.value
        //  criando um objeto
    const pessoa = {
        nome: recebeNome,
        idade: +idade,
        email: emailConvidado
    };
    // validação a idade
    if (pessoa.idade < 18) {
        msgErro.style.display = 'block';
        return;
    }
    // precorrendo a lista para validar a quantidade de convidados
    if (lista.length >= +convidados) {
        msgQuantidadePessoa.style.display = 'flex';
        return;
    }
    // add pessoas na lista
    lista.push(pessoa);
    // escrevendo na tela quantidade de convidados e criando lista 
    quantidadeConvidado.innerHTML = `No momento sua lista está com [${lista.length}] convidado(s)<br>
    
    <ol>
            ${lista.map(p => {
                return `
                <li>${p.nome} ${p.idade} ${p.email}<l/i>
                `
            })}
    </ol>`
}
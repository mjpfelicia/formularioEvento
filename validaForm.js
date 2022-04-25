// importando as funções para uma so pagina 
import { validarData } from './validaData.js'

// criando uma função que recebe dois array vazio 
export function validar(arrayInputs = [], arrayErros = []) {
    // cont [nomeEvento, dataEvento, qtdParticipantes ] = arrayInputs;

    // precorrendo os array para fazer a verificação
    arrayInputs.forEach(function validaInput(input, indice) {
        // fazendo a verificação se o input tem valor
        if (input.value === '') {
            arrayErros[indice].style.display = "flex";


        } else {
            arrayErros[indice].style.display = "none";

            // fazendo a verificação no indece referente a data para validação
            if (indice === 1) {
                if (validarData(input.value)) {
                    arrayErros[indice].style.display = "none";

                } else {
                    arrayErros[indice].textContent = "A data não é valida";
                    arrayErros[indice].style.display = "flex";

                }
            }

        }
    });

}
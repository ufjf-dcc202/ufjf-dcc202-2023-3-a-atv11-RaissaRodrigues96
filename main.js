import { adicionaNaLista, getLista, limpaLista } from "./lista.js";

const olItens = document.querySelector ("#itens");
const pEntrada = document.querySelector ("#entrada");
const btnAdicionar = document.querySelector ("#adicionar");
const btnLimpar = document.querySelector ("#limpar");

atualizarListaOrdenada();

btnLimpar.addEventListener ('click', limparListaOrdenada);
btnAdicionar.addEventListener ('click', adicionaItemNaEntrada);

function limparListaOrdenada() {
    limpaLista();
    atualizarListaOrdenada();
}

function adicionaItemNaEntrada() {
    const valor = pEntrada.textContent
    adicionaNaLista(valor);
    pEntrada.textContent = ""
    atualizarListaOrdenada();
}

function atualizarListaOrdenada() {
    const lista = getLista();
    olItens.innerHTML = "";

    for (let i = 0; i < lista.length; i++){
        adicionaElementoNaListaOrdenada(lista[i]);
    }
}
 
function adicionaElementoNaListaOrdenada(text){
    limpaLista.textContent=texto;
    olItens.appendChild(li);
}
import { adicionaNaLista, getLista, limpaLista, removeDaLista } from "./lista.js";

const olItens = document.querySelector ("#itens");
const pEntrada = document.querySelector ("#entrada");
const btnAdicionar = document.querySelector ("#adicionar");
const btnLimpar = document.querySelector ("#limpar");

atualizarLista();

btnLimpar.addEventListener ('click', limparLista);
btnAdicionar.addEventListener ('click', adicionaNaLista);

function limparLista() {
    limpaLista();
    atualizarLista();
}

function adicionaNaLista() {
    const valor = pEntrada.textContent
    adicionaNaLista(valor);
    atualizarItensDeLista();
    pEntrada.textContent = ""
    atualizarLista();
}

function atualizarLista() {
    const lista=getLista();
    olItens.innerHTML = "";

    for (let i = 0; i < lista.length; i++){
        adicionaElementoNaListaOrdenada(lista[i]);
    }
}
 
function adicionaElementoNaListaOrdenada(text){
    limpaLista.textContent=texto;
    olItens.appendChild(li);
}
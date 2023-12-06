import { adicionaNaLista, getLista, limpaLista, removeDaLista } from "./lista.js";

const olItens = document.querySelector ("#itens");
const pEntrada = document.querySelector ("#entrada");
const btnAdicionar = document.querySelector ("#adicionar");
const btnLimpar = document.querySelector ("#limpar");

btnLimpar.addEventListener ('click', limparItensDeLista);
btnAdicionar.addEventListener ('click', criaElementoNaLista);

atualizarItensDeLista();

function criaElementoNaLista() {
    limpaLista();
    atualizarItensDeLista();
}

function atualizarItensDeLista() {
    olSaida.innerHTML = "";
    const lista = getLista ();

    for (let i = 0; i < lista.length; i++){
    const item = lista[i];
    const li = document.createElement('li');
    li.textContent = item;

    olSaida.appendChild(li);
 }
}
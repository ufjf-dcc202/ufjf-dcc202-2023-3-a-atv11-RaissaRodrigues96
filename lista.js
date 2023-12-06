const lista = ["Um", "Dois", "Três"];

export function getLista() {
    return lista;
}

export function limpaLista() {
    lista.splice(0);
}

export function removeDaLista(posicao) {
    lista.splice(posicao, 1);
}

export function adicionaNaLista(novoItem){
    lista.push(novoItem);
}

export {getLista, removeDaLista, limpaLista, adicionaNaLista};
const listaElement = document.querySelector(`ul`); // selezione di ul nel dom

let lista = [`pane`, `formaggio`, `uova`, `vino`, `acqua`, `salame`, `caffe`]; //Array lista spesa

let i = 0 //creazione del contatore per la funzione while

while (i < lista.length) {  //while e condizione di funzionamento

    listaElement.innerHTML += `<li>${lista[i]}</li>`

    i++
}

i = 0  //reset del contatore che altrimenti sarebbe rimasto impostato dall ultimo ciclo.
/*

1. Crea una lista di elementi 
2. Stampa tutti gli elementi della lista uno ad uno
3. Stampa in pagina html

*/

// 1
const myList = [
    "Pane",
    "Latte",
    "Uova",
    "Pomodori",
    "Mele",
    "Detersivo"
];
console.log(myList);

// 2


// Seleziona l'elemento ul dal documento HTML
const myUl = document.getElementById('items');
console.log(myUl);

// Crea variabile contatore
let i = 0;

while (i < myList.length) {

    // Stampa in console
    console.log(myList[i]);

    // Stampa in pagina - soluzione 1
    myUl.innerHTML += `<li>${myList[i]}</li>`;
    
    // Stampa in pagina - soluzione 2
    // const newLi = document.createElement('li');
    // newLi.innerHTML = myList[i];
    // myUl.append(newLi);

    // Indica modalità di avanzamento
    i++;

}


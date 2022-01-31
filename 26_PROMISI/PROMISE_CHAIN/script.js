console.log(`/////////////// CALLBACK HELL ///////////////`);

let getTodos = (resurse) => {
    //kreiranje XML objekta

    let request = new XMLHttpRequest();
    // otvaranje kreiranog zahteva
    request.open("GET", resurse);
    // slanje zahteva....
    request.send();
    return new Promise((resolve, reject) => {
        request.addEventListener("readystatechange", () => {
            if (request.readyState === 4 && request.status === 200) {
                // sve ok
                //callback(request.responseText, undefined);
                resolve(request.responseText);
            } else if (request.readyState === 4) {
                //nesto nije ok
                //callback(undefined, `Ne mogu da dohvatim podatke`);
                reject(`Ne mogu da dohvatim podatke`);
            }
        });
    });
};
// zelim prvo da se ocita todos.json
// pa onda fruits.json
//pa onda vegitables.json
// getTodos("../JSON/todos.json")
//     .then((data) => {
//         console.log("promise todos resolve", data);
//         return getTodos("../JSON/fruits.json");
//     })
//     .then((data) => {
//         console.log(data);
//         return getTodos("../JSON/vegitables.json");
//     })
//     .then((data) => {
//         console.log(data);
//     })
//     .catch((err) => {
//         console.log("Promise rejected!", err);
//     });
// getTodos()
//     .then((data) => {
//         console.log("promise fruits resolved", data);
//     })
//     .catch((err) => {
//         console.log("Promise rejected", err);
//     });
// getTodos("../JSON/vegitables.json")
//     .then((data) => {
//         console.log("promise vegitables resolved", data);
//     })
//     .catch((err) => {
//         console.log("promise rejected", err);
//     });

getTodos("http://localhost:3000/sportisti")
    .catch((err) => {
        console.log(err);
    })
    .then((data) => {
        console.log(data);
    });
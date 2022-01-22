console.log(`/////////////// CALLBACK HELL ///////////////`);

let getTodos = (resurse, callback) => {
    //kreiranje XML objekta

    let request = new XMLHttpRequest();
    request.addEventListener("readystatechange", () => {
        if (request.readyState === 4 && request.status === 200) {
            // sve ok
            callback(request.responseText, undefined);
        } else if (request.readyState === 4) {
            //nesto nije ok
            callback(undefined, `Ne mogu da dohvatim podatke`);
        }
    });
    // otvaranje kreiranog zahteva
    request.open("GET", resurse);
    // slanje zahteva....
    request.send();
};
getTodos("../JSON/todos.json", (data, err) => {
    console.log("callback  okinuta");
    if (err) {
        console.log(err);
    } else {
        console.log(data);
        getTodos("../JSON/fruits.json", (data, err) => {
            if (err) {
                console.log(err);
            } else {
                console.log(data);
                getTodos("../JSON/vegitables.json", (data, err) => {
                    if (err) {
                        console.log(err);
                    } else {
                        console.log(data);
                    }
                });
            }
        });
    }
});
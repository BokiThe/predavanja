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
getTodos("http://localhost:3000/sportisti")
    .then((data) => {
        let data1 = JSON.parse(data);
        let sredina = 0;
        let br = 0;
        data1.forEach((sportista) => {
            sredina += sportista.visina;
            br++;

            if (sportista.timovi.includes("LA Lakers")) {
                console.log(sportista.imePrezime);
            }
        });
        br != 0 ? console.log(sredina / br) : 0;
        return getTodos("http://localhost:3000/fruits");
    })
    .then((data) => {
        console.log(data);
    })
    .catch((err) => {
        console.log(err);
    });
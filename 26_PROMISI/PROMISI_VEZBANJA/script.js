console.log(`//////////// PROMISI VEZBANJA /////////`);

/*
stock.json: id (identifikacioni broj artikla), item (naziv artikla), stock (broj artikala na stanju),
prices.json: id (identifikacioni broj artikla), item (naziv artikla), price (cena artikla),
weights.json: id (identifikacioni broj artikla), item (naziv artikla), weight (težina artikla izražena u kilogramima).

1. Jedna forma u kojoj se nalazi input u koji može da se upiše neki broj, koji predstavlja ukupnu težinu u kilogramima koju prihvata kamion za prevoz. Pored inputa, nalazi se i dugme. Klikom na dugme potrebno je da odredite da li u kamion za prevoz može da stane ukupna težina svih proizvoda kojih više nema na stanju. Zapravo, potrebno je uraditi sledeće:

*/

// 1. Odrediti koji proizvodi više nisu na stanju i koje treba poručiti. Pretpostavljamo da se naručuje po jedna količina svakog artikla koji nije na stanju.

const divOrder = document.getElementById("order");
const formOrder = document.querySelector("#order form");
const inputOrder = document.getElementById("capacity");

// let getItems = (resurse, resolve, reject) => {
//     //kreiranje XML objekta

//     let request = new XMLHttpRequest();
//     request.addEventListener("readystatechange", function() {
//         if (this.readyState === 4 && this.status === 200) {
//             // sve ok
//             let data = JSON.parse(this.responseText);
//             resolve(data);
//         } else if (request.readyState === 4) {
//             //nesto nije ok
//             reject(`Ne mogu da dohvatim podatke`);
//         }
//     });
//     // otvaranje kreiranog zahteva
//     request.open("GET", resurse);
//     // slanje zahteva....
//     request.send();
// };

// function submitForm1(event) {
//     event.preventDefault();
//     let capacity = inputOrder.value;
//     let ids = [];
//     getItems(
//         "./JSON/stock.json",
//         (data) => {
//             data.forEach((item) => {
//                 if (item.stock <= 0) {
//                     ids.push(item.id);
//                 }
//             });
//             getItems(
//                 "./JSON/weights.json",
//                 (data) => {
//                     let totalWaight = 0;
//                     data.forEach((item) => {
//                         if (ids.includes(item.id)) {
//                             totalWaight += item.weight;
//                         }
//                     });
//                     console.log(
//                         `ukupnaa tezina proizvoda koji treba da se naruce je ${totalWaight}`
//                     );
//                     if (totalWaight > capacity) {
//                         let par = document.createElement("p");
//                         par.innerHTML = `Ukupna tezina proizvoda je veca od kapaciteta kamiona`;
//                         divOrder.appendChild(par);
//                     } else {
//                         getItems(
//                             "./JSON/prices.json",
//                             (data) => {
//                                 let totalPrice = 0;
//                                 data.forEach((item) => {
//                                     if (ids.includes(item.id)) {
//                                         totalPrice += item.price;
//                                     }
//                                 });
//                                 let par = document.createElement("p");
//                                 par.innerHTML = `Ukupna cena porudzbine je ${totalPrice}`;
//                                 divOrder.appendChild(par);
//                             },
//                             (msg) => {
//                                 console.log(msg);
//                             }
//                         );
//                     }
//                 },
//                 (msg) => {
//                     console.log(msg);
//                 }
//             );
//         },
//         (msg) => {
//             console.log(msg);
//         }
//     );
// }

//////////KREIRANJE PROMISA I HTTP REQUESTA/////////

let getItemsReturnPromise = (resurse) => {
    return new Promise((resolve, reject) => {
        let request = new XMLHttpRequest();
        request.addEventListener("readystatechange", function() {
            if (request.readyState === 4 && request.status === 200) {
                // sve ok
                let data = JSON.parse(request.responseText);
                resolve(data);
            } else if (request.readyState === 4) {
                //nesto nije ok
                reject(`Ne mogu da dohvatim podatke`);
            }
        });
        // otvaranje kreiranog zahteva
        request.open("GET", resurse);
        // slanje zahteva....
        request.send();
    });
};

function submitForm2(event) {
    event.preventDefault();
    let capacity = inputOrder.value;
    let ids = [];
    getItemsReturnPromise("./JSON/stock.json")
        .then((data) => {
            data.forEach((item) => {
                if (item.stock <= 0) {
                    ids.push(item.id);
                }
            });
            return getItemsReturnPromise("./JSON/weights.json");
        })
        .then((data) => {
            let totalWaight = 0;
            data.forEach((item) => {
                if (ids.includes(item.id)) {
                    totalWaight += item.weight;
                }
            });
            console.log(
                `ukupnaa tezina proizvoda koji treba da se naruce je ${totalWaight}`
            );
            if (totalWaight > capacity) {
                let par = document.createElement("p");
                par.innerHTML = `Ukupna tezina proizvoda je veca od kapaciteta kamiona`;
                divOrder.appendChild(par);
            }
            return getItemsReturnPromise("./JSON/prices.json");
        })
        .then((data) => {
            let totalPrice = 0;
            let tabela = document.createElement("table");
            tabela.setAttribute("border", "1");
            tabela.setAttribute("cellspacing", "0");
            let tr1 = document.createElement("tr");
            let thNaziv = document.createElement("th");
            let thCena = document.createElement("th");
            thNaziv.innerHTML = "Naziv Artikla";
            thCena.innerHTML = "Cena";
            tr1.appendChild(thNaziv);
            tr1.appendChild(thCena);
            tabela.appendChild(tr1);
            data.forEach((item) => {
                if (ids.includes(item.id)) {
                    //BONUS VARIJANTA: Ne ispisati samo ukupnu cenu svih artikala, već tabelu sa dve kolone: U prvoj koloni je ispisan naziv artikla koji se poručuje, u sledećoj je njegova cena. U poslednjem redu tabele, u prvoj ćeliji stoji tekst “UKUPNO”, a u drugoj ćeliji ukupna cena svih artikala.
                    let tr = document.createElement("tr");
                    let td1 = document.createElement("td");
                    let td2 = document.createElement("td");
                    td1.innerHTML = `${item.item}`;
                    td2.innerHTML = `${item.price}`;
                    tr.appendChild(td1);
                    tr.appendChild(td2);
                    tabela.appendChild(tr);
                    totalPrice += item.price;
                }
            });
            let trTotal = document.createElement("tr");
            let tdtotalN = document.createElement("td");
            let tdTotalC = document.createElement("td");
            tdtotalN.innerHTML = "Ukupno :";
            tdTotalC.innerHTML = totalPrice;
            tdTotalC.setAttribute("style", "background-color: green");
            trTotal.appendChild(tdtotalN);
            trTotal.appendChild(tdTotalC);
            tabela.appendChild(trTotal);
            divOrder.appendChild(tabela);
        })
        .catch((msg) => {
            console.log(msg);
        });
}
formOrder.addEventListener("submit", submitForm2);
////////////////// 2 zadatak ////////////
/* 
Jedna forma u kojoj se nalazi jedan tekstualni input (gde se unosi deo naziva proizvoda), kao i dva numerička inputa (gde se unose neke cene). Pored njih nalazi se i dugme. Klikom na dugme potrebno je uraditi sledeće:
Odrediti sve proizvode koji su na stanju.
Naći takve proizvode koji u nazivu sadrže reč koju je korisnik uneo.
Kao i one čija je cena između dve vrednosti zadate u dva numerička inputa.
Korisniku prikazati u listi nazive tih artikala.
BONUS VARIJANTA: Ne ispisati samo nazive artikala, već ispis izvršiti u tabeli sa tri kolone: U prvoj koloni staviti naziv artikla, u drugoj stanje u magacinu, u trećoj cenu artikla.

*/

let divFilter = document.getElementById("filter");
let formFilter = document.querySelector("#filter form");
let inputSearch = document.getElementById("search");
let inputCena = document.getElementById("cena");
let inputCenaDo = document.getElementById("cenado");

let submitForm3 = (event) => {
    event.preventDefault();
    // Odrediti sve proizvode koji su na stanju.
    let inputSearchValue = inputSearch.value;
    let inputCenaValue = inputCena.value;
    let inputCenaDoValue = inputCenaDo.value;
    let naStanju = [];
    getItemsReturnPromise("./JSON/stock.json")
        .then((data) => {
            data.forEach((item) => {
                if (item.stock > 0) {
                    naStanju.push(item.id);
                }
            });
            return getItemsReturnPromise("./JSON/prices.json");
        })
        .then((data) => {
            let tabela = document.createElement("table");
            tabela.setAttribute("border", "1");
            tabela.setAttribute("cellspacing", "0");
            let tr1 = document.createElement("tr");
            let thNaziv = document.createElement("th");
            let thCena = document.createElement("th");
            thNaziv.innerHTML = "Naziv Artikla";
            thCena.innerHTML = "Cena";
            tr1.appendChild(thNaziv);
            tr1.appendChild(thCena);
            tabela.appendChild(tr1);

            data.forEach((item) => {
                if (naStanju.includes(item.id)) {
                    if (
                        item.item.toLowerCase().includes(inputSearchValue.toLowerCase()) &&
                        inputCenaValue <= item.price &&
                        inputCenaDoValue >= item.price
                    ) {
                        let tr = document.createElement("tr");
                        let td1 = document.createElement("td");
                        let td2 = document.createElement("td");
                        td1.innerHTML = item.item;
                        td2.innerHTML = item.price;
                        tr.appendChild(td1);
                        tr.appendChild(td2);
                        tabela.appendChild(tr);
                    }
                }
            });
            divFilter.appendChild(tabela);
        })
        .catch((msg) => {
            console.log(msg);
        });

    formFilter.addEventListener("submit", submitForm3);
    /*
   
Naći takve proizvode koji u nazivu sadrže reč koju je korisnik uneo.
Kao i one čija je cena između dve vrednosti zadate u dva numerička inputa.
Korisniku prikazati u listi nazive tih artikala.
BONUS VARIJANTA: Ne ispisati samo nazive artikala, već ispis izvršiti u tabeli sa tri kolone: U prvoj koloni staviti naziv artikla, u drugoj stanje u magacinu, u trećoj cenu artikla.
    */
};

// formFilter.addEventListener("submit", submitForm3);

async function clickGetItems() {
    let naziv = inputSearch.value;
    let cenaOd = inputCena.value;
    let cenaDo = inputCenaDo.value;
    let data1 = await getItemsReturnPromise("./JSON/stock.json");
    let naStanju = [];
    data1.forEach((item) => {
        if (item.stock > 0) {
            naStanju.push(item.id);
        }
    });

    let data2 = await getItemsReturnPromise("./JSON/prices.json");
    let tabela = document.createElement("table");

    data2.forEach((item) => {
        if (
            naStanju.includes(item.id) &&
            item.item.includes(naziv) &&
            item.price >= cenaOd &&
            item.price <= cenaDo
        ) {
            let tr = document.createElement("tr");
            let td1 = document.createElement("td");
            let td2 = document.createElement("td");
            td1.innerHTML = item.item;
            td2.innerHTML = item.price;
            tr.appendChild(td1);
            tr.appendChild(td2);
            tabela.appendChild(tr);
        }
    });

    return tabela;
}

let submitForm4 = (event) => {
    event.preventDefault();
    clickGetItems()
        .then((data) => {
            divFilter.appendChild(data);
        })
        .catch((error) => {
            console.log(error);
        });
};
// formFilter.addEventListener("submit", submitForm4);
import Pacijent from "./pacijenti.js";

let p1 = new Pacijent("Pera Peric", 118, 82);

let p2 = new Pacijent("Dara Daric", 157, 62);

let p3 = new Pacijent("Vlada Vladic", 198, 100);

let p4 = new Pacijent("Saraa Saric", 155, 50);

let pacijenti = [p1, p2, p3, p4];

let btnMinTez = document.getElementById("minTez");
let spanMinTezRez = document.getElementById("minTezRez");

btnMinTez.addEventListener("click", () => {
    let min = pacijenti[0];
    pacijenti.forEach((p) => {
        if (min.tezina > p.tezina) {
            min = p;
        }
    });
    spanMinTezRez.innerHTML = min.stampaj();
});

//Ispisati podatke o pacijentu sa najvećim bmi vrednošću.

let btnMaxBMI = document.querySelector("#maxBmi");
let spanMaxBmiRez = document.querySelector("#maxBmiRez");

btnMaxBMI.addEventListener("click", () => {
    let max = pacijenti[0];
    pacijenti.forEach((p) => {
        if (max.BMI() < p.BMI()) {
            max = p;
        }
    });
    spanMaxBmiRez.innerHTML = max.stampaj();
});

// ispis svih pacijenata

let btnStampajTabelu = document.getElementById("stampajTabelu");
let spanTabelaRez = document.getElementById("tabelaRez");

btnStampajTabelu.addEventListener("click", () => {
    let tabela1 = `<table border = "1" cellspacing = "0">
    <tr>
        <th>Ime i Prezime pacijenta</th>#
        <th>Visina Pacijenta</th>
        <th>Tezina Pacijenta</th>
        <th> BMI Pacijenta</th>
        <th>Kriticnost</th>
    </tr>`;
    /// ovde foreach
    pacijenti.forEach((pacijent) => {
        if (pacijent.kritican()) {
            tabela1 += `
                                    <tr class="red">
                                        <td>${pacijent.ime}</td>
                                        <td>${pacijent.visina}</td>
                                        <td>${pacijent.tezina}</td>
                                        <td>${pacijent.BMI()}</td>
                                        <td>${pacijent.kritican()}</td>
                                    </tr>
                                    `;
        } else {
            tabela1 += `
                                    <tr class="green">
                                        <td>${pacijent.ime}</td>
                                        <td>${pacijent.visina}</td>
                                        <td>${pacijent.tezina}</td>=
                                        <td>${pacijent.BMI()}</td>
                                        <td>${pacijent.kritican()}</td>
                                    </tr>
                                    `;
        }
    });

    tabela1 += `</table>`;
    spanTabelaRez.innerHTML += tabela1;
    spanTabelaRez.innerHTML += `<button class="btn" id="kritican">Kriticni Pacijenti</button>`;
    let btnKritican = document.querySelector("#kritican");

    btnKritican.addEventListener("click", () => {
        let crveniRedovi = document.querySelectorAll(".red");
        let zeleniRedovi = document.querySelectorAll(".green");
        crveniRedovi.forEach((red) => {
            red.setAttribute("style", "background-color: red;");
        });
        zeleniRedovi.forEach((red) => {
            red.setAttribute("style", "background-color: green;");
        });
    });
});
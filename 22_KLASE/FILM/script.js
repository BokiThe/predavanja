console.log(`//////////// film //////////`);

import Film from "./film.js";

let film1 = new Film(
    "Zona Zamfirova",
    "Slobodan Sijan",
    2009, [8, 8, 9, 7.5, 9]
);

let film2 = new Film(
    "Kad Jaganjci Utihnu",
    "Dara Bubamara",
    1720, [8, 8, 5, 10, 8]
);

let film3 = new Film(
    "Day after tomorow",
    "Stiven Spilberg",
    2001, [8, 8, 7, 7, 8]
);

let film4 = new Film(
    "The good guys",
    "Martin Scorceze",
    1997, [9, 8, 8, 8, 10]
);

// prikaz svih filmova u tabeli

let filmovi = [film1, film2, film3, film4];

let btnSviFilmovi = document.getElementById("sviFilmovi");
let divIspis = document.getElementById("ispis");
btnSviFilmovi.addEventListener("click", () => {
    let tabela = `
    <table border = '1'>
            
                <tr>
                    <th>Naziv Filma</th>
                    <th>Reziser</th>
                    <th>Godina Izdanja</th>
                    <th>Ocene</th>
                </tr>
    `;
    filmovi.forEach((film) => {
        tabela += `<tr>
        <td>${film.naslov}</td>
        <td>${film.reziser}</td>
        <td>${film.godinaIzdanja}</td>
        <td>${film.ocene}</td>
    </tr>`;
    });

    tabela += `  
    </table>`;

    divIspis.innerHTML = tabela;
});

console.log(film1.naslov, film1.prosek());
console.log(film2.naslov, film2.prosek());
console.log(film3.naslov, film3.prosek());
console.log(film4.naslov, film4.prosek());

/*
Napraviti funkciju vekFilmova kojoj se prosleđuje niz filmova i ceo broj (vek), a funkcija ispisuje samo one filmove koji su stvoreni u prosleđenom veku
*/

let vekFilmova = (nizFilmova, vek) => {
    let vekPocetak = (vek - 1) * 100 + 1;
    let vekKraj = vek * 100;

    nizFilmova.forEach((film) => {
        if (film.godinaIzdanja >= vekPocetak && film.godinaIzdanja <= vekKraj) {
            console.log(film);
        }
    });
};

vekFilmova(filmovi, 21);

/*
Napraviti funkciju prosecnaOcena kojoj se prosleđuje niz filmova, a koja određuje i vraća  prosečnu ocenu svih filmova.
*/

let prosecnaOcena = (niz) => {
    let sredina = 0;
    let brojac = 0;

    niz.forEach((film) => {
        film.ocene.forEach((ocena) => {
            sredina += ocena;
            brojac++;
        });
    });
    return brojac != 0 ? (sredina / brojac).toFixed(2) : 0;
};

console.log(prosecnaOcena(filmovi));

/*

Napraviti funkciju najboljeOcenjeni kojoj se prosleđuje niz filmova, a ona vraća najbolje ocenjeni film.
*/
let najboljeOcenjeni = (niz) => {
    let najboljeOcenjeni = niz[0];
    niz.forEach((el) => {
        if (najboljeOcenjeni.prosek() < el.prosek()) {
            najboljeOcenjeni = el;
        }
    });
    return najboljeOcenjeni;
};

console.log(najboljeOcenjeni(filmovi));

/*
Napraviti funkciju osrednjiFilm kojoj se prosleđuje niz filmova a ona vraća film koji je najbliži prosečnoj oceni svih filmova.
*/

let osrednjiFilm = (niz) => {
    // podjimo sa pretpostavkom da je prvi najblizi proseku
    let globalniProsek = prosecnaOcena(niz);
    let prosecanFilm = Math.abs(niz[0].prosek() - globalniProsek);
    niz.forEach((el) => {
        if (Math.abs(el.prosek() - globalniProsek) < prosecanFilm) {
            prosecanFilm = el;
        }
    });
    console.log(prosecanFilm);
};

osrednjiFilm(filmovi);

/*
Napraviti funkciju najmanjaOcenaNajboljeg kojoj se prosleđuje niz filmova a ona određuje najbolji film i ispisuje njegovu najslabiju ocenu.
*/

let najmanjaOcenaNajboljeg = (niz) => {
    let najbolji = najboljeOcenjeni(niz);
    let najslabijaOcena = najbolji.ocene[0];
    najbolji.ocene.forEach((ocena) => {
        if (najslabijaOcena > ocena) {
            najslabijaOcena = ocena;
        }
    });
    console.log(najbolji.naslov, najslabijaOcena);
};

najmanjaOcenaNajboljeg(filmovi);

/*
Napisati funkciju najmanjaOcena kojoj se prosleđuje niz filmova, a koja vraća koja je najmanja ocena koju je bilo koji film dobio.
*/
let najmanjaOcena = (niz) => {
    let najmanja = niz[0].ocene[0];
    niz.forEach((el) => {
        el.ocene.forEach((ocena) => {
            if (najmanja > ocena) {
                najmanja = ocena;
            }
        });
    });
    return najmanja;
};

console.log(najmanjaOcena(filmovi));

/*
Napisati funkciju najcescaOcena kojoj se prosleđuje niz ocena, a ona vraća ocenu koju su filmovi najčešće dobijali. 
*/

let sveOcene = (niz) => {
    let niz1 = [];
    niz.forEach((el) => {
        niz1 = niz1.concat(el.ocene);
    });
    return niz1;
};
console.log(sveOcene(filmovi));

let najcescaOcena = (niz) => {
    let pretpostavkaEl = niz[0]; // pretpostavka da je prvi element najcesci
    let pretpostavkaBr = 1; // pretpostavka da je brojac 1 da bi se stavilo da je defaultna vrednost 1 broj ponavljanja
    for (let i = 0; i < niz.length; i++) {
        // prva iteracija  da ide od prvog do zadnjeg
        let najOcena = niz[i]; // dajemo prvoj oceni da je  prva pa onda ce menjati na drugi element ....
        let brojac = 0; // brojac se resetuje pri svakoj iteraciji
        for (let j = 0; j < niz.length; j++) {
            if (najOcena == niz[j]) {
                // provera da li ima drugih istih elemenata koje se slazu sa trenutnom iteracijom
                brojac++; // i brojac mora da se povecava
            }
        }
        if (pretpostavkaBr < brojac) {
            // uporedjujemo da li je broj veci od pretpostavke
            pretpostavkaBr = brojac; //redeklarisemo pretpostavku da je broj ponavljanja veci i da redeklarise pretpostavku
            pretpostavkaEl = najOcena; // i element pretpostavke se redeklarise u trenutni element niza
        }
    }
    return pretpostavkaEl;
};

console.log(najcescaOcena(sveOcene(filmovi)));

/*
Napraviti funkciju iznadOcene kojoj se prosleđuje ocena i niz filmova, a ona vraća niz onih filmova koji su bolje ocenjeni (veća im je prosečna ocena) od prosleđene ocene.
*/

let iznadOcene = (ocena, niz) => {
    let niz1 = [];
    niz.forEach((film) => {
        let prosek = film.prosek();
        if (prosek > ocena) {
            niz1.push(film);
        }
    });
    return niz1;
};
console.log(iznadOcene(8, filmovi));

/*
Napisati funkciju iznadOceneNoviji kojoj se prosleđuje ocena i niz filmova  a koja treba da na ekranu da ispiše sve podatke o najnovijem filmu koji zadovoljava prosleđenu ocenu
*/

let iznadOceneNoviji = (ocena, niz) => {
    let iznadOcene1 = iznadOcene(ocena, niz);
    let noviji = iznadOcene1[0];

    iznadOcene1.forEach((el) => {
        if (noviji.godinaIzdanja < el.godinaIzdanja) {
            noviji = el;
        }
    });
    let lista = `<ul>`;

    lista += `<li>Naslov Filma: ${noviji.naslov}</li>
    <li>Reziser: ${noviji.reziser}</li>
    <li>Godina Izdanja: ${noviji.godinaIzdanja}</li>
    <li>Prosecna Ocena: ${noviji.prosek()}</li>
    `;
    lista += `</ul>`;

    document.body.innerHTML += lista;
};

iznadOceneNoviji(7, filmovi);
console.log(`///////////// DOM //////////`);
console.log(document);
console.log(typeof document);
console.log(document.body);
console.log(typeof document.body);

let p1 = document.getElementById("p1");
console.log(p1);
console.log(typeof p1);

let cont = document.getElementsByClassName("container");

console.log(cont);

for (let i = 0; i < cont.length; i++) {
    console.log(cont[i]);
}
let contNiz = Array.from(cont);
contNiz.forEach((el) => {
    console.log(el);
});

let paragrafi = document.getElementsByTagName("p");

console.log(paragrafi);

for (let i = 0; i < paragrafi.length; i++) {
    console.log(paragrafi[i]);
}

let linkovi = document.getElementsByName("link");
for (let i = 0; i < linkovi.length; i++) {
    console.log(linkovi[i]);
}

p1 = document.querySelector("#p1");

console.log(p1);

cont = document.querySelector(".container");

console.log(cont);

cont = document.querySelectorAll(".container");
console.log(cont);

cont.forEach((el) => {
    console.log(el);
});

for (let i = 0; i < cont.length; i++) {
    console.log(cont[i]);
}

//Dohvatiti prvi div tag sa klasom „error“.

let eror = document.querySelector(".eror");

console.log(eror);

// 2 nacin preko class name
eror = document.getElementsByClassName("eror");
console.log(eror[0]);
console.log(eror[eror.length - 1]);

//Dohvatiti poslednji red u tabeli.

//  1 nacin dati id

let zadnjiRed = document.getElementById("zadnji");
console.log(zadnjiRed);

// 2 nacin preko query selectora

zadnjiRed = document.querySelector("table tr:last-child td:last-child");
console.log(zadnjiRed);

// Dohvatiti sve linkove na stranici.

//1 nacin preko direktne metode links vraca htm colection moze samo FOR petlja

linkovi = document.links;
console.log(linkovi);

//2 nacin preko tagname vraca html colection moze samo FOR petlja

linkovi = document.getElementsByTagName("a");
console.log(linkovi);

//3 nacin preko query selec... (vraca node listu moze se koristii forEach)
linkovi = document.querySelectorAll("a");
console.log(linkovi);

//Dohvatiti sve slike na stranici.
//1 nacin preko ugradjene metode images vraca html conllekcije
let slike = document.images;
console.log(slike);

//2 nacin preko tagname
slike = document.getElementsByTagName("img");
console.log(slike);

//3 nacin preko  query select

slike = document.querySelectorAll("img");

console.log(slike);

/// 28.12.2021

let sviLinkovi = document.querySelectorAll("a");

sviLinkovi.forEach((link) => {
    // HTML atributi
    link.href = "https://www.google.com";
    link.target = "_blank";

    // CSS stilovi
    link.style.color = "green";
    link.style.textDecoration = "none";

    //link.style = "color: green; text-decoration: none;";

    // Preko metode
    link.setAttribute("name", "link2"); // isto kao i link.name = "link2";
    link.setAttribute("style", "color: green; text-decoration: none;"); // isto kao i link.style = "...";
});

// Svako u novom linku. Ako ime počinje na slovo „S“, link se otvara u novom tabu, a inače se otvara na istoj stranici.

let imena = ["Stefan", "Marija", "Nikola", "Bogdan", "Vladan"];
imena.forEach((ime) => {
    if (ime.startsWith("S")) {
        //if(ime[0] == "S") {
        document.body.innerHTML += `<a href="#" target="_blank">${ime}</a>`;
    } else {
        document.body.innerHTML += `<a href="#">${ime}</a>`;
    }
});

// U listi kao stavke liste. Naizmenično stavke liste obojiti sa dve različite boje.
let listaString = "<ul>";
imena.forEach((ime, i) => {
    if (i % 2 == 0) {
        listaString += `<li style="color: red">${ime}</li>`;
    } else {
        listaString += `<li style="color: blue">${ime}</li>`;
    }
});
listaString += "</ul>";
document.body.innerHTML += listaString;

// selektovati sve paragrafe i u svakom od njih pridodati tekst "VAZNO!!!"

paragrafi = document.querySelectorAll("p");

paragrafi.forEach((paragraf) => {
    paragraf.innerHTML += " VAZNO!";
});

// ////////////////////////////////////////////////////////////////
// //svim divovima na stranici sa klasom "error" dodati po jedan naslov najvece velicine sa tekstom "Greska!"

let greska = document.querySelectorAll(".eror");

console.log(greska);

greska.forEach((eror) => {
    eror.innerHTML += `<h1>greska!</h1>`;
});
// ////////////////////////////////////////////////////////////////
// // ZADATAK 3: Neka je n broj paragrafa u datom dokumentu. U svakom i-tom paragrafu dodati broj i na kvadrat, za svako i=1,2,...n

let n = document.querySelectorAll("p");

for (let i = 1; i < n.length; i++) {
    n[i].innerHTML += i ** 2;
}
// ////////////////////////////////////////////////////////////////
// // ZADATAK 4: svim slikama dodati alternativni tekst

slike = document.querySelectorAll("img");
slike.forEach((slika) => {
    slika.setAttribute("alt", "alternativni text");
});

// ////////////////////////////////////////////////////////////////
// // ZADATAK 5: svim paragrafima postaviti atribut style tako da budu obojeni ljubicastom bojom
paragrafi.forEach((p) => {
    p.setAttribute("style", "color: purple");
});
// ////////////////////////////////////////////////////////////////
// // ZADATAK 6: svim parnim paragrafima na stranici postaviti pozadinsku zelenu boju, a svim neparnim paragrafima postaviti pozadinsku crvenu boju
paragrafi = document.querySelectorAll("p");
paragrafi.forEach((p, i) => {
    i % 2 == 0 ?
        p.setAttribute("style", "background-color: green;") :
        p.setAttribute("style", "background-color: red;");
});
// ////////////////////////////////////////////////////////////////
// // ZADATAK 7: Svim linkovima na stranici postaviti padding na 5px, font size na 18px i text-decoration na none.
sviLinkovi = document.querySelectorAll("a");
sviLinkovi.forEach((link, i) => {
    link.innerHTML = `ovo je link jbte lorem! </br>`;
    link.setAttribute(
        "style",
        "padding: 5px; text-decoration: none; font-size: 18px;"
    );
    // //Parnim linkovima staviti zelenu pozadinsku boju i ljubicastu boju teksta, a neparnim linkovima plavu pozadinsku boju i belu boju teksta
    i % 2 == 0 ?
        link.setAttribute("style", "background-color: green; color:purple;") :
        link.setAttribute("style", "background-color: blue; color:white;");
});

// ////////////////////////////////////////////////////////////////
// // ZADATAK 8: Svim slikama na stranici koja su sa ekstenzijom .png, postaviti okvir na debljinu 2px i crvenu boju
slike = document.querySelectorAll("img");

slike.forEach((slika) => {
    slika.src.includes(".png") ?
        slika.setAttribute("style", "border: 2px solid red;") :
        false;
});
// ////////////////////////////////////////////////////////////////
// // ZADATAK 9: Svakom linku na stranici promeniti target svojstvo na sledeci nacin: ako je bilo _blank, postaviti na _top, a ako je bila neka vrednost razlicita od _blank, ili uopste nije bilo postavljeno, tada postaviti na _blank
linkovi = document.querySelectorAll("a");

console.log(linkovi);
linkovi.forEach((el) => {
    el.target == "_blank" ? (el.target = "_top") : (el.target = "_blank");
});

// ////////////////////////////////////////////////////////////////
// // ZADATAK 10: Napraviti niz od najmanje tri imena. Proci nizom i imena ispisati:

// //- Svako u novom linku. Ako ime pocinje na slovo "S", link se otvara u novom tabu, a inace se otvara na istoj stranici.
imena.forEach((el) => {
    document.body.innerHTML += `<a class ='imena' href='#'>${el}</a> <br>`;
});

let imenaNode = document.querySelectorAll(".imena");
console.log(imenaNode);

imenaNode.forEach((link) => {
    link.innerHTML.startsWith("S") ?
        (link.target = "_blank") :
        (link.target = "_top");
});

// //- U listi kao stavke liste. Naizmenicno stavke liste obojiti sa dve razlicite boje.
let lista = "<ul>";
imena.forEach((ime, i) => {
    i % 2 == 0 ?
        (lista += `<li style = "background-color: blue;">${ime}</li>`) :
        (lista += `<li style = "background-color: red;">${ime}</li>`);
});
lista += "</ul>";
document.body.innerHTML += lista;

// //- U jednoj koloni tabele. Postaviti okvir, marginu i pading celijama tabele.
let tabela = `<table>`;
imena.forEach((ime) => {
    tabela += `<tr><td style = "border: 1px solid green; margin: 2px; padding: 2px;">${ime}</td></tr>`;
});
tabela += `</table>`;
document.body.innerHTML += tabela;
//Navigacija kroz DOM stablo
// //Svim parnim paragrafima na stranici dodati klasu error, a svim neparnim paragrafima dodati klasu success
console.log(paragrafi);

paragrafi.forEach((p, i) => {
    i % 2 == 0 ? p.classList.add("error") : p.classList.add("success");
});

// Tekst u paragrafima naizmenično pisati veličinom 15px, veličinom 20px i veličinom od 25px.

paragrafi.forEach((p, i) => {
    if (i % 3 == 0) {
        p.style.fontSize = "15px";
    } else if (i % 3 == 1) {
        p.style.fontSize = "20px";
    } else if (i % 3 == 2) {
        p.style.fontSize = "25px";
    }
});

// Svim paragrafima čiji tekst sadrži reč error, postaviti klasu na error, svim paragrafima čiji tekst sadrži reč success, postaviti klasu na success. Ostale klase paragrafa ne modifikovati.
paragrafi.forEach((p) => {
    if (p.textContent.includes("error")) {
        p.classList.add = "error";
    } else if (p.textContent.includes("success")) {
        p.classList.add = "sucess";
    }
});

// Svim paragrafima koji imaju klasu error skloniti tu klasu, a svim paragrafima koji nemaju klasu error dodati tu klasu.

paragrafi.forEach((p) => {
    p.classList.toggle("error");
});
/////////////////////////////////////////
//////// CREATE ELEMENTS DOM MANIPULACIJA ///////////////
/////////////////////////////////////////

//Dodati novi div tag dokumentu.

let div1 = document.createElement("div");
console.log(div1);
document.body.appendChild(div1);

// Formirati ul listu sa stavkama čiji je sadržaj proizvoljan tekst, i dodati je div elementu.
/// pravlkjenje elemenata koje ubacujemo u div
let ul1 = document.createElement("ul");
let li = document.createElement("li");
let li1 = document.createElement("li");
let li2 = document.createElement("li");
/// ubacivanje teksta u li tag
li.textContent = "izmenjena li";
li1.textContent = "Proizvoljan text";
li2.textContent = "Proizvoljan text"; ///

// ubacivanje li u ul
ul1.appendChild(li);
ul1.appendChild(li1);
ul1.appendChild(li2);

div1.appendChild(ul1);

// Iz ul liste izbaciti prvu stavku.
let izbacenaLi = ul1.removeChild(li);

// U ul listi zameniti drugu stavku liste.

ul1.replaceChild(izbacenaLi, li2);
// Dodati još jednu stavku ul listi, pri čemu je sadržaj stavke slika.

let slika = document.createElement("img");
console.log(slika);
slika.setAttribute("src", "../14_ARROW_FUNKCIJE/slika.jpeg");
slika.setAttribute("alt", "mesec");

ul1.appendChild(slika);


"use strict";

console.log("IF - ELSE Grananje");


if(true){
    console.log("uslov je ispunjen");
}else{
    console.log("Uslov nije ispunjen");
};


// FAlse

if(false){
    console.log("uslov je ispunjen");
}else{
    console.log("Uslov nije ispunjen");
};

//////////////////////////

let a = 10;
let b = 8;
if(a < b){
    console.log("broj a je strogo manji od broja b");
}else{
    console.log(`broj ${a} je veci ili jednak od broja ${b}`);
}


let god = 27;

if(god >= 18){
    console.log(`ova osoba je punoletna`);
}else{
    console.log(`osoba je maloletna`);
}


// Zadaci

// 1. za uneta 2 broja ispisati koji je veci a koji manji


let broj1 = 10;
let broj2 = 30;

if(broj1 > broj2){
    console.log(`broj ${broj1} je vece od broja ${broj2}`)
}else{
    console.log(`broj ${broj1} je manji od broja ${broj2}`)
}

// 2. Ispitati da li je temperatura u plusu ili u minusu
// ako je temp 0 racunati da je u plusu


let t = 10;

if(t >= 0){
    console.log(`temperatura je + ${t} stepeni`)
}else{
    console.log(`temperatura je ${t} stepeni celzijusa`)
}

/* 3. u odnosu na pol da li je muski ili zenski 
koji je korisnik uneo izbaciti avatar */


let pol = "z";

if(pol === "m"){
   document.body.innerHTML += `<img src="slike/m.png">`;
}else{

    document.body.innerHTML += `<img src="slike/f.jpeg">`;

}

/* 4. U odnosu na preuzeto vreme sa racunara ispisati da li je trenutno vreme
jutro ili podne */


let datum = new Date();
let vreme = datum.getHours();

if(vreme >= 12){
    console.log(`trenutno je popodne`)
}else{
    console.log(`trenutno je jutro`)
}

/* 5. za preuzetu godinu sa racunara ispisati da li je 
osoba punoletna ili maloletna */

let godina = datum.getFullYear();

let godiste = 1989;

let g = godina - godiste;

if(g >= 18){
    console.log(`osoba je punoletna i ima ${g} godina`)
} else {
    console.log(`osoba je maloletna i ima ${g} godina`)
}


/* 6. odrediti najveci od navedena 3 broja ne koristeci 
logicke operatere */


let b1 = 5;
let b2= 9;
let b3= 7;

let maks = b1; // pretpostavka

if(maks < b3){
    maks = b2;
}

if(maks < b3){
    maks = b3;
}
document.body.innerHTML += `<p>${maks}</p>`


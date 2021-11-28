// Zadatak 1

let s = 15, m = 21;


let odPonoci = s*60 + m; 
console.log("Od ponoci je proslo " + odPonoci + " minuta");

let doPonoci = 24 * 60 - odPonoci;
console.log("do ponoci ima jos " + doPonoci + " min");


//Zadatak 2

let minOdPonoci = 909;
let minSada = minOdPonoci % 60;
let satSada = (minOdPonoci - minSada) / 60;

console.log("Sada je " + satSada + ":" + minSada);

// Drugi nacin

// console.log(minOdPonoci / 60); // Deljenje daje realan broj
// console.log(Math.floor(minOdPonoci/60));// daje ceo broj maanji ili jednak od rezultata
// console.log(Math.ceil(minOdPonoci/60)); // daaje ceo broj veci ili jednak od rezultata
// console.log(Math.round(minOdPonoci/60)); // daje ceo broj rezultat zaokruzivanja

let satSada2 = Math.floor(minOdPonoci/60);
let minSada2 = minOdPonoci % 60;

console.log("sada je " + satSada2 + ":" + minSada2);


//Zadataak 3

let cenaRobe = 1750, novcanica = 2000;

let kusur = novcanica - cenaRobe;

console.log("kusur koji treba da se vraati je " + kusur + " dinara");

// zadatak 6

let ukupnoEu = 950;
let dinar = 1;
let kursEuro = 118;
let kursDolar = 100;
let euroDinar = kursEuro * dinar;

let razmenaEuDin = kursEuro * ukupnoEu;

console.log("ukupno imate " + razmenaEuDin + " dinara");

let razmenaDinEu = razmenaEuDin/kursEuro;
console.log("ukupno imate " + razmenaDinEu + " eura" );

// Zadatak 7

// ukupnoEU
// dinar
// euroDinar
let dolarDinar = 100 * dinar;

// euroDolar = 118 / 100;

let euroDolar = kursEuro / kursDolar;

console.log(euroDolar);

let kolikoDolara = razmenaDinEu * euroDolar;
let kolikoEura = kolikoDolara / euroDolar;
console.log("Nakon razmene imate " + kolikoDolara + " dolara");
console.log("Nakon razmene imate " + kolikoEura + " eura");

//



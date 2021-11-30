"use strict";

console.log(`if else if`);


let ocena = 4;

if(ocena == 5){
    console.log(`Odlican ${ocena}`)
}else if(ocena == 4){
    console.log(`Vrlo dobar ${ocena}`)
}else if(ocena == 3){
    console.log(`Dobar ${ocena}`)
}else if(ocena == 2){
    console.log(`Dovoljan ${ocena}`)
}else if(ocena == 1){
    console.log(`Nedovojan ${ocena}`)
}else{
    console.log(`uneli ste pogresnu ocenu`)
}

//Zadaci

//Zadatak 7
/*Na osnovu unetog broja poena ispitati koju ocenu profesor treba da upiše učeniku. Učenik je položio ispit ukoliko ima više od 50 poena, u suprotnom je pao ispit. 
Za više od 50 poena učenik dobija ocenu 6, 
za više od 60 poena učenik dobija ocenu 7,
za više od 70 poena učenik dobija ocenu 8, 
za više od 80 poena učenik dobija ocenu 9 i 
za više od 90 poena učenik dobija ocenu 10. */


let bodovi = 150;

if(bodovi < 50){
    console.log(`imate ${bodovi} bodova, pali ste ispit`)
}else if(bodovi < 60){
    console.log(`imate ${bodovi} bodova, vasa ocena je 6`)
}
else if(bodovi < 70){
    console.log(`imate ${bodovi} bodova, vasa ocena je 7`)
}
else if( bodovi < 80){
    console.log(`imate ${bodovi} bodova, vasa ocena je 8`)
}else if( bodovi < 90){
    console.log(`imate ${bodovi} bodova, vasa ocena je 9`)
}else if( bodovi <= 100){
    console.log(`imate ${bodovi} bodova, vasa ocena je 10`)
}else{
    console.log(`Niste uneli broj bodova`)
}


// Zadatak 2
/*Preuzeti koji je dan u nedelji sa računara i ispitati da li je to radni dan ili je u pitanju vikend.  */

let datum = new Date();
let dan = datum.getDay();

console.log(dan)

// if(dan == 1){
//    console.log(`trenutno je radni dan Ponedeljak`);
// }else if( dan == 2){
//     console.log(`trenutno je radni dan Utorak`);
// }else if( dan == 3){
//     console.log(`trenutno je radni dan Sreda`);
// }else if( dan == 4){
//     console.log(`trenutno je radni dan Cetvrtak`);
// }else if( dan == 5){
//     console.log(`trenutno je radni dan Petak`);
// }else if(dan == 6){
//     console.log(`trenutno je vikend Subota`);
// }else if(dan == 0){
//     console.log(`trenutno je vikend Nedelja`);
// }else {
//     console.log(`morate uneti danasnji dan (0 - 6)`);
// }

if(dan == 0){
    console.log(`danas je Nedelja vikend`);
}else if(dan == 6){
    console.log(`danas je Subota, vikend`);
}else{
    console.log(`danas je radni dan`);
}



// Zadatak 9
/*
Za vreme preuzeto sa računara ispisati 
dobro jutro za vreme manje od 12 sati ujutru, 
dobar dan za vreme manje od 18 sati popodne i u ostalim slučajevima ispisati dobro veče.
 */

let vreme = datum.getHours();

if(vreme < 12){

    console.log(`Dobro Jutro!`);
}else if(vreme < 18){
    console.log(`Dobar Dan!`);
}else {
    console.log(`Dobro Vece`);
}

// Zadatak 10

/*
Uporediti dva uneta datuma i ispisati koji od njih je raniji. 
*/

// let d1 = 1994; 
// let d2 = 2000;

// let godina = datum.getFullYear();

// let raz1 = godina - d1;
// let raz2 = godina - d2;

// if(raz1 > raz2){
//     console.log(`Datum ${d1} je raniji od ${d2} datuma`);
// }else{
//     console.log(`Datum ${d2} je raniji od ${d1} datuma`);
// }


// let d1 = 4, m1 = 11, g1 = 1989;
// let d2 = 21, m2 = 4, g2 = 1989;

// // datum imamo vec zadat
// let d = datum.getDate();
// let m = datum.getMonth() + 1;
// let g = datum.getFullYear();
// console.log(g);


// resenje ovog zadatka prema set date metodi
// new Date(year, month, day, hours, minutes, seconds, milliseconds)
let date1 = new Date(1989, 11,4);
let date2 = new Date(1989, 4, 21);

let d1 = date1.getTime();
let d2 = date2.getTime();

let d = datum.getTime();

let razlika1 = d - d1;
let razlika2 = d - d2;

if(razlika1 > razlika2){
    console.log(`datum ${date1} je ranijeg  datuma u odnosu na ${date2}`)
}else{
    console.log(`datum ${date2} je ranijeg  datuma u odnosu na ${date1}`)
}



// Zadatak 11

/* Radno vreme jedne programerske firme je od 9h do 17h. Preuzeti vreme sa računara i ispitati da li u to vreme firma radi ili ne radi. */

let rv1 = 9;
let rv2 = 17;
console.log(vreme);

// imamo vec vrednost za trenutno vreme

if(vreme < rv1){
    console.log(`trenutno firma ne radi`);
}else if(vreme < rv2){
    console.log(`firma radi`);
}else{
    console.log(`trenutno ne radi`);
}


//  Zadatak 12

/*Za unet sat početka i sat kraja radnog vremena dva lekara,  
ispisati DA ukoliko se smene lekara preklapaju, u suprotnom ispisati NE.
(Ne može se desiti da lekar počne smenu pre ponoći, a završi sa smenom nakon ponoći, ovo se podrazumeva i ne ispitivati doatno) */

let dr1P = 7, dr1K = 14;
let dr2P = 16, dr2K = 22;

if(dr1K < dr2P){
    console.log(`ne preklapaju se`);
}else if(dr2K < dr1P){
    console.log(`Ne preklapaju se`);
}else{
    console.log(`Preklapaju se`);
}


// Zadatak 13

let num = 14;
let paran = num%2;
console.log(paran);
if(paran == 0){
    console.log(`broj je paran`);
}else{
    console.log(`broj je neparan`);
}

// Zadatak 14
num = 14;
let deljivSa3 = num%3;
console.log(deljivSa3);

if(deljivSa3 == 0){
    console.log(`deljiv je saa 3`);
}else{
    console.log(`nije deljiv sa 3`);
}

// Zadatak 15
/*Za dva uneta broja, od većeg učitanog broja oduzeti manji i rezultat ispisati na ekranu. */



// Zadatak 16\

/*Za uneti broj ispitati da li je on manji od nule, veći od nule ili jednak nuli. 
Ukoliko je manji ili jednak nuli ispisati njegov prethodnik, a ukoliko je veći od nule ispisati njegov sledbenik. */

let broj = 16;

if(broj >= 0){
    broj += 1;
    console.log(broj);
}else{
    broj -= 1;
    console.log(broj);
}


// zadatak 17
/*
Za tri uneta broja ispisati koji od njih je najveći, koji od njih je srednji, a koji od njih je najmanji, korišćenjem if – else if strukture.  */


let b1 = 55;
let b2 = 65;
let b3 = 145;

let max = b1;
// najveci broj
if(max < b2){
    max = b2;
}

if(max < b3){
    max = b3;
}

console.log(`najveci broj je ${max}`);

// Najmanji broj

let min = b1;

if(min > b2){
    min = b2;
}

if(min > b3){
    min = b3;
}

console.log(`Najmanji broj je ${min}`);


// Srednji broj je

let srednji = b1 + b2 + b3 - max - min;


console.log(`srednji broj je ${srednji}`);

// Zadatak 17

/*Za učitani broj ispitati da li je ceo. */

let es = 15.3;

if(es%1 == 0){
    console.log(`broj ${es} je ceo broj`);
}else{
    console.log(`broj ${es} nije ceo broj`);
}



"use strict";

console.log(`ugnjezdeno`);

// Zadatak 19
/*Za tri uneta broja ispisati koji od njih je najveći, koji od njih je srednji, a koji od njih je najmanji, ovoga puta korišćenjem ugnježdenog grananja. */

let b1 = 8;
let b2 = 7;
let b3 = 4;

if (b1 > b2) {
  if (b1 > b3) {
    console.log(`broj ${b1} je najveci broj`);
    if (b2 > b3) {
      console.log(`broj ${b2} je srednji`);
      console.log(`a ${b3} je najmanji`);
    } else {
      console.log(`broj ${b2} je srednji`);
      console.log(`a ${b3} je najmanji`);
    }
  } else {
    console.log(`broj ${b1} je srednji`);
    if (b2 > b3) {
      console.log(`broj ${b2} je najveci`);
      console.log(`a ${b3} je najmanji`);
    }else{
        console.log(`broj ${b3} je najveci`);
      console.log(`a ${b2} je najmanji`);
    }
  }
}else if(b2 > b3){
    console.log(`broj ${b2} je najveci`);
    if (b1 > b3) {
        console.log(`broj ${b3} je najmanji broj`);
        console.log(`broj ${b1} je srednji`);
    }else {
        console.log(`broj ${b1} je najmanji broj`);
        console.log(`broj ${b3} je srednji`);
    }
}else {
    console.log(`broj ${b3} je najveci`);
    if(b2>b1){
        console.log(`broj ${b1} je najmanji broj`);
        console.log(`broj ${b2} je srednji`);
    }
}

/*Zadatak 20 Naći koji je najveći od tri uneta broja $a, $b i $c.
 */

let $a = 10;
let $b = 9;
let $c = 20;

let $max = $a;

if($max < $b){
  $max = $b
}
if($max < $c){
  $max = $c;
}

console.log(`najveci broj od uneta 3 broja je ${$max}`);

/* Zadatak 21. Ispisati na ekranu „ekstremna temperatura“ ukoliko je temperatura manja od -15 stepeni Celzijusovih  i veća od 40 stepeni Celzijusovih. */

let temp = -1;

if(temp < 0){
  if(temp > -15){
  console.log(`temperatura nije ektremna`);
  }else {
    document.body.innerHTML += `<h1>EKSTREMNA TEMPERATURA ${temp} stepeni celzijusa</h1>`
  }
}if(temp < 40){
  console.log(`temperatura nije ektremna`);
}else{
  document.body.innerHTML += `<h1>EKSTREMNA TEMPERATURA ${temp} stepeni celzijusa</h1>`
}

/*Zadatak 22 Ispitati da li je godina prestupna. (Godinu preuzeti sa vremena na Vašem računaru). Prestupna je ona godina koja je deljiva sa 4, ako nije deljiva sa 100, mada ipak jeste deljiva sa 400. */

let vreme = new Date();
let godina = vreme.getFullYear();
let prestupna = godina % 400;


if(prestupna == 0){
  if(godina%100 !== 0){
  console.log(`ova ${godina} godina je prestupna`);
  }else if(godina%4 == 0){
    console.log(`ova ${godina} godina je prestupna`);
  }
}else{
  console.log(`ova ${godina} godina nije prestupna`);
}

/*Zadatak 23 Jedan butik ima radno vreme od 9h do 20h radnim danima, a vikendom od 10h do 18h. Preuzeti dan i vreme sa računara i ispitati da li je butik trenutno otvoren.*/

let bRD1 = 9, bRD2 = 17;
let bV1 = 10, bV2 = 18;

let sati = vreme.getHours();
let dan = vreme.getDay();


if(dan == 0){
  console.log(`danas je Nedelja vikend ${sati}h`);
    if(sati<10){
      console.log(`Butik Ne radi`);
    }else if(sati >= 18){
      console.log(`Butik Ne radi`);
    }else{
      console.log(`Butik radi!`);
    }
}else if(dan == 6){
  console.log(`danas je Subota, vikend ${sati}h`);
    if(sati<10){
      console.log(`Butik Ne radi`);
    }else if(sati >= 18){
      console.log(`Butik Ne radi`);
    }else{
      console.log(`Butik radi!`);
    }
}else{
  console.log(`danas je radni dan ${sati}h`);
    if(sati < 9){
      console.log(`Butik Ne radi`);
    }else if(sati >= 17){
      console.log(`Butik Ne radi`);
    }else{
      console.log(`Butik radi!`);
    }
}


/*Zadatak 24 Napisati program koji za uneta četiri prirodna broja a,b,c,d određuje koliko njih je deljivo sa 2, koliko sa 5, a koliko sa 2 i 5 i štampa odgovarajuće poruke. */



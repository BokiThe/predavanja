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


import Auto from "./auto.js";

let a1 = new Auto(" Audi A4  ", "crvena", false, 0);
console.log(a1);
console.log(a1);
a1.marka = "      Audi A4";
a1.sviraj();

a1.vozi(25);
a1.postaviMarku("      Audi A4");
console.log(a1);
a1.stampaj();
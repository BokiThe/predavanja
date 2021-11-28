"Use strict";

console.log("Pozdrav iz JavaScript datoteke");

let a  = 3, b = 6;
console.log(a * b);

console.log("Pera" + " Peric");
console.log("Pera" * " Peric");

b = b/a;
 
console.log(a,b);

a = b * a + a;
console.log(a,b)// a = 9, b = 2

b = (a - 2*b)/b;

console.log(a,b);

//a = a + 10; 
a+=10;
console.log(a);

//a = a + 1;
//a+=1;
//a++;
++a
console.log(a);

let c = 5;
console.log(c++); // prvo se iskoristi stara vrednost promenljive pa se se onda vrednost promenljive;
console.log(c);

let d = 3;
console.log(++d);// prvo se vredmnost promenljive poveca za 1 a onda se nova vrednost koristi u izrazu
console.log(d);

c = 4;
d = 3;
x = (c++) * (--d); // 4 * 2 = 8
console.log(c,d,x); // a ovde ima c = 5 d = 2 x = 8

console.log(7%2); // rezultat je 1
console.log(9%2);

console.log(4 ** 3);
c = 3;
d = (c ** 3)+1;
console.log(d);

// vezbe

let vremeSati = 5, vremeMinuti = 30;

let ponoc = 24*60;
console.log(ponoc);

let ostatakPoslePonoci = ponoc-(vremeSati*60 + vremeMinuti);
console.log(ostatakPoslePonoci);

let kolikoSatiH = ostatakPoslePonoci%24;
console.log(kolikoSatiH);

let kolikoMinutaM = ostatakPoslePonoci%60;
console.log(kolikoMinutaM);
console.log(`ostalo do ponoci ${kolikoSatiH}h i ${kolikoMinutaM}min`)







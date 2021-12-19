console.log(`NIZOVI`);

let cars = ["Toyota", "BMW", "Volvo"];
console.log(cars);

let numbers = [1, 3, 5, -3.14];
console.log(numbers);

let random = [6, "Stefan", -8.8, true, [1, 2, 3]];
console.log(random);

console.log(cars[0]);
console.log(cars[1]);
console.log(cars[2]);

console.log(random[4][0]);

cars[0] = "Peugeot";
console.log(cars);

for (let i = 0; i < cars.length; i++) {
  console.log(cars[i]);
}

//2 ZADATAK

/*
Odrediti zbir elemenata celobrojnog niza.
*/

console.log(`/////////////////2 ZADATAK ////////////////`);

let ceo = [1, 5, 3, 10, 20];
let zbir = 0;
for (let i = 0; i < ceo.length; i++) {
  zbir += ceo[i];
}
console.log(zbir);

// sa funkcijom

let sumaElemenata = (niz) => {
  let zbir = 0;
  for (let i = 0; i < niz.length; i++) {
    zbir += niz[i];
  }
  return zbir;
};

console.log(`suma elemenata u nizu je ${sumaElemenata(ceo)}`);
//3.ZADATAK

/*
Odrediti proizvod elemenata celobrojnog niza.

*/
console.log(`////////////////3. ZADATAK /////////////////`);

let proizvodElemenata = (niz) => {
  let proizvod = 1;
  for (let i = 0; i < niz.length; i++) {
    proizvod = proizvod * niz[i];
  }
  return proizvod;
};
console.log(`proizvod elemenata u nizu je ${proizvodElemenata(ceo)}`);

//4.ZADATAK

/*
Odrediti srednju vrednost elemenata celobrojnog niza.
*/
console.log(`////////////////4. ZADATAK /////////////////`);
let aritmetickaSredina = (niz) => {
  let sredina = 0;
  let brojac = 0;
  for (let i = 0; i < niz.length; i++) {
    sredina += niz[i];
    brojac++;
  }
  return brojac != 0 ? sredina / brojac : 0;
};

console.log(
  `aritmeticka sredina elemenata niza 'ceo' je ${aritmetickaSredina(ceo)}`
);
console.log(aritmetickaSredina([]));

//2 nacin
let arSr = (niz) => (niz.length != 0 ? sumaElemenata(niz) / niz.length : 0);

console.log(arSr(ceo));

// aritmeticka sredina parnih brojeva

let arSrParnih = (niz) => {
  let brojac = 0;
  let zbir = 0;
  for (let i = 0; i < niz.length; i++) {
    if (niz[i] % 2 == 0) {
      zbir += niz[i];
      brojac++;
    }
  }
  return brojac != 0 ? zbir / brojac : 0;
};

console.log(arSrParnih(ceo));
//5. ZADATAK
/*
Odrediti maksimalnu vrednost u celobrojnom nizu.
 */
console.log(`////////////////5. ZADATAK /////////////////`);
let maxVrednost = (niz) => {
  let max = niz[0];
  for (let i = 0; i < niz.length; i++) {
    max < niz[i] ? (max = niz[i]) : false;
  }
  return max;
};
console.log(maxVrednost(ceo));

let niz2 = [20, 30, 100, 4, -2];

let niz3 = [-1000, -1000, 0, -1000, 0];

console.log(maxVrednost(niz2));
console.log(maxVrednost(niz3));

// 6. ZADATAK;

/*
Odrediti minimalnu vrednost u celobrojnom nizu.
 */
console.log(`////////////////6. ZADATAK /////////////////`);

let minVrednost = (niz) => {
  let min = niz[0];
  for (let i = 1; i < niz.length; i++) {
    min > niz[i] ? (min = niz[i]) : false;
  }
  return min;
};

console.log(minVrednost(niz2));
console.log(minVrednost(niz3));

//7 ZADATAK

console.log(`////////////////7. ZADATAK /////////////////`);
/*
Odrediti indeks maksimalnog elementa celobrojnog niza.
*/

let indexMaxEl = (niz) => niz.indexOf(maxVrednost(niz));

console.log(indexMaxEl(niz3));

console.log(niz2.indexOf(maxVrednost(niz2)));

//8 ZADATAK

console.log(`////////////////8. ZADATAK /////////////////`);
/*
Odrediti indeks minimanlnog elementa celobrojnog niza.
*/

let indexMinEl = (niz) => niz.indexOf(minVrednost(niz));

console.log(indexMinEl(niz2));

//9 ZADATAK

/*
Odrediti broj elemenata celobrojnog niza koji su veći od srednje vrednosti.
*/
console.log(`////////////////9. ZADATAK /////////////////`);

let veciOdSrednje = (niz) => {
  let brojac = 0;
  let sredina = aritmetickaSredina(niz);
  for (let i = 0; i < niz.length; i++) {
    niz[i] > sredina ? brojac++ : false;
  }
  return brojac;
};

console.log(niz2);

console.log(veciOdSrednje(niz2));

//10 ZADATAK

/*
Izračunati zbir pozitivnih elemenata celobrojnog niza.
*/
console.log(`////////////////10. ZADATAK /////////////////`);

let zbirPoz = (niz) => {
  let zbir = 0;

  for (let i = 0; i < niz.length; i++) {
    niz[i] > 0 ? (zbir += niz[i]) : false;
  }
  return zbir;
};

console.log(zbirPoz(niz2));

//11 ZADATAK

/*
Odrediti broj parnih elemenata u celobrojnom nizu.
*/
console.log(`////////////////11. ZADATAK /////////////////`);

let brojParnih = (niz) => {
  let brojac = 0;

  for (let i = 0; i < niz.length; i++) {
    niz[i] % 2 == 0 ? brojac++ : false;
  }
  return brojac;
};

let brojParnih1 = (niz) => {
  let brojac = 0;
  for (let i = 0; i < niz.length; i++) {
    if (niz[i] % 2 == 0) {
      brojac++;
    }
  }
  return brojac;
};

console.log(brojParnih1(niz2));

console.log(brojParnih(niz2));

console.log(brojParnih(ceo));

//12 ZADATAK

/*
Odrediti broj parnih elemenata sa neparnim indeksom.
*/
console.log(`////////////////12. ZADATAK /////////////////`);

let neparniIndexOdParnih = (niz) => {
  let brojac = 0;
  for (let i = 0; i < niz.length; i++) {
    if (niz[i] % 2 == 0 && niz.indexOf(niz[i]) % 2 != 0) {
      brojac++;
    }
  }

  return brojac;
};
console.log(niz2);
console.log(
  `broj parnih elemenata sa neparnim indexom je ${neparniIndexOdParnih(niz2)} `
);

//treba da ih ima 3

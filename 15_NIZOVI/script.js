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

// 16 ZADATAK
/*
Dat je niz stavki za kupovinu (članovi niza su stringovi). Prolaskom kroz niz napraviti neuređenu listu i ispisati je u html dokument.
*/
console.log(`////////////////16. ZADATAK /////////////////`);

let korpa = ["hleb", "secer", "brasno", "mleko", "ulje"];

let kupovina = (niz) => {
  let lista = `<ul>`;
  for (let i = 0; i < niz.length; i++) {
    lista += `<li>${niz[i]}</li>`;
  }
  lista += `</ul>`;
  document.body.innerHTML += lista;
};
kupovina(korpa);

// 17 ZADATAK
/*
Dat je niz imena košarkaškog tima. Prolaskom kroz niz formirati tabelu u čijim su redovima imena tima, i tabelu ispisati u html dokument.
*/
console.log(`////////////////17. ZADATAK /////////////////`);

let timovi = ["KK Partizan", "KK C. Zvezda", "Cibona", "Buducnost"];

let tabelaTimova = (niz) => {
  let tabela = `<table border = 1>`;
  for (let i = 0; i < niz.length; i++) {
    tabela += `<tr><td>${niz[i]}</td></tr>`;
  }
  tabela += `</table>`;
  document.body.innerHTML += tabela;
};

tabelaTimova(timovi);

// 18 ZADATAK
/*
Dat je niz stringova čiji su članovi putanje do slika. Prikazati sve sliku u html dokumentu sa putanjama navedenim u nizu.
*/
console.log(`////////////////18. ZADATAK /////////////////`);

let putanje = [
  "../14_ARROW_FUNKCIJE/slika.jpeg",
  "https://www.popwebdesign.net/popart_blog/wp-content/uploads/2019/05/ledeno-jezero-Tim-Stief-Unsplash.jpg",
  "slika.jpeg",
];

let stampajSlike = (niz) => {
  for (let i = 0; i < niz.length; i++) {
    document.body.innerHTML += `<img src="${niz[i]}"/>`;
  }
};
stampajSlike(putanje);

// 19 ZADATAK
/*
Ispisati dužinu svakog elementa u nizu stringova. 
*/
console.log(`////////////////19. ZADATAK /////////////////`);

let duzinaStringova = (niz) => {
  let duzine = [];
  for (let i = 0; i < niz.length; i++) {
    duzine.push(niz[i].length);
  }
  return duzine;
};
console.log(korpa);
console.log(duzinaStringova(korpa));

// 20 ZADATAK
/*
Odrediti element u nizu stringova sa najvećom dužinom.
*/
console.log(`////////////////20. ZADATAK /////////////////`);

let najvecaDuzinaStringa = (niz) => {
  let najduzi = niz[0];
  for (let i = 1; i < niz.length; i++) {
    if (najduzi.length < niz[i].length) {
      najduzi = niz[i];
    }
  }
  return najduzi.length;
};
console.log(najvecaDuzinaStringa(korpa));
console.log(najvecaDuzinaStringa(putanje));

// 21 ZADATAK
/*
Odrediti broj elemenata u nizu stringova čija je dužina veća od prosečne dužine svih stringova u nizu.
*/
console.log(`////////////////21. ZADATAK /////////////////`);

let duziOdProseka = (niz) => {
  let duzina = duzinaStringova(niz);
  let sredina = aritmetickaSredina(duzina);
  let brojac = 0;
  for (let i = 0; i < niz.length; i++) {
    if (niz[i].length > sredina) {
      brojac++;
    }
  }

  return brojac;
};

console.log(duziOdProseka(korpa));
console.log(duziOdProseka(putanje));
console.log(duziOdProseka(timovi));

// 22 ZADATAK
/*
Odrediti broj elemenata u nizu stringova koji sadrže slovo 'a’. 
*/
console.log(`////////////////22. ZADATAK /////////////////`);

let sadrziA = (niz) => {
  let brojac = 0;
  for (let i = 0; i < niz.length; i++) {
    for (let j = 0; j < niz[i].length; j++) {
      if (niz[i][j] == "a") {
        brojac++;
      }
    }
  }
  return brojac;
};

console.log(sadrziA(korpa));
console.log(sadrziA(timovi));
console.log(sadrziA(putanje));

// 2 nacin sa includes da bi se proverilo koliko elemenata imaju slovo a

let brojElemSadrziA = (niz) => {
  let brojac = 0;
  for (let i = 0; i < niz.length; i++) {
    if (niz[i].includes("a")) {
      brojac++;
    }
  }
  return brojac;
};
console.log(brojElemSadrziA(korpa));
console.log(brojElemSadrziA(timovi));
console.log(brojElemSadrziA(putanje));

// 23 ZADATAK
/*
Odrediti broj elemenata u nizu stringova koji počinju na slovo 'a' ili 'A’. 
*/
console.log(`////////////////23. ZADATAK /////////////////`);

let pocinjeNaA = (niz) => {
  let brojac = 0;
  for (let i = 0; i < niz.length; i++) {
    if (niz[i][0] == "a" || niz[i][0] == "A") {
      brojac++;
    }
  }
  return brojac;
};
console.log(pocinjeNaA(korpa));

let nizSaA = [
  "Anakonda",
  "amajlija",
  "Bojan",
  "Stefan",
  "Nikola",
  "aleksandra",
  "Jelena",
];

console.log(pocinjeNaA(nizSaA));

// 24 ZADATAK
/*
ZA 2 NIZA BILO KOJE VECLICINE NAPRAVITI NIZ CIJI CE INDEX SADRZATI INDEXE OBA NIZA. STO ZNACI DA JE A[I],B[I],  C[I] = A[I], B[I]
*/
console.log(`////////////////24. ZADATAK /////////////////`);

let dvaNizaUNizu = (niz1, niz2) => {
  let niz3 = [];
  if (niz1.length >= niz2.length) {
    for (let i = 0; i < niz1.length; i++) {
      niz3[i] = [niz2[i], niz1[i]];
    }
    return niz3;
  } else {
    for (let i = 0; i < niz2.length; i++) {
      niz3[i] = [niz2[i], niz1[i]];
    }
    return niz3;
  }
};

let niz5 = [1, 3, "aleksandar", 12, "jelena", "DJORDJE"];
let niz4 = [50, 100, 100, "bogdan", "Stefan", -9];
console.log(dvaNizaUNizu(niz5, niz4));

// 25 ZADATAK

/*
SVE ISTO SAMO MNOZENJE 2 ELEMENTA DVA ZAADATA NIZA
PRETPOSTAVKA DA SU SVI ELEMENTI BROJEVI, AKO NISU ONDA TREBA DA VRATI LENGHT ILI DA MNOZENJE NIJE DOZVOLJENO
*/
console.log(`////////////////25. ZADATAK /////////////////`);

let mnozenjeElemNiza = (niz1, niz2) => {
  let niz3 = [];
  if (niz1.length >= niz2.length) {
    for (let i = 0; i < niz1.length; i++) {
      niz3[i] = niz2[i] * niz1[i];
    }
    return niz3;
  } else {
    for (let i = 0; i < niz2.length; i++) {
      niz3[i] = niz2[i] * niz1[i];
    }
    return niz3;
  }
};

let nizBr1 = [1, 10, 8, 6];
let nizBr2 = [3, 7, 9, 11];

console.log(mnozenjeElemNiza(nizBr1, nizBr2));

//26 ZADATAK

/*
NA OSNOVU FORMULE b[i] = (a[i] + a[2*n - 1 - i])/2 
*/

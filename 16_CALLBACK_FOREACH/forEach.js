console.log(`forEACH`);

let a = [1, 9, -6, 5, 8];
/*
function ispis(elem) {
  console.log(`Element je: ${elem}`);
}

a.forEach(ispis);
*/

a.forEach((elem) => {
  console.log(`Element je: ${elem}`);
});

// odrediti zbir elemenata celobrojnog niza

let zbir = (niz) => {
  let s = 0;
  niz.forEach((el) => {
    s += el;
  });
  return s;
};

console.log(zbir(a));

let zbirParnihIndexa = (niz) => {
  let s = 0;
  niz.forEach((el, i) => {
    if (i % 2 == 0) {
      s += el;
    }
  });
  return s;
};
console.log(zbirParnihIndexa(a));

// 3 ZADATAK
/*
Odrediti proizvod elemenata celobrojnog niza.
*/
console.log(`/////////////// 3 ZADATAK /////////////`);

let proizvodEl = (niz) => {
  let p = 1;
  niz.forEach((el) => {
    p *= el;
  });
  return p;
};

console.log(`proizvod svih elemenata niza je`, proizvodEl(a));

// 4 ZADATAK
/*
Odrediti srednju vrednost elemenata celobrojnog niza.

*/
console.log(`/////////////// 4 ZADATAK /////////////`);

let srednjaVrednost = (niz) => {
  let sredina = 0;
  //   let brojac = 0;
  niz.forEach((el) => {
    sredina += el;
    // brojac++;
  });
  return niz.length != 0 ? sredina / niz.length : 0;
};

console.log(`Srednja vrednost svih elemenata niza je`, srednjaVrednost(a));

// 5 ZADATAK
/*
Odrediti maksimalnu vrednost u celobrojnom nizu.
*/
console.log(`/////////////// 5 ZADATAK /////////////`);

let maksimumEl = (niz) => {
  let max = niz[0];
  niz.forEach((el) => {
    if (max < el) {
      max = el;
    }
  });
  return max;
};

console.log(`maksimalna vrednost u nizu je`, maksimumEl(a));

// 6 ZADATAK
/*
Odrediti minimalnu vrednost u celobrojnom nizu.
*/
console.log(`/////////////// 6 ZADATAK /////////////`);

let minimumEl = (niz) => {
  let min = niz[0];
  niz.forEach((el) => {
    if (min > el) {
      min = el;
    }
  });
  return min;
};

console.log(`minimalna vrednost u nizu je`, minimumEl(a));

// 7 ZADATAK
/*
Odrediti indeks maksimalnog elementa celobrojnog niza.
*/
console.log(`/////////////// 7 ZADATAK /////////////`);

let index = (niz, cb) => {
  let cb1 = cb(niz);
  let index = 0;
  niz.forEach((el, i) => {
    if (el == cb1) {
      index = i;
    }
  });
  return index;
};

console.log(index(a, maksimumEl));

//8. ZADATAK
/*
Odrediti index minimalnog elementa celobrojnog niza
*/

console.log(`/////////////// 8 ZADATAK /////////////`);

console.log(index(a, minimumEl));

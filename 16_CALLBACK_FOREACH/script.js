console.log(`///////////// calback i foreach ////////////`);
let brojevi = [1, 5, -9, 6];
let ispisNiza = (niz, cb) => {
  let res = "";
  for (let i = 0; i < niz.length; i++) {
    res += niz[i] + " ";
  }
  cb(res);
};

ispisNiza(brojevi, function (poruka) {
  console.log(poruka);
});

ispisNiza(brojevi, function (poruka) {
  document.body.innerHTML += `<div>${poruka}</div>`;
});

//isti zadatak samo Arow f-je

ispisNiza(brojevi, (poruka) => {
  console.log(poruka);
});

ispisNiza(brojevi, (poruka) => {
  document.body.innerHTML += `<div>${poruka}</div>`;
});

/*
a) odredi broj maksimalnih elemenata u celobrojnom nizu
b) odredi broj minimalnih elemenata u celobrojnom nizu
*/

let maximum = (niz) => {
  let max = niz[0];
  for (let i = 0; i < niz.length; i++) {
    if (max < niz[i]) {
      max = niz[i];
    }
  }
  return max;
};
let minimum = (niz) => {
  let min = niz[0];
  for (let i = 0; i < niz.length; i++) {
    if (min > niz[i]) {
      min = niz[i];
    }
  }
  return min;
};

let brojElemenata = (niz) => {
  let brojac = 0;
  let max = maximum(niz);
  let min = minimum(niz);
  for (let i = 0; i < niz.length; i++) {
    if (niz[i] == max) {
      brojac++;
    }
  }
  return brojac;
};

// sa calback f-jom
/*

let ispisNiza = (niz, cb) => {
  let res = "";
  for (let i = 0; i < niz.length; i++) {
    res += niz[i] + " ";
  }
  cb(res);
};
*/
let brojElemenataCb = (niz, cb) => {
  let brojac = 0;
  let cb1 = cb(niz);
  for (let i = 0; i < niz.length; i++) {
    if (niz[i] == cb1) {
      brojac++;
    }
  }
  return brojac;
};

console.log(brojElemenataCb(brojevi, minimum));
let niz2 = [1, 1, 1, 3, 5, 8, 8, 8];

console.log(brojElemenataCb(niz2, minimum));
console.log(brojElemenataCb(niz2, maximum));

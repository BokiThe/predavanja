console.log(`ARROW FUNKCIJE`);

//Anonimne funkcije

let suma = function (a, b) {
  return a + b;
};

console.log(suma(6, 6));

//Arrow funkcije su anonimne funkcije drugacije zapisane

let suma1 = (a, b) => {
  return a + b;
};

console.log(suma1(5, 3));

//arrow funkcija za ispisivanje
let hello = () => {
  console.log(`hello world`);
};

hello();

let pozdrav = (ime, prezime) => {
  console.log(`pozdrav od ${ime} ${prezime}`);
};

pozdrav("Vladan", "Stojic");
pozdrav("Kristijan", " Zdravkovic");

//Arrow funkcija kojoj se prosledjuju ime i godine korisnika a ona ispisuje ime i da li je korisnik punoletan ili nije.

let ispis = (ime, godine) => {
  if (godine < 18) {
    let poruka = `${ime} nije punoletan`;
    document.body.innerHTML += `<p style = "color : red;">${poruka}</p>`;
  } else {
    let poruka = `${ime} je punoletan`;
    document.body.innerHTML += `<p style = "color : green;">${poruka}</p>`;
  }
};

ispis("pera", 28);

ispis("pera", 17);

// 3. ZADATAK

/*
Napisati funkciju neparan koja za uneti ceo broj n vraća tačno ukoliko je neparan ili netačno ukoliko nije neparan.
*/

console.log(`////////////// 3.ZADATAK /////////////`);

let neparan = (n) => {
  if (n % 2 != 0) {
    return true;
  } else {
    return false;
  }
};

console.log(neparan(4));
console.log(neparan(3));

// drugi nacin

let paran = (n) => n % 2 == 0;

console.log(paran(4));

// 4. ZADATAK

/*
Napisati funkciju maks2 koja vraća veći od dva prosleđena realna broja. Zatim napisati funkciju maks4 koja vraća najveći od četiri prosleđena realna broja.

*/

console.log(`////////////// 4.ZADATAK /////////////`);

let maks2 = (a, b) => {
  if (a > b) {
    return a;
  } else {
    return b;
  }
};

console.log(maks2(4, 3));
console.log(maks2(3, 5));

let maks4 = (a, b, c, d) => maks2(maks2(a, b), maks2(c, d));

console.log(maks4(29, 5, 10, 100));

console.log(maks4(121, 121, 121, 121));

// 2 nacin ternary operator
let max2 = (a, b) => (a > b ? a : b);

console.log(max2(7, 3));

let max4 = (a, b, c, d) => max2(max2(a, b), max2(c, d));

console.log(max4(3, 5, 6, 1));

// 5. ZADATAK

/*
Napisati funkciju koja prikazuje sliku za prosledjenu adresu slike.
*/

console.log(`////////////// 5.ZADATAK /////////////`);

let slika = (link) => `<img src="${link}"/>`;

document.body.innerHTML += slika("slika.jpeg");
document.body.innerHTML += slika("../13_FUNKCIJE/pupy.jpeg");
document.body.innerHTML += slika("../08_RISPONSIVE/slike/slika1.jpg");

//6. ZADATAK

/*
Napisati funkciju koja za unetu boju na engleskom jeziku boji tekst paragrafa u tu boju.

*/
console.log(`////////////// 6.ZADATAK /////////////`);

let boja = (boja) => {
  document.body.innerHTML += `<p style="color: ${boja}">tekst poruke</p>`;
};

boja(`yellow`);
boja(`green`);
boja(`blue`);

boja(`#3333`);

//7 ZADATAK

/*
Napisati program koji sadrži funkciju sedmiDan koja za uneti broj n ispisuje n-ti dan u nedelji (npr. za 0 ispisuje “Nedelja”, za 1 se ispisuje „Ponedeljak“, za 2 se ispisuje „Utorak“, ... ,  a za 7 opet “Nedelja”).
Pitanje: Kako bismo realizovali ovaj zadatak da se tražio n-ti mesec u godini?

*/

console.log(`////////////// 7.ZADATAK /////////////`);
let sedmiDan = (n) => {
  n = n % 7;
  switch (n) {
    case 0:
      console.log(`nedelja`);
      break;
    case 1:
      console.log(`Ponedeljak`);
      break;
    case 2:
      console.log(`Utorak`);
      break;
    case 3:
      console.log(`Sreda`);
      break;
    case 4:
      console.log("Cetvrtak");
      break;
    case 5:
      console.log(`Petak`);
      break;
    case 6:
      console.log("Subota");
      break;
    default:
      console.log(`Pogresan Unos`);
      break;
  }
};

//drugi nacin ternary operaator

let sedmiDan1 = (n) =>
  n % 7 == 0
    ? "ned"
    : n % 7 == 1
    ? "pon"
    : n % 7 == 2
    ? "uto"
    : n % 7 == 3
    ? "sre"
    : n % 7 == 4
    ? "cet"
    : n % 7 == 5
    ? "pet"
    : "sub";

sedmiDan(355);

console.log(sedmiDan1(1));

function mesec(n) {
  n = n % 12;
  switch (n) {
    case 0:
      console.log(`Januar`);
      break;
    case 1:
      console.log(`Februar`);
      break;
    case 2:
      console.log(`Mart`);
      break;
    case 3:
      console.log(`April`);
      break;
    case 4:
      console.log(`Maj`);
      break;
    case 5:
      console.log(`Jun`);
      break;
    case 6:
      console.log(`Jul`);
      break;
    case 7:
      console.log(`Avgust`);
      break;
    case 8:
      console.log(`Septembar`);
      break;
    case 9:
      console.log(`Oktobar`);
      break;
    case 10:
      console.log(`Novembar`);
      break;
    case 11:
      console.log(`Decembar`);
      break;
    default:
      console.log(`Pogresan unos!`);
      break;
  }
}

mesec(333);

//8 ZADATAK

/*
Napisati funkciju deljivSaTri koja se koristi u ispisivanju brojeva koji su deljivi sa tri u intervalu od n do m.
Prebrojati koliko ima ovakvih brojeva od n do m.
*/

console.log(`////////////// 8.ZADATAK /////////////`);

let deljivSaTri = (n, m) => {
  let brojac = 0;
  for (let i = n; i <= m; i++) {
    i % 3 == 0 ? brojac++ : false;
  }
  console.log(`broj brojeva u intervaalu od ${n} do ${m} iznosi ${brojac}`);
};

deljivSaTri(-3, 10);

// 9 ZADATAK

/*
Napisati funkciju sumiraj koja određuje sumu brojeva od n do m. 
Brojeve n i m proslediti kao parametre funkciji.
*/
console.log(`////////////// 9.ZADATAK /////////////`);

let sumiraj = (n, m) => {
  let suma = 0;
  for (let i = n; i <= m; i++) {
    suma += i;
  }

  console.log(`Suma brojeva u intervalu od ${n} do ${m} iznosi ${suma}`);
};

sumiraj(1, 20);

//10 ZADATAK

/*
Napisati funkciju množi koja određuje proizvod brojeva od n do m.
Brojeve n i m proslediti kao parametre funkciji.
*/
console.log(`////////////// 10.ZADATAK /////////////`);

let mnozi = (n, m) => {
  let proizvod = 1;
  for (let i = n; i <= m; i++) {
    proizvod *= i;
  }
};

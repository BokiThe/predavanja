console.log(`///////////// FUNKCIJE /////////////`);

function zdravo() {
  console.log(`Zdravo svete!`);
}

zdravo();
zdravo();

function stampaj(tekst) {
  console.log(tekst);
}
/////////////////////////////////
stampaj("Bojan");
stampaj("Stefan");
let ime = "Sofija";

stampaj(ime);

/////////////////////////////////

function korisnik(ime, prezime) {
  console.log(`Ulogovani korisnik je ${ime} ${prezime}`);
}

korisnik("Bojan", "Ristic");

/////////////////////////////////

function korisnikGodine(ime, prezime, godine) {
  console.log(`Ulogovani korisnik je ${ime} ${prezime} i ima ${godine} godine`);
}

korisnikGodine(`Bojan`, `Ristic`, 32);
korisnikGodine("Pera", "Peric", 17);

/////////////////////////////////

function zbirDvaBroja(x, y) {
  let zbir = x + y;
  console.log(zbir);
}

zbirDvaBroja(15, 12);
zbirDvaBroja(64, 9);

/////////////////////////////////

function vratiZbirDvaBroja(a, b) {
  let zbir = a + b;
  return zbir;
}

let rez = vratiZbirDvaBroja(50, 70);
console.log(rez);
rez = vratiZbirDvaBroja(16, 15);
console.log(rez);

/////////////////////////////////

let rez1 = vratiZbirDvaBroja(2, 3); // 5
let rez2 = vratiZbirDvaBroja(7, 5); //12
let rez3 = vratiZbirDvaBroja(rez1, rez2); //17

console.log(rez3);

let rez4 = vratiZbirDvaBroja(4 + 5, 1 + 3);
console.log(rez4);

let rez5 = vratiZbirDvaBroja(vratiZbirDvaBroja(7, 9), 3);

console.log(rez5);

let rez6 = vratiZbirDvaBroja(vratiZbirDvaBroja(1, 2), vratiZbirDvaBroja(5, 3));
console.log(rez6);

/////////////////////////////////

function voda(temperatura) {
  console.log(`Uneli ste temperaturu od ${temperatura} stepeni C`);
  if (temperatura <= 0) {
    console.log(`voda je u Cvrstom agregatnom stanju`);
  } else if (temperatura >= 100) {
    console.log(`voda je u Gasovitom agregatnom stanju`);
  } else {
    console.log(`voda je u Tecnom agregatnom stanju`);
  }
}

voda(3);
voda(100);

////////////////  VEZBANJE /////////

// 2. ZADATAK
/*
Napisati funkciju zbir koja računa zbir dva realna broja.
Šta bi trebalo izmeniti da bi se dobila razlika, proizvod ili količnik dva broja.

*/

console.log(`///////////////// 2. zadatak ////////////////`);

function zbir2Br(a, b, operacija) {
  let mat = 0;
  if (operacija == "+") {
    mat = a + b;
  } else if (operacija == "-") {
    mat = a - b;
  } else if (operacija == "*") {
    mat = a * b;
  } else if (operacija == "/") {
    if (b == 0) {
      mat = `deljenje nulom nije dozvoljeno`;
    } else {
      mat = a / b;
    }
  } else {
    mat = `Pogresan unos morate uneti 3 parametar operaciju '+', '-', '/','*'`;
  }
  return mat;
}

let oduzimanje = zbir2Br(2, 3, "%");
console.log(oduzimanje);
let mnozenje = zbir2Br(2, 3, "*");
console.log(mnozenje);
let deljenje = zbir2Br(3, 0, "/");
console.log(deljenje);

// 3 ZADATAK

/*
Napisati funkciju neparan koja za uneti ceo broj n vraća tačno ukoliko je neparan ili netačno ukoliko nije neparan.
 */

console.log(`///////////////// 3. zadatak ////////////////`);

function neparan(x) {
  let odgovor;
  if (x % 2 == 0) {
    odgovor = "Netacno";
    console.log(odgovor);
  } else {
    odgovor = "Tacno";
    console.log(odgovor);
  }
  return odgovor;
}

neparan(55);
neparan(10);

function neparan1(x) {
  return x % 2 != 0;
}
console.log(neparan1(6));

// 4. ZADATAK

/*
Napisati funkciju maks2 koja vraća veći od dva prosleđena realna broja. Zatim napisati funkciju maks4 koja vraća najveći od četiri prosleđena realna broja.
*/

console.log(`///////////////// 4. zadatak ////////////////`);

function max2(x, y) {
  let veci;
  if (x > y) {
    veci = x;
  } else {
    veci = y;
  }

  return veci;
}

let veci = max2(2, 3);
console.log(veci);

function max4(a, b, c, d) {
  let max;
  if (a >= b && a >= c && a >= d) {
    max = a;
  } else if (b >= a && b >= c && b >= d) {
    max = b;
  } else if (c >= a && c >= b && c >= d) {
    max = c;
  } else {
    max = d;
  }

  return max;
}

let max1 = max4(6, 7, 6, 6);
console.log(max1);

// 5. ZADATAK

/*
Napisati funkciju koja prikazuje sliku za prosledjenu adresu slike.
*/

console.log(`///////////////// 5. zadatak ////////////////`);

function slika(link) {
  document.body.innerHTML += `<img src="${link}"/>`;
}

slika("pupy.jpeg");

slika("../08_RISPONSIVE/slike/airserbia.png");

// 6. ZADATAK

/*
Napisati funkciju koja za unetu boju na engleskom jeziku boji tekst paragrafa u tu boju.
*/

console.log(`///////////////// 6. zadatak ////////////////`);

function boja(boja) {
  document.body.innerHTML += `<p style="color: ${boja};">Paragraf u boji</p>`;
}
boja("yellow");
boja("blue");

//7. ZADATAK

/*
Napisati program koji sadrži funkciju sedmiDan koja za uneti broj n ispisuje n-ti dan u nedelji (npr. za 0 ispisuje “Nedelja”, za 1 se ispisuje „Ponedeljak“, za 2 se ispisuje „Utorak“, ... ,  a za 7 opet “Nedelja”).
Pitanje: Kako bismo realizovali ovaj zadatak da se tražio n-ti mesec u godini?

*/

console.log(`///////////////// 7. zadatak ////////////////`);

function sedmiDan(n) {
  if (n % 7 == 0) {
    console.log(`Nedelja`);
  } else if (n % 7 == 1) {
    console.log(`Ponedeljak`);
  } else if (n % 7 == 2) {
    console.log(`Utorak`);
  } else if (n % 7 == 3) {
    console.log(`Sreda`);
  } else if (n % 7 == 4) {
    console.log(`Cetvrtak`);
  } else if (n % 7 == 5) {
    console.log(`Petak`);
  } else if (n % 7 == 6) {
    console.log(`Subota`);
  }
}
sedmiDan(0);
sedmiDan(7);
sedmiDan(365);

function mesec(n) {
  if (n % 12 == 0) {
    console.log(`Januar`);
  } else if (n % 12 == 1) {
    console.log(`Februar`);
  } else if (n % 12 == 2) {
    console.log(`Mart`);
  } else if (n % 12 == 3) {
    console.log(`April`);
  } else if (n % 12 == 4) {
    console.log(`Maj`);
  } else if (n % 12 == 5) {
    console.log(`Jun`);
  } else if (n % 12 == 6) {
    console.log(`Jul`);
  } else if (n % 12 == 7) {
    console.log(`Avgust`);
  } else if (n % 12 == 8) {
    console.log(`Septembar`);
  } else if (n % 12 == 9) {
    console.log(`Oktobar`);
  } else if (n % 12 == 10) {
    console.log(`Novembar`);
  } else if (n % 12 == 11) {
    console.log(`Decembar`);
  }
}
mesec(200);

// 8. ZADATAK

/*
Napisati funkciju deljivSaTri koja se koristi u ispisivanju brojeva koji su deljivi sa tri u intervalu od n do m.
Prebrojati koliko ima ovakvih brojeva od n do m.
*/

console.log(`///////////////// 8. zadatak ////////////////`);

function deljivSaTri(n, m) {
  let brojac = 0;
  let ispis = "";
  for (let i = n; i <= m; i++) {
    if (i % 3 == 0) {
      ispis += i + ", ";
      brojac++;
    }
  }
  console.log(
    `Broj brojeva deljivih sa 3 u intervalu od ${n} do ${m} je ${brojac}, a to su brojevi ( ${ispis} )`
  );
}

deljivSaTri(1, 100);
deljivSaTri(1, 10);

// 9. ZADATAK

/*
Napisati funkciju sumiraj koja određuje sumu brojeva od n do m. 
Brojeve n i m proslediti kao parametre funkciji.
*/
console.log(`///////////////// 9. zadatak ////////////////`);

function sumiraj(n, m) {
  let suma = 0;
  for (let i = n; i <= m; i++) {
    suma += i;
  }
  console.log(`Suma brojeva u intervalu od ${n} do ${m} je ${suma}`);
}

sumiraj(1, 100);

// 10. ZADATAK

/*
Napisati funkciju množi koja određuje proizvod brojeva od n do m.
Brojeve n i m proslediti kao parametre funkciji.

*/
console.log(`///////////////// 10. zadatak ////////////////`);

function mnozi(n, m) {
  let proizvod = 1;
  for (let i = n; i <= m; i++) {
    console.log(i);
    proizvod *= i;
  }
  console.log(`Proizvod brojeva u intervalu od ${n} do ${m} je ${proizvod}`);
}

mnozi(1, 5);

// 11. ZADATAK

/*
Napraviti funkciju koja vraća aritmetičku sredinu brojeva od n do m.
Brojeve n i m proslediti kao parametre funkciji.
*/
console.log(`///////////////// 11. zadatak ////////////////`);

function aritmSredina(n, m) {
  let sredina = 0;
  let arSredina = 0;
  let brojac = 0;
  for (let i = n; i < m; i++) {
    sredina += i;
    brojac++;
  }
  arSredina = sredina / brojac;
  return arSredina;
}

let sredina1 = aritmSredina(1, 500);
console.log(sredina1);

// 14. ZADATAK
/*
Napisati funkciju koja pet puta ispisuje istu rečenicu, a veličina fonta rečenice treba da bude jednaka vrednosti iteratora.
*/
console.log(`///////////////// 14. zadatak ////////////////`);

function petPuta(recenica) {
  for (let i = 5; i < 10; i++) {
    document.body.innerHTML += `<p style="font-size:${
      i * 5
    }px">${recenica}</p>`;
  }
}

petPuta("ovo je recenica");

// 15. ZADATAK
/*
Dobili ste plaćenu programersku praksu u trajanju od n meseci. Prvog meseca, plata će biti a dinara, a ako budete vredno radili svakog narednog meseca ćete dobiti povišicu od d dinara. Brojeve n, a i d određujete sami.
 Napišite funkciju kojoj se prosleđuju brojevi n i a. Funkcija treba da vrati vrednosti koliko ćete ukupno navca zaraditi, ukoliko svakog meseca budete dobijali povišicu.
 Testirati zadatak (pozvati funkciju i ispisati vrednost koju ona vraća).
*/
console.log(`///////////////// 15. zadatak ////////////////`);

// function praksa(n, a, d) {
//   for (let i = 2; i <= n; i++) {
//     a += d;
//   }
//   return a;
// }

// let praksa1 = praksa(5, 1000, 150);
// console.log(praksa1);

function praksa(n, a, d) {
  let ukupno = a + (n - 1) * (a + d);
  return ukupno;
}

let praksa1 = praksa(5, 55000, 1500);
console.log(praksa1);

//16. ZADATAK

/*
Na igrama bez granica, ekipi je postavljen zadatak da za što kraće vreme pređe stazu na kojoj se nalazi pokretni most. Takmičaru ove ekipe od polazne tačke do mosta treba t sekundi. Tačno p sekundi od kada takmičar može da krene sa polazne tačke (tj. od početka merenja) most počinje da se podiže. Od trenutka podizanja pa do spuštanja mosta protiče n sekundi i prelaz preko mosta za to vreme nije moguć. Nakon toga most ostaje spušten. Takmičari za čekanje kod mosta dobijaju negativne poene, pa je tim rešio da napravi program koji će im tačno odrediti u kojoj sekundi treba da pođu sa startne pozicije kako ne bi dobijali negativne poene. Pomozite timu da napravi funkciju na osnovu prosleđenih vrednosti t, p i n. Funkcija vraća koliko sekundi nakon početka merenja vremena treba da pođe, kako bi prošli poligon bez zaustavljanja.
npr: t=15, p=20, n=25, čekanje je 0s
npr: t=15, p=10, n=12, čekanje je 7s

*/

function cekanje(t, p, n) {
  let cekanje;
  if (t > p) {
    cekanje = n - (t - p);
  } else {
    cekanje = 0;
  }
  return cekanje;
}

let cekanje1 = cekanje(15, 20, 25);
console.log(
  `vreme koje takmicar treba da saceka da ne bi imao kaznene poene je ${cekanje1}s`
);

cekanje1 = cekanje(15, 10, 12);
console.log(
  `vreme koje takmicar treba da saceka da ne bi imao kaznene poene je ${cekanje1}s`
);

cekanje1 = cekanje(30, 35, 15);
console.log(
  `vreme koje takmicar treba da saceka da ne bi imao kaznene poene je ${cekanje1}s`
);

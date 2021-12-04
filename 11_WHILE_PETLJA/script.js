// `use strict`;
// /*
// let i = 1;
// console.log(i); //1
// i++;
// console.log(i); //2
// i++;
// console.log(i); //3
// i++;
// console.log(i); //4
// i++;
// console.log(i);//5
// i++;*/

// let i = 1;

// while (i <= 5) {
//   console.log(i);
//   i++;
// }
// console.log(`vrednost promenljive i je: ${i}`);

// /*Ispisati brojeve od 1 do 20:
// Svaki u istom redu
// Svaki u novom redu
//  */

// //A. razliciti red
// i = 1;

// while (i <= 20) {
//   console.log(i);
//   i++;
// }

// console.log(`uslov A ispunjen sve je ispisano u razlicitom redu`);
// //B. isti red
// i = 1;
// rez = "";
// while (i <= 20) {
//   rez += i + " ";
//   i++;
// }
// console.log(rez);
// // console.log(i); //1
// // i++;
// // console.log(i); //2
// // i++;
// // console.log(i); //3
// // i++;
// // console.log(i); //4
// // i++;
// // console.log(i); //5
// // i++;
// // console.log(i); //6
// // i++;
// // console.log(i); //7
// // i++;
// // console.log(i); //8
// // i++;
// // console.log(i); //9
// // i++;
// // console.log(i); //10
// // i++;
// // console.log(i); //11
// // i++;
// // console.log(i); //12
// // i++;
// // console.log(i); //13
// // i++;
// // console.log(i); //14
// // i++;
// // console.log(i); //15
// // i++;
// // console.log(i); //16
// // i++;
// // console.log(i); //17
// // i++;
// // console.log(i); //18
// // i++;
// // console.log(i); //19
// // i++;
// // console.log(i); //20
// // i++;

// console.log(`uslov B ispunjen sve ispisano u istom redu`);

// //2. ispisati brojeve od 20 do 1

// i = 20;

// while (i >= 1) {
//   console.log(i);
//   i--;
// }

// console.log(`Ispisani brojevi od 20 do 1`);
// //3. ispisati parne brojeve od 1 - 20
// i = 2;
// while (i <= 20) {
//   console.log(i);
//   i += 2; // ili napisati da ce se i promeniti na i = i + 2
// }

// console.log(`dobijeni parni brojevi od 0 - 20`);

// //3 zaadatak 2 nacin

// i = 1;

// while (i <= 20) {
//   if (i % 2 == 0) {
//     console.log(i);
//   }
//   i++;
// }
// console.log(`dobijeni parni brojevi od 1 - 20`);
// /*
// document.body.innerHTML += `<p style="color: red;">Prvi paragraf</>`;
// document.body.innerHTML += `<p style="color: purple;">Drugi paragraf</>`;
// document.body.innerHTML += `<p style="color: green;">Treci paragraf</>`;
// document.body.innerHTML += `<p style="color: red;">Cetvrti paragraf</>`;
// document.body.innerHTML += `<p style="color: red;">Peti paragraf</>`;
// document.body.innerHTML += `<p style="color: red;">Sesti paragraf</>`;
// */

// i = 1;

// let n = 16;
// while (i <= n) {
//   if (i % 3 == 1) {
//     document.body.innerHTML += `<p style="color: red;">${i}. paragraf</>`;
//   } else if (i % 3 == 2) {
//     document.body.innerHTML += `<p style="color: purple;">${i}. paragraf</>`;
//   } else {
//     document.body.innerHTML += `<p style="color: green;">${i}. paragraf</>`;
//   }

//   i++;
// }

// /*Odrediti sumu brojeva od 1 do 100
// Odrediti sumu brojeva od 1 do n
// Odrediti sumu brojeva od n do m
// Odrediti proizvod brojeva od n do m
//  */

let zbir = 0;
i = 1;
while (i <= 100) {
  zbir = zbir + i; // 0 = 0 + 1;
  console.log(zbir);
  i++;
}

console.log(`suma brojeva od 1 - 100 jednaka je ${zbir}`);

// /*
// ---------------------
// #Iteracije | i | suma
// ---------------------
//    0       | 1 | 0
//    1       | 2 | 1
//    2       | 3 | 3
//    3       | 4 | 6

// */

// n = 18;
// i = 1;
// suma = 0;

// while (i <= n) {
//   suma += i;
//   i++;
// }
// console.log(`suma brojeva od 1 - ${n} jednaka je  ${suma}`);

// // odrediti proizbvod brojevaa od n do m

// n = 3;
// let m = 6;
// i = n;
// let proizvod = 1;

// while (i <= m) {
//   //nesto da izracuna
//   proizvod *= i;
//   i++;
// }
// console.log(`proizvod brojevaa od ${n} - ${m} je ${proizvod}`);

// /*
// Odrediti sumu kvadrata parnih i sumu kubova neparnih brojeva od n do m

// */

// n = 21;
// m = 50;
// i = n;
// let kub = i ** 3;
// let zbirN = 0;
// let zbirP = 0;

// while (i <= m) {
//   //zbir kubova neparnih brojeva
//   if (i % 2 == 0) {
//     zbirP += i ** 2;
//   }
//   if (i % 2 == 1) {
//     zbirN += i ** 3;
//   }
//   i++;
// }

// console.log(
//   `zbir kubova neparnih brojeva od ${n} do ${m} je ${zbirN},a zbir kvadrata parnig brojeva od ${n} do ${m} je ${zbirP}`
// );

// // 11. zadatak
// /*
// Odrediti sa koliko brojeva je deljiv uneti broj k
//  */

// let k = 10;
// let sadrzioci = 0;
// i = 0;
// let brojevi = "";

// while (i <= k) {
//   if (k % i == 0) {
//     sadrzioci++;
//     brojevi += i + " ,";
//   }
//   i++;
// }
// console.log(
//   `broj brojeva koji je deljiv sa ${k} je ${sadrzioci}, a to su brojevi ${brojevi}.`
// );

// /*
// Odrediti da li je dati prirodan broj n prost. Broj je prost ako je deljiv samo sa jedan i sa samim sobom.
// */

// n = 11;

// i = 0;

// while (i <= n) {
//   if (n % n == 0 && n % 1 == 0 && n % i != 0) {
//     console.log(`${n} je prost broj`);
//   } else {
//     console.log(`${n} nije prost broj`);
//   }
//   i++;
// }

// odrediti najveci od 3 zadata broja bez koriscenja || &&

let prvi = 6;
let drugi = 4;
let treci = 7;

// if (prvi > drugi && prvi > treci) {
//   console.log(`${prvi} je najveci`);
// } else if (drugi > prvi && drugi > treci) {
//   console.log(`${drugi} je najveci`);
// } else {s
//   console.log(`${treci} je najveci`);
// }
// if (!(treci < drugi) && !(treci < prvi)) {
//   console.log(`${treci} je najveci`);
// } else if (!(drugi < prvi) && !(drugi < treci)) {
//   console.log(`${drugi} je najveci`);
// } else {
//   console.log(`${prvi} je najveci`);
// }

// let max = prvi;
// console.log(max);
// if (max < drugi) {
//   max = drugi;
// }
// console.log(max);
// // max = drugi;
// if (max < treci) {
//   max = treci;
// }
// // max = drugi;
// console.log(max);

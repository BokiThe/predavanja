// console.log(`FOR PETLJA`);

// let a = 1;
// while (a <= 5) {
//   console.log(`na redu je broj ${a}`);
//   a++;
// }

// for (let i = 1; i <= 5; i++) {
//   console.log(`na redu je broj ${i} u for petlji`);
// }
// //////////////////////////////////////////////////

// // 2. Zadatak Ispisati brojeve od 20 do 1

// for (i = 20; i >= 1; i--) {
//   console.log(`na redu je broj ${i}`);
// }

// // 3. Ispisati parne brojeve od 1 do 20

// for (i = 1; i <= 20; i++) {
//   if (i % 2 == 0) {
//     console.log(`Sledeci parni broj je ${i}`);
//   }
// }

// console.log(`5. Odrediti sumu brojeva od 1 do n`);
// let n = 100;
// let suma = 0;
// for (i = 1; i <= n; i++) {
//   suma += i;
// }
// console.log(`suma brojeva od 1 - n jednaka je ${suma}`);

// console.log(`7. Odrediti proizvod brojeva od n do m`);

// n = 2;
// let m = 6;
// let proizvod = 1;
// for (i = n; i <= m; i++) {
//   proizvod *= i;
// }
// console.log(`Proizvod brojeva od ${n} do ${m} je ${proizvod}`);

// /*Preuzeti proizoljne tri slike sa istom ekstenzijom i imenovati ih 1, 2 i 3.
// For petljom u HTML-u ispisati svaku od sličica uz pomoć brojača (iteratora). */

// console.log(`9.ZADATAK `);

// for (let s = 1; s <= 3; s++) {
//   document.body.innerHTML += `<img src="slike/${s}.jpg"/>`;
// }

// console.log(`11. ZADATAK Preuzeti proizoljne tri slike sa istom ekstenzijom i imenovati ih 1, 2 i 3.
// For petljom u HTML-u ispisati svaku od sličica uz pomoć brojača (iteratora).`);

// let count = 0;

// for (i = 5; i <= 150; i++) {
//   if (i % 13 == 0) {
//     count++;
//   }
// }
// console.log(
//   `Broj brojeva koji je deljiv sa 13 u intervalu od 5-150 je ${count} brojeva`
// );

// console.log(`12. ZADATAK Ispisati aritmetičku sredinu brojeva od n do m.`);

// let sumaBr = 0;
// n = 10;
// m = 100;
// let brSume = 0;
// for (i = n; i <= m; i++) {
//   sumaBr += i;
//   brSume++;
// }
// console.log(`Aritmeticka sredina brojeva od ${n} - ${m} je ${sumaBr / brSume}`);

// // 15.
// console.log(
//   `15.Zaadatak Prebrojati i izračunati sumu brojeva od n do m kojima je poslednja cifra 4.`
// );

// n = 1;
// m = 100;
// let sumBr4 = 0;
// let countBr4 = 0;

// for (i = n; i <= m; i++) {
//   if (i % 10 == 4) {
//     sumBr4 += i;
//     countBr4++;
//   }
// }
// console.log(
//   `Brojevi kojima je poslednja ciftra 4 u intervalu od ${n} - ${m} iznosi ${countBr4}`
// );
// console.log(
//   `Suma brojeva kojima je poslednja ciftra 4 u intervalu od ${n} - ${m} iznosi ${sumBr4}`
// );

// //16.

// console.log(
//   `16. ZADATAK Odrediti sumu brojeva od n do m koji nisu deljivi brojem a`
// );

// n = 20;
// m = 114;
// let sumBra = 0;
// a = 4;

// for (i = n; i <= m; i++) {
//   if (i % a !== 0) {
//     sumBra += i;
//   }
// }

// console.log(
//   `Suma brojeva od ${n} do ${m} koji nisu deljivi brojem ${a} je ${sumBra}`
// );

// // 18 FOR PETLJA

// console.log(`Odrediti sa koliko brojeva je deljiv uneti broj k`);

// let k = 6;
// let deljK = 0;
// for (i = 1; i <= k; i++) {
//   if (k % i == 0) {
//     deljK++;
//   }
// }
// console.log(`Broj ${k} je deljiv sa ${deljK} brojeva`);

// //18 WHILE PETLJA

// deljK = 0;
// k = 8;
// i = 1;
// while (i <= k) {
//   if (k % i == 0) {
//     deljK++;
//   }
//   i++;
// }
// console.log(`WHILE PETLJA Broj ${k} je deljiv sa ${deljK} brojeva `);

// //19.

// console.log(`19.ZADATAAK Odrediti da li je dati prirodan broj n prost. Broj je prost ako je deljiv samo sa jedan i sa samim sobom.`);

// if(deljk == 1){
//     console.log(`Broj nije ni prost ni slozen`);
// }else if(deljK == 2){
//     console.log(`Broj je prost`);
// }else {
//     console.log(`Broj nije prost`);
// }

// 20 ZADATAK

/*
Napraviti tabelu sa 6 redova.
Svaki red tabele treba da ima po dve ćelije (dve kolone).
Svakom parnom redu dodati klasu „obojen“.
Korišćenjem CSS-a, klasi obojen postaviti proizvoljnu boju pozadine.  */

document.body.innerHTML += `<p> 20. Zadatak</p>`;

let tabela = `<table border="1">`;

for (let i = 1; i <= 6; i++) {
  if (i % 2 == 0) {
    tabela += `
    <tr class="obojeni">
          <td>TEXT</td>
          <td>TEXT</td>
      </tr>
    
    `;
  } else {
    tabela += `
  <tr>
          <td>TEXT</td>
          <td>TEXT</td>
      </tr>
  `;
  }
}
tabela += `</table>`;

document.body.innerHTML += tabela;

//21. ZADATAK

/*
Koristeći for petlju kreirati neuređenu listu sa ugnježdenim elementima, kao što je prikazano na slici sa desne strane.
*/
document.body.innerHTML += `<p> 21. Zadatak</p>`;

let ul1 = `<ul>`;
for (let i = 1; i < 10; i++) {
  if (i % 3 == 0) {
    ul1 += `
    <ul>
      <li style="color:purple;;">Element ${i}</li>
    </ul
    `;
  } else {
    ul1 += `
      <li>Element ${i}</li>
    `;
  }
}
ul1 += `</ul>`;

document.body.innerHTML += ul1;

//22. ZADATAK
document.body.innerHTML += `<p> 22. Zadatak</p>`;

let div1 = `<div>`;
for (let i = 1; i <= 64; i++) {
  if (i % 8 == 0) {
    div1 += `<span class="span1">${i}</span></br>`;
  } else {
    div1 += `<span class="span1">${i}</span>`;
  }
}
div1 += `</div>`;

document.body.innerHTML += div1;

//23.zadatak
document.body.innerHTML += `<p> 23. Zadatak</p>`;
/*
1. nacin kreiranje celije i redova,
ali se postavlja pitanje kako ubaciti brojeve od 
1 - 64 u span element.
*/
let div2 = `<div>`;
let span = `<span class="span1"></span>`;

// kreiraanje reda
for (let red = 1; red <= 8; red++) {
  div2 += `<div>`;
  // kreiranje celije
  for (let celija = 1; celija <= 8; celija++) {
    if ((red + celija) % 2 != 0) {
      div2 += span = `<span class="span1 crna"></span>`;
    } else {
      div2 += span = `<span class="span1 bela"></span>`;
    }
  }

  div2 += `</div>`;
}
div2 += `</div>`;

document.body.innerHTML += div2;

// let div2 = `<div>`;
// for (let i = 1; i <= 64; i++) {
//   let span = `<span class="span1">${i}</span>`;
//   div2 += span;
//   if (i % 8 == 0) {
//     div2 += `<br/>`;
//   }
//   // for (span = 0; span <= i; span++)
//   // {
//   //   if ((span + i) % 2 == 0)
//   //   {
//   //     span = `<span class="span1 crna">${i}</span>`;
//   //   }
//   //   else
//   //   {
//   //     span = `<span class="span1 bela">${i}</span>`;
//   //   }
//   // }
// }
// div2 += `</div>`;
// document.body.innerHTML += div2;

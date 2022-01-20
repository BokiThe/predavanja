console.log(`///////////// TIMING EVENTS /////////////`);

console.log("1");

//funkcija koja se prosledjuje drugoj funkciji kao parametar je CALLBACK FUNKCIJA!

//kada se unosi callback funkcija  kao parametar ona se ne poziva tj ne prosledju joj se () vec se pise kao promenljiva....

// function ispis() {
//     console.log("2");
// }

// setTimeout(ispis, 1000 * 2);

// setTimeout(function() {
//     console.log("2");
// }, 1000 * 2);

// setTimeout(() => {
//     console.log("2");
// }, 1000 * 2);

console.log("3");

let btn1 = document.getElementById("btn1");
let divResult = document.getElementById("result");
let btn2 = document.getElementById("btn2");
let timer = null;
let ispis = document.getElementById("ispis");
let btn3 = document.getElementById("btn3");
let btn4 = document.getElementById("btn4");
let interval = null;
////////////////////////////////////////////////
btn1.addEventListener("click", function() {
    let datum = new Date();
    let sati = datum.getHours();
    let minuti = datum.getMinutes();
    let sekunde = datum.getSeconds();
    timer = setTimeout(() => {
        divResult.innerHTML = `${sati}:${minuti}:${sekunde}`;
        timer = null;
    }, 2000);
});
btn2.addEventListener("click", function() {
    clearTimeout(timer);
    timer = null;
});

btn3.addEventListener("click", () => {
    if (interval === null) {
        interval = setInterval(() => {
            let datum = new Date();
            let sati = datum.getHours();
            let minuti = datum.getMinutes();
            let sekunde = datum.getSeconds();
            ispis.innerHTML = `${sati}:${minuti}:${sekunde}`;
        }, 1000);
    }
});

btn4.addEventListener("click", () => {
    clearInterval(interval);
    interval = null;
});

//////////////// PRIMERI /////////////////////
///////// 1 zadatak ///////
/*

Napraviti digitalni sat na stanici koji pokazuje trenutno vreme.
Napraviti dva dugmeta i input kao na slici.
Klikom na dugme „Start“, počinje odbrojavanje: Ispisuju se redom brojevi 1, 2, 3, ... svake sekunde.
Klikom na dugme „Stop“ pauzira se odbrojavanje.
*/

let btn5 = document.getElementById("btn5");
let btn6 = document.getElementById("btn6");
let inputIspis = document.getElementById("inputIspis");
let digitalSat = null;
let br1 = 1;
btn5.addEventListener("click", () => {
    console.log("kliknuto");
    if (digitalSat === null) {
        digitalSat = setInterval(() => {
            inputIspis.value = br1++;
        }, 1000);
    }
});

btn6.addEventListener("click", () => {
    console.log(`pauzirano`);
    clearInterval(digitalSat);
    digitalSat = null;
});

// DIGITALNI SAT
let spanSat = document.getElementById("sat");
setInterval(() => {
    let datum = new Date();
    let sati = datum.getHours();
    let minuti = datum.getMinutes();
    let sekunde = datum.getSeconds();
    spanSat.innerHTML = `<h4>TRENUTNO VREME JE:</h4><span class = "span">${sati}h</span> : <span class = "span">${minuti}min</span > : <span class = "span">${sekunde}s</span>`;
}, 0);
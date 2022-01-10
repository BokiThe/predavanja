console.log(`///////////// EVENTI ///////////`);

// 1. dohvati element gde ces da stavis osluskivac

let pKlikni = document.getElementById("klikni");

// 2. na element postavljamo osluskivac

pKlikni.addEventListener("click", () => {
    console.log(`jednom klliknuto na paragraf`);
});

let pKlikni2 = document.getElementById("dvaKlika");

pKlikni2.addEventListener("dblclick", () => {
    console.log(`na pragraf je kliknuto 2 puta`);
});

/////////////////////////////////////////////////////
//1

let btnPlus = document.getElementById("plus");
let btnMinus = document.getElementById("minus");
let pRez = document.getElementById("rezultat");
let span = document.getElementById("rez");
let rez = 0;
//////////// plus rezultat ///////////
let plusIminus = (rez) => {
    if (rez < 0) {
        span.style.backgroundColor = "blue";
    } else if (rez == 0) {
        span.style.backgroundColor = "white";
    } else {
        span.style.backgroundColor = "red";
    }
};
btnPlus.addEventListener("click", () => {
    rez++;
    span.innerHTML = rez;
    pRez.innerHTML = rez;
    plusIminus(rez);
});
////////// minus rezultat ///////////
btnMinus.addEventListener("click", () => {
    rez--;
    span.innerHTML = rez;
    pRez.innerHTML = rez;
    plusIminus(rez);
});
let btnHello = document.getElementById("hello");
let inputIme = document.getElementById("ime");
let pHelloIspis = document.getElementById("helloIspis");

btnHello.addEventListener("click", () => {
    let inputImeValue = inputIme.value;
    pHelloIspis.innerHTML = `Hello ${inputImeValue}`;
});

// godina rodjenja i pol

//DOM
let inputGodinaRodjenja = document.getElementById("godinaR");
let inputPol = document.querySelectorAll('input[name="pol"]');
let btnPosalji = document.getElementById("posalji");
let pIspis = document.getElementById("ispis");

btnPosalji.addEventListener("click", (e) => {
    e.preventDefault();
    let date = new Date();
    let tekucaGodina = date.getFullYear();

    let inputGodinaRodjenjaValue = inputGodinaRodjenja.value;
    inputGodinaRodjenjaValue = parseInt(inputGodinaRodjenjaValue);

    let god = tekucaGodina - inputGodinaRodjenjaValue;

    pIspis.innerHTML = `Korisnik ima ${god} godina`;

    let checkedPol = document.querySelector(`input[name = 'pol']:checked`);

    let checkedPolValue = checkedPol.value;

    if (checkedPolValue == "n") {
        pIspis.innerHTML += ` i neopredeljen je`;
    } else if (checkedPolValue == "z") {
        pIspis.innerHTML += ` i zenskog je pola`;
    } else {
        pIspis.innerHTML += ` i muskog je pola`;
    }
});

//Dopuniti 5. zadatak dodavanjem radio button polja gde korisnik može odabrati svoj pol (muški, ženski ili neopredeljen).
//Nakon duplog klika na dugme, u konzoli ispisati pol koji je osoba odabrala.
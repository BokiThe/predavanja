function ispis(poruka) {
    console.log(poruka);
}

function zdravo(ime) {
    ispis(`Zdravo ${ime}`);
}

let ime = "Bojan";

export { zdravo, ime };
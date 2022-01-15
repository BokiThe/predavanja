class Auto {
    constructor(m, b, ik, bv) {
        this.marka = m; // poziva se seter marka
        this.boja = b; // pozivaa se seter boja
        this.imaKrov = ik; // poziva se seter imaKrov
        this.brojVrata = bv;
    }
    sviraj() {
        console.log(`beep beep!`);
    }
    vozi(x) {
        let m = this.marka;
        console.log(`Auto ${m} vozi ${x}km`);
    }

    stampaj() {
        console.log(
            `Auto marke ${this.marka} boje ${this.boja} ima krov ${this.imaKrov} i ima ${this.brojVrata} vrata`
        );
    }

    // postavka settera i gettera
    set marka(m) {
        let m1 = m.trim();
        if (m1.length > 0) {
            this._marka = m1;
        } else {
            this._marka = "Auto";
        }
    }
    get marka() {
        return this._marka;
    }

    // postavka settera i gettera za polje boja
    set boja(b) {
        this._boja = b;
    }

    get boja() {
            return this._boja;
        }
        // seter i geter za polje imaKrov

    set imaKrov(ik) {
        if (ik === true || ik === false) {
            this._imaKrov = ik;
        } else {
            this._imaKrov = false;
        }
    }
    get imaKrov() {
            return this._imaKrov;
        }
        //seter i geter za polje brojVrataa
    set brojVrata(bv) {
        if (bv > 0) {
            this._brojVrata = bv;
        } else {
            this._brojVrata = 1;
        }
    }
    get brojVrata() {
        return this._brojVrata;
    }
}

export default Auto;

// metoda koja postavlja vrednost polja _marka
// postaviMarku(m) {
//     let m1 = m.trim();
//     if (m1.lenght > 0) {
//         this._marka = m1;
//     } else {
//         this._marka = "Auto";
//     }
// }
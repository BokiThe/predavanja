class Pacijent {
    constructor(i, v, t) {
            this.ime = i;
            this.visina = v;
            this.tezina = t;
        }
        // geter i seter imena
    set ime(i) {
        let i1 = i.trim();
        if (i1.length > 0) {
            this._ime = i1;
        } else {
            this._ime = "Unesite Ime i Prezime Pacijenta";
        }
    }
    get ime() {
        return this._ime;
    }

    // geter i seter visine
    set visina(v) {
        let v1 = v;
        if (isNaN(v1)) {
            this._visina = "Morate uneti broj!";
        } else {
            if (v1 > 0 && v1 < 250) {
                this._visina = v1;
            } else {
                this._visina = 1;
            }
        }
    }
    get visina() {
            return this._visina;
        }
        //geter i seter tezine
    set tezina(t) {
        let t1 = t;
        if (isNaN(t1)) {
            this._tezina = "Morate uneti broj!";
        } else {
            if (t1 > 0 && t1 < 550) {
                this._tezina = t1;
            } else {
                this._tezina = 60;
            }
        }
    }
    get tezina() {
            return this._tezina;
        }
        // metoda staampaaj
    stampaj() {
        let lista = `<ul>`;
        lista += `<li> Ime i Prezime: ${this.ime}</li>`;
        lista += `<li> Visina: ${this.visina}cm</li>`;

        lista += `<li>Tezina: ${this.tezina}kg</li>`;
        lista += `</ul>`;
        return lista;
    }

    // Metoda BMI bmi = tezina/visina **2

    BMI() {
        let t2 = this.tezina;
        let v2 = this.visina / 100;

        return t2 / v2 ** 2;
    }

    // metoda Kritican
    kritican() {
        let k = this.BMI();
        if (k < 15 || k > 40) {
            return true;
        } else {
            return false;
        }
    }
}
export default Pacijent;
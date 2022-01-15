class Film {
    constructor(n, r, gi, o) {
        this.naslov = n;
        this.reziser = r;
        this.godinaIzdanja = gi;
        this.ocene = o;
    }
    stampaj() {
        console.log(this.naslov);
    }

    //Napraviti metod prosek koji vraća prosečnu ocenu
    prosek(niz) {
        niz = this._ocene;
        let sredina = 0;
        let brojac = 0;
        niz.forEach((el) => {
            sredina += el;
            brojac++;
        });
        return brojac != 0 ? sredina / brojac : 0;
    }

    /////////////////////////////////////////////
    // geter i seter naslova
    set naslov(n) {
        let n1 = n.trim();
        if (n1.length > 0) {
            this._naslov = n1;
        } else {
            this._naslov = "Naslov Filma";
        }
    }
    get naslov() {
            return this._naslov;
        }
        // geter i seter rezisera

    set reziser(r) {
        let r1 = r.trim();
        if (r1.length > 0) {
            this._reziser = r1;
        } else {
            this._reziser = "Ime i Prezime rezisera";
        }
    }
    get reziser() {
            return this._reziser;
        }
        // geter i seter Godine izdanja
    set godinaIzdanja(x) {
        let godinaIzdanja1 = x;
        if (!isNaN(godinaIzdanja1)) {
            if (godinaIzdanja1 > 1800) {
                this._godinaIzdanja = godinaIzdanja1;
            } else {
                this._godinaIzdanja = 1800;
            }
        } else {
            this._godinaIzdanja = "morate ubaciti broj";
        }
    }
    get godinaIzdanja() {
            return this._godinaIzdanja;
        }
        // seter i geter ocena
    set ocene(a) {
        this._ocene = a;
    }
    get ocene() {
        return this._ocene;
    }
}
export default Film;

//U klasi Film dodati polje ocene koje čini niz ocena koje su korisnici dali filmu
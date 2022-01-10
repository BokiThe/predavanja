console.log(`////////// ZADATAK DAN /////////`);

let dan1 = {
    datum: "2020/04/21",
    kisa: true,
    sunce: false,
    oblacno: true,
    temperature: [10, 10, 11, 11, 20, 20, 25, 15, 10, 10],
    // napravit metodu koja vraca prosecnu temperaturu
    prosTemperatura: function(niz) {
        let brojac = 0;
        let sredina = 0;
        niz.forEach((el) => {
            sredina += el;
            brojac++;
        });
        return brojac != 0 ? sredina / brojac : 0;
    },
    //napraviti metodu koja vraca broj natprosecih temperatura
    natProsTemp: function(niz) {
        let brojac = 0;
        let prosek = this.prosTemperatura(niz);
        niz.forEach((el) => {
            el < prosek ? brojac++ : false;
        });
        return brojac;
    },
    //napraviti metodu koja vraca maksimalnu temperaturu
    maxTemperatura: function(niz) {
        let max = niz[0];
        niz.forEach((el) => {
            max < el ? (max = el) : false;
        });
        return max;
    },
    //napraviti metodu koja vraca broj maksimalnih temperatura u danu
    brojMaxTemp: function(niz) {
        let brojac = 0;
        let max = this.maxTemperatura(niz);

        niz.forEach((el) => {
            el == max ? brojac++ : false;
        });
        return brojac;
    },
    // napraviti metodu koja prima dve vrednost i koja vraca broj merenja izmedju te dve vrednosti ne ukljucujucio i njih
    brMerenjaIzmDveTemp: function(br1, br2) {
        let brojac = 0;
        this.temperature.forEach((el) => {
            el > br1 && el < br2 ? brojac++ : false;
        });
        return brojac;
    },
    // metoda broja temperatura ispod proseka
    manjeOdProseka: function(niz) {
        let brojac = 0;
        let prosek = this.prosTemperatura(niz);
        niz.forEach((el) => {
            el > prosek ? brojac++ : false;
        });
        return brojac;
    },
    //napraviti  metodu koja vraca true ako je broj natprosecnih temperatura veci od prosecnih temperatura
    iznadProseka: function(niz) {
        if (this.natProsTemp(niz) > this.temperature.length / 2) {
            return true;
        } else {
            return false;
        }
    },
    //napraviti metodu koja vraca da li je dan bio leden, a dan je leden ako temperature nijednom nije presla 0 stepeni
    daliJeLeden: function() {
        let brojac = 0;
        this.temperature.forEach((el) => {
            el == 0 ? brojac++ : false;
        });
        if (brojac == 0) {
            return true;
        } else {
            return false;
        }
    },

    // napraviti metodu koja vraca da li je dan bio tropski, a dan je tropski ako teperatura nijednom nije pala ispod 24 stepena
    daliJeTropski: function() {
        let brojac = 0;
        this.temperature.forEach((el) => {
            el < 24 ? brojac++ : false;
        });
        if (brojac == 0) {
            return true;
        } else {
            return false;
        }
    },
    //metoda koja vraca minimalnu temperaaturu
    minTemp: function(niz) {
        let min = niz[0];
        niz.forEach((el) => {
            min > el ? (min = el) : false;
        });
        return min;
    },
    //napraviti metodu koja vraca da li je dan bio nepovoljan, aa dan je nepovoljan ako je razlika 2 uzastopna merenja veca od 8 stepeni
    daliJeNepovoljan: function() {
        let razlika = 0;
        let brojac = 0;
        for (let i = 0; i < this.temperature.length; i++) {
            razlika = this.temperature[i] - this.temperature[i + 1];
            razlika >= 8 || razlika <= -8 ? brojac++ : false;
        }
        if (brojac != 0) {
            return true;
        } else {
            return false;
        }
    },
    // Za dan se kaže da je neuobičajen ako je bilo kiše i ispod -5 stepeni, ili bilo oblačno i iznad 25 stepeni, ili je bilo i kišovito i oblačno i sunčano. Metod vraća true ukoliko je dan bio neuobičajen, u suprotnom vraća false.
    daliJeNeuobicajen: function() {
        let min = this.minTemp(this.temperature);
        let max = this.maxTemperatura(this.temperature);
        if (
            (this.kisa == true && min < -5) ||
            (this.oblacno == true && max > 25) ||
            (this.kisa == true && this.oblacno == true && this.sunce == true)
        ) {
            return true;
        } else {
            return false;
        }
    },
};

let dan2 = {
    datum: "2020/06/07",
    kisa: false,
    sunce: true,
    oblacno: true,
    temperature: [15, 15, 16, 16, 23, 24, 25, 25, 30, 30],
    // napravit metodu koja vraca prosecnu temperaturu
    prosTemperatura: function(niz) {
        let brojac = 0;
        let sredina = 0;
        niz.forEach((el) => {
            sredina += el;
            brojac++;
        });
        return brojac != 0 ? sredina / brojac : 0;
    },
    //napraviti metodu koja vraca broj natprosecih temperatura
    natProsTemp: function(niz) {
        let brojac = 0;
        let prosek = this.prosTemperatura(niz);
        niz.forEach((el) => {
            el < prosek ? brojac++ : false;
        });
        return brojac;
    },
    //napraviti metodu koja vraca maksimalnu temperaturu
    maxTemperatura: function(niz) {
        let max = niz[0];
        niz.forEach((el) => {
            max < el ? (max = el) : false;
        });
        return max;
    },
    //napraviti metodu koja vraca broj maksimalnih temperatura u danu
    brojMaxTemp: function(niz) {
        let brojac = 0;
        let max = this.maxTemperatura(niz);

        niz.forEach((el) => {
            el == max ? brojac++ : false;
        });
        return brojac;
    },
    // napraviti metodu koja prima dve vrednost i koja vraca broj merenja izmedju te dve vrednosti ne ukljucujucio i njih
    brMerenjaIzmDveTemp: function(br1, br2) {
        let brojac = 0;
        this.temperature.forEach((el) => {
            el > br1 && el < br2 ? brojac++ : false;
        });
        return brojac;
    },
    // metoda broja temperatura ispod proseka
    manjeOdProseka: function(niz) {
        let brojac = 0;
        let prosek = this.prosTemperatura(niz);
        niz.forEach((el) => {
            el > prosek ? brojac++ : false;
        });
        return brojac;
    },
    //napraviti  metodu koja vraca true ako je broj natprosecnih temperatura veci od prosecnih temperatura
    iznadProseka: function(niz) {
        if (this.natProsTemp(niz) > this.temperature.length / 2) {
            return true;
        } else {
            return false;
        }
    },
    //napraviti metodu koja vraca da li je dan bio leden, a dan je leden ako temperature nijednom nije presla 0 stepeni
    daliJeLeden: function() {
        let brojac = 0;
        this.temperature.forEach((el) => {
            el == 0 ? brojac++ : false;
        });
        if (brojac == 0) {
            return true;
        } else {
            return false;
        }
    },

    // napraviti metodu koja vraca da li je dan bio tropski, a dan je tropski ako teperatura nijednom nije pala ispod 24 stepena
    daliJeTropski: function() {
        let brojac = 0;
        this.temperature.forEach((el) => {
            el < 24 ? brojac++ : false;
        });
        if (brojac == 0) {
            return true;
        } else {
            return false;
        }
    },
    //metoda koja vraca minimalnu temperaaturu
    minTemp: function(niz) {
        let min = niz[0];
        niz.forEach((el) => {
            min > el ? (min = el) : false;
        });
        return min;
    },
    //napraviti metodu koja vraca da li je dan bio nepovoljan, aa dan je nepovoljan ako je razlika 2 uzastopna merenja veca od 8 stepeni
    daliJeNepovoljan: function() {
        let razlika = 0;
        let brojac = 0;
        for (let i = 0; i < this.temperature.length; i++) {
            razlika = this.temperature[i] - this.temperature[i + 1];
            razlika >= 8 || razlika <= -8 ? brojac++ : false;
        }
        if (brojac != 0) {
            return true;
        } else {
            return false;
        }
    },
    // Za dan se kaže da je neuobičajen ako je bilo kiše i ispod -5 stepeni, ili bilo oblačno i iznad 25 stepeni, ili je bilo i kišovito i oblačno i sunčano. Metod vraća true ukoliko je dan bio neuobičajen, u suprotnom vraća false.
    daliJeNeuobicajen: function() {
        let min = this.minTemp(this.temperature);
        let max = this.maxTemperatura(this.temperature);
        if (
            (this.kisa == true && min < -5) ||
            (this.oblacno == true && max > 25) ||
            (this.kisa == true && this.oblacno == true && this.sunce == true)
        ) {
            return true;
        } else {
            return false;
        }
    },
};

let dan3 = {
    datum: "2020/10/4",
    kisa: false,
    sunce: false,
    oblacno: true,
    temperature: [15, 15, 16, 16, 20, 20, 20, 15, 10, 10],
    // napravit metodu koja vraca prosecnu temperaturu
    prosTemperatura: function(niz) {
        let brojac = 0;
        let sredina = 0;
        niz.forEach((el) => {
            sredina += el;
            brojac++;
        });
        return brojac != 0 ? sredina / brojac : 0;
    },
    //napraviti metodu koja vraca broj natprosecih temperatura
    natProsTemp: function(niz) {
        let brojac = 0;
        let prosek = this.prosTemperatura(niz);
        niz.forEach((el) => {
            el < prosek ? brojac++ : false;
        });
        return brojac;
    },
    //napraviti metodu koja vraca maksimalnu temperaturu
    maxTemperatura: function(niz) {
        let max = niz[0];
        niz.forEach((el) => {
            max < el ? (max = el) : false;
        });
        return max;
    },
    //napraviti metodu koja vraca broj maksimalnih temperatura u danu
    brojMaxTemp: function(niz) {
        let brojac = 0;
        let max = this.maxTemperatura(niz);

        niz.forEach((el) => {
            el == max ? brojac++ : false;
        });
        return brojac;
    },
    // napraviti metodu koja prima dve vrednost i koja vraca broj merenja izmedju te dve vrednosti ne ukljucujucio i njih
    brMerenjaIzmDveTemp: function(br1, br2) {
        let brojac = 0;
        this.temperature.forEach((el) => {
            el > br1 && el < br2 ? brojac++ : false;
        });
        return brojac;
    },
    // metoda broja temperatura ispod proseka
    manjeOdProseka: function(niz) {
        let brojac = 0;
        let prosek = this.prosTemperatura(niz);
        niz.forEach((el) => {
            el > prosek ? brojac++ : false;
        });
        return brojac;
    },
    //napraviti  metodu koja vraca true ako je broj natprosecnih temperatura veci od prosecnih temperatura
    iznadProseka: function(niz) {
        if (this.natProsTemp(niz) > this.temperature.length / 2) {
            return true;
        } else {
            return false;
        }
    },
    //napraviti metodu koja vraca da li je dan bio leden, a dan je leden ako temperature nijednom nije presla 0 stepeni
    daliJeLeden: function() {
        let brojac = 0;
        this.temperature.forEach((el) => {
            el == 0 ? brojac++ : false;
        });
        if (brojac == 0) {
            return true;
        } else {
            return false;
        }
    },

    // napraviti metodu koja vraca da li je dan bio tropski, a dan je tropski ako teperatura nijednom nije pala ispod 24 stepena
    daliJeTropski: function() {
        let brojac = 0;
        this.temperature.forEach((el) => {
            el < 24 ? brojac++ : false;
        });
        if (brojac == 0) {
            return true;
        } else {
            return false;
        }
    },
    //metoda koja vraca minimalnu temperaaturu
    minTemp: function(niz) {
        let min = niz[0];
        niz.forEach((el) => {
            min > el ? (min = el) : false;
        });
        return min;
    },
    //napraviti metodu koja vraca da li je dan bio nepovoljan, aa dan je nepovoljan ako je razlika 2 uzastopna merenja veca od 8 stepeni
    daliJeNepovoljan: function() {
        let razlika = 0;
        let brojac = 0;
        for (let i = 0; i < this.temperature.length; i++) {
            razlika = this.temperature[i] - this.temperature[i + 1];
            razlika >= 8 || razlika <= -8 ? brojac++ : false;
        }
        if (brojac != 0) {
            return true;
        } else {
            return false;
        }
    },
    // Za dan se kaže da je neuobičajen ako je bilo kiše i ispod -5 stepeni, ili bilo oblačno i iznad 25 stepeni, ili je bilo i kišovito i oblačno i sunčano. Metod vraća true ukoliko je dan bio neuobičajen, u suprotnom vraća false.
    daliJeNeuobicajen: function() {
        let min = this.minTemp(this.temperature);
        let max = this.maxTemperatura(this.temperature);
        if (
            (this.kisa == true && min < -5) ||
            (this.oblacno == true && max > 25) ||
            (this.kisa == true && this.oblacno == true && this.sunce == true)
        ) {
            return true;
        } else {
            return false;
        }
    },
};

let dani = [dan1, dan2, dan3];

//Napraviti arrow funksiju koja ispisuje datum u kome je najviše puta izmerena temperatura. Ukoliko ima više takvih datuma:
// Ispisati prvi od njih
// Ispisati poslednji od njih

let datumi = (niz) => {
    let max = niz[0].temperature.length;
    let ind = 0;

    for (let i = 0; i < niz.length; i++) {
        if (max <= niz[i].temperature.length) {
            max = niz[i].temperature.length;
            ind = i;
        }
        console.log(niz[i].datum);
    }
};

datumi(dani);
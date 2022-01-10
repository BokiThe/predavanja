console.log(`////////// OBJEKTI ////////`);

let blog = {
    title: "HTML",
    content: "Ovo je blog o osnovnim HTML tag-ovima.",
    author: "Bojan Ristic",
};

console.log(blog);
console.log(typeof blog);
console.log(blog.title);
console.log(blog["title"]);

//izmene propertija

blog.title = "Osnove HTML-a";
console.log(blog.title);
blog["author"] = "Bojan R";
console.log(blog);

let user = {
    usetname: "BR",
    age: 32,
    blogs: ["if statemant", "WHILE loop", "FOR loop"],
    login: function() {
        console.log(`Ulogovani ste!`);
    },
    logout: function() {
        console.log(`Izlogovani ste!`);
    },
    logBlogs: function() {
        console.log(this);
        console.log(this.blogs);
        this.blogs.forEach((blog) => {
            console.log(blog);
        });
    },
};

console.log(user.blogs);

let nasloviBlogova = user.blogs;

for (let i = 0; i < nasloviBlogova.length; i++) {
    document.body.innerHTML += `<h4> ${nasloviBlogova[i]}</h4>`;
}

//poziv metodaa

user.login();
user.logout();

//poziv metoda koji u sebi sadrzi poziv nekog propertija
//this
user.logBlogs();
console.log(this);

// VEZBANJE
//1 ZADATAK

/*
Formirati objekat dan koji sadrži:
Datum (string u formatu YYYY/MM/DD),
Kiša (true/false),
Sunce (true/false),
Oblačno (true/false),
Vrednosti temperature (Niz temperatura tog dana).
Napisati metode koje:
Određuje i vraća prosečnu temperaturu izmerenu tog dana.
Prebrojava i vraća koliko merenja je bilo sa natprosečnom temperaturom.
Prebrojava i vraća koliko merenja je bilo sa maksimalnom temperaturom.

*/
console.log(`////////////////// 1 ZADATAK ///////////////`);
let dan = {
    datum: "2021/12/23",
    kisa: true,
    sunce: false,
    oblacno: true,
    temperature: [-4, -4, -2, -2, 0, 8, 1, 1, 1, 3, 3, 4, 0],
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

console.log(dan);
console.log(dan.datum);
console.log(dan.kisa);
console.log(dan.oblacno);
console.log(dan.temperature);
console.log(dan.prosTemperatura(dan.temperature));
console.log(dan.maxTemperatura(dan.temperature));
console.log(dan.natProsTemp(dan.temperature));
console.log(dan.manjeOdProseka(dan.temperature));
console.log(dan.brojMaxTemp(dan.temperature));
console.log(dan.brMerenjaIzmDveTemp(0, 0));
console.log(dan.iznadProseka(dan.temperature));
console.log(dan.daliJeLeden());
console.log(dan.daliJeTropski());
console.log(dan.daliJeNepovoljan());
console.log(dan.daliJeNeuobicajen());
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
    sunce: true,
    oblacno: true,
    temperature: [-4, -4, -2, -2, 0, 8, 1, 1, 1, 3, 3, 4, 0],
    prosTemperatura: function(niz) {
        let brojac = 0;
        let sredina = 0;
        niz.forEach((el) => {
            sredina += el;
            brojac++;
        });
        return brojac != 0 ? sredina / brojac : 0;
    },
    natProsTemp: function(niz) {
        let brojac = 0;
        let prosek = this.prosTemperatura(niz);
        niz.forEach((el) => {
            el < prosek ? brojac++ : false;
        });
        return brojac;
    },
    maxTemperatura: function(niz) {
        let max = niz[0];
        niz.forEach((el) => {
            max < el ? (max = el) : false;
        });
        return max;
    },
    brojMaxTemp: function(niz) {
        let brojac = 0;
        let max = this.maxTemperatura(niz);

        niz.forEach((el) => {
            el == max ? brojac++ : false;
        });
        return brojac;
    },
    brMerenjaIzmDveTemp: function(br1, br2) {
        let brojac = 0;
        this.temperature.forEach((el) => {
            el > br1 && el < br2 ? brojac++ : false;
        });
        return brojac;
    },
    manjeOdProseka: function(niz) {
        let brojac = 0;
        let prosek = this.prosTemperatura(niz);
        niz.forEach((el) => {
            el > prosek ? brojac++ : false;
        });
        return brojac;
    },
    iznadProseka: function(niz) {
        if (this.natProsTemp(niz) > this.temperature.length / 2) {
            return true;
        } else {
            return false;
        }
    },
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
    daliJeNeuobicajen: function() {},
};

/*
Za dan se kaže da je neuobičajen ako je bilo kiše i ispod -5 stepeni, ili bilo oblačno i iznad 25 stepeni, ili je bilo i kišovito i oblačno i sunčano. Metod vraća true ukoliko je dan bio neuobičajen, u suprotnom vraća false.


*/
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

// 4
/* 
Prima dva parametra koji predstavljaju dve temperature. Potrebno je da metoda vrati broj merenja u toku dana čija je vrednost između ove dve zadate temperature (ne uključujući te dve vrednosti).
*/
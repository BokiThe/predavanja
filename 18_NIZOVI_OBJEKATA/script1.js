let blog1 = {
    title: "Osnovi HTML tagova!",
    likes: 19,
    dislikes: 9,
};
let blog2 = {
    title: "osnovi CSS tagopva",
    likes: 10,
    dislikes: 10,
};

let blog3 = {
    title: "napredni CSS tagopva",
    likes: 40,
    dislikes: 8,
};

let blog4 = {
    title: "osnovi JS",
    likes: 150,
    dislikes: 10,
};

let blog5 = {
    title: "JAVA",
    likes: 120,
    dislikes: 0,
};
let blog6 = {
    title: "Phyton",
    likes: 10,
    dislikes: 11,
};
let blog7 = {
    title: "Angular",
    likes: 110,
    dislikes: 30,
};

let user1 = {
    username: "Bojan Ristic",
    age: 32,
    blogs: [blog1, blog2, blog3],
    myLikes: function() {
        let zbir = 0;
        this.blogs.forEach((blog) => {
            zbir += blog.likes;
        });
        return zbir;
    },
    myDislikes: function() {
        let zbir = 0;
        this.blogs.forEach((blog) => {
            zbir += blog.dislikes;
        });
        return zbir;
    },
    prosecnaOcena: function() {
        let zbir = 0;
        let brojac = 0;
        let prosek = 0;
        //ulazenje u blogove svakog usera
        this.blogs.forEach((blog) => {
            zbir += blog.likes;
            brojac++;
        });
        ///izracunavanje proseka
        if (brojac != 0) {
            prosek = zbir / brojac;
        }
        return prosek;
    },
};
let user2 = {
    username: "Jelena Matejic",
    age: 27,
    blogs: [blog4, blog5],
    myLikes: function() {
        let zbir = 0;
        this.blogs.forEach((blog) => {
            zbir += blog.likes;
        });
        return zbir;
    },
    myDislikes: function() {
        let zbir = 0;
        this.blogs.forEach((blog) => {
            zbir += blog.dislikes;
        });
        return zbir;
    },
    prosecnaOcena: function() {
        let zbir = 0;
        let brojac = 0;
        let prosek = 0;
        //ulazenje u blogove svakog usera
        this.blogs.forEach((blog) => {
            zbir += blog.likes;
            brojac++;
        });
        ///izracunavanje proseka
        if (brojac != 0) {
            prosek = zbir / brojac;
        }
        return prosek;
    },
};

let user3 = {
    username: "John Doe",
    age: 17,
    blogs: [blog6, blog7],
    myLikes: function() {
        let zbir = 0;
        this.blogs.forEach((blog) => {
            zbir += blog.likes;
        });
        return zbir;
    },
    myDislikes: function() {
        let zbir = 0;
        this.blogs.forEach((blog) => {
            zbir += blog.dislikes;
        });
        return zbir;
    },
    prosecnaOcena: function() {
        let zbir = 0;
        let brojac = 0;
        let prosek = 0;
        //ulazenje u blogove svakog usera
        this.blogs.forEach((blog) => {
            zbir += blog.likes;
            brojac++;
        });
        ///izracunavanje proseka
        if (brojac != 0) {
            prosek = zbir / brojac;
        }
        return prosek;
    },
};

console.log(user1.username);

//podaci o blogu korisnika 1

console.log(user1.blogs[0]);

//Naslov prvog bloga korisnika 1
console.log(user1.blogs[0].title);

//niz korisnika

let users = [user1, user2, user3];

// pristup korisnicima

users.forEach((user) => {
    console.log(user.username);
});

users.forEach((user) => {
    let blogovi = user.blogs;
    blogovi.forEach((blog) => {
        console.log(blog.title);
    });
});

// Ispisati imena onih autora koji imaju ispod 18 godina
console.log(`///////////// 2 ZADATAK ////////////`);
users.forEach((user) => {
    user.age < 30 ? console.log(user.username) : false;
});

// Ispisati naslove onih blogova koji imaju više od 50 lajkova
console.log(`///////////// 3 ZADATAK ////////////`);
users.forEach((user) => {
    let blogovi = user.blogs;
    blogovi.forEach((blog) => {
        blog.likes > 50 ? console.log(blog.title) : false;
    });
});

//Ispisati sve blogove autora čiji je username ’JohnDoe’
console.log(`///////////// 4 ZADATAK ////////////`);
users.forEach((user) => {
    user.username == "John Doe" ? console.log(user.blogs) : false;
});

//Ispisati imena onih autora koji imaju ukupno više od 100 lajkova za blogove koje su napisali
console.log(`///////////// 5 ZADATAK ////////////`);

users.forEach((user) => {
    let blogovi = user.blogs;
    let zbir = 0;

    blogovi.forEach((blog) => {
        zbir += blog.likes;
    });
    console.log(zbir);

    if (zbir > 100) {
        console.log(user.username);
    }
});

//Ispisati naslove onih blogova koji imaju natprosečan broj pozitivnih ocena
console.log(`///////////// 6 ZADATAK ////////////`);

// users.forEach((user) => {
//     //uvodimo promenljive za prosecne lajkove po korisniku
//     let zbir = 0;
//     let brojac = 0;
//     let prosek = 0;
//     let blogovi = user.blogs;
//     //ulazenje u blogove svakog usera
//     blogovi.forEach((blog) => {
//         zbir += blog.likes;
//         brojac++;
//     });
//     ///izracunavanje proseka po korisniku
//     if (brojac != 0) {
//         prosek = zbir / brojac;
//     }
//     //provera da li su lajkovi kod svakog od blogova veci od proseka po korisniku
//     blogovi.forEach((blog) => {
//         blog.likes > prosek ? console.log(blog.title) : false;
//     });
// });

//Globalni prosek lajkova

let globalAvLikes = (niz) => {
    let globalSum = 0; // zbir svih lajkova
    let globalBr = 0; //broj blogova svih korisnika
    niz.forEach((user) => {
        globalSum += user.myLikes();
        globalBr += user.blogs.length;
    });
    return globalBr != 0 ? globalSum / globalBr : 0;
};

console.log(`globalan prosek lajkova je  ${globalAvLikes(users)}`);

users.forEach((user) => {
    let blogovi = user.blogs;
    let globalProsek = globalAvLikes(users);
    blogovi.forEach((blog) => {
        blog.likes > globalProsek ? console.log(blog.title) : false;
    });
});

//Ispisati naslove onih blogova koji imaju natprosečan broj pozitivnih ocena i ispodprosečan broj negativnih ocena
console.log(`///////////// 7 ZADATAK ////////////`);
let globalAvDislikes = (niz) => {
    let globalSum = 0; // zbir svih dislajkova
    let globalBr = 0; //broj blogova svih korisnika
    niz.forEach((user) => {
        globalSum += user.myDislikes();
        globalBr += user.blogs.length;
    });
    return globalBr != 0 ? globalSum / globalBr : 0;
};
console.log(`prosecan broj dislike-ova je ${globalAvDislikes(users)}`);

let natprosecno = (niz) => {
    let globalDis = globalAvDislikes(niz);
    let globalLik = globalAvLikes(niz);
    niz.forEach((user) => {
        user.blogs.forEach((blog) => {
            if (blog.likes >= globalLik && blog.dislikes <= globalDis) {
                console.log(blog.title);
            }
        });
    });
};
natprosecno(users);
// users.forEach((user) => {
//     // uvodimo promenjive za lajkove
//     let zbirLikes = 0;
//     let brojacLikes = 0;
//     let prosekLikes = 0;
//     //uvodimo promenljive za dislajkove jer moraju da budu resetovani
//     let zbirDislikes = 0;
//     let brojacDislikes = 0;
//     let prosekDislikes = 0;
//     let blogovi = user.blogs;
//     ///prvo provera za lajkove
//     blogovi.forEach((blog) => {
//         zbirLikes += blog.likes;
//         brojacLikes++;
//     });
//     //izracunamo prosek likova
//     if (brojacLikes != 0) {
//         prosekLikes = zbirLikes / brojacLikes;
//     }
//     // pa provera za dislikove
//     blogovi.forEach((blog) => {
//         zbirDislikes += blog.dislikes;
//         brojacDislikes++;
//     });
//     ///izracunamo prosek dislikova
//     if (brojacDislikes != 0) {
//         prosekDislikes = zbirDislikes / brojacDislikes;
//     }
//     //i stavljamo uslov zadatka da su likovi veci od proseka lajkova i da su dislajkovi manji od prosecnih dislajkova
//     blogovi.forEach((blog) => {
//         if (blog.likes > prosekLikes && blog.dislikes < prosekDislikes) {
//             console.log(blog.title);
//         }
//     });
// });
//
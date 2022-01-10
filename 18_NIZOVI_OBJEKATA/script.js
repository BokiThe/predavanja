console.log(`////////////// Nizovi objekata`);

let blog1 = {
    title: "Osnovi HTML tagova!",
    likes: 19,
    dislikes: 9,
};
let blog2 = {
    title: "osnovi CSS tagopva",
    likes: 50,
    dislikes: 10,
};

let blog3 = {
    title: "napredni CSS tagopva",
    likes: 100,
    dislikes: 8,
};

let blog4 = {
    title: "osnovi JS",
    likes: 150,
    dislikes: 10,
};

let blog5 = {
    title: "IF statemant",
    likes: 30,
    dislikes: 11,
};

let user1 = {
    username: "Bojan Ristic",
    age: 32,
    blogs: [blog1, blog2, blog3],
};
let user2 = {
    username: "Jelena Matejic",
    age: 32,
    blogs: [blog4, blog5],
};

console.log(user1.username);

let arrBlogs = [blog1, blog2, blog3];

arrBlogs.forEach((objekatBlog) => {
    console.log(objekatBlog);
});

arrBlogs.forEach((objekatBlog) => {
    document.body.innerHTML += `<h3>${objekatBlog.title}<h3>`;
    document.body.innerHTML += `<p> Likes: ${objekatBlog.likes}<p>`;
    document.body.innerHTML += `<p> Disikes: ${objekatBlog.dislikes}<p>`;
});

blog3.title = "Napredni HTML TAGOVI";
console.log(blog3.title);
arrBlogs[2].title = "HTML5 Tagovi";
console.log(arrBlogs[2].title);

//VEZBANJE

//1. zaadatak
/*
Napraviti arrow funkciju kojoj se prosleđuje niz objekata, a ona vraća ukupan broj lajkova
*/
console.log(`///////////// 1 ZADATAK ////////////`);
let sumLajkova = (niz) => {
    let sum = 0;
    niz.forEach((blog) => {
        sum += blog.likes;
    });
    return sum;
};

console.log(sumLajkova(arrBlogs));

// 2 ZADATAK
/*
Napraviti arrow funkciju kojoj se prosleđuje niz objekata, a ona vraća prosečan broj lajkova

*/
console.log(`///////////// 2 ZADATAK ////////////`);

let prosBrLajkova = (niz) => {
    let brojac = 0;
    let sredina = sumLajkova(niz);
    niz.forEach((blog) => {
        brojac++;
    });
    return brojac != 0 ? sredina / brojac : 0;
};

console.log(prosBrLajkova(arrBlogs));

//3 ZADAATAK
/*
Napraviti arrow funkciju kojoj se prosleđuje niz objekata, a ona ispisuje sve one naslove blogova koji imaju više pozitivnih nego negativnih ocena
*/

console.log(`///////////// 3 ZADATAK ////////////`);

let nasloviPoLajkovima = (niz) => {
    niz.forEach((blog) => {
        blog.likes > blog.dislikes ? console.log(blog.title) : false;
    });
};

nasloviPoLajkovima(arrBlogs);

// 4 ZADAATAK
/*
Napraviti arrow funkciju kojoj se prosleđuje niz objekata, a ona ispisuje sve one naslove blogova koji imaju najmanje duplo više pozitivnih nego negativnih ocena

*/

console.log(`///////////// 4 ZADATAK ////////////`);
let duploViseLajkova = (niz) => {
    niz.forEach((blog) => {
        blog.likes > 2 * blog.dislikes ? console.log(blog.title) : false;
    });
};

duploViseLajkova(arrBlogs);

// 5 ZADAATAK
/*
Napisati arrow funkciju kojoj se prosleđuje niz objekata a ona ispisuje sve naslove koji se završavaju uzvičnikom
*/

console.log(`///////////// 5 ZADATAK ////////////`);

let nasloviSaUzvicnikom = (niz) => {
    niz.forEach((blog) => {
        blog.title.slice(-1) == "!" ? console.log(blog.title) : false;
    });
};

nasloviSaUzvicnikom(arrBlogs);
console.log(`////////////// Nizovi objekata`);

let blog1 = {
    title: "Osnovi HTML tagova",
    likes: 30,
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

let arrBlogs = [blog1, blog2, blog3];

arrBlogs.forEach((objekatBlog) => {
    console.log(objekatBlog);
});

arrBlogs.forEach((objekatBlog) => {
    document.body.innerHTML += `<h3>${objekatBlog.title}<h3>`;
    document.body.innerHTML += `<p> Likes: ${objekatBlog.likes}<p>`;
    document.body.innerHTML += `<p> Disikes: ${objekatBlog.dislikes}<p>`;
});
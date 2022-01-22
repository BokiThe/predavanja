console.log(`//////////// PROMISI /////////////`);

let getSomething = () => {
    let obj = new Promise((resolve, reject) => {
        resolve("nesto resolve!");
        //reject("nesto");
    });
    //console.log(obj);
    return obj; // vraca promise objekat
};

getSomething()
    .then((data) => {
        console.log(data);
    })
    .catch((err) => {
        console.log(err);
    }); // ako je promise vraatio resolve realizuje se .then grana
// ako je promise vratio reject realizuje se .catch graana
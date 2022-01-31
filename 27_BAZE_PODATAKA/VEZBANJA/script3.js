console.log(`pristupanje dokumentima `);

// 1. Pristupanje odredjenom dokumentu u kolekciji
// 2. pristupanje svim dokumentima u kolekciji

// db.collection("costumers")
//   .doc("costumer-4")
//   .get()
//   .then((doc) => {
//     if (doc.exists) {
//       console.log(`postoji dokument ${doc.id}`);
//       let obj = doc.data();
//       console.log(obj);
//     } else {
//       console.log(`ne postoji dokument ciji je id ${doc.id}`);
//     }
//   })
//   .catch((err) => {
//     console.log(`doslo je do greske`, err);
//   });

// // pristupanje svim dokumentima

// db.collection("costumers")
//   .get()
//   .then((snapshot) => {
//     if (!snapshot.empty) {
//       let allDocs = snapshot.docs;
//       allDocs.forEach((doc) => {
//         console.log(doc.id, doc.data());
//       });
//     } else {
//       console.log(`nema dokumenata u kolekciji`);
//     }
//   })
//   .catch((err) => {
//     console.log(`ne postoji dokument ciji je id`, err);
//   });

// 1. dohvatanje dokumenata u odredjenom redosledu

// db.collection("costumers")
//   .orderBy("age", "desc")
//   .orderBy("name")
//   .get()
//   .then((snapshot) => {
//     if (!snapshot.empty) {
//       let allDocs = snapshot.docs;
//       allDocs.forEach((doc) => {
//         let obj = doc.data();
//         console.log(obj.name + " " + obj.age + " " + obj.salary);
//       });
//     } else {
//       console.log(`nema dokumenata u kolekciji`);
//     }
//   })
//   .catch((err) => {
//     console.log(`ne postoji dokument ciji je id `, err);
//   });

// 2. dohvatanje odredjenog broja dokumenata iz kolekcije

// db.collection("costumers")
//   .orderBy("age", "desc")
//   .orderBy("name")
//   .orderBy("salary", "desc")
//   .limit(3)
//   .get()
//   .then((snapshot) => {
//     if (!snapshot.empty) {
//       let allDocs = snapshot.docs;
//       allDocs.forEach((doc) => {
//         let obj = doc.data();
//         console.log(obj.name + " " + obj.age + " " + obj.salary);
//       });
//     } else {
//       console.log(`nema dokumenata u kolekciji`);
//     }
//   })
//   .catch((err) => {
//     console.log(`ne postoji dokument ciji je id `, err);
//   });

// 3. dohvatanje dokumenata koji zadovoljavaju odredjene kriterijume

// db.collection("costumers")
//   .where("age", "<=", 22)
//   .where("salary", "==", 1000)
//   // .orderBy("age", "desc")
//   // .orderBy("name")
//   // .orderBy("salary", "desc")
//   .get()
//   .then((snapshot) => {
//     if (!snapshot.empty) {
//       let allDocs = snapshot.docs;
//       allDocs.forEach((doc) => {
//         let obj = doc.data();
//         console.log(obj.name + " " + obj.age + " " + obj.salary);
//       });
//     } else {
//       console.log(`nema dokumenata u kolekciji`);
//     }
//   })
//   .catch((err) => {
//     console.log(`ne postoji dokument ciji je id `, err);
//   });

/* -------------------------------- ZADACI ------------------------- */
/*
  Iz kolekcije customers, pročitati sve klijente koji:

Imaju 22, 25 ili 28 godina.

  */

//db.collection("costumers")
/*---------- Imaju adresu u Nišu -------------*/
//.where("adresses", "array-contains", "Nis")
/*----------Imaju platu veću ili jednaku od 500--------------*/
//.where("salary", ">=", 500)
/*----------- Imaju platu između 300 i 800 ------------*/
// .where("salary", ">=", 300)
// .where("salary", "<=", 800)
/*---------------Imaju platu manju od 900, i imaju 30 godina ------------- */
// .where("salary", "<", 900)
// .where("age", "==", 30)
/*-------------- Imaju adresu u Nišu ili Beogradu -----------*/
//.where("adresses", "array-contains-any", ["Leskovac", "Novi Sad"])
//.where(
//   "adresses",
//   "array-contains",
//   "Nis" || "adresses",
//   "array-contains",
//   "Beograd"
// )
/*--------------- Imaju 22, 25 ili 28 godina. --------- */
// .where("age", "in", [22, 25, 28])

// .get()
// .then((snapshot) => {
//   if (!snapshot.empty) {
//     let allDocs = snapshot.docs;
//     allDocs.forEach((doc) => {
//       let obj = doc.data();
//       console.log(obj.name + " " + obj.age + " " + obj.salary);
//     });
//   } else {
//     console.log(`nema dokumenata u kolekciji`);
//   }
// })
// .catch((err) => {
//   console.log(`ne postoji dokument ciji je id `, err);
// });

/*------------ Iz kolekcije tasks, pročitati sve zadatke, sortirane po nazivu.---------------- */
let now = new Date();
let year = now.getFullYear();
let date1 = new Date(year, 0, 1);
let date2 = new Date(year + 1, 0, 1);
let pocetakGodine = firebase.firestore.Timestamp.fromDate(date1);
let krajGodine = firebase.firestore.Timestamp.fromDate(date2);
db.collection("tasks")
  //.orderBy("title")
  /*--------- Su prioritetni -----*/
  //.where("priority", "==", false)
  /*--------- Treba da se izvrše u tekućoj godini --------*/
  //.where("dueDate", ">", pocetakGodine)
  //.where("dueDate", "<", krajGodine)

  .get()
  .then((snapshot) => {
    if (!snapshot.empty) {
      let allDocs = snapshot.docs;
      allDocs.forEach((doc) => {
        let obj = doc.data();
        console.log(obj.title + " " + obj.discription + " " + obj.priority);
      });
    } else {
      console.log(`nema dokumenata u kolekciji`);
    }
  })
  .catch((err) => {
    console.log(`ne postoji dokument ciji je id `, err);
  });
/*
  Iz kolekcije tasks, pročitati sve zadatke, i koji:
Su prioritetni,
Treba da se izvrše u tekućoj godini,
Su završeni,
Tek treba da počnu.
 */

/*
Iz kolekcije movies, pročitati sve filmove:
Koje je režirao George Lucas,


Prikazati sve informacije o najbolje rangiranom filmu.
Prikazati sve informacije o najslabije rangiranoj drami.

*/
db.collection("movies")
  /*-------------- Koje je režirao George Lucas -----------*/
  //.where("Director.Name", "==", "Sidney")
  //.where("Director.Surname", "==", "Lumet")
  /*--------- Čija je ocena između 5 i 10 ------ */
  //.where("Rating", "<=", 10)
  //.where("Rating", ">=", 5)
  /*------------ Kojima je žanr komedija, tragedija ili drama -------*/
  //.where("Genres", "array-contains-any", ["Tragedy", "Comedy", "Drama"])
  /*------------ Koji su izašli u 21. veku. ---------*/
  //.where("Release_Year", ">", 2000)
  //.where("Release_Year", "<=", 2100)
  /*---------- Prikazati sve informacije o najbolje rangiranom filmu --------*/
  //.orderBy("Rating", "desc")
  /*---------- Prikazati sve informacije o najslabije rangiranom filmu --------*/
  .where("Genres", "array-contains", "Drama")
  .orderBy("Rating")
  .limit(1)
  .get()
  .then((snapshot) => {
    if (!snapshot.empty) {
      let allDocs = snapshot.docs;
      allDocs.forEach((doc) => {
        let obj = doc.data();
        console.log(
          obj.Director.Name,
          obj.Director.Surname,
          obj.Name,
          obj.Rating,
          obj.Release_Year,
          obj.Genres
        );
      });
    } else {
      console.log(`nema dokumenata u kolekciji`);
    }
  })
  .catch((err) => {
    console.log(`ne postoji dokument ciji je id `, err);
  });

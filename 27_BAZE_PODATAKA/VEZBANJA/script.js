console.log(`///////////// BAZE PODAATAAKA ////////`);
//pristup kolekciji
let costumers = db.collection("costumers");
let tasks = db.collection("tasks");

//pristup dokumentu
let cos1 = costumers.doc("bjovanovic");
console.log(cos1);

//2 pristup lancanje

let doc1 = db.collection("tasks").doc("1");
console.log(doc1);

/*
Kod operacija imamo sl operacije

    CRUD OPERACIJE
    (Create,Read,Update,Delete)

    kako se kreira: doc.set(...)

    kako se cita: doc.get(...)

    kako se menja: doc.update(...)

    kako se pise: doc.delete(...)

    sve ove 4 operacije vracaju promise!!!!!!!
*/

let obj = {
  name: "Bojan",
  age: 22,
  adresses: ["Nis", "Leskovac", "Novi sad"],
  salary: 1000,
};

db.collection("costumers")
  .doc("costumer-4")
  .set(obj)
  .then(() => {
    console.log("Uspesno ste dodali objekat");
    return db
      .collection("costumers")
      .doc("costumer-4")
      .set({ height: 180 }, { merge: true })
      .then(() => console.log("Uspesno ste dodali objekat"));
  })
  .catch((err) => console.log("Error u dodavanju:", err));
const date1 = new Date(2022, 0, 25, 17, 00);
const date2 = new Date(2022, 0, 25, 18, 00);

let obj2 = {
  description: "Fudbal",
  startDate: firebase.firestore.Timestamp.fromDate(date1),
  dueDate: firebase.firestore.Timestamp.fromDate(date2),
  priority: false,
  title: "Fudbal sa drugarima",
};

tasks
  .doc("4")
  .set(obj2)
  .then(() => {
    console.log("uspesno dodat task");
  })
  .catch((err) => {
    console.log("doslo je do greske: ", err);
  });

//update

tasks
  .doc("4")
  .update({
    priority: true,
  })
  .then(() => {
    console.log("uspesno izmenjen task");
  })
  .catch((err) => {
    console.log("doslo je do greske: ", err);
  });

//delete

tasks
  .doc("4")
  .delete({
    priority: true,
  })
  .then(() => {
    console.log(`uspesno ste obrisali task`);
  })
  .catch((err) => {
    console.log("doslo je do greske: ", err);
  });

// drugi nacin za dodavanje dokumenta

db.collection("tasks")
  .add({
    title: "Vezba za projekat",
    description: "veznanje JS",
    startDate: firebase.firestore.Timestamp.fromDate(new Date("2022-01-29")),
    dueDate: null,
    priority: true,
  })
  .then(() => {
    console.log(`uspesno dodat task`);
  })
  .catch((err) => {
    console.log("doslo je do greske: ", err);
  });

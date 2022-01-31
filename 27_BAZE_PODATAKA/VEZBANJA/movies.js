console.log(`/////// MOVIES //////`);

/*
Dodaje nekoliko filmova u bazu,
Menja podatke o nekim filmovima u bazi,
Dodaje žanr nekom filmu,
Briše žanr nekom filmu,
Menja ime ili prezime nekom režiseru.

*/

let movie5 = {
  Name: "12 Angry Men",
  Director: {
    Name: "Sidney",
    Surname: "Lumet",
  },
  Genres: ["Drama", "Crime"],
  Rating: 9.05,
  Release_Year: 1957,
};

let movies = db.collection("movies");

movies
  .doc("movie-5")
  .set(movie5)
  .then(() => {
    console.log(`uspesno ste dodali film`);
  })
  .catch((err) => console.log(`Greska u dodavanju`, err));

movies
  .doc("movie-5")
  .update({
    Rating: 9.1,
  })
  .then(() => {
    console.log(`uspesno ste promenili Rating`);
  })
  .catch((err) => console.log(`Doslo je do greske pri promeni`, err));

  

// console.log(`//////////////ASINHRONI JS /////////////`);
let divIspis = document.getElementById("ispis");
let divIspis1 = document.getElementById("ispis1");
let divIspis2 = document.getElementById("ispis2");
let divIspis3 = document.getElementById("ispis3");
let divIspis4 = document.getElementById("ispis4");

const request = new XMLHttpRequest();
request.addEventListener("readystatechange", () => {
    if (request.readyState === 4 && request.status === 200) {
        // console.log("odgovor je preuzet", request.responseText);
        const data = JSON.parse(request.responseText);
        console.log(data);
        data.forEach((user) => {
            //ispisati korisnike ciji website ima domen.com
            if (user.website.includes(".com")) {
                let list = `<ul>
<li>Name: ${user.name}</li>
<li>
    Address:
    <ul>
        <li>City: ${user.address.city}</li>
        <li>
            Geo:
            <ul>
                <li>Lat: ${user.address.geo.lat} </li>
                <li>Lng: ${user.address.geo.lng}</li>
            </ul>
        </li>
        <li>Street: ${user.address.street}</li>
        <li>Suite: ${user.address.suite} </li>
        <li>Zipcode: ${user.address.zipcode} </li>
    </ul>
</li>

<li>Company:
    <ul>
        <li>Bs: ${user.company.bs} </li>
        <li>Catch Phrase: ${user.company.catchPhrase}</li>
        <li>Name: ${user.company.name} </li>
    </ul>
</li>
<li>Email: ${user.email} </li>
<li>ID: ${user.id}</li>
<li>PHONE: ${user.phone} </li>
<li>username: ${user.username}</li>
<li>Website: ${user.website} </li>
</ul>
`;

                divIspis.innerHTML += list;
            }
        });
    } else if (request.readyState === 4) {
        console.log("could not fetch data!");
    }
});
request.open("GET", "https://jsonplaceholder.typicode.com/users/");
request.send();

/////////////////////////////// ZADACI ////////////////////////
//////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////
const request1 = new XMLHttpRequest();
request1.addEventListener("readystatechange", function() {
    if (this.readyState === 4 && this.status === 200) {
        const data = JSON.parse(this.responseText);

        data.forEach((user) => {
            //Ispisati korisnike čije ime sadrži reč „Clementin“.
            if (user.name.includes("Clementin")) {
                let list = `<ul>
                <li>Name: <strong>${user.name}</strong></li>
                <li>
                    Address:
                    <ul>
                        <li>City: ${user.address.city}</li>
                        <li>
                            Geo:
                            <ul>
                                <li>Lat: ${user.address.geo.lat} </li>
                                <li>Lng: ${user.address.geo.lng}</li>
                            </ul>
                        </li>
                        <li>Street: ${user.address.street}</li>
                        <li>Suite: ${user.address.suite} </li>
                        <li>Zipcode: ${user.address.zipcode} </li>
                    </ul>
                </li>

                <li>Company:
                    <ul>
                        <li>Bs: ${user.company.bs} </li>
                        <li>Catch Phrase: ${user.company.catchPhrase}</li>
                        <li>Name: ${user.company.name} </li>
                    </ul>
                </li>
                <li>Email: ${user.email} </li>
                <li>ID: ${user.id}</li>
                <li>PHONE: ${user.phone} </li>
                <li>username: ${user.username}</li>
                <li>Website: ${user.website} </li>
                </ul>
                `;
                divIspis1.innerHTML += list;
            }
        });
    } else if (this.readyState === 4) {
        console.log("could not fetch data!");
    }
});

request1.open("GET", "https://jsonplaceholder.typicode.com/users/");
request1.send();
///////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////
const request2 = new XMLHttpRequest();
request2.addEventListener("readystatechange", function() {
    if (this.readyState === 4 && this.status === 200) {
        const data = JSON.parse(this.responseText);
        data.forEach((user) => {
            //Ispisati korisnike koji rade u kompaniji čije ime sadrži reč „Group“, ili reč „LLC“.
            if (
                user.company.name.includes("Group") ||
                user.company.name.includes("LLC")
            ) {
                let list = `<ul>
                <li>Name: ${user.name}</li>
                <li>
                    Address:
                    <ul>
                        <li>City: ${user.address.city}</li>
                        <li>
                            Geo:
                            <ul>
                                <li>Lat: ${user.address.geo.lat} </li>
                                <li>Lng: ${user.address.geo.lng}</li>
                            </ul>
                        </li>
                        <li>Street: ${user.address.street}</li>
                        <li>Suite: ${user.address.suite} </li>
                        <li>Zipcode: ${user.address.zipcode} </li>
                    </ul>
                </li>

                <li>Company:
                    <ul>
                        <li>Bs: ${user.company.bs} </li>
                        <li>Catch Phrase: ${user.company.catchPhrase}</li>
                        <li>Name: <strong>${user.company.name} </strong></li>
                    </ul>
                </li>
                <li>Email: ${user.email} </li>
                <li>ID: ${user.id}</li>
                <li>PHONE: ${user.phone} </li>
                <li>username: ${user.username}</li>
                <li>Website: ${user.website} </li>
                </ul>
                `;
                divIspis2.innerHTML += list;
            }
        });
    } else if (this.readyState === 4) {
        console.log("could not fetch data!");
    }
});
request2.open("GET", "https://jsonplaceholder.typicode.com/users/");
request2.send();
//////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////
const request3 = new XMLHttpRequest();
request3.addEventListener("readystatechange", function() {
    if (this.readyState === 4 && this.status === 200) {
        const data = JSON.parse(this.responseText);
        data.forEach((user) => {
            //Ispisati broj korisnika koji žive na adresi čije su obe vrednosti geografske dužine i geografske širine negativni brojevi.
            if (
                parseFloat(user.address.geo.lat) < 0 &&
                parseFloat(user.address.geo.lng) < 0
            ) {
                let list = `<ul>
                <li>Name: ${user.name}</li>
                <li>
                    Address:
                    <ul>
                        <li>City: ${user.address.city}</li>
                        <li>
                            Geo:
                            <ul>
                                <li>Lat: <strong>${user.address.geo.lat}</strong> </li>
                                <li>Lng: <strong> ${user.address.geo.lng}</strong></li>
                            </ul>
                        </li>
                        <li>Street: ${user.address.street}</li>
                        <li>Suite: ${user.address.suite} </li>
                        <li>Zipcode: ${user.address.zipcode} </li>
                    </ul>
                </li>

                <li>Company:
                    <ul>
                        <li>Bs: ${user.company.bs} </li>
                        <li>Catch Phrase: "${user.company.catchPhrase}"</li>
                        <li>Name: ${user.company.name}</li>
                    </ul>
                </li>
                <li>Email: ${user.email} </li>
                <li>ID: ${user.id}</li>
                <li>PHONE: ${user.phone} </li>
                <li>username: ${user.username}</li>
                <li>Website: ${user.website} </li>
                </ul>
                `;
                divIspis3.innerHTML += list;
            }
        });
    } else if (this.readyState === 4) {
        console.log("could not fetch data!");
    }
});
request3.open("GET", "https://jsonplaceholder.typicode.com/users/");
request3.send();
// //////////////////////////////////////////////////////////////////////////
// //////////////////////////////////////////////////////////////////////////
// //////////////////////////////////////////////////////////////////////////

const request4 = new XMLHttpRequest();

request4.addEventListener("readystatechange", function() {
    if (this.readyState === 4 && this.status === 200) {
        const data = JSON.parse(this.responseText);

        let list = "<h3> Svi Razliciti Gradovi!</h3>";
        //Ispisati sve različite gradove u kojima rade ovi korisnici.
        for (let i = 0; i < data.length - 1; i++) {
            if (data[i].address.city !== data[i + 1].address.city) {
                list += `<p>${i + 1}.${data[i].address.city}</p>`;
            }
        }
        divIspis4.innerHTML += list;
    } else if (this.readyState === 4) {
        console.log("could not fetch data!");
    }
});
request4.open("GET", "https://jsonplaceholder.typicode.com/users/");
request4.send();

// //////////////////////////////////////////////////////////////////////////
// ///////////////////  2 NACIN SVE U JEDNOM UNIVERZALNIJE  /////////////////
// //////////////////////////////////////////////////////////////////////////

// let getUsers = (resolve, reject) => {
//     const request = new XMLHttpRequest();

//     request.addEventListener("readystatechange", function() {
//         if (this.readyState === 4 && this.status === 200) {
//             const data = JSON.parse(this.responseText);
//             resolve(data);
//         } else if (this.readyState === 4) {
//             // radi nesto kada je doslo do greske

//             reject(`DOSLO JE DO GRESKE`);
//         }
//     });
//     request.open("GET", "https://jsonplaceholder.typicode.com/users");
//     request.send();
// };

// let ispisPorukeStranica = (poruka) => {
//     document.body.innerHTML += `<p class="eror">${poruka}</p>`;
// };

// let zad1 = (niz) => {
//     niz.forEach((user) => {
//         if (user.website.includes(".com")) {
//             let list = `<ul>
//     <li>Name: ${user.name}</li>
//     <li>
//     Address:
//     <ul>
//     <li>City: ${user.address.city}</li>
//     <li>
//         Geo:
//         <ul>
//             <li>Lat: ${user.address.geo.lat} </li>
//             <li>Lng: ${user.address.geo.lng}</li>
//         </ul>
//     </li>
//     <li>Street: ${user.address.street}</li>
//     <li>Suite: ${user.address.suite} </li>
//     <li>Zipcode: ${user.address.zipcode} </li>
//     </ul>
//     </li>

//     <li>Company:
//     <ul>
//     <li>Bs: ${user.company.bs} </li>
//     <li>Catch Phrase: ${user.company.catchPhrase}</li>
//     <li>Name: ${user.company.name} </li>
//     </ul>
//     </li>
//     <li>Email: ${user.email} </li>
//     <li>ID: ${user.id}</li>
//     <li>PHONE: ${user.phone} </li>
//     <li>username: ${user.username}</li>
//     <li>Website: ${user.website} </li>
//     </ul>
//     `;

//             divIspis.innerHTML += list;
//         }
//     });
// };

// getUsers(zad1, ispisPorukeStranica);

// getUsers(
//     (niz) => {
//         niz.forEach((user) => {
//             if (
//                 user.company.name.includes("Group") ||
//                 user.company.name.includes("LLC")
//             ) {
//                 console.log(user.name);
//             }
//         });
//     },
//     (poruka) => {
//         document.body.innerHTML += `<p class="eror">${poruka}</p>`;
//     }
// );

// let getSportisti = (resolve, reject) => {
//     const request = new XMLHttpRequest();

//     request.addEventListener("readystatechange", function() {
//         if (this.readyState === 4 && this.status === 200) {
//             const data = JSON.parse(this.responseText);
//             resolve(data);
//         } else if (this.readyState === 4) {
//             // radi nesto kada je doslo do greske

//             reject(`DOSLO JE DO GRESKE`);
//         }
//     });
//     request.open("GET", "sportisti.json");
//     request.send();
// };
// let losaKonekcija = (poruka) => {
//     document.body.innerHTML += `<p>${poruka}</p>`;
// };

// let zadS3 = (niz) => {
//     let sredina = 0;
//     let br = 0;
//     niz.forEach((sportista) => {
//         sredina += sportista.visina;
//         br++;
//     });
//     br != 0 ?
//         (document.body.innerHTML += `<p>Prosecna visina Sportista iznosi: ${
//         sredina / br
//       }m </p>`) :
//         0;
// };

// let zadS4 = (niz) => {
//     //Ispisati ime i prezime sportiste sa najmanje transfera (bilo kog ako ima više takvih sportista).
//     console.log(niz[0].timovi.length);
//     let min = niz[0].imePrezime;
//     let min1 = niz[0].timovi.length;
//     for (let i = 1; i < niz.length; i++) {
//         if (min1 > niz[i].timovi.length) {
//             min = niz[i].imePrezime;
//         }
//     }
//     document.body.innerHTML += `<p>sportista sa najmanje transfera je: ${min}</p>`;
// };
// //Ispisati imena i prezimena svih sportista koji su igrali za „Lakers“-e.
// let zadS5 = (niz) => {
//     niz.forEach((sportista) => {
//         for (let i = 0; i < sportista.timovi.length; i++) {
//             if (sportista.timovi[i] == "LA Lakers") {
//                 document.body.innerHTML += `<p>Sportista koji je igrao ili igra za "LA Lakers-e" je : ${sportista.imePrezime}</p>`;
//             }
//         }
//     });
// };

// getSportisti(zadS3, losaKonekcija);
// getSportisti(zadS4, losaKonekcija);
// getSportisti(zadS5, losaKonekcija);
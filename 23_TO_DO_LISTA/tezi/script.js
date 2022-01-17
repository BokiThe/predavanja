console.log(`/////////// 2 nacin ///////`);

let inputObaveza = document.getElementById("inputObaveza");
let btnDodaj = document.getElementById("btnDodaj");
let listaUl = document.getElementById("lista");
let sviLi = document.querySelectorAll("#lista li");
let inputPocetak = document.getElementById("pocetak");
let inputKraj = document.getElementById("kraj");
console.log(listaUl);

// 2 nacin je da se uhvate input poja radio

let inputDodaj = document.querySelectorAll("input[name=dodaj]:checked");
// sa klikom na dugme!`

// btnDodaj.addEventListener("click", (e) => {
//     e.preventDefault();
//     let inputObavezaValue = inputObaveza.value;
//     if (inputObavezaValue != "") {
//         if (inputDodaj.value == "pocetak") {
//             let li1 = document.createElement("li");
//             li1.innerHTML = inputObavezaValue;
//             listaUl.prepend(li1);
//             inputObaveza.value = "";
//             // ovo je prvi nacin kad se dodaju 2 event listnera
//             // li1.addEventListener("click", () => {
//             //     listaUl.removeChild(li1);
//             // });
//         } else {
//             let li1 = document.createElement("li");
//             li1.innerHTML = inputObavezaValue;
//             listaUl.appendChild(li1);
//             inputObaveza.value = "";
//         }
//     } else {
//         alert(`morate uneti obavezu!`);
//     }
// });
//prvi nacin sa dodavanjem 2 event listnera
// sviLi.forEach((li) => {
//     li.addEventListener("click", () => {
//         listaUl.removeChild(li);
//     });
// });

// 2 nacin dodavanjem event lisnera na roditeljski elem

listaUl.addEventListener("click", (e) => {
    // console.log(e.target.tagName);
    if (e.target.tagName == "LI") {
        e.target.remove();
    }
});

document.addEventListener("keyup", (e) => {
    if (e.key === "Enter") {
        let inputObavezaValue = inputObaveza.value;
        console.log(`enter je pritisnut`);
        e.preventDefault();
        if (inputObavezaValue.trim() == "" || inputObavezaValue.trim() == null) {
            alert(`morate uneti obavezu!`);
        } else {
            if (inputPocetak.checked) {
                let li1 = document.createElement("li");
                li1.innerHTML = inputObavezaValue;
                listaUl.prepend(li1);
                inputObaveza.value = "";
                li1.addEventListener("click", () => {
                    listaUl.removeChild(li1);
                });
            }
            if (inputKraj.checked) {
                let li1 = document.createElement("li");
                li1.innerHTML = inputObavezaValue;
                listaUl.appendChild(li1);
                inputObaveza.value = "";
            }
        }
    }
});
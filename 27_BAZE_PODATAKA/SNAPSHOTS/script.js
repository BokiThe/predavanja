let ul = document.querySelector("ul");

let form = document.querySelector("form");

// db.collection("tasks")
//   .orderBy("startDate", "desc")
//   .get()
//   .then((snapshot) => {
//     if (!snapshot.empty) {
//       snapshot.docs.forEach((doc) => {
//         let obj = doc.data();
//         let li = document.createElement("li");
//         li.innerHTML = `${obj.title} (${obj.startDate.toDate()}) [${
//           obj.discription
//         }]`;
//         ul.appendChild(li);
//       });
//     } else {
//     }
//   })
//   .catch((err) => {
//     console.log("greska:", err);
//   });

form.addEventListener("submit", function (e) {
  e.preventDefault();
  let title = this.title.value;
  let startDate = this.startDate.value;
  let dueDate = this.dueDate.value;
  let priority = this.priority.checked;
  let discription = this.discription.value;

  let startDateObj = new Date(startDate);
  let dueDateObj = new Date(dueDate);

  let startDateTS = firebase.firestore.Timestamp.fromDate(startDateObj);
  let dueDateTS = firebase.firestore.Timestamp.fromDate(dueDateObj);

  let obj = {
    title: title,
    discription: discription,
    startDate: startDateTS,
    dueDate: dueDateTS,
    priority: priority,
  };

  db.collection("tasks")
    .add(obj)
    .then(() => {
      console.log(`dodat je novi zadatak`);
    })
    .catch((err) => {
      console.log(`doslo je do greske:`, err);
    });
});

db.collection("tasks").onSnapshot((snapshot) => {
  let changes = snapshot.docChanges();
  changes.forEach((change) => {
    let type = change.type;
    let doc = change.doc;
    let id = doc.id;

    if (type == "added") {
      let obj = doc.data();
      let li = document.createElement("li");
      li.id = id;
      li.innerHTML = `${obj.title} (${obj.startDate.toDate()}) [${
        obj.discription
      }]`;
      ul.appendChild(li);
      if (obj.priority === true) {
        li.style.color = "red";
      }
      let button = document.createElement("button");
      button.innerHTML = "Delete Task";
      li.appendChild(button);
    } else if (type == "removed") {
      let li = document.getElementById(id);
      li.remove();
    }
  });
});
ul.addEventListener("click", function (e) {
  e.preventDefault();
  if (e.target.tagName === "BUTTON") {
    let li = e.target.parentElement;
    let id = li.id;
    db.collection("tasks")
      .doc(id)
      .delete()
      .then(() => {
        alert(`uspesno obrisan task:( ${id} )`);
      })
      .catch((err) => {
        alert(`doslo je do greske`, err);
      });
  }
});

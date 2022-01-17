let sviLi = document.querySelectorAll("li");

console.log(sviLi);

sviLi.forEach((li) => {
    li.addEventListener("click", () => {
        if (li.style.textDecoration == "line-through") {
            li.style.textDecoration = "none";
        } else {
            li.style.textDecoration = "line-through";
        }
    });
});
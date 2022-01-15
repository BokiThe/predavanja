import generateImage from "./general.js";

function generateDiv(parent) {
    let div = document.createElement("div");
    div.style.display = "flex";
    div.style.flex = "1 0 0";
    parent.appendChild(div);

    return div;
}

function generateItem(parent, src) {
    let img = generateImage(src);
    parent.appendChild(img);
    return img;
}

export { generateDiv, generateItem };
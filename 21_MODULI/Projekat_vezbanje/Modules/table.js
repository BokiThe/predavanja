import { generateImage } from "./general.js";

let generateTable = (parent) => {
    let table = document.createElement("table");
    table.style.border = "0";
    parent.appendChild(table);
    return table;
};

let generateTableRow = (parent) => {
    let tr = document.createElement("tr");
    parent.appendChild(tr);
    return tr;
};

let generateTableItem = (parent, src) => {
    let td = document.createElement("td");
    let img = generateImage(src);
    td.appendChild(img);
    parent.appendChild(td);
    return td;
};

export { generateTable, generateTableRow, generateTableItem };
/*
U modulu table.js exportovati funkcije:
 generateTable(parent), koja formira tabelu i dodaje je na parent element,
generateTableRow(parent), koja formira tr tag i dodaje ga na parent element,
 generateTableItem(parent, src), koja formira td tag čiji je sadržaj slika na zadatoj putanji, i dodaje ga na parent element.

*/
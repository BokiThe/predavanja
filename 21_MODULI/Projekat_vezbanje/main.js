/*
import { generateImage } from "./Modules/general.js";
import { generateList, generateListItem } from "./Modules/list.js";
import {
    generateTable,
    generateTableRow,
    generateTableItem,
} from "./Modules/table.js";

let list = generateList(document.body);

generateListItem(list, "imiges/1.jpg");
generateListItem(list, "imiges/2.jpg");
generateListItem(list, "imiges/3.jpg");

let table = generateTable(document.body);
let tr = generateTableRow(table);

generateTableItem(tr, "imiges/1.jpg");
generateTableItem(tr, "imiges/2.jpg");
generateTableItem(tr, "imiges/3.jpg");
*/

import * as List from "./Modules/list.js";
import * as Table from "./Modules/table.js";

import * as Div from "./Modules/div.js";

let list = List.generateList(document.body);
List.generateListItem(list, "imiges/1.jpg");
List.generateListItem(list, "imiges/2.jpg");
List.generateListItem(list, "imiges/3.jpg");

let table = Table.generateTable(document.body);
let tr = Table.generateTableRow(table);
Table.generateTableItem(tr, "imiges/1.jpg");
Table.generateTableItem(tr, "imiges/2.jpg");
Table.generateTableItem(tr, "imiges/3.jpg");

let div = Div.generateDiv(document.body);
Div.generateItem(div, "imiges/1.jpg");
Div.generateItem(div, "imiges/2.jpg");
Div.generateItem(div, "imiges/3.jpg");
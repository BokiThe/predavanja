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
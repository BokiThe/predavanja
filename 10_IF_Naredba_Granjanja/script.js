"use strict";
console.log("IF - Naredba grananja")

if(true){

    console.log("Uslov je ispunjen")

}

console.log("Neki kod")


// Operatori Poredjenja:
// == != < > <= >=....

let a  = 7;
let b = 7;

if(a == b){
    console.log("a je isto sto i b");
}
a = 10;
b = 14;
if(a != b){
    console.log("a i b nisu jednake vrednosti");
}
a = 4;
b = 4;
if(a < b){
    console.log("a je strogo manje od b");
}

if(a <= b){
    console.log("a je manje ili jednako b");
}
///////////////////////////////

// === Proverava samo jednakosti po vrednosti (nije bitan tip)
a = 5;
b = "5";

if(a == b){
    console.log("a i b su jednaki");
}

// ===  proverava i po vrednosti i po tipu (bitan je tip)
a = "5";
b = "5";

if(a === b){
    console.log("a i b su isti po tipu i po vrednosti")
}

// !== da li su dve promenljive razlicite bilo po tipu bilo po vrednosti


a = 7;
b = "7";

if(a !== b){
    console.log("a i b nisu jednaki bilo po tipu bilo po vrednosti")
}

////////////////////////////

let x = 4;
let y = 3;
let z = 5;

if(x+y == z+2){
    console.log("x + y je jednako sa z+2");
}

`use strict`;

//1. prvo ide negacija !
//2. ide posle  &&
//2. pa onda ide ||

console.log(`logicki operatori`);

let pol = "z";
let god = 18;

if(pol == "m" && god >= 18){
    console.log(`osoba je musko i punoletna je`);
}else if(pol == "m" && god < 18 && god >= 0){
    console.log(`osoba je musko i maloletna je`);
}else if(pol == "z" && god >= 18){
    console.log(`osoba je zensko i punoletna je`);
}else if(pol == "z" && god < 18 && god>=0){
    console.log(`osoba je zensko i maloletna je`);
}else{
    console.log(`pogresan unos`);
}

pol = "m";

if(pol == "z" || pol == "Z" || pol == "ž" || pol == "Ž"){

    document.body.innerHTML += `<img src="slike/f.jpeg"/>`
}else if(pol == "m" || pol == "M"){
    document.body.innerHTML += `<img src="slike/m.png"/>`
}else{
    document.body.innerHTML += `<p>pogresan unos</p>`
}

pol = "z";
god = 15;

if((pol == "z" || pol == "Z" || pol == "ž" || pol == "Ž") && god >=18){
    console.log(`osoba je zensko i punoletna je`);
}else if ((pol == "z" || pol == "Z" || pol == "ž" || pol == "Ž") && god <18 && god >= 0){
    console.log(`osoba je zensko i maloletna je`);
}else if((pol == "m" || pol == "M") && god >= 18){
    console.log(`osoba je musko i punoletna je`);
}else if((pol == "m" || pol == "M") && god < 18 && god >= 0 ){
    console.log(`osoba je musko i maloletna je`);
}else {
    console.log(`pogresan unos`);
}



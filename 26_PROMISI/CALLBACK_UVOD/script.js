console.log(`////////////// PROMISI //////////////`);

////////// PRIMERI CALLBACK FUNKCIJA //////////////
let myFunc = (callback) => {
    callback();
};

myFunc(() => {
    console.log("callback okinuta!");
});

//////////////////////////////////////////////////

let sum = (callback) => {
    callback(5, 7);
    let br1 = 6;
    let br2 = 4;
    callback(br1, br2);
};

sum((x, y) => {
    console.log(x + y);
});

function printSum(a, b) {
    console.log(a + b);
}

sum(printSum);
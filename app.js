let canvas1 = document.createElement("canvas");
canvas1.id = "firstGraph";
let table1 = document.querySelector("#table1 > caption");
table1.insertBefore(canvas1, table1.childNodes[0]);

console.log(canvas1);

let canvas2 = document.createElement("canvas");
canvas2.id = "secondGraph";
let table2 = document.querySelector("#table2 > caption");
table2.insertBefore(canvas2, table2.childNodes[0]);

console.log(canvas2);

let canvas3 = document.createElement("canvas");
canvas3.id = "thirdGraph";
let body = document.getElementById("bodyContent");
body.insertBefore(canvas3, body.childNodes[0]);

console.log(canvas3);



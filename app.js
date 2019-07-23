let canvas1 = document.createElement("canvas");
canvas1.id = "firstGraph";
canvas1.style.width = "100px";
canvas1.style.height = "50px";
let body = document.getElementById("bodyContent");
body.insertBefore(canvas1, body.childNodes[0]);


let canvas2 = document.createElement("canvas");
canvas2.id = "secondGraph";
let caption1 = document.querySelector("#table1 > caption");
caption1.insertBefore(canvas2, caption1.childNodes[0]);


let canvas3 = document.createElement("canvas");
canvas3.id = "thirdGraph";
let caption2 = document.querySelector("#table2 > caption");
caption2.insertBefore(canvas3, caption2.childNodes[0]);


//first chart
let table1 = document.getElementById("table1");
let yearData = [];
let countryData = [];
let dataSets = [];

//YEAR
for (let i = 2; i < table1.rows[1].cells.length; i++) {
    yearData[i - 2] = table1.rows[1].cells[i].innerHTML;
    
}

//COUNTRY
for (let j = 2; j < table1.rows.length; j++) {
    countryData = table1.rows[j].cells[1].innerHTML;
    let numbersData = [];
    let RBG = RBG();
    let tableRow = table1.rows[j];
    let jsonData = {
        label: countryData, //countries
        data: numbersData, //numbers
        backgroundColor: RBG,
    };
    
    //NUMBERS
    for (let k = 2; k < tableRow.cells.length; k++) {
        numbersData.push(parseInt(tableRow.cells[k].innerHTML));
    }
    dataSets.push(jsonData);
    console.log(numbersData);
}

function RBG() {
    
}





let ctx1 = document.getElementById("secondGraph").getContext('2d');
let myChart = new Chart(ctx1, {
    type: 'bar',
    data: {
        labels: yearData,
        datasets: dataSets,
    },
    options: {
    }
});

console.log(dataSets);


//[{
//     label: countryData, //countries
//     data: numbersData, //numbers
//     backgroundColor: [
//         'rgba(255, 99, 132, 0.2)',
//         'rgba(54, 162, 235, 0.2)',
//         'rgba(255, 206, 86, 0.2)',
//         'rgba(75, 192, 192, 0.2)',
//         'rgba(153, 102, 255, 0.2)',
//         'rgba(255, 159, 64, 0.2)'
//     ],
//     borderColor: [
//         'rgba(255, 99, 132, 1)',
//         'rgba(54, 162, 235, 1)',
//         'rgba(255, 206, 86, 1)',
//         'rgba(75, 192, 192, 1)',
//         'rgba(153, 102, 255, 1)',
//         'rgba(255, 159, 64, 1)'
//     ],
//     borderWidth: 1
// }]
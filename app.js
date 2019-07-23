let canvas1 = document.createElement("canvas");
canvas1.id = "firstGraph";
canvas1.style.width = "100px";
canvas1.style.height = "50px";
let body = document.getElementById("bodyContent");
body.insertBefore(canvas1, body.childNodes[0]);

console.log(canvas1);

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

// var rowIndex = 0;
// var cellIndex = 1;
// table1.rows[rowIndex].cells[cellIndex];

console.log(table1.rows[2].cells[2].innerHTML);


for (rowIndex = 2; rowIndex < table1.rows.length; rowIndex++) {
    for (cellIndex = 1; cellIndex < table1.rows[rowIndex].cells.length; cellIndex++) {
        row[rowIndex].cells[cellIndex].innerHTML;
    }
}



let ctx1 = document.getElementById("secondGraph").getContext('2d');
let myChart = new Chart(ctx1, {
    type: 'line',
    data: {
        labels: ['4000'],
        datasets: [{
            label: ['3', '12'],
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});
let canvas1 = document.createElement("canvas");
canvas1.id = "firstGraph";
canvas1.style.width = "100px";
canvas1.style.height = "50px";
let body = document.getElementById("bodyContent");
body.insertBefore(canvas1, body.childNodes[0]);


let canvas2 = document.createElement("canvas");
canvas2.id = "secondGraph";
canvas2.style.width = "100px";
canvas2.style.height = "50px";
let caption1 = document.querySelector("#table1 > caption");
caption1.insertBefore(canvas2, caption1.childNodes[0]);


let canvas3 = document.createElement("canvas");
canvas3.id = "thirdGraph";
canvas3.style.width = "100px";
canvas3.style.height = "90px";
let caption2 = document.querySelector("#table2 > caption");
caption2.insertBefore(canvas3, caption2.childNodes[0]);


//---------------------------------------FIRST CHART-----------------------------------------




async function getData() {
    const request = "http://127.0.0.1:5500/test.json";
    let response = await fetch(request);
    graphData = await response.json();

    let xData = [];
    let yData = [];
    let dataSets3 = [];
    for (let i = 2; i < contents.length; i += 6) {
        xData = contents[i];
        let json = {
            label: ['Cuurent Statistics'], //countries
            data: yData, //numbers
            backgroundColor: RBG(),
        }
        dataSets3.push(json);
    }

    for (let j = 4; j < contents.length; j += 6) {
        yData = contents[j];
    }

    let ctx3 = document.getElementById("firstGraph").getContext('2d');
    let myChart3 = new Chart(ctx3, {
        type: 'line',
        data: {
            labels: xData,
            datasets: dataSets3,
        },
        // Configuration options go here
        options: {}
    });
}








//--------------------------------------------second chart-------------------------------------------
let table1 = document.getElementById("table1");
let yearData = [];
let countryData = [];
let dataSets = [];

//----------------YEAR---------------
for (let i = 2; i < table1.rows[1].cells.length; i++) {
    yearData[i - 2] = table1.rows[1].cells[i].innerHTML;
    
}

function RBG() {
    let num = Math.round(0xffffff * Math.random());
    let r = num >> 60;
    let g = num >> 8 & 255;
    let b = num & 255;
    return 'rgb(' + r + ', ' + g + ', ' + b + ')';
}


//---------------COUNTRY--------------------
for (let j = 2; j < table1.rows.length; j++) {
    countryData = table1.rows[j].cells[1].innerHTML;
    table1.rows[7].cells[1].innerHTML = "Estonie";
    table1.rows[9].cells[1].innerHTML = "Grèce";
    table1.rows[10].cells[1].innerHTML = "Espagne";
    table1.rows[13].cells[1].innerHTML = "Italie";
    table1.rows[15].cells[1].innerHTML = "Lettonie";
    table1.rows[20].cells[1].innerHTML = "PaysBas";
    table1.rows[27].cells[1].innerHTML = "Finlande";
    table1.rows[29].cells[1].innerHTML = "Islande";
    table1.rows[32].cells[1].innerHTML = "Suisse";
    table1.rows[36].cells[1].innerHTML = "Turquie";
    
    
    let numbersData = []; //-------array has to be here or it runs 36 times--------
    let tableRow = table1.rows[j];
    let jsonData = {
        label: countryData, //countries
        data: numbersData, //numbers
        backgroundColor: RBG(),     
    };
    
    //--------------------NUMBERS----------------
    for (let k = 2; k < tableRow.cells.length; k++) {
        numbersData.push(parseInt(tableRow.cells[k].innerHTML));
    }
    dataSets.push(jsonData);
}
//------------create chart-------------
let ctx1 = document.getElementById("secondGraph").getContext('2d');
let myChart = new Chart(ctx1, {
    type: 'bar',
    data: {
        labels: yearData, //-----------years
        datasets: dataSets, //-----------country for loop
    },
    options: {
    }
});





// --------------------------------------THIRD GRAPH---------------------------------------------------


let table2 = document.getElementById("table2");
let yearData2 = [];
let countryData2 = [];
let dataSets2 = [];

//----------------YEAR---------------
for (let i = 2; i < table2.rows[1].cells.length; i++) {
    yearData2[i - 2] = table2.rows[0].cells[i].innerHTML;
    
}

function callRBG() {
    let num = Math.round(0xffffff * Math.random());
    let r = num >> 11;
    let g = num >> 40 & 255;
    let b = num & 255;
    return 'rgb(' + r + ', ' + g + ', ' + b + ')';
}
 


//---------------COUNTRY--------------------
for (let j = 2; j < table2.rows.length; j++) {
    countryData2 = table2.rows[j].cells[1].innerHTML;
    table2.rows[8].cells[1].innerHTML = "paysdeGalles(UK)"
    table2.rows[9].cells[1].innerHTML = "Ecosse(UK)"
    
    let numbersData2 = []; //-------array has to be here or it runs 36 times--------
    let tableRow2 = table2.rows[j];
    let jsonData2 = {
        label: countryData2, //countries
        data: numbersData2, //numbers
        backgroundColor: callRBG(),     
    };
    // console.log(countryData2);
    
    
    //--------------------NUMBERS----------------
    for (let k = 2; k < tableRow2.cells.length; k++) {
        numbersData2.push(parseInt(tableRow2.cells[k].innerHTML));
    }
    dataSets2.push(jsonData2);
}
//------------create chart-------------
let ctx2 = document.getElementById("thirdGraph").getContext('2d');
let myChart2 = new Chart(ctx2, {
    type: 'bar',
    data: {
        labels: yearData2, //-----------years
        datasets: dataSets2, //-----------country for loop
    },
    options: {
    }
});

console.log(dataSets2);
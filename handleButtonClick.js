/**
 * Created by Karina on 27.02.2017.
 */


function handleButtonClick() {
    var time = 0;
    if (!document.getElementById("inputM").value ||
        !document.getElementById("inputT").value ||
        !document.getElementById("inputA").value ||
        !document.getElementById("inputB").value) {
        alert("Please fill in all the text fields!");
        return 0;
    }
    var arrA = document.getElementById("inputA").value;
    var arrB = document.getElementById("inputB").value;

    var m = document.getElementById("inputM").value;
    var t = document.getElementById("inputT").value;

    if (!inputIsNumber(m) || !inputIsNumber(t)){
        alert("Please input numbers in the fields!");
        return 0;
    } else {
        m = Number(m);
        t = Number(t);
    }

    if (!inputIsArrayOfNumbers(arrA) || !inputIsArrayOfNumbers(arrB)){
        alert("Please input numbers in the fields!");
        return 0;
    }

    arrA = arrA.split(" ");
    arrB = arrB.split(" ");
    if (arrA.length != m || arrB.length != m) {
        alert("Please input "+m+" elements or change the M value!");
        return 0;
    }

    var table = document.getElementById("table");
    var rowCount = table.getElementsByTagName("tr").length;
    if (rowCount > 1) {
        for (var rowIndex = rowCount - 1; rowIndex > 0; rowIndex--) {
            table.deleteRow(rowIndex);
        }
    }
    for (var i = 0; i < arrA.length; i++) {
        if (!inputIsArrayOfNumbers(arrA[i])){
            alert("Please input numbers in the fields!");
            return 0;
        }
        arrA[i] = Number(arrA[i]);
        if (arrA[i] > 15 || arrA[i] < 0) {
            alert("Please input number in the [0; 15] interval!");
            return 0;
        }
        arrA[i] = printBinary(decimalToBinary(arrA[i]));
    }
    for (var i = 0; i < arrB.length; i++) {
        if (!inputIsArrayOfNumbers(arrB[i])){
            alert("Please input numbers in the fields!");
            return 0;
        }
        arrB[i] = Number(arrB[i]);
        if (arrB[i] > 15 || arrB[i] < 0) {
            alert("Please input number in the [0; 15] interval!");
            return 0;
        }
        arrB[i] = printBinary(decimalToBinary(arrB[i]));
    }


    for (var rowIndex = 1; rowIndex <= 8+(m-1); rowIndex++) {
        i = rowIndex - 1;
        var row = table.insertRow();
        var cell = row.insertCell(0);
        if (rowIndex <= m) {
            cell.innerHTML = "<b>A</b> = " + printBinary(arrA[i]) + "<br>" +
                "<b>B</b> = " + printBinary(arrB[i]) + "<br>" +
                "<b>Time:</b> " + time;
        }

        for (var cellIndex = 1; cellIndex < 9; cellIndex++) {
            row.insertCell(cellIndex);
        }
    }

    var boolArrA = [];
    var boolArrB = [];
    var arrC = [];

    for (var index = 0; index < m; index++) {
        boolArrA[index] = getBoolArray(arrA[index]);
        boolArrB[index] = getBoolArray(arrB[index]);
    }

    var res = [];
    var cellIndex = 0;
    var rowIndex = 0;
    var step = [];
    var time = 0;
    for (var i = 0; i < m; i++){
        step[i] = 0;
        res[i] = [];
    }
    for (var elemIndex = 0; elemIndex < m; elemIndex++){

        time+=t;

        for (var j = elemIndex; j >= 0; j--){
            cellIndex = step[j]+1;
            res[j] = pipeline(res[j], boolArrA[j], boolArrB[j], step[j]);
            if (step[j] < 8){
                rowIndex = j + step[j] + 1;
                var resCell = table.rows[rowIndex].cells[cellIndex];



                if (step[j] == 7){
                    resCell = table.rows[rowIndex-1].cells[cellIndex];
                    resCell.innerHTML = "<b>A:</b> "+binaryToDecimal(resToString(boolArrA[j]))+
                        "<br>"+"<b>B:</b> "+binaryToDecimal(resToString(boolArrB[j]))+
                        "<br>"+"<b>Result: </b>"+binaryToDecimal(resToString(res[j]))+"<br>"+
                        "<b>Elapsed time:</b> "+(time-1);
                } else {
                    resCell.innerHTML = "<b>A:</b> "+printBinary(resToString(boolArrA[j]))+
                        "<br>"+"<b>B:</b> "+printBinary(resToString(boolArrB[j]))+
                        "<br>"+"<b>Result: </b>"+printBinary(resToString(res[j]))+"<br>"+
                        "<b>Time:</b> "+time;
                }
                step[j]++;
            }
        }
    }

    while (step[m-1] < 8){
        time+=t;

        for (var j = m-1; j >= 0; j--){
            cellIndex = step[j]+1;
            res[j] = pipeline(res[j], boolArrA[j], boolArrB[j], step[j]);
            if (step[j] < 8){
                rowIndex = j + step[j] + 1;
                var resCell = table.rows[rowIndex].cells[cellIndex];

                if (step[j] == 7){
                    rowIndex--;
                    resCell = table.rows[rowIndex].cells[cellIndex];
                    resCell.innerHTML = "<b>A:</b> "+binaryToDecimal(resToString(boolArrA[j]))+
                        "<br>"+"<b>B:</b> "+binaryToDecimal(resToString(boolArrB[j]))+
                        "<br>"+"<b>Result: </b>"+binaryToDecimal(resToString(res[j]))+"<br>"+
                        "<b>Elapsed time:</b> "+(time-1);
                } else {
                        resCell.innerHTML = "<b>A:</b> "+printBinary(resToString(boolArrA[j]))+
                            "<br>"+"<b>B:</b> "+printBinary(resToString(boolArrB[j]))+
                            "<br>"+"<b>Result: </b>"+printBinary(resToString(res[j]))+"<br>"+
                            "<b>Time:</b> "+time;
                }
                step[j]++;
            }
        }
    }

    for (var i = 0; i < res.length; i++){
        arrC[i] = binaryToDecimal(resToString(res[i]));
    }

    document.getElementById("result").value = arrC;
}


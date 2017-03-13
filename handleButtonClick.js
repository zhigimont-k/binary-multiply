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
    var m = Number(document.getElementById("inputM").value);
    var t = Number(document.getElementById("inputT").value);

    arrA = arrA.split(" ");
    if (arrA.length != document.getElementById("inputM").value) {
        alert("Please input "+m+" elements or change the M value!");
        return 0;
    }
    arrB = arrB.split(" ");
    if (arrB.length != document.getElementById("inputM").value) {
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
        arrA[i] = Number(arrA[i]);
        if (arrA[i] > 15 || arrA[i] < 0) {
            alert("Please input number in the [0; 15] interval!");
        }
        arrA[i] = printBinary(decimalToBinary(arrA[i]));
    }
    for (var i = 0; i < arrB.length; i++) {
        arrB[i] = Number(arrB[i]);
        if (arrB[i] > 15 || arrB[i] < 0) {
            alert("Please input number in the [0; 15] interval!");
        }
        arrB[i] = printBinary(decimalToBinary(arrB[i]));
    }


    var table = document.getElementById("table");
    //var rowIndex = 1;
    //var cellIndex = 0;
    //var time = 0;
    for (var rowIndex = 1; rowIndex <= 8+(m-1); rowIndex++) {
        i = rowIndex - 1;
        var row = table.insertRow();
        var cell = row.insertCell(0);
        if (rowIndex <= m) {
            cell.innerHTML = "A" + "<sub>" + i + "</sub>" + " = " + printBinary(arrA[i]) + "<br>" + "B" +
                "<sub>" + i + "</sub>" + " = " + printBinary(arrB[i]) + "<br>" +
                "Time: " + time;
        }

        for (var cellIndex = 1; cellIndex < 9; cellIndex++) {
            row.insertCell(cellIndex);
        }
    }

    var boolArrA = [];
    var boolArrB = [];
    var arrC = [];

    //var time = 0;

    for (var index = 0; index < m; index++) {
        boolArrA[index] = getBoolArray(arrA[index]);
        boolArrB[index] = getBoolArray(arrB[index]);
    }

//TODO: вывод данных в таблице
    var partSum = [];
    var res = [];
    var cellIndex = 0;
    var rowIndex = 0;
    var step = [];
    var time = 0;
    for (var i = 0; i < m; i++){
        step[i] = 0;
        res[i] = [];
        partSum = [];
    }
    while (step[m-1] < 9){
        //res[index] = [];
        cellIndex++;
        for (var elemIndex = 0; elemIndex < m; elemIndex++){
            if (boolArrA[elemIndex-1] && (step[elemIndex-1] <= step[elemIndex])){
                elemIndex--;
                //alert("test");
            }
            if (step[elemIndex] == 0){
                step[elemIndex]++;
                rowIndex = elemIndex+step[elemIndex];
                //time+=t;

            }
            time+=t;
            if (step[elemIndex] == 1){
                partSum[elemIndex] = multiply1Bin(boolArrA[elemIndex], boolArrB[elemIndex][0]);
                res[elemIndex] = binarySum(partSum[elemIndex], res[elemIndex]);
                rowIndex = elemIndex+step[elemIndex];
                var resCell = table.rows[rowIndex].cells[cellIndex];
                //time+=t;
                resCell.innerHTML = printBinary(resToString(res[elemIndex]))+"<br>"+
                "Time: "+time;
                step[elemIndex]++;
                continue;
            }
            if (step[elemIndex] == 2){
                res[elemIndex] = shiftLeft(res[elemIndex]);
                rowIndex = elemIndex+step[elemIndex];
                var resCell = table.rows[rowIndex].cells[cellIndex];
                //time+=t;
                resCell.innerHTML = printBinary(resToString(res[elemIndex]))+"<br>"+
                    "Time: "+time;
                step[elemIndex]++;

                continue;
            }
            if (step[elemIndex] == 3){
                partSum[elemIndex] = multiply1Bin(boolArrA[elemIndex], boolArrB[elemIndex][1]);
                res[elemIndex] = binarySum(partSum[elemIndex], res[elemIndex]);
                rowIndex = elemIndex+step[elemIndex];
                var resCell = table.rows[rowIndex].cells[cellIndex];
                //time+=t;
                resCell.innerHTML = printBinary(resToString(res[elemIndex]))+"<br>"+
                    "Time: "+time;
                step[elemIndex]++;
                continue;
            }
            if (step[elemIndex] == 4){
                res[elemIndex] = shiftLeft(res[elemIndex]);
                rowIndex = elemIndex+step[elemIndex];
                var resCell = table.rows[rowIndex].cells[cellIndex];
                //time+=t;
                resCell.innerHTML = printBinary(resToString(res[elemIndex]))+"<br>"+
                    "Time: "+time;
                step[elemIndex]++;
                continue;
            }
            if (step[elemIndex] == 5){
                partSum[elemIndex] = multiply1Bin(boolArrA[elemIndex], boolArrB[elemIndex][2]);
                res[elemIndex] = binarySum(partSum[elemIndex], res[elemIndex]);
                rowIndex = elemIndex+step[elemIndex];
                var resCell = table.rows[rowIndex].cells[cellIndex];
                //time+=t;
                resCell.innerHTML = printBinary(resToString(res[elemIndex]))+"<br>"+
                    "Time: "+time;
                step[elemIndex]++;
                continue;
            }
            if (step[elemIndex] == 6){
                res[elemIndex] = shiftLeft(res[elemIndex]);
                rowIndex = elemIndex+step[elemIndex];
                var resCell = table.rows[rowIndex].cells[cellIndex];
                //time+=t;
                resCell.innerHTML = printBinary(resToString(res[elemIndex]))+"<br>"+
                    "Time: "+time;
                step[elemIndex]++;
                continue;
            }
            if (step[elemIndex] == 7){
                partSum[elemIndex] = multiply1Bin(boolArrA[elemIndex], boolArrB[elemIndex][3]);
                res[elemIndex] = binarySum(partSum[elemIndex], res[elemIndex]);
                rowIndex = elemIndex+step[elemIndex];
                var resCell = table.rows[rowIndex].cells[cellIndex];
                //time+=t;
                resCell.innerHTML = printBinary(resToString(res[elemIndex]))+"<br>"+
                    "Time: "+time;
                step[elemIndex]++;
                continue;
            }
            if (step[elemIndex] == 8){
                //res[elemIndex] = shiftLeft(res[elemIndex]);
                rowIndex = elemIndex+step[elemIndex];
                var resCell = table.rows[rowIndex].cells[cellIndex];
                //time+=t;
                resCell.innerHTML = binaryToDecimal(resToString(res[elemIndex]))+"<br>"+
                    "Time: "+time;
                step[elemIndex]++;
            }
        }
    }
    //var row = 1;
        /*for (var step = 0; step < 8; step++) {
            res[index] = [];
            for (var elemIndex = 0; elemIndex < m; elemIndex++){
                if (step == 0){
                    step++;
                }
                if (step == 1){
                    res[elemIndex] = multiply1Bin(boolArrA[elemIndex], boolArrB[elemIndex][0]);
                    var resCell = table.rows[rowIndex+elemIndex].cells[cellIndex];
                    resCell.innerHTML = "test";
                    rowIndex++;
                }
                if (step == 2){
                    res[elemIndex] = shiftLeft(res[elemIndex]);
                    var resCell = table.rows[rowIndex+elemIndex].cells[cellIndex];
                    resCell.innerHTML = "test 2";
                    rowIndex++;
                }
                if (step == 3){
                    res[elemIndex] = multiply1Bin(boolArrA[elemIndex], boolArrB[elemIndex][1]);
                    var resCell = table.rows[rowIndex+elemIndex].cells[cellIndex];
                    resCell.innerHTML = "test 3";
                    rowIndex++;
                }
                if (step == 4){
                    res[elemIndex] = shiftLeft(res[elemIndex]);
                    step++;
                }
                if (step == 5){
                    res[elemIndex] = multiply1Bin(boolArrA[elemIndex], boolArrB[elemIndex][2]);
                    step++;
                }
                if (step == 6){
                    res[elemIndex] = shiftLeft(res[elemIndex]);
                    step++;
                }
                if (step == 7){
                    res[elemIndex] = multiply1Bin(boolArrA[elemIndex], boolArrB[elemIndex][3]);
                    step++;
                }
                if (step == 8){
                    res[elemIndex] = shiftLeft(res[elemIndex]);
                    step++;
                }
            }
            cellIndex++;
        }*/
}

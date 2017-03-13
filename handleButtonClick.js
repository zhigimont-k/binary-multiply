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
    var stop = 0;
    for (var i = 0; i < m; i++){
        step[i] = 0;
        res[i] = [];
        partSum = [];
    }
    while (step[m-1] < 8){
        //res[index] = [];
        for (var elemIndex = 0; elemIndex < m; elemIndex++){
            time+=t;

            //res[elemIndex] = pipeline(res[elemIndex], boolArrA[elemIndex], boolArrB[elemIndex], step[elemIndex]);
            //alert(res[elemIndex]);

            //step[elemIndex]++;

            /*for (var k = 0; k < elemIndex; k++){
                if (step[k-1] > step[k]){
                    stop = k-1;
                }
            }*/
            for (var j = elemIndex; j >= stop; j--){
                //cellIndex++;
                cellIndex = step[j]+1;
                res[j] = pipeline(res[j], boolArrA[j], boolArrB[j], step[j]);
                if (step[j] < 8){
                    rowIndex = j + step[j] + 1;
                    //if (cellIndex){
                    var resCell = table.rows[rowIndex].cells[cellIndex];
                    //time+=t;
                    resCell.innerHTML = "A: "+boolArrA[j]+"<br>"+printBinary(resToString(res[j]))+"<br>"+
                        "Time: "+time;
                    step[j]++;
                }
                //}
            }

        }
    }
    //alert(res);
    for (var i = 0; i < res.length; i++){
        res[i] = binaryToDecimal(resToString(res[i]));
    }
    alert(res);
}


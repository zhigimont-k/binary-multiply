/**
 * Created by Karina on 27.02.2017.
 */


function handleButtonClick() {
    var time = 0;
    if (!document.getElementById("inputM").value || !document.getElementById("inputT").value || !document.getElementById("inputA").value || !document.getElementById("inputB").value) {
        alert("Please fill in all the text fields!");
        return 0;
    }
    var arrA = document.getElementById("inputA").value;
    var arrB = document.getElementById("inputB").value;
    var m = Number(document.getElementById("inputM").value);
    var t = Number(document.getElementById("inputT").value);

    arrA = arrA.split(" ");
    if (arrA.length != document.getElementById("inputM").value) {
        alert("Please input m elements!");
        return 0;
    }
    arrB = arrB.split(" ");
    if (arrB.length != document.getElementById("inputM").value) {
        alert("Please input m elements!");
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

//TODO: конвейер
    for (var index = 0; index < m; index++) {
        var rowIndex = index + 1;
        var partSum = [];
        var res = [];
        var cellIndex = 1;

        for (var index = 0; index < m; index++) {
            var rowIndex = index + 1;
            //arrC[index] = binaryMultiply(boolArrA[index], boolArrB[index], rowIndex, table, t);
            var partSum = [];
            var res = [];
            var cellIndex = 1;
            for (var i = 0; i < boolArrB[index].length; i++) {
                res = shiftLeft(res);
                var shiftCell = table.rows[rowIndex].cells[cellIndex];
                if (cellIndex != 1) {
                    time += t;
                    rowIndex++;
                    shiftCell.innerHTML = "Result: " + printBinary(resToString(res)) + "<br>" +
                        "Time: " + time;
                    cellIndex++;
                }
                partSum = multiply1Bin(boolArrA[index], boolArrB[index][i]);
                var resCopy = res;
                res = binarySum(res, partSum);
                time += t;
                rowIndex++;
                var partSumCell = table.rows[rowIndex].cells[cellIndex];
                partSumCell.innerHTML = Number(boolArrB[index][i]) + " * " + printBinary(resToString(boolArrA[index]))
                    + " = " + printBinary(resToString(partSum)) + "<br>" +
                    printBinary(resToString(resCopy)) + " + " + printBinary(resToString(partSum)) +
                    " = " + printBinary(resToString(res)) + "<br>" +
                    "Time: " + time;
                cellIndex++;
                var resultCell = table.rows[rowIndex].cells[cellIndex];
                resultCell.innerHTML = binaryToDecimal(resToString(boolArrA[index])) + " * " +
                    binaryToDecimal(resToString(boolArrB[index])) + " = " + binaryToDecimal(resToString(res)) +
                    "<br>" + "Elapsed time: " + time;

            }
        }

    }
}

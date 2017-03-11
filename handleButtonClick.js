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
    var partSum = [];
    var res = [];
        for (var index = 0; index < m; index++) {
            //var rowIndex = index + 1;
            //arrC[index] = binaryMultiply(boolArrA[index], boolArrB[index], rowIndex, table, t);

            res[index] = [];
            partSum[index] = [];
            var cellIndex = 1;

            res[index] = shiftLeft(res[index]);
            //partSum[index] = multiply1Bin(boolArrA[index], boolArrB[index][0]);
            //res[index] = binarySum(res[index], partSum[index]);
            //res[index] = shiftLeft(res[index]);
            if (boolArrA[index-1]){
                partSum[index-1] = multiply1Bin(boolArrA[index-1], boolArrB[index-1][0]);
                res[index-1] = binarySum(res[index-1], partSum[index-1]);
            }
            if (boolArrA[index-2]){
                res[index-2] = shiftLeft(res[index-2]);
            }
            if (boolArrA[index-3]){
                partSum[index-3] = multiply1Bin(boolArrA[index-3], boolArrB[index-3][1]);
                res[index-3] = binarySum(res[index-3], partSum[index-3]);
            }
            if (boolArrA[index-4]){
                res[index-4] = shiftLeft(res[index-4]);
            }
            if (boolArrA[index-5]){
                partSum[index-5] = multiply1Bin(boolArrA[index-5], boolArrB[index-5][2]);
                res[index-5] = binarySum(res[index-5], partSum[index-5]);
            }
            if (boolArrA[index-6]){
                res[index-6] = shiftLeft(res[index-6]);
            }
            if (boolArrA[index-7]){
                partSum[index-7] = multiply1Bin(boolArrA[index-7], boolArrB[index-7][3]);
                res[index-7] = binarySum(res[index-7], partSum[index-7]);
            }

            if (index == boolArrA.length - 1){
                partSum[index] = multiply1Bin(boolArrA[index], boolArrB[index][0]);
                res[index] = binarySum(res[index], partSum[index]);
                if (boolArrA[index-1]){
                    res[index-1] = shiftLeft(res[index-1]);
                }
                if (boolArrA[index-2]){
                    partSum[index-2] = multiply1Bin(boolArrA[index-2], boolArrB[index-2][1]);
                    res[index-2] = binarySum(res[index-2], partSum[index-2]);
                }
                if (boolArrA[index-3]){
                    res[index-3] = shiftLeft(res[index-3]);}
                if (boolArrA[index-4]){
                    partSum[index-4] = multiply1Bin(boolArrA[index-4], boolArrB[index-4][2]);
                    res[index-4] = binarySum(res[index-4], partSum[index-4]);}
                if (boolArrA[index-5]){
                    res[index-5] = shiftLeft(res[index-5]);
                }
                if (boolArrA[index-6]){
                    partSum[index-6] = multiply1Bin(boolArrA[index-6], boolArrB[index-6][3]);
                    res[index-6] = binarySum(res[index-6], partSum[index-6]);
                }

                res[index] = shiftLeft(res[index]);
                if (boolArrA[index-1]){
                    partSum[index-1] = multiply1Bin(boolArrA[index-1], boolArrB[index-1][1]);
                    res[index-1] = binarySum(res[index-1], partSum[index-1]);
                }
                if (boolArrA[index-2]){
                    res[index-2] = shiftLeft(res[index-2]);
                }
                if (boolArrA[index-3]){
                    partSum[index-3] = multiply1Bin(boolArrA[index-3], boolArrB[index-3][2]);
                    res[index-3] = binarySum(res[index-3], partSum[index-3]);
                }
                if (boolArrA[index-4]){
                    res[index-4] = shiftLeft(res[index-4]);
                }
                if (boolArrA[index-5]){
                    partSum[index-5] = multiply1Bin(boolArrA[index-5], boolArrB[index-5][3]);
                    res[index-5] = binarySum(res[index-5], partSum[index-5]);
                }

                partSum[index] = multiply1Bin(boolArrA[index], boolArrB[index][1]);
                res[index] = binarySum(res[index], partSum[index]);
                if (boolArrA[index-1]){
                    res[index-1] = shiftLeft(res[index-1]);
                }
                if (boolArrA[index-2]){
                    partSum[index-2] = multiply1Bin(boolArrA[index-2], boolArrB[index-2][2]);
                    res[index-2] = binarySum(res[index-2], partSum[index-2]);
                }
                if (boolArrA[index-3]){
                    res[index-3] = shiftLeft(res[index-3]);
                }
                if (boolArrA[index-4]){
                    partSum[index-4] = multiply1Bin(boolArrA[index-4], boolArrB[index-4][3]);
                    res[index-4] = binarySum(res[index-4], partSum[index-4]);}

                res[index] = shiftLeft(res[index]);
                if (boolArrA[index-1]){
                    partSum[index-1] = multiply1Bin(boolArrA[index-1], boolArrB[index-1][2]);
                    res[index-1] = binarySum(res[index-1], partSum[index-1]);
                }
                if (boolArrA[index-2]){
                    res[index-2] = shiftLeft(res[index-2]);
                }
                if (boolArrA[index-3]){
                    partSum[index-3] = multiply1Bin(boolArrA[index-3], boolArrB[index-3][3]);
                    res[index-3] = binarySum(res[index-3], partSum[index-3]);
                }

                partSum[index] = multiply1Bin(boolArrA[index], boolArrB[index][2]);
                res[index] = binarySum(res[index], partSum[index]);
                if (boolArrA[index-1]){
                    res[index-1] = shiftLeft(res[index-1]);
                }
                if (boolArrA[index-2]){
                    partSum[index-2] = multiply1Bin(boolArrA[index-2], boolArrB[index-2][3]);
                    res[index-2] = binarySum(res[index-2], partSum[index-2]);}

                res[index] = shiftLeft(res[index]);
                if (boolArrA[index-1]){
                    partSum[index-1] = multiply1Bin(boolArrA[index-1], boolArrB[index-1][3]);
                    res[index-1] = binarySum(res[index-1], partSum[index-1]);
                }

                partSum[index] = multiply1Bin(boolArrA[index], boolArrB[index][3]);
                res[index] = binarySum(res[index], partSum[index]);
            }

            //alert("index: "+index);
            //alert(res);





            /*for (var i = 0; i < boolArrB[index].length; i++) {
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

            }*/
        }

        for (var i = 0; i < m; i++){
            arrC[i] = binaryToDecimal(resToString(res[i]));
        }
        alert(arrC);
}

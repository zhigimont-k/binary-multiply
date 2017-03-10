/**
 * Created by Karina on 27.02.2017.
 */



function handleButtonClick(){
    if(!document.getElementById("inputM").value ||
        !document.getElementById("inputT").value ||
		!document.getElementById("inputA").value ||
        !document.getElementById("inputB").value){
        alert("Please fill in all the text fields!");
        return 0;
    }
	var arrA = document.getElementById("inputA").value;
	var arrB = document.getElementById("inputB").value;
	var m = document.getElementById("inputM").value;
	var t = document.getElementById("inputT").value;

	arrA = arrA.split(" ");
	if(arrA.length != document.getElementById("inputM").value){
		alert("Please input m elements!");
		return 0;
	}
	arrB = arrB.split(" ");
	if(arrB.length != document.getElementById("inputM").value){
		alert("Please input m elements!");
		return 0;
	}
    var table = document.getElementById("table");
    var rowCount = table.getElementsByTagName("tr").length;
    if (rowCount > 1){
        for (var rowIndex = rowCount - 1; rowIndex > 0; rowIndex--){
            table.deleteRow(rowIndex);
        }
    }
	for (var i = 0; i < arrA.length; i++){
		arrA[i] = Number(arrA[i]);
		if (arrA[i] > 15 || arrA[i] < 0){
			alert("Please input number in the [0; 15] interval!");
		}
		arrA[i] = decimalToBinary(arrA[i]);
	}
	for (var i = 0; i < arrB.length; i++){
		arrB[i] = Number(arrB[i]);
		if (arrB[i] > 15 || arrB[i] < 0){
			alert("Please input number in the [0; 15] interval!");
		}
		arrB[i] = decimalToBinary(arrB[i]);
	}


	var table = document.getElementById("table");
    //var rowIndex = 1;
    //var cellIndex = 0;
    var time = 0;
    for (var rowIndex = 1; rowIndex <= 8*m+1; rowIndex++){
        i = rowIndex - 1;
        var row = table.insertRow();
        var cell = row.insertCell(0);
        if (rowIndex <= m){
            cell.innerHTML = "A"+i+" = "+printBinary(arrA[i])+"<br>"+ "B"+i+" = "+printBinary(arrB[i])+"<br>"+
                "Time: "+time;
        }

        for (var cellIndex = 1; cellIndex < 9; cellIndex++){
            row.insertCell(cellIndex);
        }
    }

    var boolArrA = [];
    var boolArrB = [];
    var arrC = [];
    var partSum = [];

    // новые массивы, чтобы потом без преобразования типов выводить А и В в виде чисел, а не булевых переменных
    for (var index = 0; index < m; index++){
        boolArrA[index] = getBoolArray(arrA[index]);
        boolArrB[index] = getBoolArray(arrB[index]);
    }
    //alert("test");
    for (var index = 0; index < m; index++){
        //var res = [];
            //res = shiftLeft(res);
        /*arrC[index] = shiftLeft(arrC[index]);
        if (index){
            time+=t;
        }
        partSum[index] = multiply1Bin(boolArrA[index], boolArrB[index][index]);
        time+=t;
            //res = binarySum(res, partSum);
        arrC[index] = binarySum(arrC[index], partSum[index]);
        time+=t;*/
        arrC[index] = binaryMultiply(boolArrA[index], boolArrB[index]);

    }
	for (var i = 0; i < m; i++){
        //alert(binaryToDecimal(resToString(arrC[i])));
        var resultCell = table.rows[i+1].cells[8];
        resultCell.innerHTML = "Result: "+ binaryToDecimal(resToString(arrC[i]));
    }
}


for (var i = 0; i < A.length; i++){
    document.write("A["+i+"]: "+A[i]);
    A[i] = decimalToBinary(A[i]);
    document.write(" = "+printBinary(A[i]));
    document.write("<br>");
    A[i] = getBoolArray(A[i]);
    document.write("B["+i+"]: "+B[i]);
    B[i] = decimalToBinary(B[i]);
    document.write(" = "+printBinary(B[i]));
    document.write("<br>");
    B[i] = getBoolArray(B[i]);
    C[i] = binaryMultiply(A[i], B[i]);
    C[i] = binaryToDecimal(resToString(C[i]));
    document.write("Result: "+C[i]+"<br>***************************************************<br>");
}

function binaryToDecimal(n) {
    n = parseInt(n, 2);
    return n;
}

function decimalToBinary(n) {
    n = Number(n);
    n = (n >>> 0).toString(2);
    return n;
}

function printBinary(n) {
    var str = String(n);
    if (str.length % 4) {
        if (str.length % 4 === 1) {
            str = str.replace(/(\d)(?=(\d\d\d\d)+([^\d]|$))/g, '$1 ');
            return("000" + str);
        }
        if (str.length % 4 === 2) {
            str = str.replace(/(\d)(?=(\d\d\d\d)+([^\d]|$))/g, '$1 ');
            return("00" + str);
        }
        if (str.length % 4 === 3) {
            str = str.replace(/(\d)(?=(\d\d\d\d)+([^\d]|$))/g, '$1 ');
            return("0" + str);
        }

    }
    str = str.replace(/(\d)(?=(\d\d\d\d)+([^\d]|$))/g, '$1 ');
    return(str);
}

function getBoolArray(str){
    var arr = String(str);
    arr = str.split("");
    for (var i = 0; i < arr.length; i++){
        arr[i] = Number(arr[i]); // т.к. строка всегда true
        arr[i] = Boolean(arr[i]);
    }
    return arr;
}

// умножение булевой переменной b на массив булевых переменных А (конъюнкция)
function multiply1Bin(a, b){
    var c = [];
    for (var i = 0; i < a.length; i++){
        //c[i] = a[i] && b;
        //c[i] = Number(c[i]);
        if (b == 1){
            if (a[i] == 0){
                c[i] = 0;
            } else {
                c[i] = 1;
            }
        } else {
            c[i] = 0;
        }
    }
    return c;
}

// сдвиг элементов массива С влево с дополнением нулём в младшем разряде. по сути просто добавляет в конец элемент, равный 0
function shiftLeft(c){
    c.push(0);
    return c;
}

// вычисляет сумму двух массивов булевых переменных
function binarySum(a, b){
    if (a.length > b.length){
        var dif = a.length - b.length;
        for (var i = 0; i < dif; i++){
            b.unshift(false);
        }
    }
    if (b.length > a.length){
        var dif = b.length - a.length;
        for (var i = 0; i < dif; i++){
            a.unshift(false);
        }
    }

    var c = [];
    var d = 0;

    for (var i = a.length - 1; i >= 0; i--) {
        if (a[i] == 0 && b[i] == 0) {
            if (d == 1){
                c[i] = 1;
                d = 0;
            } else {
                c[i] = 0;
                d = 0;
            }
        } else {
            if ((a[i] == 1 && b[i] == 0) || (a[i] == 0 && b[i] == 1)) {
                if (d == 1) {
                    c[i] = 0;
                    d = 1;
                } else {
                    c[i] = 1;
                    d = 0;
                }
            } else {
                if (a[i] == 1 && b[i] == 1) {
                    if (d == 1) {
                        c[i] = 1;
                        d = 1;
                    } else {
                        c[i] = 0;
                        d = 1;
                    }
                }

            }

        }
    }

    if (d == 1){
        c.unshift(1);
    }

    return c;
}

function resToString(c){
    for (var i = 0; i < c.length; i++){
        c[i] = Number(c[i]);
        c[i] = String(c[i]);
    }
    c = c.join("");
    //alert("c: "+c);
    return c;
}


// собственно, сам алгоритм умножения
function binaryMultiply(a,b){
    var partSum = [];
    var res = [];
    for (var i = 0; i < b.length; i++){
        res = shiftLeft(res);
        //document.write("<< "+printBinary(resToString(res))+"<br>");
        partSum = multiply1Bin(a, b[i]);
        //document.write(printBinary(resToString(a))+" * "+Number(b[i])+"=<br>"+printBinary(resToString(partSum))+"<br>");
        //document.write(printBinary(resToString(res))+" + "+printBinary(resToString(partSum))+"=<br>");
        res = binarySum(res, partSum);
        //document.write(printBinary(resToString(res))+"<br>");
    }
    return res;
}
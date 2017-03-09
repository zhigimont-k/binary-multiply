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
    var rowIndex = 1;
    var cellIndex = 0;
    for (var i = 1; i <= m; i++){
        rowIndex = i;
        var row = table.insertRow();
        var cell = row.insertCell(0);
        cell.innerHTML = "A"+i+" = "+printBinary(arrA[i-1])+"<br>"+ "B"+i+" = "+printBinary(arrB[i-1])+"<br>";
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


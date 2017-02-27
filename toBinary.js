/**
 * Created by Karina on 27.02.2017.
 */
var C = {};
document.write("Converting to binary..."+"<br>");
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
    //document.write(binaryToDecimal(resToString(A[i]))+" * "+binaryToDecimal(resToString(B[i]))+" = "+C[i]+"<br>");
    C[i] = binaryMultiply(A[i], B[i]);
    C[i] = binaryToDecimal(resToString(C[i]));
    document.write("Result: "+C[i]+"<br>***************************************************<br>");
}


/**
 * Created by Karina on 25.02.2017.
 */
for (var i = 0; i < A.length; i++){
    document.write(A[i]);
    A[i] = decimalToBinary(A[i]);
    document.write(" = "+A[i]);
    document.write("<br>");
    A[i] = getBoolArray(A[i]);
    document.write(B[i]);
    B[i] = decimalToBinary(B[i]);
    B[i] = getBoolArray(B[i]);
    document.write(" = "+B[i]);
    document.write("<br>");
    //C[i] = binaryToDecimal(resToString(binaryMultiply(A[i], B[i])));
    //document.write(binaryToDecimal(resToString(A[i]))+" * "+binaryToDecimal(resToString(B[i]))+" = "+C[i]+"<br>");
}

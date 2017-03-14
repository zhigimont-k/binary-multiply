/**
 * Created by Karina on 14.03.2017.
 */

function getText(res, a, b, step, time){
    if (step == 0){
        var psum = multiply1Bin(a, b[0]);
        var resCopy = res;
        var resCopyCopy = resCopy;
        resCopyCopy = binarySum(resCopy, psum);
        var str = "<b>A: </b>"+printBinary(resToString(a))+"<br>"+"<b>B: </b>"+printBinary(resToString(b))+"<br>"+
            printBinary(resToString(a))+" * "+Number(b[0])+" = "+printBinary(resToString(resCopyCopy))+
                "<br>"+ printBinary(resToString(resCopyCopy))+" + "+
                printBinary(resToString(psum))+" = "+printBinary(resToString(resCopy))+"<br>"+
                "<b>Time</b>: "+time;
        return str;
    }
    if (step == 1){
        var resCopy = shiftLeft(res);
        var str = "<b>A: </b>"+printBinary(resToString(a))+"<br>"+"<b>B: </b>"+printBinary(resToString(b))+"<br>"+
            "<b>Result: </b>"+printBinary(resToString(resCopy))+"<br>"+
            "<b>Time</b>: "+time;
        return str;
    }
    if (step == 2){
        var psum = multiply1Bin(a, b[1]);
        var resCopy = res;
        var resCopyCopy = resCopy;
        resCopyCopy = binarySum(resCopy, psum);
        var str = "<b>A: </b>"+printBinary(resToString(a))+"<br>"+"<b>B: </b>"+printBinary(resToString(b))+"<br>"+
            printBinary(resToString(a))+" * "+Number(b[1])+" = "+printBinary(resToString(resCopyCopy))+
            "<br>"+ printBinary(resToString(resCopyCopy))+" + "+
            printBinary(resToString(psum))+" = "+printBinary(resToString(resCopy))+"<br>"+
            "<b>Time</b>: "+time;
        return str;
    }
    if (step == 3){
        var resCopy = shiftLeft(res);
        var str = "<b>A: </b>"+printBinary(resToString(a))+"<br>"+"<b>B: </b>"+printBinary(resToString(b))+"<br>"+
            "<b>Result: </b>"+printBinary(resToString(resCopy))+"<br>"+
            "<b>Time</b>: "+time;
        return str;
    }
    if (step == 4){
        var psum = multiply1Bin(a, b[2]);
        var resCopy = res;
        var resCopyCopy = resCopy;
        resCopyCopy = binarySum(resCopy, psum);
        var str = "<b>A: </b>"+printBinary(resToString(a))+"<br>"+"<b>B: </b>"+printBinary(resToString(b))+"<br>"+
            printBinary(resToString(a))+" * "+Number(b[2])+" = "+printBinary(resToString(resCopyCopy))+
            "<br>"+ printBinary(resToString(resCopyCopy))+" + "+
            printBinary(resToString(psum))+" = "+printBinary(resToString(resCopy))+"<br>"+
            "<b>Time</b>: "+time;
        return str;
    }
    if (step == 5){
        var resCopy = shiftLeft(res);
        var str = "<b>A: </b>"+printBinary(resToString(a))+"<br>"+"<b>B: </b>"+printBinary(resToString(b))+"<br>"+
            "<b>Result: </b>"+printBinary(resToString(resCopy))+"<br>"+
            "<b>Time</b>: "+time;
        return str;
    }
    if (step == 6){
        var psum = multiply1Bin(a, b[3]);
        var resCopy = res;
        var resCopyCopy = resCopy;
        resCopyCopy = binarySum(resCopy, psum);
        var str = "<b>A: </b>"+printBinary(resToString(a))+"<br>"+"<b>B: </b>"+printBinary(resToString(b))+"<br>"+
            printBinary(resToString(a))+" * "+Number(b[3])+" = "+printBinary(resToString(resCopyCopy))+
            "<br>"+ printBinary(resToString(resCopyCopy))+" + "+
            printBinary(resToString(psum))+" = "+printBinary(resToString(resCopy))+"<br>"+
            "<b>Time</b>: "+time;
        return str;
    }
}

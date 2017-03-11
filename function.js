/**
 * Created by Karina on 25.02.2017.
 */
/**
 * Created by Karina on 11.02.2017.
 */

// таймер (типа)
function makeCounter(){
    var currentCount = 1;
    function counter(){
        return currentCount++;
    };
    counter.set = function(value){
        currentCount = value;
    };
    counter.reset = function(){
        currentCount = 1;
    };

    return counter;
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
//TODO: убрать лишние нули в начале (типа 0000 0010 -> 0010)
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
        }
        if (b == 0){
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

function getRandomInt(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

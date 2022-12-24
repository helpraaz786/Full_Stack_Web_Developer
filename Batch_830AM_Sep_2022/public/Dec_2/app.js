

var count = 0;
var doOperation = (type) => {
    sample();
    count++;
    console.log("Count is " + count);
    var fval = document.querySelector("#fval").value;
    var sval = document.querySelector("#sval").value;
    var result;
    switch(type) {
        case 'add':
            result = mathUtilLib.getAdditionValues(fval, sval);
            break;
        case 'mul':
            result = mathUtilLib.getMultiplication(fval, sval);
            break;
        case 'div':
            result = getDivision(fval, sval);
            break;
        case 'sub':
            result = getSubstraction(fval, sval);
            break;
    }
    var msg = 'The ' + type + ' is ' + result;
    document.querySelector("#rblock").innerHTML = msg;

    
}

var sample = () => {
    console.log("am from my own code ");
 }

 
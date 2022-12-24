var charsSet = ['A', 'B', 'C', 'D', 'E', 'F','G'];
var charsSet_lowerCase = ['a', 'b', 'c', 'd', 'e', 'f'];
var generateOTP = () => {
    
    var otpValue = '';
    for (var i = 0 ; i < 5; i++) {
        var randomNo = Math.random() * 10;
        randomNo = Math.floor(randomNo);
        otpValue = otpValue + randomNo;
    }
    document.querySelector(".container").innerHTML = otpValue;
}

var generateCapcha = () => {
    var capcha = '';
    capcha += getRandomNumber();
    capcha += getRandomChar();
    capcha += getRandomNumber();
    capcha += getRandomChar_lowerCase();
    capcha += getRandomChar();
    return capcha;

}

var getRandomNumber = () => {
    var randomNo = Math.random() * 10;
    randomNo = Math.floor(randomNo);
    return randomNo;
}


var getRandomChar = () => {
    var index = Math.floor(Math.random() * charsSet.length);
    
    console.log(index)
    return charsSet[index];
}
var getRandomChar_lowerCase = () => {
    var index = Math.floor(Math.random() * charsSet.length);
    
    console.log(index)
    return charsSet_lowerCase[index];
}
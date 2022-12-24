var loadSelectedPage = (pageType) => {
    alert(pageType)
    var templateUrl = 'templates/'
    switch(pageType) {
        case 'signup':
            templateUrl += 'signup.htm';
            break;
        case 'index':
            templateUrl += 'index.htm';
            break;
    }
    $.ajax({
        url: templateUrl,
        method: 'GET',
        success: (responseHtml) => {
            $(".blockContent").html(responseHtml);

            if (pageType == 'index') {
                showCapchaCode();
            }
        }
    });
}
var capchaCode;
var showCapchaCode = () => {
    $("#capchaText").show();
    capchaCode = generateCapcha();
    $("#capchaText").html(capchaCode);
    html2canvas(document.querySelector('#capchaText'), {
        onrendered: function (canvas) {
            var screenshot = canvas.toDataURL('image/png');
            console.log("screenshot")
            console.log(screenshot)
            document.getElementById('imgScreenShot').setAttribute('src', screenshot);
            //$("#capchaText").hide();
        },
    });
}


var validateUser = () => {
    var userData = {};
    userData.accountId = $("#uid").val();
    userData.accountPassword = $("#userPassword").val();
    var userEnterdCapcha = $("#userCapcha").val();
    
    if(userData.accountId && userData.accountPassword){
        console.log("Name And Password Entered");
        if (capchaCode == userEnterdCapcha) {
            console.log("hit server");
        } else {
            console.log("invalid capcha");
        }
    }else{
        alert("Enter Your Email or Password");
    }
    
}
$(document).ready(function(){
$("#signContainerShow").click(()=>{
    $(".signUpInputDetails").show(150);
    $(".loginInputDetails").hide(200);
});
$("#loginRedirect").click(()=>{
    $(".signUpInputDetails").hide(150);
    $(".loginInputDetails").show(200);
})
});



loadSelectedPage('index'); // onload of page, index page will be shown by default


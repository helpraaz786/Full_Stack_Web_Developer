/*var saveDetails = () => {
    // Data validation.
    var userInfo = {};
    userInfo.name = document.querySelector("#uname").value.trim();
    
    if (userInfo.name == '') {
        document.querySelector(".nameErr").style.display = 'block';
        return;
    } else {
        document.querySelector(".nameErr").style.display = 'none';
    }    
    //document.querySelector(".nameErr").style.display = (userInfo.name == '') ? 'block' : 'none';
    userInfo.age = document.querySelector("#uage").value;
    
    // document.querySelector(".ageErr").style.display = (userInfo.age <= 21) ? 'block' : 'none';
    if (userInfo.age <= 21) {
        document.querySelector(".ageErr").style.display = 'block';
        return;
    } else {
        document.querySelector(".ageErr").style.display = 'none';
    }
    userInfo.gender = document.querySelector("input[name=gender]:checked").value;
    console.log(userInfo);
}*/


var saveDetails = () => {
    // Data validation.
    var userInfo = {};
    userInfo.name = document.querySelector("#uname").value.trim();
    userInfo.age = document.querySelector("#uage").value;
    try {
        if (userInfo.name == '') {  
                      
            throw 'NameErr';
        } else {
            document.querySelector(".nameErr").style.display = 'none';
        }
        if (userInfo.age < 21) {
            throw 'AgeErr';            
        } else {
            document.querySelector(".ageErr").style.display = 'none';
        }
    } catch(error) {
        if (error == 'NameErr')
            document.querySelector(".nameErr").style.display = 'block';
        if (error == 'AgeErr')
            document.querySelector(".ageErr").style.display = 'block';
    }

    console.log(userInfo);
}
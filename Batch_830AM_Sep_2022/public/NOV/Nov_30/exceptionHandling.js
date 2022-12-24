var taskList = [
    "Do the project review",
    "Finish the coding of login module",
    "Work with devops team to onboard application to cloud",
    "Implement uI module for registraion",
    "Build and run the existing Spring server with out errors"
];

var userName = '';
var saveUserName = () => {
    userName = document.querySelector('#userName').value;

}

var createContainer = () => {
    var divTag = document.createElement("div");
    divTag.setAttribute("class", "taskContainer");
    document.querySelector("#mblock").append(divTag);
}

var showTask = () => {
    try {
        var randomIndex = parseInt(Math.floor(Math.random() * taskList.length));
        document.querySelector(".taskContainer").innerHTML = userName + ' : ' + taskList[randomIndex];
    } catch(err) {
        document.querySelector('body').append("Make sure u crete a container")
        console.log(err);
    } finally {
        // code which need to be for sure executed, irrelavent of whether error been raised or not.
        showThanksBlock();
    }


    
}

var showThanksBlock = () => {
    setTimeout(() => {
        document.querySelector(".thxBlock").style.display = 'block';
    }, 3000);    
}
let numContainer = document.querySelector(".num");
const numArray = [];
for (let i = 0; i < 100; i++) 
{
   
    numArray.push(i);
    let nums = document.createElement("div");
    nums.innerHTML = `${i}`;
    nums.setAttribute("class","scontainer");
    numContainer.append(nums);
}


const showRandomNumber = () =>
{
    let randomNum = Math.floor(Math.random() * 99);
        
    document.querySelector(".container").innerHTML = randomNum;
    
    for (let i = 0; i < 100; i++) {
    let container = document.querySelectorAll(".scontainer")[i].innerHTML;
        if(container == randomNum)
        {
            console.log(container);
            document.querySelectorAll(".scontainer")[i].style.backgroundColor = "yellowgreen";
        }
        console.log(randomNum)
        
    }


        
    
    
}
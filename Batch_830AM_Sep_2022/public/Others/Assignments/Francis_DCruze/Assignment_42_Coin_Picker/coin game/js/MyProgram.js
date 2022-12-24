
gameBoard = {
    currentNumber: 0,
    previousNumber: [],
    countTracker: 0,
    start: true,
    alertOnce: 0,
    boardBackground()
    {
        //use toggle here instead of this....

        var backcolor = document.querySelector('.switch').style.backgroundColor;
        if (backcolor == "" || backcolor == "rgb(164, 213, 164)")
        {
            var mediaQuery = window.matchMedia('(max-width: 430px)');
            if (mediaQuery.matches)
            {

                document.querySelector('#background').style.left ="14px";
            }
            else
            {
                document.querySelector('#background').style.left ="20px";

            }
            document.querySelector('.switch').style.backgroundColor ="rgb(12, 241, 12)";
            document.querySelector('.container').style.filter = 'invert(100%)';
            document.querySelector('.container').style.border = "2px solid white";
        }
        else
        {
            document.querySelector('#background').style.left ="0px";
            document.querySelector('.switch').style.backgroundColor ="rgb(164, 213, 164)";
            document.querySelector('.container').style.filter = 'invert(0)'

        }
    },
    buttonMin()
    {
        this.timeSec = parseFloat(document.querySelector('.timer').innerText);
        this.timeSec = (this.timeSec) - 0.2;
        if(this.timeSec >= 0)
        {
            document.querySelector('.timer').innerHTML = this.timeSec.toFixed(1);
        }
    },
    buttonMax()
    {
        this.timeSec = parseFloat(document.querySelector('.timer').innerHTML);
        if(this.timeSec >= 0)
        {
            this.timeSec = (this.timeSec) + 0.2;
            document.querySelector('.timer').innerHTML = this.timeSec.toFixed(1);
        }
    },
    refresh()
    {
        this.start= true;
        document.querySelector('.PrevNumber').innerHTML = " ";
        document.querySelector('.CurrentNumber').innerHTML = " ";
        for(var i = 1; i<= 90; i++)
        {
            var idNum = '#num'+i;
            document.querySelector(idNum).style.backgroundColor = "white";
        }
        //document.querySelectorAll(".numbers").style.backgroundColor = "white";
    },
    highlightNumber()
    {
        var idNum = '#num'+this.currentNumber;
        document.querySelector(idNum).style.backgroundColor = "green";
    },

    startgame()
    {
        var ele = document.querySelector('.CurrentNumber').innerHTML;

        if(this.start == true)
        {
            if (this.countTracker < 90)
            {
                var randomNum = Math.floor(Math.random() * 100);
                
                if(randomNum > 90 || randomNum == 0)
                {
                    gameBoard.startgame();
                }

                else
                {
                    if (randomNum < 10)
                    {
                        document.querySelector('.CurrentNumber').innerHTML = "0" + randomNum;
                    }
                    else
                    {
                        document.querySelector('.CurrentNumber').innerHTML = randomNum;
                    }

                    this.currentNumber = randomNum;
                    var idNum = '#num'+ randomNum;
                    var color = document.querySelector(idNum).style.backgroundColor;
                    
                    if( color == "" || color == "white")
                    {
                        var CatchprevNum = document.querySelector('.CurrentNumber').innerHTML;
                        var i = this.previousNumber.length;
                        if (CatchprevNum != "")
                        {
                            if(this.previousNumber[i-1] == undefined)
                            {
                                i++;
                                this.previousNumber.push(CatchprevNum);
                            }
                            else
                            {
                                document.querySelector('.PrevNumber').innerHTML = this.previousNumber[i-1];
                                i++;
                                this.previousNumber.push(CatchprevNum);
                            }
                        }
                        else
                        {
                            this.previousNumber = randomNum;
                        }

                        this.highlightNumber();
                        this.countTracker++;
                        console.log(this.countTracker);
                    }
                    else
                    {
                        gameBoard.startgame();
                    }
                    
                }
            }
            else
            {
                alert("All the Numbers are Picked");
                clearInterval(this.myInterval);
                this.countTracker = 0;
                this.start = false;
                this.alertOnce = 1;
            }
        }
        else
        {
            alert("Please Refresh and Play");
            clearInterval(this.myInterval);
        }
        this.currentNumber = randomNum;
    }
}

    document.querySelector(".startButton").addEventListener('click', () => {
        startPlay();
    });
    document.querySelector(".timerbtnminus").addEventListener('click', () => {
        buttonMin();
    });
    document.querySelector(".timerbtnplus").addEventListener('click', () => {
        buttonMax();
    });
    document.querySelector("#refresh").addEventListener('click', () => {
        refresh();
    });
    document.querySelector("#background").addEventListener('click', () => {
        background();
    });

var startPlay = () => {
    var Second = parseInt(document.querySelector('.timer').innerText);
    gameBoard.myInterval = setInterval (() => {
        gameBoard.startgame();
    }, Second * 1000);
}

var buttonMin = () => {
    gameBoard.buttonMin();
}

var buttonMax = () => {
    gameBoard.buttonMax();
}
var refresh = () => {
    gameBoard.refresh();
}

var background = () => {
    gameBoard.boardBackground();
}
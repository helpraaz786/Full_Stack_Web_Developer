var getNumber = () => {
    
    var main = document.querySelector('.main');

    for (var i = 1; i <= 90; i++)
    {

        var div = document.createElement('div');
        div.setAttribute('class', 'numbers');
        div.setAttribute('id', 'num'+i);

        if (i < 10)
        {
            div.innerHTML = '0'+i;
        }
        else
        {
            div.innerHTML = i;

        }

        main.append(div);
    }
}

getNumber();


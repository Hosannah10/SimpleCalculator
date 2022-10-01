// JavaScript source code

    var screen = document.getElementsByTagName("p")[0]
    var clear = document.getElementById("clear")
    var buttons = document.getElementsByTagName("li")
    var mainBody = document.getElementsByClassName("number-div")[0]

    mainBody.addEventListener("click", function (e) {
        if (e.target.innerHTML == "=") {
            calculate()

        }
        else {
            var text = e.target.innerHTML
            appendToScreen(text);
        }
    })

    clear.addEventListener("click", function () {
        screen.innerHTML = ""
    })
    function calculate() {
    try {
        var num = screen.innerHTML
        
        screen.innerHTML = eval(num)
        
    }
    catch (e) {
        screen.innerHTML = "Invalid Input"
    }
    }
    
    function appendToScreen(y) {
        if (y == "x")
        {
            y = "*"
        }
        if (y == "/")
        {
            y = "/"
        }
        screen.innerHTML += y


    }
    /*function percent(num) {
        return
    }*/
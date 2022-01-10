// Copyright protected content
inputValue = {};
equation=[''];
c=0;
result=0;

document.addEventListener("contextmenu", function(e){
    e.preventDefault();
}, false);

let calculator = () => {
    inputValue = window.event.target.value;
    if (inputValue == '\+' || inputValue == '\-' || inputValue == '\*' ||inputValue == '\/') {
        var snd = new Audio("sound/buttonSound/clickSound3.wav");
        snd.play();
        c++;
        equation[c] = '';
        equation[c] += inputValue;
        c++;
        equation[c] = '';
    } else {
        if (inputValue == "clear") {
            var snd = new Audio("sound/buttonSound/clickSound1.wav");
            snd.play();
            document.getElementById("calcDisplay").value='';
            equation = [''];
            c= 0 ;
            result = 0;
        } else {
            var snd = new Audio("sound/buttonSound/clickSound2.wav");
            snd.play();
            equation[c] += inputValue;
        }
    }
}
//equation has the value
let display = () => {
    var snd = new Audio("sound/buttonSound/clickSound0.wav");
    snd.play();
    for (let star = 0; star < equation.length; star++) {
        if (equation[star] == '\/') {
            result = parseFloat(equation[star-1]);
            equation[star-1] = result / parseFloat(equation[star+1]);
            result=equation[star-1];
            equation.splice(star,2);
            star=0;
        }
    }
    for (let star = 0; star < equation.length; star++) {
        if (equation[star] == '\*') {
            result = parseFloat(equation[star-1]);
            equation[star-1] = result * parseFloat(equation[star+1]);
            result=equation[star-1];
            equation.splice(star,2);
            star=0;
        }
    }
    for (let star = 0; star < equation.length; star++) {
        if (equation[star] == '\+') {
            result = parseFloat(equation[star-1]);
            equation[star-1] = result + parseFloat(equation[star+1]);
            result=equation[star-1];
            equation.splice(star,2);
            star=0;
        }
    }
    for (let star = 0; star < equation.length; star++) {
        if (equation[star] == '\-') {
            result = parseFloat(equation[star-1]);
            equation[star-1] = result - parseFloat(equation[star+1]);
            result=equation[star-1];
            equation.splice(star,2);
            star=0;
        }
    }
    equation[0]=result;
    c=0;
    document.getElementById("calcDisplay").value = result;
    if(isNaN(result)) {
        document.getElementById("calcDisplay").value = `You're smart enough!`;
    }
}

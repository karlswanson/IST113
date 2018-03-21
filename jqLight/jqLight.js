/*
function flipswitch() {
    var light = document.getElementById("switcher");

    if (light.style.cssFloat == "right") {
        light.style.cssFloat = "left";
        document.body.style.backgroundColor = "black";
        document.getElementById("position").innerHTML = "OFF";
        document.getElementById("position").style.color = "black";
        document.getElementById("position").style.cssFloat = "right";
    } else {
        light.style.cssFloat = "right";
        document.body.style.backgroundColor = "white";
        document.getElementById("position").innerHTML = "ON";
        document.getElementById("position").style.color = "white";
        document.getElementById("position").style.cssFloat = "left";
    }
}
*/

var CurrentMode = 0;

$(document).ready(function () {
    theEvents();
});

function theEvents() {
    $("#lightSwitch").click(function () {
        if(CurrentMode === 0) {
            $("p").text("ON");
            $("#switcher").css('float','right');
            $("body").css('background-color', 'white');
            CurrentMode = 1;
        }
        else {
            $("p").text("OFF");
            $("body").css('background-color', 'black');
            $("#switcher").css('float','left');
            CurrentMode = 0;
        }
    });
}
//Get the wrapper, our switch itself. 
var lightSwitch = document.getElementById("wrapper");
//Status of the light
var toggle = false;
//Get the switch part of our switch
var nob = document.getElementById("switch");
//Get the html body
var body = document.body;

lightSwitch.addEventListener('click', function() {
	//Code in here
	
	//Check if toggled on or off
	if (toggle) {
		//It's currently on, let's shut it off
		toggle = false
		//Find body element and change its background to black
		body.style.background = "black"
		//body{
		//	background: Black;
		//}
		//Float it left when off
		nob.style.cssFloat = "left"
		//Change text to be off
		nob.innerHTML = "Off"
	} else { 
		//It's off, lets turn it on
		toggle = true
		//Find body element and change its background to white
		body.style.background = "white"
		//Float it right when on
		nob.style.cssFloat = "right"
		//Change text to be on
		nob.innerHTML = "On"
	}
	
})

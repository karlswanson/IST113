 function guessGame(){
	var secretnum = prompt("Player one enter a secret number: ");
    let number = parseInt(secretnum);
    document.write(number); 
    var guess = prompt("Player two guess a number: ");
	var guesscounter = 1;
    while (guess != number) {
        
		if (number < guess) {
            guess = prompt("You've guessed too high! Keep guessing!");
			guesscounter++;
        } else {
            guess = prompt("You've guessed too low! Keep guessing!");
			guesscounter++;
        }
    }
	
    alert("Good Job! It took you "+ guesscounter +" attempts");   
}
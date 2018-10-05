
//var alphabet = "abcdefghijklmnopqrstuvwxyz"
//var ifLetter = alphabet.charAt(9);
//console.log(ifLetter);
//var letterX = 
//set vars
var guesses = 10;
var losses = 0;
var wins = 0;


//1. Create an array for computer list of words.
var wordList = ["frog", "moth", "table", "house", "locker", "planet", "snow", "hammer", "banana",
    "camera", "tooth", "broom", "pencil", "candle", "shovel", "moon", "garage", "people", "kitten", "cereal"];

//2. Randomly choose one of those words.
var randomWord = wordList[Math.floor(Math.random() * wordList.length)];
console.log(randomWord);
//3. Put that random word into a new string. (not needed)

var wordLetter0 = randomWord.charAt(0);
var wordLetter1 = randomWord.charAt(1);
var wordLetter2 = randomWord.charAt(2);
var wordLetter3 = randomWord.charAt(3);
var wordLetter4 = randomWord.charAt(4);
var wordLetter5 = randomWord.charAt(5);

var wordLength = randomWord.length;
console.log(wordLength);

//var dash = " _ ";
//console.log

//4. Tell player to choose a letter.

var html =
    "<p>Guess a letter...</p>";
//"<p>" + (" a " * randomWord.length) + "</p>";
document.getElementById("message").innerHTML = html;
//5. Display an empty underline dash for each letter where the letters will be in html.
// var html =
//(dash.repeat(randomWord.length));
//document.getElementById("dashes").innerHTML = html;


/*function myFunction() {
var x = document.createElement("SPAN");
var t = document.createTextNode(" _ ");
x.appendChild(t);
document.body.appendChild(x);
}*/

//for (var i=0; i < wordLength; i++) {}

if (wordLength === 6) {
    document.getElementById("letter0").innerHTML = "<u>&nbsp;</u>";
    document.getElementById("letter1").innerHTML = "<u>&nbsp;</u>";
    document.getElementById("letter2").innerHTML = "<u>&nbsp;</u>";
    document.getElementById("letter3").innerHTML = "<u>&nbsp;</u>";
    document.getElementById("letter4").innerHTML = "<u>&nbsp;</u>";
    document.getElementById("letter5").innerHTML = "<u>&nbsp;</u>";
} else if (wordLength === 5) {
    document.getElementById("letter0").innerHTML = "<u>&nbsp;</u>";
    document.getElementById("letter1").innerHTML = "<u>&nbsp;</u>";
    document.getElementById("letter2").innerHTML = "<u>&nbsp;</u>";
    document.getElementById("letter3").innerHTML = "<u>&nbsp;</u>";
    document.getElementById("letter4").innerHTML = "<u>&nbsp;</u>";
} else if (wordLength === 4) {
    document.getElementById("letter0").innerHTML = "<u>&nbsp;</u>";
    document.getElementById("letter1").innerHTML = "<u>&nbsp;</u>";
    document.getElementById("letter2").innerHTML = "<u>&nbsp;</u>";
    document.getElementById("letter3").innerHTML = "<u>&nbsp;</u>";

}




var point = 0;
//6. User clicks a letter. If that letter is the same as any of the letters in the string of the computer's random word...
document.onkeypress = function (event) {

    var userGuess = event.key;
    console.log(userGuess);
    //var letter = (userGuess);

    var alphabet = "abcdefghijklmnopqrstuvwxyz";
    var checkLetter = alphabet.search(userGuess);

    console.log(checkLetter);




    if (guesses === 0) {
        return;
    }

    //7. ...Enter that letter in the position in which it can be found in the original word.

    //keep doing the thing below OR maybe try doing an if statement with each letter0-5 and say if they don't
    //all equal &nbsp then 'you win'
    if ((userGuess == wordLetter0) && (document.getElementById("letter0").innerHTML == "<u>&nbsp;</u>")) {

        document.getElementById("letter0").innerHTML = userGuess;
        document.getElementById("message").innerHTML = "There you go..."
        document.getElementById("letter0").style.color = "turquoise";
        point++;

    }
    if ((userGuess == wordLetter1) && (document.getElementById("letter1").innerHTML == "<u>&nbsp;</u>")) {

        document.getElementById("letter1").innerHTML = userGuess;
        document.getElementById("message").innerHTML = "Now you're getting it...";
        document.getElementById("letter1").style.color = "turquoise";
        point++;
    }
    if ((userGuess == wordLetter2) && (document.getElementById("letter2").innerHTML == "<u>&nbsp;</u>")) {

        document.getElementById("letter2").innerHTML = userGuess;
        document.getElementById("message").innerHTML = "That one was tuff..."
        document.getElementById("letter2").style.color = "turquoise";
        point++;
    }
    if ((userGuess == wordLetter3) && (document.getElementById("letter3").innerHTML == "<u>&nbsp;</u>")) {

        document.getElementById("letter3").innerHTML = userGuess;
        document.getElementById("message").innerHTML = "You're doing it..."
        document.getElementById("letter3").style.color = "turquoise";
        point++;
    }
    if ((userGuess == wordLetter4) && (document.getElementById("letter4").innerHTML == "<u>&nbsp;</u>")) {

        document.getElementById("letter4").innerHTML = userGuess;
        document.getElementById("message").innerHTML = "Way to go..."
        document.getElementById("letter4").style.color = "turquoise";
        point++;
    }
    if ((userGuess == wordLetter5) && (document.getElementById("letter5").innerHTML == "<u>&nbsp;</u>")) {

        document.getElementById("letter5").innerHTML = userGuess;
        document.getElementById("message").innerHTML = "Woah! Slow down..."
        document.getElementById("letter5").style.color = "turquoise";
        point++;
    }
    console.log("points=" + point);
    if (point == randomWord.length) {
        document.getElementById("message").innerHTML = "YOU WIN!!!";
        console.log("you win!!!!!");
        wins++;
        if (wins < 9) {
        document.getElementById("wins").innerHTML = "WIN:0" + wins;
        } else {
            document.getElementById("wins").innerHTML = "WIN:" + wins;
        }
        return;



    //     var colors = ["blue", "yellow"]
    //     var currentColor = 0
    //     var spans = document.querySelectorAll("#spanString li")

    //     function changeColor() {
    //         --currentColor
    //         if (currentColor < 0) currentColor = colors.length - 1
    //         for (var i = 0; i < spans.length; i++) {
    //             spans[i].style.color = colors[(currentColor + i) % colors.length]
    //         }
    //     }

    //     setInterval(changeColor, 1000);
    }

    //7. If that letter is not in that string, place it into another div that shows wrong letters.
    if ((checkLetter >= 0 && checkLetter < alphabet.length)
        && (userGuess !== wordLetter0)
        && (userGuess !== wordLetter1)
        && (userGuess !== wordLetter2)
        && (userGuess !== wordLetter3)
        && (userGuess !== wordLetter4)
        && (userGuess !== wordLetter5)) {
        // Div containing what happens when a wrong choice is submitted.
        document.getElementById("message").innerHTML = "Nope. Try again...";
        var node = document.createElement("LI");                 // Create a <li> node
        var textnode = document.createTextNode(userGuess);         // Create a text node
        node.appendChild(textnode);                              // Append the text to <li>
        document.getElementById("wrongBoxL").appendChild(node);     // Append <li> to <ul> with id
        document.getElementById("guesses").innerHTML = "GUESS: 0" + (guesses - 1);
        //8. Also, if letter does not equal any from the string, minus one point (or add a mark).
        guesses--;
        //9. After 6 wrong guesses, player loses. Reveal word and 'Game Over'.
        if (guesses === 0) {
            document.getElementById("title").innerHTML = "GAME OVER";
            document.getElementById("message").innerHTML = "You lost...";
            document.getElementById("spanString").innerHTML = wordLetter0 + " " + wordLetter1 + " " + wordLetter2 + " " + wordLetter3 + " " + wordLetter4 + " " + wordLetter5;
            document.getElementById("spanString").style.color = "turquoise";
            losses++;
            document.getElementById("losses").innerHTML = " LOSS: " + losses;
            return;
        }
    }





}
        //11. If user wins: if player chooses all letters that are in the word, flash win and return.





        //10. Reset button chooses new word and resets everything back to beginning.





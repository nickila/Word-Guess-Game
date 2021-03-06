var guesses = 10;
var losses = 0;
var wins = 0;
var strL = "";
var groupedLetters = "";
var x = document.getElementById("myAudio4");
function playAudio() {
    x.play();
}
function clearBox() {
    document.getElementById("wrongBoxL").innerHTML = "";
}
function clearSpan() {
    document.getElementById("letter0").innerHTML = "";
    document.getElementById("letter1").innerHTML = "";
    document.getElementById("letter2").innerHTML = "";
    document.getElementById("letter3").innerHTML = "";
    document.getElementById("letter4").innerHTML = "";
    document.getElementById("letter5").innerHTML = "";
    document.getElementById("letter0").style.color = "yellow";
    document.getElementById("letter1").style.color = "yellow";
    document.getElementById("letter2").style.color = "yellow";
    document.getElementById("letter3").style.color = "yellow";
    document.getElementById("letter4").style.color = "yellow";
    document.getElementById("letter5").style.color = "yellow";
    document.getElementById("spanString").style.marginTop = "200px";
}
function clearMessage2() {
    document.getElementById("message2").innerHTML = "";
}
//1. Create an array for computer list of words.
var wordList = ["frog", "moth", "table", "house", "locker", "planet", "snow", "hammer", "banana",
    "camera", "tooth", "broom", "pencil", "candle", "shovel", "moon", "garage", "people", "kitten",
    "cereal", "water", "ocean", "music", "brush", "pizza", "almond", "soccer", "animal"];

wordGame();

function wordGame() {
    guesses = 10;
    clearSpan();
    clearBox();
    clearMessage2();
    document.getElementById("guesses").innerHTML = "GUESS: " + guesses;
    var groupedLetters = "";

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

    //4. Tell player to choose a letter.
    document.getElementById("message").innerHTML = "Guess a letter...";

    //5. Display an empty underline dash for each letter where the letters will be in html.
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
    //Convert any capitals to lowercase.
    document.onkeypress = function (event) {
        var userGuess = event.key;
        var userGuess = (userGuess.toLowerCase());
        //console.log(userGuess);
        //console.log("GL" + groupedLetters);
        var usedOnes = groupedLetters.search(userGuess);
        //console.log("usedOnes: " + usedOnes);
        console.log("usedOnes: " + usedOnes);

        var alphabet = "abcdefghijklmnopqrstuvwxyz";
        var checkLetter = alphabet.search(userGuess);
        console.log("new: " + groupedLetters.indexOf(userGuess))
        //console.log("checkLetter: " + checkLetter);
        ////console.log("NUMBER: " + groupedLetters.length);
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
        //console.log("points=" + point);
        if (point === randomWord.length) {
            point++;
            document.getElementById("message").innerHTML = "YOU WIN!!!";
            playAudio();
            //console.log("you win!!!!!");
            wins++;
            if (wins < 9) {
                document.getElementById("wins").innerHTML = "0" + wins;
            } else {
                document.getElementById("wins").innerHTML = wins;
            }
            document.getElementById("message2").innerHTML = "Click <span id='here' onclick='wordGame()';>HERE</span> to play again...";
            document.getElementById("spanString").style.marginTop = "145px";
            return;
        }
        //Not sure if this will work, but my thought is I can put every wrong letter into a string and check
        //to be sure it's not in that string before it gets marked against the player. So str1 will be the 
        //string of letters used. They will be concat'ed in 
        var str1 = "";

        //7. If that letter is not in that string, place it into another div that shows wrong letters.
        if ((checkLetter >= 0 && checkLetter < alphabet.length && point !== (wordLength + 1))
            && (userGuess !== wordLetter0)
            && (userGuess !== wordLetter1)
            && (userGuess !== wordLetter2)
            && (userGuess !== wordLetter3)
            && (userGuess !== wordLetter4)
            && (userGuess !== wordLetter5)
            && (groupedLetters.indexOf(userGuess) == -1)
            && (userGuess !== groupedLetters.indexOf())
            && (userGuess != str1)) {
            //console.log("hasEl:" + hasEl(groupedLetters, userGuess));
            // Div containing what happens when a wrong choice is submitted.
            var usedLetter = str1.concat(userGuess);
            //console.log("usedLetter=" + usedLetter);
            document.getElementById("message").innerHTML = "Nope. Try again...";
            var node = document.createElement("LI");                 // Create a <li> node
            var textnode = document.createTextNode(userGuess);         // Create a text node
            node.appendChild(textnode);                              // Append the text to <li>
            document.getElementById("wrongBoxL").appendChild(node);     // Append <li> to <ul> with id
            document.getElementById("guesses").innerHTML = "GUESS: 0" + (guesses - 1);

            //8. Also, if letter does not equal any from the string, minus one point (or add a mark).
            guesses--;
            groupedLetters = groupedLetters + userGuess;
            //var str = document.getElementById("wordBoxL").innerHTML();
            ////console.log(str);
            //put wrong letters into span
            //9. After 6 wrong guesses, player loses. Reveal word and 'Game Over'.
            if (guesses === 0) {
                document.getElementById("message").innerHTML = "You lost...";
                document.getElementById("letter0").innerHTML = wordLetter0;
                document.getElementById("letter1").innerHTML = wordLetter1;
                document.getElementById("letter2").innerHTML = wordLetter2;
                document.getElementById("letter3").innerHTML = wordLetter3;
                document.getElementById("letter4").innerHTML = wordLetter4;
                document.getElementById("letter5").innerHTML = wordLetter5;
                document.getElementById("spanString").style.color = "turquoise";
                losses++;
                if (losses < 10) {
                    document.getElementById("losses").innerHTML = "0" + losses;
                } else {
                    document.getElementById("losses").innerHTML = losses;
                }
                document.getElementById("message2").innerHTML = "Click <span id='here' onclick='wordGame()';>HERE</span> to play again...";
                document.getElementById("spanString").style.marginTop = "145px";
                return;
            }
        }
    }
}

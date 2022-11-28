let pScore = 0;
let cScore = 0;

const options = ["rock", "paper", "scissors", "lizard", "spock"]; //buttoncolours
const cOptions = []; //gamePattern
const pOptions = []; //userClickedPattern

//Play again option
const playAgainBtn = document.getElementById('play_again');

// Get the modal
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById("rulesButton");
var captionText = document.getElementById("buttonCaption");
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];


//Check the Winner
function checkWinner() {
    if (pScore === 10 || cScore === 10) {
        const winner =
            pScore === 10 ? $("#winner").text("You win! Congratulations!") : $("#winner").text("Computer wins! Try again next time");
        playAgainBtn.style.display="block";
        playAgainBtn.addEventListener('click', function(){
            window.location.reload();
            return false;
          });
            return true;

    }
    return false;


}

//Start the game
$(".options").on("click", clickedByUser);

function clickedByUser() {
    const playerChoose = this.id;
    const ranPlayerImg = playerChoose + ".png";
    const playerRandomimageSource = "images/" + ranPlayerImg;
    pOptions.push(playerChoose);

    const pElement = document.getElementById("p-move");
    pElement.setAttribute("src", playerRandomimageSource);
    pElement.textContent = pScore;


    const randomCompOption = Math.floor(Math.random() * 5);
    const cRandom = options[randomCompOption];
    const ranCompImg = cRandom + ".png";
    const compRandomimageSource = "images/" + ranCompImg;

    cOptions.push(cRandom);

    const cElement = document.getElementById("c-move");
    cElement.setAttribute("src", compRandomimageSource);



    compare(playerChoose, cRandom);
    updateScore();
    checkWinner()
};


//Update the scores
function updateScore() {
    document.getElementById("p-score").textContent = pScore;
    document.getElementById("c-score").textContent = cScore;

}


//Compare choices of Player and Computer
function compare(playerChoose, cRandom) {

    if (playerChoose === cRandom) {
        $("#status").text("It's a Tie");
        return;
    }
    //check for Rock
    if (playerChoose === "rock") {
        if (cRandom === "scissors") {
            $("#status").text("Rock crushes Scissors! Player Wins");
            pScore++;
        } else if (cRandom === "lizard") {
            $("#status").text("Rock crushes Lizard! Player Wins");
            pScore++;
        } else if (cRandom === "paper") {
            $("#status").text("Paper covers Rock! Computer Wins");
            cScore++;
        } else {
            $("#status").text("Spock evaporates Rock! Computer Wins");
            cScore++;
        }
    }
    //Check for Paper
    else if (playerChoose === "paper") {
        if (cRandom === "rock") {
            $("#status").text("Paper covers Rock! Player Wins");
            pScore++;
        } else if (cRandom === "spock") {
            $("#status").text("Paper disproves Spock! Player Wins");
            pScore++;
        } else if (cRandom === "lizard") {
            $("#status").text("Lizard eats Paper! Computer Wins");
            cScore++;
        } else {
            $("#status").text("Scissors cuts Paper! Computer Wins");
            cScore++;
        }
    }
    //Check for Scissors
    else if (playerChoose === "scissors") {
        if (cRandom === "paper") {
            $("#status").text("Scissors cuts Paper! Player Wins");
            pScore++;
        } else if (cRandom === "lizard") {
            $("#status").text("Scissors decapitate Lizard! Player Wins");
            pScore++;
        } else if (cRandom === "rock") {
            $("#status").text("Rock crushes Scissors! Computer Wins");
            cScore++;
        } else {
            $("#status").text("Spock smashes Scissors! Computer Wins");
            cScore++;
        }
    }

    //Check for Lizard
    else if (playerChoose === "lizard") {
        if (cRandom === "paper") {
            $("#status").text("Lizard eats Paper! Player Wins");
            pScore++;
        } else if (cRandom === "spock") {
            $("#status").text("Lizard poisons Spock! Player Wins");
            pScore++;
        } else if (cRandom === "rock") {
            $("#status").text("Rock crushes Lizard! Computer Wins");
            cScore++;
        } else {
            $("#status").text("Scissors decapitate Lizard! Computer Wins");
            cScore++;
        }
    }
    //Check for Spock
    else if (playerChoose === "spock") {
        if (cRandom === "rock") {
            $("#status").text("Spock evaporates Rock! Player Wins");
            pScore++;
        } else if (cRandom === "scissors") {
            $("#status").text("Spock smashes Scissors! Player Wins");
            pScore++;
        } else if (cRandom === "paper") {
            $("#status").text("Paper disproves Spock! Computer Wins");
            cScore++;
        } else {
            $("#status").text("Lizard poisons Spock! Computer Wins");
            cScore++;
        }
    } else {
        console.log(err)
    };
}


//Rules button

img.onclick = function(){
  modal.style.display = "block";
  captionText.innerHTML = this.alt;
}

span.onclick = function() {
  modal.style.display = "none";
}


 
var choicePlayer;
var choices = ["Rock", "Paper", "Scissors"];
var score = 0;

function playerRock(){
    choicePlayer = "Rock";
    choiceComp = choices[Math.floor(Math.random()*3)];
    if (choiceComp == "Scissors")
    {
        $("#computerChoice").html("<p id='computerChoice'> Computer chose " + choiceComp + "</p>");
        $("#result").html("<p id='result'> Player wins! </p>");
        score+=10;
        $('#computerChoice').append("<p>"+score+"</p>");
    }
    else if (choiceComp == "Paper")
    {
        $("#computerChoice").html("<p id='computerChoice'> Computer chose " + choiceComp + "</p>");
        $("#result").html("<p id='result'> Computer wins! </p>");
        $('#computerChoice').append("<p>"+score+"</p>");
        
    }
    else
    {
        $("#computerChoice").html("<p id='computerChoice'> Computer chose " + choiceComp + "</p>");
        $("#result").html("<p id='result'> Its a tie! </p>");
        $('#computerChoice').append("<p>"+score+"</p>");
    }
}
function playerScissors(){
    choicePlayer = "Scissors";
    choiceComp = choices[Math.floor(Math.random()*3)];
    if (choiceComp == "Scissors")
    {
        $("#computerChoice").html("<p id='computerChoice'> Computer chose " + choiceComp + "</p>");
        $("#result").html("<p id='result'> Its a tie! </p>");
        $('#computerChoice').append("<p>"+score+"</p>");
    }
    else if (choiceComp == "Paper")
    {
        $("#computerChoice").html("<p id='computerChoice'> Computer chose " + choiceComp + "</p>");
        $("#result").html("<p id='result'> Player wins! </p>");
        score+=10;
        $('#computerChoice').append("<p>"+score+"</p>");
    }
    else
    {
        $("#computerChoice").html("<p id='computerChoice'> Computer chose " + choiceComp + "</p>");
        $("#result").html("<p id='result'> Computer wins! </p>");
        $('#computerChoice').append("<p>"+score+"</p>");
    }
}
function playerPaper(){
    choicePlayer = "Paper";
    choiceComp = choices[Math.floor(Math.random()*3)];
    if (choiceComp == "Scissors")
    {
        $("#computerChoice").html("<p id='computerChoice'> Computer chose " + choiceComp + "</p>");
        $("#result").html("<p id='result'> Computer wins! </p>");
        $('#computerChoice').append("<p>"+score+"</p>");
    }
    else if (choiceComp == "Paper")
    {
        $("#computerChoice").html("<p id='computerChoice'> Computer chose " + choiceComp + "</p>");
        $("#result").html("<p id='result'> Its a tie! </p>");
        $('#computerChoice').append("<p>"+score+"</p>");
    }
    else
    {
        $("#computerChoice").html("<p id='computerChoice'> Computer chose " + choiceComp + "</p>");
        $("#result").html("<p id='result'> Player wins! </p>");
        score+=10
        $('#computerChoice').append("<p>"+score+"</p>");
        
    }
}

$( document ).ready(function() {
    $('#computerChoice').append("<p>"+score+"</p>");
});

$('#computerChoice').append("<p>"+score+"</p>");
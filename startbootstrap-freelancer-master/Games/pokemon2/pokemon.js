
function setup(){
    createCanvas(650,650);
    
}

var HP = 100;
var opponentHP = 100;

function draw() {
  background(51, 153, 102);

  fill(255, 255, 0);
   triangle(180, 380, 213, 270, 241, 325);
   triangle(131, 380, 103, 270, 70, 325);
   triangle(145, 330, 103, 270, 70, 325);
  ellipse(150, 400, 120, 120);
 
  fill(230, 172, 0)
  triangle(505, 130, 538, 20, 566, 75);
  triangle(456, 130, 428, 20, 395, 75);
  triangle(470, 80, 428, 20, 395, 75);
  ellipse(475, 150, 120, 120);
  
  
  
  fill(1,1,1)
  ellipse(130, 380, 25, 25)
  ellipse(170, 380, 25, 25)

 
  //triangle(36, 75, 58, 90, 80, 75);
  triangle(160, 400, 150, 410, 140, 400);
  arc(150, 430, 50, 40, 150, PI+QUARTER_PI, CHORD);
  line(140, 420, 150, 430);

  fill(242, 242, 242)
  ellipse(135, 375, 11, 11)
  ellipse(165, 375, 11, 11)

  fill(255, 51, 0)
  ellipse(110, 410, 25, 25)
  ellipse(190, 410, 25, 25)
  fill(255, 153, 102)
  arc(150, 438, 25, 25, 150, PI+QUARTER_PI, CHORD);

  fill(1,1,1)
   line(150, 420, 150, 450);
  
   //pica 2
  fill(255, 173, 51);
  //triangle(505, 380, 213, 270, 241, 325);
  ellipse(475, 150, 120, 120);
  fill(0,0,0);
  rect(100,500, 100, 15);
  fill(0,0,0);
  rect(425,250, 100, 15);
   fill(0,0,0);

   fill(1,1,1);
   ellipse(455, 130, 25, 25)
   ellipse(495, 130, 25, 25)
   triangle(485, 150, 475, 160, 465, 150);
   arc(475, 180, 50, 40, 150, PI+QUARTER_PI, CHORD);
   line(475, 170, 475, 200);
  
   fill(242,242,242);
   ellipse(460, 125, 11, 11)
   ellipse(490, 125, 11, 11)

   fill(255, 255, 102);
   ellipse(435, 160, 25, 25)
   ellipse(515, 160, 25, 25)

   fill(255, 153, 102)
   arc(475, 188, 25, 25, 150, PI+QUARTER_PI, CHORD);
   
   fill(1,1,1);
   line(475, 170, 475, 200);
 
  if (HP>= 70){
    fill(0, 204, 0);
    text("HP:"+HP+"/100",100, 490);
  }
  else if (HP>=30){
  fill(255, 255, 0);
  text("HP:"+HP+"/100",100, 490);
}
  else {
    fill(255, 51, 0);
    text("HP:"+HP+"/100",100, 490);
  }
  rect(100,500, HP, 15);

  
    if (opponentHP>= 70){
    fill(0, 204, 0);
  }
  else if (opponentHP>=30){
  fill(255, 255, 0);
}
  else {
    fill(255, 51, 0);
  }
rect(425,250,opponentHP, 15);




  

  text("HP:"+opponentHP+"/100", 425, 235)
    

}


 var   inputA = 0;
  var  inputB = 0;
  var opponentHealthMessage = document.getElementById("opponent");
  var myHealthMessage = document.getElementById("mine");
var opponentMoves = ["Fly", "Roar", "Ember", "Flame"];
var opponentEffect = ["The attack missed!", "The attack was very effective","It's not very effective!","It's super effective!"];
var yourName = prompt("Enter a pokemon name:");
var app = document.getElementById('app');


var typewriter = new Typewriter(app, {
    loop: false,
    typingSpeed: 50,
    deleteSpeed: 25
});

        opponentHealthMessage.textContent=("Raichu has " + opponentHP + " HP.");
    myHealthMessage.textContent=(yourName + " has " + HP + " HP.");


function opponentHealth() {
if (opponentHP <= 0) {
        opponentHP = 0
        opponentHealthMessage.textContent=("Raichu has " + opponentHP + " HP.");
    myHealthMessage.textContent=(yourName + " has " + HP + " HP.");
typewriter.pauseFor(800)
    .deleteAll()
.typeString("Wild Raichu fainted. Game Over. Good Work " /*+ " " + yourName + " has gained 100 XP!"*/)
    HP= HP+100
    .pauseFor(800)
    .start();
}

else {}

}

function myHP() {
if (HP <= 0) {
    HP = 0
    myHealthMessage.textContent=(yourName + " has " + HP + " HP.");
    console.log(HP)
typewriter.pauseFor(800)
    .deleteAll()
    .typeString(yourName + " fainted. You have lost.")
    .start();
}

else {}
}

myHP();
opponentHealth();

typewriter.typeString("Wild Raichu appeared!")
    .pauseFor(800)
    .deleteAll()
    .typeString("Go!" + " " + yourName + "!")
    .start();


typewriter.pauseFor(800)
    .deleteAll()
    .typeString("What will" + " " + yourName + " do?")
    .start();


function movesOne(){

    inputA = 1;
    myHP();
opponentHealth();
    typewriter.deleteAll()
    .typeString(yourName + " used Static !")
    .pauseFor(800)
    .deleteAll()
    .typeString("It's not very effective!")
    .start();
    opponentHP = opponentHP - 5;
    myHealthMessage.textContent=(yourName + " has " + HP + " HP.");

    function opponentAttack(){
        myHP();
opponentHealth();
        var randomItem = Math.floor(Math.random()*opponentMoves.length);
var opponentChoice = opponentMoves[randomItem];
var opponentMessage = opponentEffect[randomItem];
if (opponentChoice == opponentMoves[0]){
    HP = HP;
       myHP();
opponentHealth();
}
else if (opponentChoice == opponentMoves[1]){
    HP = HP - 50;
     myHP();
opponentHealth();
}
else if (opponentChoice == opponentMoves[2]){
    HP = HP - 5;
      myHP();
opponentHealth();
}
else {
    HP = HP-40;
       myHP();
opponentHealth();
    
}
        typewriter.pauseFor(800)
        .deleteAll()
        .typeString("Wild Raichu used " + opponentChoice + "!")
        .pauseFor(800)
        .deleteAll()
        .typeString(opponentMessage)
        .pauseFor(800)
        .deleteAll()
        .typeString("What will" + " " + yourName + " do?")
        .start();
        opponentHealthMessage.textContent=("Raichu has " + opponentHP + " HP.");
    myHealthMessage.textContent=(yourName + " has " + HP + " HP.");
    }
    opponentAttack();
   
}

function movesTwo(){
 
    myHP();
opponentHealth();
    typewriter.deleteAll()
    .typeString(yourName + " used Thunderbolt!")
    .pauseFor(800)
    .deleteAll()
    .typeString("The attack missed!")
    .start();
    opponentHealthMessage.textContent=("Raichu has " + opponentHP + " HP.");
    myHealthMessage.textContent=(yourName + " has " + HP + " HP.");

     function opponentAttack(){

         myHP();
opponentHealth();
         var randomItem = Math.floor(Math.random()*opponentMoves.length);
var opponentChoice = opponentMoves[randomItem];
var opponentMessage = opponentEffect[randomItem]; if (opponentChoice == opponentMoves[0]){     HP = HP; } else if (opponentChoice == opponentMoves[1]){     HP = HP - 50; } else if (opponentChoice == opponentMoves[2]){     HP = HP - 5; } else {     HP = HP-40; }
         opponentHealthMessage.textContent=("Raichu has " + opponentHP + " HP.");
    document.getElementById("mine").textContent=(yourName + " has " + HP + " HP.");
        typewriter.pauseFor(800)
        .deleteAll()
        .typeString("Wild Raichu used " + opponentChoice + "!")
        .pauseFor(800)
        .deleteAll()
        .typeString(opponentMessage)
        .pauseFor(800)
        .deleteAll()
        .typeString("What will" + " " + yourName + " do?")
        .start();
           opponentHealthMessage.textContent=("Raichu has " + opponentHP + " HP.");
    myHealthMessage.textContent=(yourName + " has " + HP + " HP.");
    }
    opponentAttack();
    }
function movesThree(){

    myHP();
opponentHealth();

    typewriter.deleteAll()
    .typeString(yourName + " used Agility!")
    .pauseFor(800)
    .deleteAll()
    .typeString("It's super effective!")
    .start();
    opponentHP = opponentHP - 60;
   opponentHealthMessage.textContent=("Raichu has " + opponentHP + " HP.");
    myHealthMessage.textContent=(yourName + " has " + HP + " HP.");
    function opponentAttack(){
        myHP();
opponentHealth();
        var randomItem = Math.floor(Math.random()*opponentMoves.length);
var opponentChoice = opponentMoves[randomItem];
var opponentMessage = opponentEffect[randomItem];
if (opponentChoice == opponentMoves[0]){
    HP = HP;
        myHP();
opponentHealth();
}
else if (opponentChoice == opponentMoves[1]){
    HP = HP - 50;
        myHP();
opponentHealth();
}
else if (opponentChoice == opponentMoves[2]){
    HP = HP - 5;
        myHP();
opponentHealth();
}
else {
    HP = HP-40;
       myHP();
opponentHealth();
}
        typewriter.pauseFor(800)
        .deleteAll()
        .typeString("Wild Raichu used " + opponentChoice + "!")
        .pauseFor(800)
        .deleteAll()
        .typeString(opponentMessage)
        .pauseFor(800)
        .deleteAll()
        .typeString("What will" + " " + yourName + " do?")
        .start();
           opponentHealthMessage.textContent=("Raichu has " + opponentHP + " HP.");
    myHealthMessage.textContent=(yourName + " has " + HP + " HP.");
    }
    opponentAttack();
}
function movesFour(){

    myHP();
opponentHealth();

    typewriter.deleteAll()
    .typeString(yourName + " used Tail Whap!")
    .pauseFor(800)
    .deleteAll()
    .typeString(yourName + "'s health was raised by 1 HP!")
    .start();
    opponentHealthMessage.textContent=("Raichu has " + opponentHP + " HP.");
    myHealthMessage.textContent=(yourName + " has " + HP + " HP.");
    if (HP == 100){
        HP = HP;
    }
    else {
        HP = 1 + HP;
        opponentHealthMessage.textContent=("Raichu has " + opponentHP + " HP.");
    myHealthMessage.textContent=(yourName + " has " + HP + " HP.");
    }
       opponentHealthMessage.textContent=("Raichu has " + opponentHP + " HP.");
    myHealthMessage.textContent=(yourName + " has " + HP + " HP.");

    function opponentAttack(){
        myHP();
opponentHealth();
        var randomItem = Math.floor(Math.random()*opponentMoves.length);
var opponentChoice = opponentMoves[randomItem];
var opponentMessage = opponentEffect[randomItem];
if (opponentChoice == opponentMoves[0]){
    HP = HP;
        myHP();
opponentHealth();
}
else if (opponentChoice == opponentMoves[1]){
    HP = HP - 50;
        myHP();
opponentHealth();
}
else if (opponentChoice == opponentMoves[2]){
    HP = HP - 5;
         myHP();
opponentHealth();
}
else {
    HP = HP-40;
        myHP();
opponentHealth();
}
        typewriter.pauseFor(800)
        .deleteAll()
        .typeString("Wild Raichu used " + opponentChoice + "!")
        .pauseFor(800)
        .deleteAll()
        .typeString(opponentMessage)
        .pauseFor(800)
        .deleteAll()
        .typeString("What will" + " " + yourName + " do?")
        .start();
           opponentHealthMessage.textContent=("Raichu has " + opponentHP + " HP.");
    myHealthMessage.textContent=(yourName + " has " + HP + " HP.");
    }
    opponentAttack();

}

   opponentHealthMessage.textContent=("Raichu has " + opponentHP + " HP.");
    myHealthMessage.textContent=(yourName + " has " + HP + " HP.");

setTimeout(function(){ 
    document.getElementById("1").style.visibility= "visible";
}, 7000);

setTimeout(function(){ 
    document.getElementById("2").style.visibility= "visible";

}, 7500);

setTimeout(function(){ 

    document.getElementById("3").style.visibility= "visible";

}, 8000);

setTimeout(function(){ 

    document.getElementById("4").style.visibility= "visible";
}, 8500);

if(HP<0){
    HP= 0;
}
if(HP2<0){
    HP2= 0;
}

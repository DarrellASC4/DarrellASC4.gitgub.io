function setup(){
    createCanvas(650,600);
   
}

var x = 300;
var y = 500;
var Bullets=[]
var score = 0;
function enemyShoot(){
  
}
var hit1 = false
var hit2 = false
var hit3 = false
var hit4 = false
var hit5 = false
var hit6 = false
var hit7 = false
var hit8 = false
var hit9 = false
var hit10 = false
    function draw (){
        background(64, 0, 128);
        fill(102, 255, 102);
            for(var i=0; i <Bullets.length;i++){
                Bullets[i].Y -=10
                rect(Bullets[i].X,Bullets[i].Y,5,5)

                if (Bullets[i].X< 70 && Bullets[i].Y< 70 && Bullets[i].X > 30 && Bullets[i].Y > 30) {
                hit1 = true
                score++
                }
            
                if (Bullets[i].X< 130 && Bullets[i].Y< 90 && Bullets[i].X > 90 && Bullets[i].Y > 10) {
                hit2 = true
                }

                if (Bullets[i].X< 190 && Bullets[i].Y< 90 && Bullets[i].X > 150 && Bullets[i].Y > 10) {
                hit3 = true
                }
            
                if (Bullets[i].X< 250 && Bullets[i].Y< 90 && Bullets[i].X > 210 && Bullets[i].Y > 10) {
                hit4 = true
                }
                
                if (Bullets[i].X< 310 && Bullets[i].Y< 90 && Bullets[i].X > 270 && Bullets[i].Y > 10) {
                hit5 = true
                }
                
                if (Bullets[i].X< 370 && Bullets[i].Y< 90 && Bullets[i].X > 330 && Bullets[i].Y > 10) {
                hit6 = true
                }
                
                if (Bullets[i].X< 430 && Bullets[i].Y< 90 && Bullets[i].X > 390 && Bullets[i].Y > 10) {
                hit7 = true
                }
                
                if (Bullets[i].X< 490 && Bullets[i].Y< 90 && Bullets[i].X > 450 && Bullets[i].Y > 10) {
                hit8 = true
                }
                
                if (Bullets[i].X< 550 && Bullets[i].Y< 90 && Bullets[i].X > 510 && Bullets[i].Y > 10) {
                hit9 = true
                }
                
                if (Bullets[i].X< 610 && Bullets[i].Y< 90 && Bullets[i].X > 570 && Bullets[i].Y > 10) {
                hit10 = true
                }
                // fill(64, 0, 128);
                // ellipse(50, 50, 40, 40);
    
            }
        //fill(102,255,102);
        if (hit1==false){
            ellipse(50, 50, 40, 40);
        }
        
        if (hit2==false){
        ellipse(110, 50, 40, 40);
        }
    
        if (hit3==false){
        ellipse(170, 50, 40, 40);
        }

        if (hit4==false){
        ellipse(230, 50, 40, 40);
        }

        if (hit5==false){
        ellipse(290, 50, 40, 40);
        }
    
        if (hit6==false){
        ellipse(350, 50, 40, 40);
        }

        if (hit7==false){
        ellipse(410, 50, 40, 40);
        }

        if (hit8==false){
        ellipse(470, 50, 40, 40);
        }

        if (hit9==false){
        ellipse(530, 50, 40, 40);
        }

        if (hit10==false){
        ellipse(590, 50, 40, 40);
        }

            fill(255, 51, 0);
            rect(x,y,30,50);

            if (keyIsDown(LEFT_ARROW)){
                x-=5;
            if (x < 0){
                x=0 
            } 
            } 
            else if (keyIsDown(RIGHT_ARROW)){
                x+=5;
            if (x>620){
                x=620
            }
            }
    
    }

    function Bullet(X,Y){
        this.X = X;
        this.Y = Y;
    }

function keyPressed() {
   if (keyCode == 32){
       var bullet1 = new Bullet(x,y);
       Bullets.push (bullet1)

  }

}

/*setTimeout(function(){ 
    alert("Time is up");
    x=300
    x<=301
    x>=299     
}, 12000);*/

function countdown(minutes) {
    var seconds = 60;
    var mins = minutes
    function tick() {
        var counter = document.getElementById("counter");
        var score = document.getElementById("score");
        
        var current_minutes = mins-1
        seconds--;
        counter.innerHTML = current_minutes.toString() + ":" + (seconds < 10 ? "0" : "") + String(seconds);
        if( seconds > 0 ) {
            setTimeout(tick, 1000);
        } else {
            
            if(mins > 1){
                
                countdown(mins-1);           
                    
            }
        }
    }
    tick();
}

countdown(1);

//if (hit1 == true){
 //score++
//}

      
  

/*if (mouseX< 230 && mouseY< 625 && mouseX > 150 && mouseY > 576 && hp2 > 0) {
    hp2 = hp2-10;
  } else {
    value = 0;
  }

  if (mouseX< 150 && mouseY< 575 && mouseX > 70 && mouseY > 525 && hp2 > 0) {
    hp2 = hp2-10;
  } else {
    value = 0;
  }

  if (mouseX< 150 && mouseY< 625 && mouseX > 70 && mouseY > 576 && hp2 > 0) {
    hp2 = hp2-10;
  } else {
    value = 0;
  }*/
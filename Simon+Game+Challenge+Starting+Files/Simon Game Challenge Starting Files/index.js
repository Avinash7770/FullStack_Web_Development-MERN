var buttoncolors = ["red","blue","green","yellow"];
var gamepattern=[];
var userClickedPattern=[];
var currentclick;
var level =0;
var bestLevel=0;

function updateBestLevel() {
   if (level > bestLevel) {
     bestLevel = level;
     $("#best-level").text("Best Level: " + bestLevel);
   }
 }

function startover(){
   gamepattern=[];
   userClickedPattern=[];
   updateBestLevel();
   level =0;
   
}


function play(name){
   var audio = new Audio("sounds/" + name + ".mp3");
   audio.play();
}
function buttonanimation(name){
   $("#"+name).fadeIn(100).fadeOut(100).fadeIn(100);
}

function checkanswer(nowlevel){
 if(gamepattern[nowlevel]===userClickedPattern[nowlevel]){
//console.log("R");
    if(gamepattern.length===userClickedPattern.length){
      setTimeout(function () {
         nextsequence();
       }, 1000);
       updateBestLevel();
     
    }
    
 }
 else{
   //console.log(userClickedPattern);
   play("wrong");

      
      $("body").addClass("game-over");
      setTimeout(function () {
        $("body").removeClass("game-over");
      }, 200);

     
      $("#level-title").text("Game Over, Press Any Key to Restart");
       startover();
 }
}

function nextsequence(){
   userClickedPattern=[];
  var current = Math.floor(Math.random()*4);
  var randomchosencolor = buttoncolors[current];
  gamepattern.push(randomchosencolor);
  $("h1").text("Level "+(++level));
  buttonanimation(randomchosencolor);
  play(randomchosencolor);
  
 
}
//nextsequence();
$(document).keypress(function(){
   if(level==0)
   nextsequence();
});


$(".btn").on("click",function(){
   if(level!=0){
   currentclick=$(this).attr("id");
   userClickedPattern.push(currentclick);
   play(currentclick);
   buttonanimation(currentclick);
   checkanswer(userClickedPattern.length-1);
   }
});


var buttoncolors = ["red","blue","green","yellow"];
var gamepattern=[];
var userClickedPattern=[];
var currentclick;

function play(name){
   var audio = new Audio("sounds/" + name + ".mp3");
   audio.play();

}
function nextsequence(){
  var current = Math.floor(Math.random()*4);
  var randomchosencolor = buttoncolors[current];
  gamepattern.push(randomchosencolor);
  $("#"+randomchosencolor).fadeIn(100).fadeOut(100).fadeIn(100);
  var audio = new Audio("sounds/" + randomchosencolor + ".mp3");
  audio.play();
 
}
$(".btn").on("click",function(){
   currentclick=$(this).attr("id");
   userClickedPattern.push(currentclick);
   play(currentclick);
});


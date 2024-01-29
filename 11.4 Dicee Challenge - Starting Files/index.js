var randomnumber1 = Math.floor(Math.random()*6)+1;
var randomimage= "./images/dice" + randomnumber1 + ".png";
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src",randomimage);








var randomnumber2 =  Math.floor(Math.random()*6)+1;
var randomimage2  = "./images/dice" + randomnumber2 + ".png";
var image2 = document.querySelectorAll("img")[1] ;
image2.setAttribute("src",randomimage2);

if(randomnumber1>randomnumber2){
    document.querySelector("h1").innerHTML="Sucker 1 Won";
}
else if(randomnumber1<randomnumber2){
    document.querySelector("h1").innerHTML="Sucker 2 Woon";
}
else{
    document.querySelector("h1").innerHTML="BothSuckers Loose";
}
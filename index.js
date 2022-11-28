 

 var randomno1 = Math.floor(Math.random()*6);
 var finalrandom = randomno1 + 1 
 var finalimg = "dice"+finalrandom+".png"
 var final2 = "images/"+finalimg;
 document.querySelectorAll("img")[0].setAttribute("src",final2);



 
 var randomno2 = Math.floor(Math.random()*6);
 var finalrandom2 = randomno2 + 1 ;
 var finalimg = "dice"+finalrandom2+".png"
var finalimg2 = "images/" + finalimg;
document.querySelector(".img2").setAttribute("src",finalimg2);


// now if else statement.

if (randomno1 > randomno2) {
   document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!"
}else if (randomno2 > randomno1) {
   document.querySelector("h1").innerHTML = " 🚩Player 2 Wins!"
}else {
   document.querySelector("h1").innerHTML = "Draw!"
}
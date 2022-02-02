



function roll(){

var n1 = Math.floor(Math.random()*6)+1;
console.log(n1);

var n2 = Math.floor(Math.random()*6)+1;
console.log(n2);

var dice1 = document.querySelector(".img1")
var dice2 = document.querySelector(".img2")

dice1.setAttribute("src",`images/dice${n1}.png`)
dice2.setAttribute("src",`images/dice${n2}.png`)

var home = document.querySelector("#home")
var player1 = document.querySelector("#player1")
var player2 = document.querySelector("#player2")
var draw = document.querySelector("#draw")
    
    home.style.display = "none";

if (n1>n2) {
    player1.style.display = "block";
    player2.style.display = "none";
    draw.style.display = "none";
}
else if (n2>n1) {
    player2.style.display = "block";
    player1.style.display = "none";
    draw.style.display = "none";
}
else if (n1=n2){
    draw.style.display = "block";
    player1.style.display = "none";
    player2.style.display = "none";

}
}


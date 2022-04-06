
// alert("working");

var play1 = Math.floor(Math.random() * 6) + 1; // Returns a random integer from 1 to 6:


var rndSource1 = "images/dice" + play1 + ".png";



document.querySelectorAll("img")[0].setAttribute("src", rndSource1);

var play2 = Math.floor(Math.random() * 6) + 1;
var rndSource2 = "images/dice" + play2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", rndSource2);
// alert(rndSource1);

  if (play1 > play2) {
    document.querySelector("h1").textContent = "Player 1 wins!";
      } else if (play1 < play2){
    document.querySelector("h1").textContent = "Player 2 wins!";
  }else {
    document.querySelector("h1").textContent = "It's a Draw!";
  }

for (var i = 0; i < 7 /* or document.querySelectorAll(".drum").length*/ ; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", onClick)
}
document.addEventListener("keydown", logKey);

//functions to get Drum Values
function logKey(event){
  var drumValue = event.key;
  drumValueSwitch(drumValue);
  drumAnimate(drumValue);
}
function onClick() {
  var drumValue = this.textContent;
  drumValueSwitch(drumValue);
  drumAnimate(drumValue);
}
//Pass values to Switch to create sound
function drumValueSwitch(drumValue){
  switch (drumValue) {
    case "w":
      var audio = new Audio("sounds/tom-1.mp3");
      audio.play();
      break;
    case "a":
      var audio = new Audio("sounds/tom-2.mp3");
      audio.play();
      break;
    case "s":
      var audio = new Audio("sounds/tom-3.mp3");
      audio.play();
      break;
    case "d":
      var audio = new Audio("sounds/tom-4.mp3");
      audio.play();
      break;
    case "j":
      var audio = new Audio("sounds/snare.mp3");
      audio.play();
      break;
    case "k":
      var audio = new Audio("sounds/crash.mp3");
      audio.play();
      break;
    case "l":
      var audio = new Audio("sounds/kick-bass.mp3");
      audio.play();
      break;
    default:
      console.log(drumValue);
      break;
  }
}

function drumAnimate(drumValue){
 var activeButton = document.querySelector("." + drumValue);

 activeButton.classList.add("pressed");
 setTimeout(function(){
   activeButton.classList.remove("pressed");
 },100);
}

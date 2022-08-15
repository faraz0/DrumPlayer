for(var i=0; i<document.querySelectorAll("button").length; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click",function() {
    keySound(this.innerHTML);
    btnAnimate(this.innerHTML);
  });
}

document.addEventListener("keydown",function(e){
  keySound(e.key);
  btnAnimate(e.key);
});


function keySound(key) {
  switch(key) {
    case "w":
    var t1 = new Audio("sounds/tom-1.mp3");
    t1.play();
    break;
    case "a":
    var t2 = new Audio("sounds/tom-2.mp3");
    t2.play();
    break;
    case "s":
    var t3 = new Audio("sounds/tom-3.mp3");
    t3.play();
    break;
    case "d":
    var t4 = new Audio("sounds/tom-4.mp3");
    t4.play();
    break;
    case "j":
    var t5 = new Audio("sounds/snare.mp3");
    t5.play();
    break;
    case "k":
    var t6 = new Audio("sounds/crash.mp3");
    t6.play();
    break;
    case "l":
    var t7 = new Audio("sounds/kick-bass.mp3");
    t7.play();
    break;
    default: alert("wrong key");
    break;

  }
}

function btnAnimate(key) {
  var str = "."+key;
  document.querySelector(str).classList.add("pressed");
  var delayInMilliseconds = 140; //1 second

setTimeout(function() {
  document.querySelector(str).classList.remove("pressed");
}, delayInMilliseconds);


}

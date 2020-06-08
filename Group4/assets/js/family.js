

var myActive = document.getElementsByClassName("active");

var myContainer = document.querySelector(".slide-show-wrapper");
var myImg = document.getElementById("imgCon");
var mySlide = [
    "assets/images/pic-slide/slide1.png",
    "assets/images/pic-slide/slide2.png",
    "assets/images/pic-slide/slide3.png",
    "assets/images/pic-slide/slide4.png",
    "assets/images/pic-slide/slide5.png"
];

var mylength = mySlide.length;

var myTimer;

var i = -1;
function myIncrement(){
  i++;
  return i;
}

function myDecrement(){
  i--;
  return i;
}


function myBackShow(){
  myDecrement()
  if(i < 0){
    i = mylength-1;
    myImg.src = mySlide[i];
    for(j = 0; j < myActive.length; j++){
      if(j == i){
        myActive[j].style.border = "2px solid #000"
      } else {
        myActive[j].style.border = "none"
      }
    }  
  } else {
    myImg.src = mySlide[i];
    for(j = 0; j < myActive.length; j++){
      if(j == i){
        myActive[j].style.border = "2px solid #000"
      } else {
        myActive[j].style.border = "none"
      }
    }
  }
  // myIncrement()
}



function mySlideShow(){
  myIncrement()
  if(i == mylength){
    i = 0;
    myImg.src = mySlide[i];
    for(j = 0; j < myActive.length; j++){
      if(j == i){
        myActive[j].style.border = "2px solid #000"
      } else {
        myActive[j].style.border = "none"
      }
    }  
  } else if(i != mylength && i != mylength - 1) {
    myImg.src = mySlide[i];
    for(j = 0; j < myActive.length; j++){
      if(j == i){
        myActive[j].style.border = "2px solid #000"
      } else {
        myActive[j].style.border = "none"
      }
    }
  } else if(i != mylength && i == mylength - 1) {
    myImg.src = mySlide[i];
    for(j = 0; j < myActive.length; j++){
      if(j == i){
        myActive[j].style.border = "2px solid #000"
      } else {
        myActive[j].style.border = "none"
      }
    }
  }
}

myTimer = setInterval(mySlideShow, 8000)

function myActiveSlide(c){
  
  for(j = 0; j < myActive.length; j++){
    if(j == c.value){
      myActive[j].style.border = "2px solid #000"
    } else {
      myActive[j].style.border = "none"
    }
  }
  myImg.src = mySlide[c.value];
  i = c.value;
}

function myNext(c){
  
  if(c.className == "previous"){
    myBackShow()
  } else if(c.className == "next"){
    mySlideShow()
  }
}
var root = document.getElementsByClassName("root");
var sacral = document.getElementsByClassName("sacral");
var plexus = document.getElementsByClassName("plexus");
var heart = document.getElementsByClassName("heart");
var throat = document.getElementsByClassName("throat");
var eye = document.getElementsByClassName("third-eye");
var crown = document.getElementsByClassName("crown");

//SHOW CRSYTALS FOR ROOT CHAKRA//
function loadRoot() {
  for (var i = 0; i < root.length; i++) {
    if (root[i].style.display === "none") {
      root[i].style.display = "block";
    } else {
      root[i].style.display = "none";
    }
  }
}

//SHOW CRSYTALS FOR SACRAL CHAKRA//
function loadSacral() {
  for (var i = 0; i < sacral.length; i++) {
    if (sacral[i].style.display === "none") {
      sacral[i].style.display = "block";
    } else {
      sacral[i].style.display = "none";
    }
  }
}

//SHOW CRSYTALS FOR SOLAR PLEXUS CHAKRA//
function loadPlexus() {
  for (var i = 0; i < plexus.length; i++) {
    if (plexus[i].style.display === "none") {
      plexus[i].style.display = "block";
    } else {
      plexus[i].style.display = "none";
    }
  }
}

//SHOW CRSYTALS FOR HEART CHAKRA//
function loadHeart() {
  for (var i = 0; i < heart.length; i++) {
    if (heart[i].style.display === "none") {
      heart[i].style.display = "block";
    } else {
      heart[i].style.display = "none";
    }
  }
}

//SHOW CRSYTALS FOR HEART CHAKRA//
function loadThroat() {
  for (var i = 0; i < throat.length; i++) {
    if (throat[i].style.display === "none") {
      throat[i].style.display = "block";
    } else {
      throat[i].style.display = "none";
    }
  }
}

//SHOW CRSYTALS FOR THIRD EYE CHAKRA//
function loadEye() {
  for (var i = 0; i < eye.length; i++) {
    if (eye[i].style.display === "none") {
      eye[i].style.display = "block";
    } else {
      eye[i].style.display = "none";
    }
  }
}

//SHOW CRSYTALS FOR CROWN CHAKRA//
function loadCrown() {
  for (var i = 0; i < crown.length; i++) {
    if (crown[i].style.display === "none") {
      crown[i].style.display = "block";
    } else {
      crown[i].style.display = "none";
    }
  }
}

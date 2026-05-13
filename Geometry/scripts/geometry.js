/*
     Copyright 2022 - Samuel Dominic Chukwuemeka (SamDom For Peace)
    www.samuelchukwuemeka.com
    www.chukwuemekasamuel.com
    www.samdomforpeace.com
    www.chukwuemeka-samuel.appspot.com
    www.samdomforpeace.appspot.com
    www.chukwuemekasamuel.com/Vectors/vectors.html
*/


// Script to open and close sidebar
function w3_open() {
  document.getElementById("mySidebar").style.display = "block";
  document.getElementById("myOverlay").style.display = "block";
}

function w3_close() {
  document.getElementById("mySidebar").style.display = "none";
  document.getElementById("myOverlay").style.display = "none";
}


// Solutions to the Questions
function bible(solution) {
  var e = document.getElementById(solution);
  if (e.style.display === 'block' || e.style.display === '') e.style.display = 'none';
  else e.style.display = 'block';
}

// Answers to the Questions
function answers(answer) {
  var e = document.getElementById(answer);
  if (e.style.display === 'block' || e.style.display === '') e.style.display = 'none';
  else e.style.display = 'block';
}
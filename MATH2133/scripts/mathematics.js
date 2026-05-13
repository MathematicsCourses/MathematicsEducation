/*
    Copyright 2024: Samuel Dominic Chukwuemeka (SamDom For Peace)
    www.samuelchukwuemeka.com
    www.chukwuemekasamuel.com
    www.samdomforpeace.com
    www.chukwuemeka-samuel.appspot.com
    www.samdomforpeace.appspot.com
    https://mathematicscourses.github.io/MathematicsEducation/
    https://mathematicscourses.github.io/MathematicsEducation/MATH2133/GradesCalculator.html
*/

// Used to toggle the menu on small screens when clicking on the menu button
function myFunction() {
  var x = document.getElementById("navDemo");
  if (x.className.indexOf("w3-show") == -1) {
    x.className += " w3-show";
  } else {
    x.className = x.className.replace(" w3-show", "");
  }
}

// Solutions to the Questions
function solutions(solution) {
  var e = document.getElementById(solution);
  if (e.style.display === "block" || e.style.display === "") e.style.display = "none";
  else e.style.display = "block";
}

// Answers to the Questions
function toggle(answer) {
  var e = document.getElementById(answer);
  if (e.style.display === "block" || e.style.display === "") e.style.display = "none";
  else e.style.display = "block";
}

("use strict");

/* 
  MATH 2133
  Given: Student MLM scores
  To Calculate: the current MLM grade and the cumulative MLM grade
*/

document.getElementById("gradeMLM").addEventListener("submit", gradeMLM);

function gradeMLM(event) {
  event.preventDefault();
  event.stopPropagation();

  var weightElevenOne1st = parseFloat(document.getElementById("weightElevenOne1st").value, 10) || 0,
    scoreElevenOne1st = parseFloat(document.getElementById("scoreElevenOne1st").value, 10) || 0,
    weightedScoreElevenOne1st,
    weightElevenOne2nd = parseFloat(document.getElementById("weightElevenOne2nd").value, 10) || 0,
    scoreElevenOne2nd = parseFloat(document.getElementById("scoreElevenOne2nd").value, 10) || 0,
    weightedScoreElevenOne2nd,
    weightElevenTwo1st = parseFloat(document.getElementById("weightElevenTwo1st").value, 10) || 0,
    scoreElevenTwo1st = parseFloat(document.getElementById("scoreElevenTwo1st").value, 10) || 0,
    weightedScoreElevenTwo1st,
    weightElevenTwo2nd = parseFloat(document.getElementById("weightElevenTwo2nd").value, 10) || 0,
    scoreElevenTwo2nd = parseFloat(document.getElementById("scoreElevenTwo2nd").value, 10) || 0,
    weightedScoreElevenTwo2nd,
    weightElevenThree1st =
      parseFloat(document.getElementById("weightElevenThree1st").value, 10) || 0,
    scoreElevenThree1st = parseFloat(document.getElementById("scoreElevenThree1st").value, 10) || 0,
    weightedScoreElevenThree1st,
    weightElevenThree2nd =
      +parseFloat(document.getElementById("weightElevenThree2nd").value, 10) || 0,
    scoreElevenThree2nd =
      +parseFloat(document.getElementById("scoreElevenThree2nd").value, 10) || 0,
    weightedScoreElevenThree2nd,
    weightElevenFour1st = parseFloat(document.getElementById("weightElevenFour1st").value, 10) || 0,
    scoreElevenFour1st = parseFloat(document.getElementById("scoreElevenFour1st").value, 10) || 0,
    weightedScoreElevenFour1st,
    weightElevenFour2nd =
      +parseFloat(document.getElementById("weightElevenFour2nd").value, 10) || 0,
    scoreElevenFour2nd = +parseFloat(document.getElementById("scoreElevenFour2nd").value, 10) || 0,
    weightedScoreElevenFour2nd,
    weightThirteenOne1st =
      parseFloat(document.getElementById("weightThirteenOne1st").value, 10) || 0,
    scoreThirteenOne1st = parseFloat(document.getElementById("scoreThirteenOne1st").value, 10) || 0,
    weightedScoreThirteenOne1st,
    weightThirteenOne2nd =
      +parseFloat(document.getElementById("weightThirteenOne2nd").value, 10) || 0,
    scoreThirteenOne2nd =
      +parseFloat(document.getElementById("scoreThirteenOne2nd").value, 10) || 0,
    weightedScoreThirteenOne2nd,
    weightThirteenTwo1st =
      parseFloat(document.getElementById("weightThirteenTwo1st").value, 10) || 0,
    scoreThirteenTwo1st = parseFloat(document.getElementById("scoreThirteenTwo1st").value, 10) || 0,
    weightedScoreThirteenTwo1st,
    weightThirteenTwo2nd =
      +parseFloat(document.getElementById("weightThirteenTwo2nd").value, 10) || 0,
    scoreThirteenTwo2nd =
      +parseFloat(document.getElementById("scoreThirteenTwo2nd").value, 10) || 0,
    weightedScoreThirteenTwo2nd,
    weightThirteenTwo3rd =
      +parseFloat(document.getElementById("weightThirteenTwo3rd").value, 10) || 0,
    scoreThirteenTwo3rd =
      +parseFloat(document.getElementById("scoreThirteenTwo3rd").value, 10) || 0,
    weightedScoreThirteenTwo3rd,
    weightThirteenThree1st =
      parseFloat(document.getElementById("weightThirteenThree1st").value, 10) || 0,
    scoreThirteenThree1st =
      parseFloat(document.getElementById("scoreThirteenThree1st").value, 10) || 0,
    weightedScoreThirteenThree1st,
    weightThirteenThree2nd =
      +parseFloat(document.getElementById("weightThirteenThree2nd").value, 10) || 0,
    scoreThirteenThree2nd =
      +parseFloat(document.getElementById("scoreThirteenThree2nd").value, 10) || 0,
    weightedScoreThirteenThree2nd,
    weightThirteenThree3rd =
      +parseFloat(document.getElementById("weightThirteenThree3rd").value, 10) || 0,
    scoreThirteenThree3rd =
      +parseFloat(document.getElementById("scoreThirteenThree3rd").value, 10) || 0,
    weightedScoreThirteenThree3rd,
    weightThirteenFour1st =
      parseFloat(document.getElementById("weightThirteenFour1st").value, 10) || 0,
    scoreThirteenFour1st =
      parseFloat(document.getElementById("scoreThirteenFour1st").value, 10) || 0,
    weightedScoreThirteenFour1st,
    weightThirteenFour2nd =
      +parseFloat(document.getElementById("weightThirteenFour2nd").value, 10) || 0,
    scoreThirteenFour2nd =
      +parseFloat(document.getElementById("scoreThirteenFour2nd").value, 10) || 0,
    weightedScoreThirteenFour2nd,
    weightThirteenFive1st =
      parseFloat(document.getElementById("weightThirteenFive1st").value, 10) || 0,
    scoreThirteenFive1st =
      parseFloat(document.getElementById("scoreThirteenFive1st").value, 10) || 0,
    weightedScoreThirteenFive1st,
    weightThirteenFive2nd =
      +parseFloat(document.getElementById("weightThirteenFive2nd").value, 10) || 0,
    scoreThirteenFive2nd =
      +parseFloat(document.getElementById("scoreThirteenFive2nd").value, 10) || 0,
    weightedScoreThirteenFive2nd,
    weightEightOne1st = parseFloat(document.getElementById("weightEightOne1st").value, 10) || 0,
    scoreEightOne1st = parseFloat(document.getElementById("scoreEightOne1st").value, 10) || 0,
    weightedScoreEightOne1st,
    weightEightOne2nd = parseFloat(document.getElementById("weightEightOne2nd").value, 10) || 0,
    scoreEightOne2nd = parseFloat(document.getElementById("scoreEightOne2nd").value, 10) || 0,
    weightedScoreEightOne2nd,
    weightEightTwo = parseFloat(document.getElementById("weightEightTwo").value, 10) || 0,
    scoreEightTwo = parseFloat(document.getElementById("scoreEightTwo").value, 10) || 0,
    weightedScoreEightTwo,
    weightEightThree1st = parseFloat(document.getElementById("weightEightThree1st").value, 10) || 0,
    scoreEightThree1st = parseFloat(document.getElementById("scoreEightThree1st").value, 10) || 0,
    weightedScoreEightThree1st,
    weightEightThree2nd =
      +parseFloat(document.getElementById("weightEightThree2nd").value, 10) || 0,
    scoreEightThree2nd = +parseFloat(document.getElementById("scoreEightThree2nd").value, 10) || 0,
    weightedScoreEightThree2nd,
    weightEightFour1st = parseFloat(document.getElementById("weightEightFour1st").value, 10) || 0,
    scoreEightFour1st = parseFloat(document.getElementById("scoreEightFour1st").value, 10) || 0,
    weightedScoreEightFour1st,
    weightEightFour2nd = +parseFloat(document.getElementById("weightEightFour2nd").value, 10) || 0,
    scoreEightFour2nd = +parseFloat(document.getElementById("scoreEightFour2nd").value, 10) || 0,
    weightedScoreEightFour2nd,
    weightTenOne1st = parseFloat(document.getElementById("weightTenOne1st").value, 10) || 0,
    scoreTenOne1st = parseFloat(document.getElementById("scoreTenOne1st").value, 10) || 0,
    weightedScoreTenOne1st,
    weightTenOne2nd = parseFloat(document.getElementById("weightTenOne2nd").value, 10) || 0,
    scoreTenOne2nd = parseFloat(document.getElementById("scoreTenOne2nd").value, 10) || 0,
    weightedScoreTenOne2nd,
    weightTenTwo1st = parseFloat(document.getElementById("weightTenTwo1st").value, 10) || 0,
    scoreTenTwo1st = parseFloat(document.getElementById("scoreTenTwo1st").value, 10) || 0,
    weightedScoreTenTwo1st,
    weightTenTwo2nd = parseFloat(document.getElementById("weightTenTwo2nd").value, 10) || 0,
    scoreTenTwo2nd = parseFloat(document.getElementById("scoreTenTwo2nd").value, 10) || 0,
    weightedScoreTenTwo2nd,
    weightTenThree = parseFloat(document.getElementById("weightTenThree").value, 10) || 0,
    scoreTenThree = parseFloat(document.getElementById("scoreTenThree").value, 10) || 0,
    weightedScoreTenThree,
    weightTenFour1st = parseFloat(document.getElementById("weightTenFour1st").value, 10) || 0,
    scoreTenFour1st = parseFloat(document.getElementById("scoreTenFour1st").value, 10) || 0,
    weightedScoreTenFour1st,
    weightTenFour2nd = +parseFloat(document.getElementById("weightTenFour2nd").value, 10) || 0,
    scoreTenFour2nd = +parseFloat(document.getElementById("scoreTenFour2nd").value, 10) || 0,
    weightedScoreTenFour2nd,
    weightTenFour3rd = +parseFloat(document.getElementById("weightTenFour3rd").value, 10) || 0,
    scoreTenFour3rd = +parseFloat(document.getElementById("scoreTenFour3rd").value, 10) || 0,
    weightedScoreTenFour3rd,
    weightNineOne1st = parseFloat(document.getElementById("weightNineOne1st").value, 10) || 0,
    scoreNineOne1st = parseFloat(document.getElementById("scoreNineOne1st").value, 10) || 0,
    weightedScoreNineOne1st,
    weightNineOne2nd = parseFloat(document.getElementById("weightNineOne2nd").value, 10) || 0,
    scoreNineOne2nd = parseFloat(document.getElementById("scoreNineOne2nd").value, 10) || 0,
    weightedScoreNineOne2nd,
    weightNineTwo1st = parseFloat(document.getElementById("weightNineTwo1st").value, 10) || 0,
    scoreNineTwo1st = parseFloat(document.getElementById("scoreNineTwo1st").value, 10) || 0,
    weightedScoreNineTwo1st,
    weightNineTwo2nd = parseFloat(document.getElementById("weightNineTwo2nd").value, 10) || 0,
    scoreNineTwo2nd = parseFloat(document.getElementById("scoreNineTwo2nd").value, 10) || 0,
    weightedScoreNineTwo2nd,
    weightNineThree1st = parseFloat(document.getElementById("weightNineThree1st").value, 10) || 0,
    scoreNineThree1st = parseFloat(document.getElementById("scoreNineThree1st").value, 10) || 0,
    weightedScoreNineThree1st,
    weightNineThree2nd = +parseFloat(document.getElementById("weightNineThree2nd").value, 10) || 0,
    scoreNineThree2nd = +parseFloat(document.getElementById("scoreNineThree2nd").value, 10) || 0,
    weightedScoreNineThree2nd,
    weightNineFour1st = parseFloat(document.getElementById("weightNineFour1st").value, 10) || 0,
    scoreNineFour1st = parseFloat(document.getElementById("scoreNineFour1st").value, 10) || 0,
    weightedScoreNineFour1st,
    weightNineFour2nd = +parseFloat(document.getElementById("weightNineFour2nd").value, 10) || 0,
    scoreNineFour2nd = +parseFloat(document.getElementById("scoreNineFour2nd").value, 10) || 0,
    weightedScoreNineFour2nd,
    weightTwelveOne1st = parseFloat(document.getElementById("weightTwelveOne1st").value, 10) || 0,
    scoreTwelveOne1st = parseFloat(document.getElementById("scoreTwelveOne1st").value, 10) || 0,
    weightedScoreTwelveOne1st,
    weightTwelveOne2nd = parseFloat(document.getElementById("weightTwelveOne2nd").value, 10) || 0,
    scoreTwelveOne2nd = parseFloat(document.getElementById("scoreTwelveOne2nd").value, 10) || 0,
    weightedScoreTwelveOne2nd,
    weightTwelveTwo1st = parseFloat(document.getElementById("weightTwelveTwo1st").value, 10) || 0,
    scoreTwelveTwo1st = parseFloat(document.getElementById("scoreTwelveTwo1st").value, 10) || 0,
    weightedScoreTwelveTwo1st,
    weightTwelveTwo2nd = parseFloat(document.getElementById("weightTwelveTwo2nd").value, 10) || 0,
    scoreTwelveTwo2nd = parseFloat(document.getElementById("scoreTwelveTwo2nd").value, 10) || 0,
    weightedScoreTwelveTwo2nd,
    weightTwelveThree = parseFloat(document.getElementById("weightTwelveThree").value, 10) || 0,
    scoreTwelveThree = parseFloat(document.getElementById("scoreTwelveThree").value, 10) || 0,
    weightedScoreTwelveThree,
    weightTwelveFour1st = parseFloat(document.getElementById("weightTwelveFour1st").value, 10) || 0,
    scoreTwelveFour1st = parseFloat(document.getElementById("scoreTwelveFour1st").value, 10) || 0,
    weightedScoreTwelveFour1st,
    weightTwelveFour2nd =
      +parseFloat(document.getElementById("weightTwelveFour2nd").value, 10) || 0,
    scoreTwelveFour2nd = +parseFloat(document.getElementById("scoreTwelveFour2nd").value, 10) || 0,
    weightedScoreTwelveFour2nd,
    sumWeightsMLM,
    sumWeightedScoresMLM,
    currentGradeMLM,
    cumulativeGradeMLM;

  weightedScoreElevenOne1st = weightElevenOne1st * scoreElevenOne1st;
  document.getElementById("weightedScoreElevenOne1st").value = weightedScoreElevenOne1st;

  weightedScoreElevenOne2nd = weightElevenOne2nd * scoreElevenOne2nd;
  document.getElementById("weightedScoreElevenOne2nd").value = weightedScoreElevenOne2nd;

  weightedScoreElevenTwo1st = weightElevenTwo1st * scoreElevenTwo1st;
  document.getElementById("weightedScoreElevenTwo1st").value = weightedScoreElevenTwo1st;

  weightedScoreElevenTwo2nd = weightElevenTwo2nd * scoreElevenTwo2nd;
  document.getElementById("weightedScoreElevenTwo2nd").value = weightedScoreElevenTwo2nd;

  weightedScoreElevenThree1st = weightElevenThree1st * scoreElevenThree1st;
  document.getElementById("weightedScoreElevenThree1st").value = weightedScoreElevenThree1st;

  weightedScoreElevenThree2nd = weightElevenThree2nd * scoreElevenThree2nd;
  document.getElementById("weightedScoreElevenThree2nd").value = weightedScoreElevenThree2nd;

  weightedScoreElevenFour1st = weightElevenFour1st * scoreElevenFour1st;
  document.getElementById("weightedScoreElevenFour1st").value = weightedScoreElevenFour1st;

  weightedScoreElevenFour2nd = weightElevenFour2nd * scoreElevenFour2nd;
  document.getElementById("weightedScoreElevenFour2nd").value = weightedScoreElevenFour2nd;

  weightedScoreThirteenOne1st = weightThirteenOne1st * scoreThirteenOne1st;
  document.getElementById("weightedScoreThirteenOne1st").value = weightedScoreThirteenOne1st;

  weightedScoreThirteenOne2nd = weightThirteenOne2nd * scoreThirteenOne2nd;
  document.getElementById("weightedScoreThirteenOne2nd").value = weightedScoreThirteenOne2nd;

  weightedScoreThirteenTwo1st = weightThirteenTwo1st * scoreThirteenTwo1st;
  document.getElementById("weightedScoreThirteenTwo1st").value = weightedScoreThirteenTwo1st;

  weightedScoreThirteenTwo2nd = weightThirteenTwo2nd * scoreThirteenTwo2nd;
  document.getElementById("weightedScoreThirteenTwo2nd").value = weightedScoreThirteenTwo2nd;

  weightedScoreThirteenTwo3rd = weightThirteenTwo3rd * scoreThirteenTwo3rd;
  document.getElementById("weightedScoreThirteenTwo3rd").value = weightedScoreThirteenTwo3rd;

  weightedScoreThirteenThree1st = weightThirteenThree1st * scoreThirteenThree1st;
  document.getElementById("weightedScoreThirteenThree1st").value = weightedScoreThirteenThree1st;

  weightedScoreThirteenThree2nd = weightThirteenThree2nd * scoreThirteenThree2nd;
  document.getElementById("weightedScoreThirteenThree2nd").value = weightedScoreThirteenThree2nd;

  weightedScoreThirteenThree3rd = weightThirteenThree3rd * scoreThirteenThree3rd;
  document.getElementById("weightedScoreThirteenThree3rd").value = weightedScoreThirteenThree3rd;

  weightedScoreThirteenFour1st = weightThirteenFour1st * scoreThirteenFour1st;
  document.getElementById("weightedScoreThirteenFour1st").value = weightedScoreThirteenFour1st;

  weightedScoreThirteenFour2nd = weightThirteenFour2nd * scoreThirteenFour2nd;
  document.getElementById("weightedScoreThirteenFour2nd").value = weightedScoreThirteenFour2nd;

  weightedScoreThirteenFive1st = weightThirteenFive1st * scoreThirteenFive1st;
  document.getElementById("weightedScoreThirteenFive1st").value = weightedScoreThirteenFive1st;

  weightedScoreThirteenFive2nd = weightThirteenFive2nd * scoreThirteenFive2nd;
  document.getElementById("weightedScoreThirteenFive2nd").value = weightedScoreThirteenFive2nd;

  weightedScoreEightOne1st = weightEightOne1st * scoreEightOne1st;
  document.getElementById("weightedScoreEightOne1st").value = weightedScoreEightOne1st;

  weightedScoreEightOne2nd = weightEightOne2nd * scoreEightOne2nd;
  document.getElementById("weightedScoreEightOne2nd").value = weightedScoreEightOne2nd;

  weightedScoreEightTwo = weightEightTwo * scoreEightTwo;
  document.getElementById("weightedScoreEightTwo").value = weightedScoreEightTwo;

  weightedScoreEightThree1st = weightEightThree1st * scoreEightThree1st;
  document.getElementById("weightedScoreEightThree1st").value = weightedScoreEightThree1st;

  weightedScoreEightThree2nd = weightEightThree2nd * scoreEightThree2nd;
  document.getElementById("weightedScoreEightThree2nd").value = weightedScoreEightThree2nd;

  weightedScoreEightFour1st = weightEightFour1st * scoreEightFour1st;
  document.getElementById("weightedScoreEightFour1st").value = weightedScoreEightFour1st;

  weightedScoreEightFour2nd = weightEightFour2nd * scoreEightFour2nd;
  document.getElementById("weightedScoreEightFour2nd").value = weightedScoreEightFour2nd;

  weightedScoreTenOne1st = weightTenOne1st * scoreTenOne1st;
  document.getElementById("weightedScoreTenOne1st").value = weightedScoreTenOne1st;

  weightedScoreTenOne2nd = weightTenOne2nd * scoreTenOne2nd;
  document.getElementById("weightedScoreTenOne2nd").value = weightedScoreTenOne2nd;

  weightedScoreTenTwo1st = weightTenTwo1st * scoreTenTwo1st;
  document.getElementById("weightedScoreTenTwo1st").value = weightedScoreTenTwo1st;

  weightedScoreTenTwo2nd = weightTenTwo2nd * scoreTenTwo2nd;
  document.getElementById("weightedScoreTenTwo2nd").value = weightedScoreTenTwo2nd;

  weightedScoreTenThree = weightTenThree * scoreTenThree;
  document.getElementById("weightedScoreTenThree").value = weightedScoreTenThree;

  weightedScoreTenFour1st = weightTenFour1st * scoreTenFour1st;
  document.getElementById("weightedScoreTenFour1st").value = weightedScoreTenFour1st;

  weightedScoreTenFour2nd = weightTenFour2nd * scoreTenFour2nd;
  document.getElementById("weightedScoreTenFour2nd").value = weightedScoreTenFour2nd;

  weightedScoreTenFour3rd = weightTenFour3rd * scoreTenFour3rd;
  document.getElementById("weightedScoreTenFour3rd").value = weightedScoreTenFour3rd;

  weightedScoreNineOne1st = weightNineOne1st * scoreNineOne1st;
  document.getElementById("weightedScoreNineOne1st").value = weightedScoreNineOne1st;

  weightedScoreNineOne2nd = weightNineOne2nd * scoreNineOne2nd;
  document.getElementById("weightedScoreNineOne2nd").value = weightedScoreNineOne2nd;

  weightedScoreNineTwo1st = weightNineTwo1st * scoreNineTwo1st;
  document.getElementById("weightedScoreNineTwo1st").value = weightedScoreNineTwo1st;

  weightedScoreNineTwo2nd = weightNineTwo2nd * scoreNineTwo2nd;
  document.getElementById("weightedScoreNineTwo2nd").value = weightedScoreNineTwo2nd;

  weightedScoreNineThree1st = weightNineThree1st * scoreNineThree1st;
  document.getElementById("weightedScoreNineThree1st").value = weightedScoreNineThree1st;

  weightedScoreNineThree2nd = weightNineThree2nd * scoreNineThree2nd;
  document.getElementById("weightedScoreNineThree2nd").value = weightedScoreNineThree2nd;

  weightedScoreNineFour1st = weightNineFour1st * scoreNineFour1st;
  document.getElementById("weightedScoreNineFour1st").value = weightedScoreNineFour1st;

  weightedScoreNineFour2nd = weightNineFour2nd * scoreNineFour2nd;
  document.getElementById("weightedScoreNineFour2nd").value = weightedScoreNineFour2nd;

  weightedScoreTwelveOne1st = weightTwelveOne1st * scoreTwelveOne1st;
  document.getElementById("weightedScoreTwelveOne1st").value = weightedScoreTwelveOne1st;

  weightedScoreTwelveOne2nd = weightTwelveOne2nd * scoreTwelveOne2nd;
  document.getElementById("weightedScoreTwelveOne2nd").value = weightedScoreTwelveOne2nd;

  weightedScoreTwelveTwo1st = weightTwelveTwo1st * scoreTwelveTwo1st;
  document.getElementById("weightedScoreTwelveTwo1st").value = weightedScoreTwelveTwo1st;

  weightedScoreTwelveTwo2nd = weightTwelveTwo2nd * scoreTwelveTwo2nd;
  document.getElementById("weightedScoreTwelveTwo2nd").value = weightedScoreTwelveTwo2nd;

  weightedScoreTwelveThree = weightTwelveThree * scoreTwelveThree;
  document.getElementById("weightedScoreTwelveThree").value = weightedScoreTwelveThree;

  weightedScoreTwelveFour1st = weightTwelveFour1st * scoreTwelveFour1st;
  document.getElementById("weightedScoreTwelveFour1st").value = weightedScoreTwelveFour1st;

  weightedScoreTwelveFour2nd = weightTwelveFour2nd * scoreTwelveFour2nd;
  document.getElementById("weightedScoreTwelveFour2nd").value = weightedScoreTwelveFour2nd;

  sumWeightsMLM =
    weightElevenOne1st +
    weightElevenOne2nd +
    weightElevenTwo1st +
    weightElevenTwo2nd +
    weightElevenThree1st +
    weightElevenThree2nd +
    weightElevenFour1st +
    weightElevenFour2nd +
    weightThirteenOne1st +
    weightThirteenOne2nd +
    weightThirteenTwo1st +
    weightThirteenTwo2nd +
    weightThirteenTwo3rd +
    weightThirteenThree1st +
    weightThirteenThree2nd +
    weightThirteenThree3rd +
    weightThirteenFour1st +
    weightThirteenFour2nd +
    weightThirteenFive1st +
    weightThirteenFive2nd +
    weightEightOne1st +
    weightEightOne2nd +
    weightEightTwo +
    weightEightThree1st +
    weightEightThree2nd +
    weightEightFour1st +
    weightEightFour2nd +
    weightTenOne1st +
    weightTenOne2nd +
    weightTenTwo1st +
    weightTenTwo2nd +
    weightTenThree +
    weightTenFour1st +
    weightTenFour2nd +
    weightTenFour3rd +
    weightNineOne1st +
    weightNineOne2nd +
    weightNineTwo1st +
    weightNineTwo2nd +
    weightNineThree1st +
    weightNineThree2nd +
    weightNineFour1st +
    weightNineFour2nd +
    weightTwelveOne1st +
    weightTwelveOne2nd +
    weightTwelveTwo1st +
    weightTwelveTwo2nd +
    weightTwelveThree +
    weightTwelveFour1st +
    weightTwelveFour2nd;

  document.getElementById("sumWeightsMLM").value = sumWeightsMLM;

  sumWeightedScoresMLM =
    weightedScoreElevenOne1st +
    weightedScoreElevenOne2nd +
    weightedScoreElevenTwo1st +
    weightedScoreElevenTwo2nd +
    weightedScoreElevenThree1st +
    weightedScoreElevenThree2nd +
    weightedScoreElevenFour1st +
    weightedScoreElevenFour2nd +
    weightedScoreThirteenOne1st +
    weightedScoreThirteenOne2nd +
    weightedScoreThirteenTwo1st +
    weightedScoreThirteenTwo2nd +
    weightedScoreThirteenTwo3rd +
    weightedScoreThirteenThree1st +
    weightedScoreThirteenThree2nd +
    weightedScoreThirteenThree3rd +
    weightedScoreThirteenFour1st +
    weightedScoreThirteenFour2nd +
    weightedScoreThirteenFive1st +
    weightedScoreThirteenFive2nd +
    weightedScoreEightOne1st +
    weightedScoreEightOne2nd +
    weightedScoreEightTwo +
    weightedScoreEightThree1st +
    weightedScoreEightThree2nd +
    weightedScoreEightFour1st +
    weightedScoreEightFour2nd +
    weightedScoreTenOne1st +
    weightedScoreTenOne2nd +
    weightedScoreTenTwo1st +
    weightedScoreTenTwo2nd +
    weightedScoreTenThree +
    weightedScoreTenFour1st +
    weightedScoreTenFour2nd +
    weightedScoreTenFour3rd +
    weightedScoreNineOne1st +
    weightedScoreNineOne2nd +
    weightedScoreNineTwo1st +
    weightedScoreNineTwo2nd +
    weightedScoreNineThree1st +
    weightedScoreNineThree2nd +
    weightedScoreNineFour1st +
    weightedScoreNineFour2nd +
    weightedScoreTwelveOne1st +
    weightedScoreTwelveOne2nd +
    weightedScoreTwelveTwo1st +
    weightedScoreTwelveTwo2nd +
    weightedScoreTwelveThree +
    weightedScoreTwelveFour1st +
    weightedScoreTwelveFour2nd;

  document.getElementById("sumWeightedScoresMLM").value = sumWeightedScoresMLM;

  currentGradeMLM = sumWeightedScoresMLM / sumWeightsMLM;

  document.getElementById("currentGradeMLM").value = currentGradeMLM;

  cumulativeGradeMLM = sumWeightedScoresMLM / 100;

  document.getElementById("cumulativeGradeMLM").value = cumulativeGradeMLM;
}
// End MATH 2133 MLM Grade Calculations

/* 
  MATH 2133
  Given: student scores
  To Calculate: the current grade and the cumulative grade
*/

document.getElementById("gradeCourse").addEventListener("submit", gradeCourse);

function gradeCourse(event) {
  event.preventDefault();
  event.stopPropagation();

  var weightMLM = parseFloat(document.getElementById("weightMLM").value, 10) || 0,
    scoreMLM = parseFloat(document.getElementById("scoreMLM").value, 10) || 0,
    weightedScoreMLM,
    weightDB1 = +parseFloat(document.getElementById("weightDB1").value, 10) || 0,
    scoreDB1 = +parseFloat(document.getElementById("scoreDB1").value, 10) || 0,
    weightedScoreDB1,
    weightDB2 = +parseFloat(document.getElementById("weightDB2").value, 10) || 0,
    scoreDB2 = +parseFloat(document.getElementById("scoreDB2").value, 10) || 0,
    weightedScoreDB2,
    weightDB3 = +parseFloat(document.getElementById("weightDB3").value, 10) || 0,
    scoreDB3 = +parseFloat(document.getElementById("scoreDB3").value, 10) || 0,
    weightedScoreDB3,
    weightDB4 = +parseFloat(document.getElementById("weightDB4").value, 10) || 0,
    scoreDB4 = +parseFloat(document.getElementById("scoreDB4").value, 10) || 0,
    weightedScoreDB4,
    weightDB5 = +parseFloat(document.getElementById("weightDB5").value, 10) || 0,
    scoreDB5 = +parseFloat(document.getElementById("scoreDB5").value, 10) || 0,
    weightedScoreDB5,
    weightDB6 = +parseFloat(document.getElementById("weightDB6").value, 10) || 0,
    scoreDB6 = +parseFloat(document.getElementById("scoreDB6").value, 10) || 0,
    weightedScoreDB6,
    weightDB7 = +parseFloat(document.getElementById("weightDB7").value, 10) || 0,
    scoreDB7 = +parseFloat(document.getElementById("scoreDB7").value, 10) || 0,
    weightedScoreDB7,
    weightDB8 = +parseFloat(document.getElementById("weightDB8").value, 10) || 0,
    scoreDB8 = +parseFloat(document.getElementById("scoreDB8").value, 10) || 0,
    weightedScoreDB8,
    weightDB9 = +parseFloat(document.getElementById("weightDB9").value, 10) || 0,
    scoreDB9 = +parseFloat(document.getElementById("scoreDB9").value, 10) || 0,
    weightedScoreDB9,
    weightDB10 = +parseFloat(document.getElementById("weightDB10").value, 10) || 0,
    scoreDB10 = +parseFloat(document.getElementById("scoreDB10").value, 10) || 0,
    weightedScoreDB10,
    weightDB11 = +parseFloat(document.getElementById("weightDB11").value, 10) || 0,
    scoreDB11 = +parseFloat(document.getElementById("scoreDB11").value, 10) || 0,
    weightedScoreDB11,
    weightDB12 = +parseFloat(document.getElementById("weightDB12").value, 10) || 0,
    scoreDB12 = +parseFloat(document.getElementById("scoreDB12").value, 10) || 0,
    weightedScoreDB12,
    weightDB13 = +parseFloat(document.getElementById("weightDB13").value, 10) || 0,
    scoreDB13 = +parseFloat(document.getElementById("scoreDB13").value, 10) || 0,
    weightedScoreDB13,
    weightDB14 = +parseFloat(document.getElementById("weightDB14").value, 10) || 0,
    scoreDB14 = +parseFloat(document.getElementById("scoreDB14").value, 10) || 0,
    weightedScoreDB14,
    weightDB15 = +parseFloat(document.getElementById("weightDB15").value, 10) || 0,
    scoreDB15 = +parseFloat(document.getElementById("scoreDB15").value, 10) || 0,
    weightedScoreDB15,
    weightProject = +parseFloat(document.getElementById("weightProject").value, 10) || 0,
    scoreProject = +parseFloat(document.getElementById("scoreProject").value, 10) || 0,
    weightedScoreProject,
    sumWeightsCourse,
    sumWeightedScoresCourse,
    currentGradeCourse,
    cumulativeGradeCourse;

  weightedScoreMLM = weightMLM * scoreMLM;
  document.getElementById("weightedScoreMLM").value = weightedScoreMLM;

  weightedScoreDB1 = weightDB1 * scoreDB1;
  document.getElementById("weightedScoreDB1").value = weightedScoreDB1;

  weightedScoreDB2 = weightDB2 * scoreDB2;
  document.getElementById("weightedScoreDB2").value = weightedScoreDB2;

  weightedScoreDB3 = weightDB3 * scoreDB3;
  document.getElementById("weightedScoreDB3").value = weightedScoreDB3;

  weightedScoreDB4 = weightDB4 * scoreDB4;
  document.getElementById("weightedScoreDB4").value = weightedScoreDB4;

  weightedScoreDB5 = weightDB5 * scoreDB5;
  document.getElementById("weightedScoreDB5").value = weightedScoreDB5;

  weightedScoreDB6 = weightDB6 * scoreDB6;
  document.getElementById("weightedScoreDB6").value = weightedScoreDB6;

  weightedScoreDB7 = weightDB7 * scoreDB7;
  document.getElementById("weightedScoreDB7").value = weightedScoreDB7;

  weightedScoreDB8 = weightDB8 * scoreDB8;
  document.getElementById("weightedScoreDB8").value = weightedScoreDB8;

  weightedScoreDB9 = weightDB9 * scoreDB9;
  document.getElementById("weightedScoreDB9").value = weightedScoreDB9;

  weightedScoreDB10 = weightDB10 * scoreDB10;
  document.getElementById("weightedScoreDB10").value = weightedScoreDB10;

  weightedScoreDB11 = weightDB11 * scoreDB11;
  document.getElementById("weightedScoreDB11").value = weightedScoreDB11;

  weightedScoreDB12 = weightDB12 * scoreDB12;
  document.getElementById("weightedScoreDB12").value = weightedScoreDB12;

  weightedScoreDB13 = weightDB13 * scoreDB13;
  document.getElementById("weightedScoreDB13").value = weightedScoreDB13;

  weightedScoreDB14 = weightDB14 * scoreDB14;
  document.getElementById("weightedScoreDB14").value = weightedScoreDB14;

  weightedScoreDB15 = weightDB15 * scoreDB15;
  document.getElementById("weightedScoreDB15").value = weightedScoreDB15;

  weightedScoreProject = weightProject * scoreProject;
  document.getElementById("weightedScoreProject").value = weightedScoreProject;

  sumWeightsCourse =
    weightMLM +
    weightDB1 +
    weightDB2 +
    weightDB3 +
    weightDB4 +
    weightDB5 +
    weightDB6 +
    weightDB7 +
    weightDB8 +
    weightDB9 +
    weightDB10 +
    weightDB11 +
    weightDB12 +
    weightDB13 +
    weightDB14 +
    weightDB15 +
    weightProject;

  document.getElementById("sumWeightsCourse").value = sumWeightsCourse;

  sumWeightedScoresCourse =
    weightedScoreMLM +
    weightedScoreDB1 +
    weightedScoreDB2 +
    weightedScoreDB3 +
    weightedScoreDB4 +
    weightedScoreDB5 +
    weightedScoreDB6 +
    weightedScoreDB7 +
    weightedScoreDB8 +
    weightedScoreDB9 +
    weightedScoreDB10 +
    weightedScoreDB11 +
    weightedScoreDB12 +
    weightedScoreDB13 +
    weightedScoreDB14 +
    weightedScoreDB15 +
    weightedScoreProject;

  document.getElementById("sumWeightedScoresCourse").value = sumWeightedScoresCourse;

  currentGradeCourse = sumWeightedScoresCourse / sumWeightsCourse;

  document.getElementById("currentGradeCourse").value = currentGradeCourse;

  cumulativeGradeCourse = sumWeightedScoresCourse / 100;

  document.getElementById("cumulativeGradeCourse").value = cumulativeGradeCourse;
}
// End MATH 2133 MLM Grade Calculations

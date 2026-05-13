/*
    Copyright 2023 - Samuel Dominic Chukwuemeka (SamDom For Peace)
    www.samuelchukwuemeka.com
    www.chukwuemekasamuel.com
    www.samdomforpeace.com
    www.chukwuemeka-samuel.appspot.com
    www.samdomforpeace.appspot.com
    https://mathematicscourses.github.io/MathematicsEducation/
    https://mathematicscourses.github.io/MathematicsEducation/MATH2132/GradesCalculator.html
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
  MATH 2132
  Given: Student MLM scores
  To Calculate: the current MLM grade and the cumulative MLM grade
*/

document.getElementById("gradeMLM").addEventListener("submit", gradeMLM);

function gradeMLM(event) {
  event.preventDefault();
  event.stopPropagation();

  var weightOneOne1st = parseFloat(document.getElementById("weightOneOne1st").value, 10) || 0,
    scoreOneOne1st = parseFloat(document.getElementById("scoreOneOne1st").value, 10) || 0,
    weightedScoreOneOne1st,
    weightOneOne2nd = parseFloat(document.getElementById("weightOneOne2nd").value, 10) || 0,
    scoreOneOne2nd = parseFloat(document.getElementById("scoreOneOne2nd").value, 10) || 0,
    weightedScoreOneOne2nd,
    weightOneTwo1st = parseFloat(document.getElementById("weightOneTwo1st").value, 10) || 0,
    scoreOneTwo1st = parseFloat(document.getElementById("scoreOneTwo1st").value, 10) || 0,
    weightedScoreOneTwo1st,
    weightOneTwo2nd = parseFloat(document.getElementById("weightOneTwo2nd").value, 10) || 0,
    scoreOneTwo2nd = parseFloat(document.getElementById("scoreOneTwo2nd").value, 10) || 0,
    weightedScoreOneTwo2nd,
    weightThreeOne1st = parseFloat(document.getElementById("weightThreeOne1st").value, 10) || 0,
    scoreThreeOne1st = parseFloat(document.getElementById("scoreThreeOne1st").value, 10) || 0,
    weightedScoreThreeOne1st,
    weightThreeOne2nd = +parseFloat(document.getElementById("weightThreeOne2nd").value, 10) || 0,
    scoreThreeOne2nd = +parseFloat(document.getElementById("scoreThreeOne2nd").value, 10) || 0,
    weightedScoreThreeOne2nd,
    weightThreeTwo1st = parseFloat(document.getElementById("weightThreeTwo1st").value, 10) || 0,
    scoreThreeTwo1st = parseFloat(document.getElementById("scoreThreeTwo1st").value, 10) || 0,
    weightedScoreThreeTwo1st,
    weightThreeTwo2nd = +parseFloat(document.getElementById("weightThreeTwo2nd").value, 10) || 0,
    scoreThreeTwo2nd = +parseFloat(document.getElementById("scoreThreeTwo2nd").value, 10) || 0,
    weightedScoreThreeTwo2nd,
    weightThreeTwo3rd = +parseFloat(document.getElementById("weightThreeTwo3rd").value, 10) || 0,
    scoreThreeTwo3rd = +parseFloat(document.getElementById("scoreThreeTwo3rd").value, 10) || 0,
    weightedScoreThreeTwo3rd,
    weightThreeThree1st =
      +parseFloat(document.getElementById("weightThreeThree1st").value, 10) || 0,
    scoreThreeThree1st = +parseFloat(document.getElementById("scoreThreeThree1st").value, 10) || 0,
    weightedScoreThreeThree1st,
    weightThreeThree2nd =
      +parseFloat(document.getElementById("weightThreeThree2nd").value, 10) || 0,
    scoreThreeThree2nd = +parseFloat(document.getElementById("scoreThreeThree2nd").value, 10) || 0,
    weightedScoreThreeThree2nd,
    weightThreeThree3rd =
      +parseFloat(document.getElementById("weightThreeThree3rd").value, 10) || 0,
    scoreThreeThree3rd = +parseFloat(document.getElementById("scoreThreeThree3rd").value, 10) || 0,
    weightedScoreThreeThree3rd,
    weightThreeFour1st = parseFloat(document.getElementById("weightThreeFour1st").value, 10) || 0,
    scoreThreeFour1st = parseFloat(document.getElementById("scoreThreeFour1st").value, 10) || 0,
    weightedScoreThreeFour1st,
    weightThreeFour2nd = +parseFloat(document.getElementById("weightThreeFour2nd").value, 10) || 0,
    scoreThreeFour2nd = +parseFloat(document.getElementById("scoreThreeFour2nd").value, 10) || 0,
    weightedScoreThreeFour2nd,
    weightThreeFour3rd = +parseFloat(document.getElementById("weightThreeFour3rd").value, 10) || 0,
    scoreThreeFour3rd = +parseFloat(document.getElementById("scoreThreeFour3rd").value, 10) || 0,
    weightedScoreThreeFour3rd,
    weightThreeFive1st = parseFloat(document.getElementById("weightThreeFive1st").value, 10) || 0,
    scoreThreeFive1st = parseFloat(document.getElementById("scoreThreeFive1st").value, 10) || 0,
    weightedScoreThreeFive1st,
    weightThreeFive2nd = +parseFloat(document.getElementById("weightThreeFive2nd").value, 10) || 0,
    scoreThreeFive2nd = +parseFloat(document.getElementById("scoreThreeFive2nd").value, 10) || 0,
    weightedScoreThreeFive2nd,
    weightFourOne1st = parseFloat(document.getElementById("weightFourOne1st").value, 10) || 0,
    scoreFourOne1st = parseFloat(document.getElementById("scoreFourOne1st").value, 10) || 0,
    weightedScoreFourOne1st,
    weightFourOne2nd = +parseFloat(document.getElementById("weightFourOne2nd").value, 10) || 0,
    scoreFourOne2nd = +parseFloat(document.getElementById("scoreFourOne2nd").value, 10) || 0,
    weightedScoreFourOne2nd,
    weightFourTwo1st = parseFloat(document.getElementById("weightFourTwo1st").value, 10) || 0,
    scoreFourTwo1st = parseFloat(document.getElementById("scoreFourTwo1st").value, 10) || 0,
    weightedScoreFourTwo1st,
    weightFourTwo2nd = +parseFloat(document.getElementById("weightFourTwo2nd").value, 10) || 0,
    scoreFourTwo2nd = +parseFloat(document.getElementById("scoreFourTwo2nd").value, 10) || 0,
    weightedScoreFourTwo2nd,
    weightFourThree1st = parseFloat(document.getElementById("weightFourThree1st").value, 10) || 0,
    scoreFourThree1st = parseFloat(document.getElementById("scoreFourThree1st").value, 10) || 0,
    weightedScoreFourThree1st,
    weightFourThree2nd = +parseFloat(document.getElementById("weightFourThree2nd").value, 10) || 0,
    scoreFourThree2nd = +parseFloat(document.getElementById("scoreFourThree2nd").value, 10) || 0,
    weightedScoreFourThree2nd,
    weightFiveOne1st = parseFloat(document.getElementById("weightFiveOne1st").value, 10) || 0,
    scoreFiveOne1st = parseFloat(document.getElementById("scoreFiveOne1st").value, 10) || 0,
    weightedScoreFiveOne1st,
    weightFiveOne2nd = +parseFloat(document.getElementById("weightFiveOne2nd").value, 10) || 0,
    scoreFiveOne2nd = +parseFloat(document.getElementById("scoreFiveOne2nd").value, 10) || 0,
    weightedScoreFiveOne2nd,
    weightFiveOne3rd = +parseFloat(document.getElementById("weightFiveOne3rd").value, 10) || 0,
    scoreFiveOne3rd = +parseFloat(document.getElementById("scoreFiveOne3rd").value, 10) || 0,
    weightedScoreFiveOne3rd,
    weightFiveTwo1st = parseFloat(document.getElementById("weightFiveTwo1st").value, 10) || 0,
    scoreFiveTwo1st = parseFloat(document.getElementById("scoreFiveTwo1st").value, 10) || 0,
    weightedScoreFiveTwo1st,
    weightFiveTwo2nd = +parseFloat(document.getElementById("weightFiveTwo2nd").value, 10) || 0,
    scoreFiveTwo2nd = +parseFloat(document.getElementById("scoreFiveTwo2nd").value, 10) || 0,
    weightedScoreFiveTwo2nd,
    weightFiveTwo3rd = +parseFloat(document.getElementById("weightFiveTwo3rd").value, 10) || 0,
    scoreFiveTwo3rd = +parseFloat(document.getElementById("scoreFiveTwo3rd").value, 10) || 0,
    weightedScoreFiveTwo3rd,
    weightSixOne1st = parseFloat(document.getElementById("weightSixOne1st").value, 10) || 0,
    scoreSixOne1st = parseFloat(document.getElementById("scoreSixOne1st").value, 10) || 0,
    weightedScoreSixOne1st,
    weightSixOne2nd = +parseFloat(document.getElementById("weightSixOne2nd").value, 10) || 0,
    scoreSixOne2nd = +parseFloat(document.getElementById("scoreSixOne2nd").value, 10) || 0,
    weightedScoreSixOne2nd,
    weightSixOne3rd = +parseFloat(document.getElementById("weightSixOne3rd").value, 10) || 0,
    scoreSixOne3rd = +parseFloat(document.getElementById("scoreSixOne3rd").value, 10) || 0,
    weightedScoreSixOne3rd,
    weightSixTwo1st = parseFloat(document.getElementById("weightSixTwo1st").value, 10) || 0,
    scoreSixTwo1st = parseFloat(document.getElementById("scoreSixTwo1st").value, 10) || 0,
    weightedScoreSixTwo1st,
    weightSixTwo2nd = +parseFloat(document.getElementById("weightSixTwo2nd").value, 10) || 0,
    scoreSixTwo2nd = +parseFloat(document.getElementById("scoreSixTwo2nd").value, 10) || 0,
    weightedScoreSixTwo2nd,
    weightSixThree1st = parseFloat(document.getElementById("weightSixThree1st").value, 10) || 0,
    scoreSixThree1st = parseFloat(document.getElementById("scoreSixThree1st").value, 10) || 0,
    weightedScoreSixThree1st,
    weightSixThree2nd = +parseFloat(document.getElementById("weightSixThree2nd").value, 10) || 0,
    scoreSixThree2nd = +parseFloat(document.getElementById("scoreSixThree2nd").value, 10) || 0,
    weightedScoreSixThree2nd,
    weightSixThree3rd = +parseFloat(document.getElementById("weightSixThree3rd").value, 10) || 0,
    scoreSixThree3rd = +parseFloat(document.getElementById("scoreSixThree3rd").value, 10) || 0,
    weightedScoreSixThree3rd,
    weightSixFour1st = parseFloat(document.getElementById("weightSixFour1st").value, 10) || 0,
    scoreSixFour1st = parseFloat(document.getElementById("scoreSixFour1st").value, 10) || 0,
    weightedScoreSixFour1st,
    weightSixFour2nd = +parseFloat(document.getElementById("weightSixFour2nd").value, 10) || 0,
    scoreSixFour2nd = +parseFloat(document.getElementById("scoreSixFour2nd").value, 10) || 0,
    weightedScoreSixFour2nd,
    weightSixFour3rd = +parseFloat(document.getElementById("weightSixFour3rd").value, 10) || 0,
    scoreSixFour3rd = +parseFloat(document.getElementById("scoreSixFour3rd").value, 10) || 0,
    weightedScoreSixFour3rd,
    weightSevenOne1st = parseFloat(document.getElementById("weightSevenOne1st").value, 10) || 0,
    scoreSevenOne1st = parseFloat(document.getElementById("scoreSevenOne1st").value, 10) || 0,
    weightedScoreSevenOne1st,
    weightSevenOne2nd = +parseFloat(document.getElementById("weightSevenOne2nd").value, 10) || 0,
    scoreSevenOne2nd = +parseFloat(document.getElementById("scoreSevenOne2nd").value, 10) || 0,
    weightedScoreSevenOne2nd,
    weightSevenTwo1st = parseFloat(document.getElementById("weightSevenTwo1st").value, 10) || 0,
    scoreSevenTwo1st = parseFloat(document.getElementById("scoreSevenTwo1st").value, 10) || 0,
    weightedScoreSevenTwo1st,
    weightSevenTwo2nd = +parseFloat(document.getElementById("weightSevenTwo2nd").value, 10) || 0,
    scoreSevenTwo2nd = +parseFloat(document.getElementById("scoreSevenTwo2nd").value, 10) || 0,
    weightedScoreSevenTwo2nd,
    weightSevenTwo3rd = +parseFloat(document.getElementById("weightSevenTwo3rd").value, 10) || 0,
    scoreSevenTwo3rd = +parseFloat(document.getElementById("scoreSevenTwo3rd").value, 10) || 0,
    weightedScoreSevenTwo3rd,
    weightSevenThree1st = parseFloat(document.getElementById("weightSevenThree1st").value, 10) || 0,
    scoreSevenThree1st = parseFloat(document.getElementById("scoreSevenThree1st").value, 10) || 0,
    weightedScoreSevenThree1st,
    weightSevenThree2nd =
      +parseFloat(document.getElementById("weightSevenThree2nd").value, 10) || 0,
    scoreSevenThree2nd = +parseFloat(document.getElementById("scoreSevenThree2nd").value, 10) || 0,
    weightedScoreSevenThree2nd,
    weightSevenFour1st = parseFloat(document.getElementById("weightSevenFour1st").value, 10) || 0,
    scoreSevenFour1st = parseFloat(document.getElementById("scoreSevenFour1st").value, 10) || 0,
    weightedScoreSevenFour1st,
    weightSevenFour2nd = +parseFloat(document.getElementById("weightSevenFour2nd").value, 10) || 0,
    scoreSevenFour2nd = +parseFloat(document.getElementById("scoreSevenFour2nd").value, 10) || 0,
    weightedScoreSevenFour2nd,
    weightSevenFour3rd = +parseFloat(document.getElementById("weightSevenFour3rd").value, 10) || 0,
    scoreSevenFour3rd = +parseFloat(document.getElementById("scoreSevenFour3rd").value, 10) || 0,
    weightedScoreSevenFour3rd,
    weightSevenFive1st = parseFloat(document.getElementById("weightSevenFive1st").value, 10) || 0,
    scoreSevenFive1st = parseFloat(document.getElementById("scoreSevenFive1st").value, 10) || 0,
    weightedScoreSevenFive1st,
    weightSevenFive2nd = +parseFloat(document.getElementById("weightSevenFive2nd").value, 10) || 0,
    scoreSevenFive2nd = +parseFloat(document.getElementById("scoreSevenFive2nd").value, 10) || 0,
    weightedScoreSevenFive2nd,
    sumWeightsMLM,
    sumWeightedScoresMLM,
    currentGradeMLM,
    cumulativeGradeMLM;

  weightedScoreOneOne1st = weightOneOne1st * scoreOneOne1st;
  document.getElementById("weightedScoreOneOne1st").value = weightedScoreOneOne1st;

  weightedScoreOneOne2nd = weightOneOne2nd * scoreOneOne2nd;
  document.getElementById("weightedScoreOneOne2nd").value = weightedScoreOneOne2nd;

  weightedScoreOneTwo1st = weightOneTwo1st * scoreOneTwo1st;
  document.getElementById("weightedScoreOneTwo1st").value = weightedScoreOneTwo1st;

  weightedScoreOneTwo2nd = weightOneTwo2nd * scoreOneTwo2nd;
  document.getElementById("weightedScoreOneTwo2nd").value = weightedScoreOneTwo2nd;

  weightedScoreThreeOne1st = weightThreeOne1st * scoreThreeOne1st;
  document.getElementById("weightedScoreThreeOne1st").value = weightedScoreThreeOne1st;

  weightedScoreThreeOne2nd = weightThreeOne2nd * scoreThreeOne2nd;
  document.getElementById("weightedScoreThreeOne2nd").value = weightedScoreThreeOne2nd;

  weightedScoreThreeTwo1st = weightThreeTwo1st * scoreThreeTwo1st;
  document.getElementById("weightedScoreThreeTwo1st").value = weightedScoreThreeTwo1st;

  weightedScoreThreeTwo2nd = weightThreeTwo2nd * scoreThreeTwo2nd;
  document.getElementById("weightedScoreThreeTwo2nd").value = weightedScoreThreeTwo2nd;

  weightedScoreThreeTwo3rd = weightThreeTwo3rd * scoreThreeTwo3rd;
  document.getElementById("weightedScoreThreeTwo3rd").value = weightedScoreThreeTwo3rd;

  weightedScoreThreeThree1st = weightThreeThree1st * scoreThreeThree1st;
  document.getElementById("weightedScoreThreeThree1st").value = weightedScoreThreeThree1st;

  weightedScoreThreeThree2nd = weightThreeThree2nd * scoreThreeThree2nd;
  document.getElementById("weightedScoreThreeThree2nd").value = weightedScoreThreeThree2nd;

  weightedScoreThreeThree3rd = weightThreeThree3rd * scoreThreeThree3rd;
  document.getElementById("weightedScoreThreeThree3rd").value = weightedScoreThreeThree3rd;

  weightedScoreThreeFour1st = weightThreeFour1st * scoreThreeFour1st;
  document.getElementById("weightedScoreThreeFour1st").value = weightedScoreThreeFour1st;

  weightedScoreThreeFour2nd = weightThreeFour2nd * scoreThreeFour2nd;
  document.getElementById("weightedScoreThreeFour2nd").value = weightedScoreThreeFour2nd;

  weightedScoreThreeFour3rd = weightThreeFour3rd * scoreThreeFour3rd;
  document.getElementById("weightedScoreThreeFour3rd").value = weightedScoreThreeFour3rd;

  weightedScoreThreeFive1st = weightThreeFive1st * scoreThreeFive1st;
  document.getElementById("weightedScoreThreeFive1st").value = weightedScoreThreeFive1st;

  weightedScoreThreeFive2nd = weightThreeFive2nd * scoreThreeFive2nd;
  document.getElementById("weightedScoreThreeFive2nd").value = weightedScoreThreeFive2nd;

  weightedScoreFourOne1st = weightFourOne1st * scoreFourOne1st;
  document.getElementById("weightedScoreFourOne1st").value = weightedScoreFourOne1st;

  weightedScoreFourOne2nd = weightFourOne2nd * scoreFourOne2nd;
  document.getElementById("weightedScoreFourOne2nd").value = weightedScoreFourOne2nd;

  weightedScoreFourTwo1st = weightFourTwo1st * scoreFourTwo1st;
  document.getElementById("weightedScoreFourTwo1st").value = weightedScoreFourTwo1st;

  weightedScoreFourTwo2nd = weightFourTwo2nd * scoreFourTwo2nd;
  document.getElementById("weightedScoreFourTwo2nd").value = weightedScoreFourTwo2nd;

  weightedScoreFourThree1st = weightFourThree1st * scoreFourThree1st;
  document.getElementById("weightedScoreFourThree1st").value = weightedScoreFourThree1st;

  weightedScoreFourThree2nd = weightFourThree2nd * scoreFourThree2nd;
  document.getElementById("weightedScoreFourThree2nd").value = weightedScoreFourThree2nd;

  weightedScoreFiveOne1st = weightFiveOne1st * scoreFiveOne1st;
  document.getElementById("weightedScoreFiveOne1st").value = weightedScoreFiveOne1st;

  weightedScoreFiveOne2nd = weightFiveOne2nd * scoreFiveOne2nd;
  document.getElementById("weightedScoreFiveOne2nd").value = weightedScoreFiveOne2nd;

  weightedScoreFiveOne3rd = weightFiveOne3rd * scoreFiveOne3rd;
  document.getElementById("weightedScoreFiveOne3rd").value = weightedScoreFiveOne3rd;

  weightedScoreFiveTwo1st = weightFiveTwo1st * scoreFiveTwo1st;
  document.getElementById("weightedScoreFiveTwo1st").value = weightedScoreFiveTwo1st;

  weightedScoreFiveTwo2nd = weightFiveTwo2nd * scoreFiveTwo2nd;
  document.getElementById("weightedScoreFiveTwo2nd").value = weightedScoreFiveTwo2nd;

  weightedScoreFiveTwo3rd = weightFiveTwo3rd * scoreFiveTwo3rd;
  document.getElementById("weightedScoreFiveTwo3rd").value = weightedScoreFiveTwo3rd;

  weightedScoreSixOne1st = weightSixOne1st * scoreSixOne1st;
  document.getElementById("weightedScoreSixOne1st").value = weightedScoreSixOne1st;

  weightedScoreSixOne2nd = weightSixOne2nd * scoreSixOne2nd;
  document.getElementById("weightedScoreSixOne2nd").value = weightedScoreSixOne2nd;

  weightedScoreSixOne3rd = weightSixOne3rd * scoreSixOne3rd;
  document.getElementById("weightedScoreSixOne3rd").value = weightedScoreSixOne3rd;

  weightedScoreSixTwo1st = weightSixTwo1st * scoreSixTwo1st;
  document.getElementById("weightedScoreSixTwo1st").value = weightedScoreSixTwo1st;

  weightedScoreSixTwo2nd = weightSixTwo2nd * scoreSixTwo2nd;
  document.getElementById("weightedScoreSixTwo2nd").value = weightedScoreSixTwo2nd;

  weightedScoreSixThree1st = weightSixThree1st * scoreSixThree1st;
  document.getElementById("weightedScoreSixThree1st").value = weightedScoreSixThree1st;

  weightedScoreSixThree2nd = weightSixThree2nd * scoreSixThree2nd;
  document.getElementById("weightedScoreSixThree2nd").value = weightedScoreSixThree2nd;

  weightedScoreSixThree3rd = weightSixThree3rd * scoreSixThree3rd;
  document.getElementById("weightedScoreSixThree3rd").value = weightedScoreSixThree3rd;

  weightedScoreSixFour1st = weightSixFour1st * scoreSixFour1st;
  document.getElementById("weightedScoreSixFour1st").value = weightedScoreSixFour1st;

  weightedScoreSixFour2nd = weightSixFour2nd * scoreSixFour2nd;
  document.getElementById("weightedScoreSixFour2nd").value = weightedScoreSixFour2nd;

  weightedScoreSixFour3rd = weightSixFour3rd * scoreSixFour3rd;
  document.getElementById("weightedScoreSixFour3rd").value = weightedScoreSixFour3rd;

  weightedScoreSevenOne1st = weightSevenOne1st * scoreSevenOne1st;
  document.getElementById("weightedScoreSevenOne1st").value = weightedScoreSevenOne1st;

  weightedScoreSevenOne2nd = weightSevenOne2nd * scoreSevenOne2nd;
  document.getElementById("weightedScoreSevenOne2nd").value = weightedScoreSevenOne2nd;

  weightedScoreSevenTwo1st = weightSevenTwo1st * scoreSevenTwo1st;
  document.getElementById("weightedScoreSevenTwo1st").value = weightedScoreSevenTwo1st;

  weightedScoreSevenTwo2nd = weightSevenTwo2nd * scoreSevenTwo2nd;
  document.getElementById("weightedScoreSevenTwo2nd").value = weightedScoreSevenTwo2nd;

  weightedScoreSevenTwo3rd = weightSevenTwo3rd * scoreSevenTwo3rd;
  document.getElementById("weightedScoreSevenTwo3rd").value = weightedScoreSevenTwo3rd;

  weightedScoreSevenThree1st = weightSevenThree1st * scoreSevenThree1st;
  document.getElementById("weightedScoreSevenThree1st").value = weightedScoreSevenThree1st;

  weightedScoreSevenThree2nd = weightSevenThree2nd * scoreSevenThree2nd;
  document.getElementById("weightedScoreSevenThree2nd").value = weightedScoreSevenThree2nd;

  weightedScoreSevenFour1st = weightSevenFour1st * scoreSevenFour1st;
  document.getElementById("weightedScoreSevenFour1st").value = weightedScoreSevenFour1st;

  weightedScoreSevenFour2nd = weightSevenFour2nd * scoreSevenFour2nd;
  document.getElementById("weightedScoreSevenFour2nd").value = weightedScoreSevenFour2nd;

  weightedScoreSevenFour3rd = weightSevenFour3rd * scoreSevenFour3rd;
  document.getElementById("weightedScoreSevenFour3rd").value = weightedScoreSevenFour3rd;

  weightedScoreSevenFive1st = weightSevenFive1st * scoreSevenFive1st;
  document.getElementById("weightedScoreSevenFive1st").value = weightedScoreSevenFive1st;

  weightedScoreSevenFive2nd = weightSevenFive2nd * scoreSevenFive2nd;
  document.getElementById("weightedScoreSevenFive2nd").value = weightedScoreSevenFive2nd;

  sumWeightsMLM =
    weightOneOne1st +
    weightOneOne2nd +
    weightOneTwo1st +
    weightOneTwo2nd +
    weightThreeOne1st +
    weightThreeOne2nd +
    weightThreeTwo1st +
    weightThreeTwo2nd +
    weightThreeTwo3rd +
    weightThreeThree1st +
    weightThreeThree2nd +
    weightThreeThree3rd +
    weightThreeFour1st +
    weightThreeFour2nd +
    weightThreeFour3rd +
    weightThreeFive1st +
    weightThreeFive2nd +
    weightFourOne1st +
    weightFourOne2nd +
    weightFourTwo1st +
    weightFourTwo2nd +
    weightFourThree1st +
    weightFourThree2nd +
    weightFiveOne1st +
    weightFiveOne2nd +
    weightFiveOne3rd +
    weightFiveTwo1st +
    weightFiveTwo2nd +
    weightFiveTwo3rd +
    weightSixOne1st +
    weightSixOne2nd +
    weightSixOne3rd +
    weightSixTwo1st +
    weightSixTwo2nd +
    weightSixThree1st +
    weightSixThree2nd +
    weightSixThree3rd +
    weightSixFour1st +
    weightSixFour2nd +
    weightSixFour3rd +
    weightSevenOne1st +
    weightSevenOne2nd +
    weightSevenTwo1st +
    weightSevenTwo2nd +
    weightSevenTwo3rd +
    weightSevenThree1st +
    weightSevenThree2nd +
    weightSevenFour1st +
    weightSevenFour2nd +
    weightSevenFour3rd +
    weightSevenFive1st +
    weightSevenFive2nd;

  document.getElementById("sumWeightsMLM").value = sumWeightsMLM;

  sumWeightedScoresMLM =
    weightedScoreOneOne1st +
    weightedScoreOneOne2nd +
    weightedScoreOneTwo1st +
    weightedScoreOneTwo2nd +
    weightedScoreThreeOne1st +
    weightedScoreThreeOne2nd +
    weightedScoreThreeTwo1st +
    weightedScoreThreeTwo2nd +
    weightedScoreThreeTwo3rd +
    weightedScoreThreeThree1st +
    weightedScoreThreeThree2nd +
    weightedScoreThreeThree3rd +
    weightedScoreThreeFour1st +
    weightedScoreThreeFour2nd +
    weightedScoreThreeFour3rd +
    weightedScoreThreeFive1st +
    weightedScoreThreeFive2nd +
    weightedScoreFourOne1st +
    weightedScoreFourOne2nd +
    weightedScoreFourTwo1st +
    weightedScoreFourTwo2nd +
    weightedScoreFourThree1st +
    weightedScoreFourThree2nd +
    weightedScoreFiveOne1st +
    weightedScoreFiveOne2nd +
    weightedScoreFiveOne3rd +
    weightedScoreFiveTwo1st +
    weightedScoreFiveTwo2nd +
    weightedScoreFiveTwo3rd +
    weightedScoreSixOne1st +
    weightedScoreSixOne2nd +
    weightedScoreSixOne3rd +
    weightedScoreSixTwo1st +
    weightedScoreSixTwo2nd +
    weightedScoreSixThree1st +
    weightedScoreSixThree2nd +
    weightedScoreSixThree3rd +
    weightedScoreSixFour1st +
    weightedScoreSixFour2nd +
    weightedScoreSixFour3rd +
    weightedScoreSevenOne1st +
    weightedScoreSevenOne2nd +
    weightedScoreSevenTwo1st +
    weightedScoreSevenTwo2nd +
    weightedScoreSevenTwo3rd +
    weightedScoreSevenThree1st +
    weightedScoreSevenThree2nd +
    weightedScoreSevenFour1st +
    weightedScoreSevenFour2nd +
    weightedScoreSevenFour3rd +
    weightedScoreSevenFive1st +
    weightedScoreSevenFive2nd;

  document.getElementById("sumWeightedScoresMLM").value = sumWeightedScoresMLM;

  currentGradeMLM = sumWeightedScoresMLM / sumWeightsMLM;

  document.getElementById("currentGradeMLM").value = currentGradeMLM;

  cumulativeGradeMLM = sumWeightedScoresMLM / 100;

  document.getElementById("cumulativeGradeMLM").value = cumulativeGradeMLM;
}
// End MATH 2132 MLM Grade Calculations

/* 
  MATH 2132
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
// End MATH 2132 MLM Grade Calculations

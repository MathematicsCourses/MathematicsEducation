/*
    Copyright 2023 - Samuel Dominic Chukwuemeka (SamDom For Peace)
    www.samuelchukwuemeka.com
    www.chukwuemekasamuel.com
    www.samdomforpeace.com
    www.chukwuemeka-samuel.appspot.com
    www.samdomforpeace.appspot.com
    https://mathematicseducation.appspot.com/
    https://mathematicseducation.appspot.com/MATH1010/GradesCalculator.html
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
  if (e.style.display === 'block' || e.style.display ==='') e.style.display = 'none';
  else e.style.display = 'block';
}


// Answers to the Questions
function toggle(answer) {
  var e = document.getElementById(answer);
  if (e.style.display === 'block' || e.style.display ==='') e.style.display = 'none';
  else e.style.display = 'block';
}

"use strict";

/* 
  MATH 1010
  Given: Student MLM scores
  To Calculate: the current MLM grade and the cumulative MLM grade
*/

document.getElementById("gradeMLM").addEventListener("submit", gradeMLM);

function gradeMLM(event) {
    event.preventDefault();
    event.stopPropagation();

    var weightZeroOne = parseFloat(document.getElementById("weightZeroOne").value, 10) || 0,
        scoreZeroOne = parseFloat(document.getElementById("scoreZeroOne").value, 10) || 0,
        weightedScoreZeroOne,

        weightOneOne = parseFloat(document.getElementById("weightOneOne").value, 10) || 0,
        scoreOneOne = parseFloat(document.getElementById("scoreOneOne").value, 10) || 0,
        weightedScoreOneOne,

        weightOneTwo = parseFloat(document.getElementById("weightOneTwo").value, 10) || 0,
        scoreOneTwo = parseFloat(document.getElementById("scoreOneTwo").value, 10) || 0,
        weightedScoreOneTwo,

        weightOneThree = parseFloat(document.getElementById("weightOneThree").value, 10) || 0,
        scoreOneThree = parseFloat(document.getElementById("scoreOneThree").value, 10) || 0,
        weightedScoreOneThree,

        weightOneFour = parseFloat(document.getElementById("weightOneFour").value, 10) || 0,
        scoreOneFour = parseFloat(document.getElementById("scoreOneFour").value, 10) || 0,
        weightedScoreOneFour,
    
        weightTwoOne1st = parseFloat(document.getElementById("weightTwoOne1st").value, 10) || 0,
        scoreTwoOne1st = parseFloat(document.getElementById("scoreTwoOne1st").value, 10) || 0,
        weightedScoreTwoOne1st,

        weightTwoOne2nd =+ parseFloat(document.getElementById("weightTwoOne2nd").value, 10) || 0,
        scoreTwoOne2nd =+ parseFloat(document.getElementById("scoreTwoOne2nd").value, 10) || 0,
        weightedScoreTwoOne2nd,

        weightTwoTwo =+ parseFloat(document.getElementById("weightTwoTwo").value, 10) || 0,
        scoreTwoTwo =+ parseFloat(document.getElementById("scoreTwoTwo").value, 10) || 0,
        weightedScoreTwoTwo,

        weightTwoThree1st =+ parseFloat(document.getElementById("weightTwoThree1st").value, 10) || 0,
        scoreTwoThree1st =+ parseFloat(document.getElementById("scoreTwoThree1st").value, 10) || 0,
        weightedScoreTwoThree1st,

        weightTwoThree2nd =+ parseFloat(document.getElementById("weightTwoThree2nd").value, 10) || 0,
        scoreTwoThree2nd =+ parseFloat(document.getElementById("scoreTwoThree2nd").value, 10) || 0,
        weightedScoreTwoThree2nd,

        weightTwoFour1st =+ parseFloat(document.getElementById("weightTwoFour1st").value, 10) || 0,
        scoreTwoFour1st =+ parseFloat(document.getElementById("scoreTwoFour1st").value, 10) || 0,
        weightedScoreTwoFour1st,

        weightTwoFour2nd =+ parseFloat(document.getElementById("weightTwoFour2nd").value, 10) || 0,
        scoreTwoFour2nd =+ parseFloat(document.getElementById("scoreTwoFour2nd").value, 10) || 0,
        weightedScoreTwoFour2nd,

        weightFiveFour = parseFloat(document.getElementById("weightFiveFour").value, 10) || 0,
        scoreFiveFour = parseFloat(document.getElementById("scoreFiveFour").value, 10) || 0,
        weightedScoreFiveFour,

        weightSevenOne = parseFloat(document.getElementById("weightSevenOne").value, 10) || 0,
        scoreSevenOne = parseFloat(document.getElementById("scoreSevenOne").value, 10) || 0,
        weightedScoreSevenOne,

        weightSevenTwo = parseFloat(document.getElementById("weightSevenTwo").value, 10) || 0,
        scoreSevenTwo = parseFloat(document.getElementById("scoreSevenTwo").value, 10) || 0,
        weightedScoreSevenTwo,

        weightSevenThree = parseFloat(document.getElementById("weightSevenThree").value, 10) || 0,
        scoreSevenThree = parseFloat(document.getElementById("scoreSevenThree").value, 10) || 0,
        weightedScoreSevenThree,

        weightSevenFour = parseFloat(document.getElementById("weightSevenFour").value, 10) || 0,
        scoreSevenFour = parseFloat(document.getElementById("scoreSevenFour").value, 10) || 0,
        weightedScoreSevenFour,

        weightSevenFive = parseFloat(document.getElementById("weightSevenFive").value, 10) || 0,
        scoreSevenFive = parseFloat(document.getElementById("scoreSevenFive").value, 10) || 0,
        weightedScoreSevenFive,

        weightSevenSix = parseFloat(document.getElementById("weightSevenSix").value, 10) || 0,
        scoreSevenSix = parseFloat(document.getElementById("scoreSevenSix").value, 10) || 0,
        weightedScoreSevenSix,

        weightNineOne = parseFloat(document.getElementById("weightNineOne").value, 10) || 0,
        scoreNineOne = parseFloat(document.getElementById("scoreNineOne").value, 10) || 0,
        weightedScoreNineOne,

        weightNineTwo = parseFloat(document.getElementById("weightNineTwo").value, 10) || 0,
        scoreNineTwo = parseFloat(document.getElementById("scoreNineTwo").value, 10) || 0,
        weightedScoreNineTwo,

        weightNineThree = parseFloat(document.getElementById("weightNineThree").value, 10) || 0,
        scoreNineThree = parseFloat(document.getElementById("scoreNineThree").value, 10) || 0,
        weightedScoreNineThree,

        weightNineFour = parseFloat(document.getElementById("weightNineFour").value, 10) || 0,
        scoreNineFour = parseFloat(document.getElementById("scoreNineFour").value, 10) || 0,
        weightedScoreNineFour,

        weightNineSix = parseFloat(document.getElementById("weightNineSix").value, 10) || 0,
        scoreNineSix = parseFloat(document.getElementById("scoreNineSix").value, 10) || 0,
        weightedScoreNineSix,

        weightNineSeven = parseFloat(document.getElementById("weightNineSeven").value, 10) || 0,
        scoreNineSeven = parseFloat(document.getElementById("scoreNineSeven").value, 10) || 0,
        weightedScoreNineSeven,
        
        weightTenOne1st = parseFloat(document.getElementById("weightTenOne1st").value, 10) || 0,
        scoreTenOne1st = parseFloat(document.getElementById("scoreTenOne1st").value, 10) || 0,
        weightedScoreTenOne1st,

        weightTenOne2nd =+ parseFloat(document.getElementById("weightTenOne2nd").value, 10) || 0,
        scoreTenOne2nd =+ parseFloat(document.getElementById("scoreTenOne2nd").value, 10) || 0,
        weightedScoreTenOne2nd,
        
        weightTenTwo = parseFloat(document.getElementById("weightTenTwo").value, 10) || 0,
        scoreTenTwo = parseFloat(document.getElementById("scoreTenTwo").value, 10) || 0,
        weightedScoreTenTwo,

        weightTenThree = parseFloat(document.getElementById("weightTenThree").value, 10) || 0,
        scoreTenThree = parseFloat(document.getElementById("scoreTenThree").value, 10) || 0,
        weightedScoreTenThree,

        weightTenFour1st =+ parseFloat(document.getElementById("weightTenFour1st").value, 10) || 0,
        scoreTenFour1st =+ parseFloat(document.getElementById("scoreTenFour1st").value, 10) || 0,
        weightedScoreTenFour1st,

        weightTenFour2nd =+ parseFloat(document.getElementById("weightTenFour2nd").value, 10) || 0,
        scoreTenFour2nd =+ parseFloat(document.getElementById("scoreTenFour2nd").value, 10) || 0,
        weightedScoreTenFour2nd,

        weightElevenOne1st = parseFloat(document.getElementById("weightElevenOne1st").value, 10) || 0,
        scoreElevenOne1st = parseFloat(document.getElementById("scoreElevenOne1st").value, 10) || 0,
        weightedScoreElevenOne1st,

        weightElevenOne2nd =+ parseFloat(document.getElementById("weightElevenOne2nd").value, 10) || 0,
        scoreElevenOne2nd =+ parseFloat(document.getElementById("scoreElevenOne2nd").value, 10) || 0,
        weightedScoreElevenOne2nd,

        weightElevenTwo1st = parseFloat(document.getElementById("weightElevenTwo1st").value, 10) || 0,
        scoreElevenTwo1st = parseFloat(document.getElementById("scoreElevenTwo1st").value, 10) || 0,
        weightedScoreElevenTwo1st,

        weightElevenTwo2nd =+ parseFloat(document.getElementById("weightElevenTwo2nd").value, 10) || 0,
        scoreElevenTwo2nd =+ parseFloat(document.getElementById("scoreElevenTwo2nd").value, 10) || 0,
        weightedScoreElevenTwo2nd,

        weightElevenThree = parseFloat(document.getElementById("weightElevenThree").value, 10) || 0,
        scoreElevenThree = parseFloat(document.getElementById("scoreElevenThree").value, 10) || 0,
        weightedScoreElevenThree,

        weightElevenFour1st =+ parseFloat(document.getElementById("weightElevenFour1st").value, 10) || 0,
        scoreElevenFour1st =+ parseFloat(document.getElementById("scoreElevenFour1st").value, 10) || 0,
        weightedScoreElevenFour1st,

        weightElevenFour2nd =+ parseFloat(document.getElementById("weightElevenFour2nd").value, 10) || 0,
        scoreElevenFour2nd =+ parseFloat(document.getElementById("scoreElevenFour2nd").value, 10) || 0,
        weightedScoreElevenFour2nd,

        weightTwelveOne = parseFloat(document.getElementById("weightTwelveOne").value, 10) || 0,
        scoreTwelveOne = parseFloat(document.getElementById("scoreTwelveOne").value, 10) || 0,
        weightedScoreTwelveOne,

        weightTwelveThree = parseFloat(document.getElementById("weightTwelveThree").value, 10) || 0,
        scoreTwelveThree = parseFloat(document.getElementById("scoreTwelveThree").value, 10) || 0,
        weightedScoreTwelveThree,

        weightTwelveFour = parseFloat(document.getElementById("weightTwelveFour").value, 10) || 0,
        scoreTwelveFour = parseFloat(document.getElementById("scoreTwelveFour").value, 10) || 0,
        weightedScoreTwelveFour,

        weightTwelveSix1st = parseFloat(document.getElementById("weightTwelveSix1st").value, 10) || 0,
        scoreTwelveSix1st = parseFloat(document.getElementById("scoreTwelveSix1st").value, 10) || 0,
        weightedScoreTwelveSix1st,

        weightTwelveSix2nd =+ parseFloat(document.getElementById("weightTwelveSix2nd").value, 10) || 0,
        scoreTwelveSix2nd =+ parseFloat(document.getElementById("scoreTwelveSix2nd").value, 10) || 0,
        weightedScoreTwelveSix2nd,

        weightTwelveEight = parseFloat(document.getElementById("weightTwelveEight").value, 10) || 0,
        scoreTwelveEight = parseFloat(document.getElementById("scoreTwelveEight").value, 10) || 0,
        weightedScoreTwelveEight,

        weightTwelveNine = parseFloat(document.getElementById("weightTwelveNine").value, 10) || 0,
        scoreTwelveNine = parseFloat(document.getElementById("scoreTwelveNine").value, 10) || 0,
        weightedScoreTwelveNine,

        weightThirteenOne1st = parseFloat(document.getElementById("weightThirteenOne1st").value, 10) || 0,
        scoreThirteenOne1st = parseFloat(document.getElementById("scoreThirteenOne1st").value, 10) || 0,
        weightedScoreThirteenOne1st,

        weightThirteenOne2nd =+ parseFloat(document.getElementById("weightThirteenOne2nd").value, 10) || 0,
        scoreThirteenOne2nd =+ parseFloat(document.getElementById("scoreThirteenOne2nd").value, 10) || 0,
        weightedScoreThirteenOne2nd,

        weightThirteenTwo =+ parseFloat(document.getElementById("weightThirteenTwo").value, 10) || 0,
        scoreThirteenTwo =+ parseFloat(document.getElementById("scoreThirteenTwo").value, 10) || 0,
        weightedScoreThirteenTwo,

        weightThirteenThree1st =+ parseFloat(document.getElementById("weightThirteenThree1st").value, 10) || 0,
        scoreThirteenThree1st =+ parseFloat(document.getElementById("scoreThirteenThree1st").value, 10) || 0,
        weightedScoreThirteenThree1st,

        weightThirteenThree2nd =+ parseFloat(document.getElementById("weightThirteenThree2nd").value, 10) || 0,
        scoreThirteenThree2nd =+ parseFloat(document.getElementById("scoreThirteenThree2nd").value, 10) || 0,
        weightedScoreThirteenThree2nd,

        weightThirteenFour = parseFloat(document.getElementById("weightThirteenFour").value, 10) || 0,
        scoreThirteenFour = parseFloat(document.getElementById("scoreThirteenFour").value, 10) || 0,
        weightedScoreThirteenFour,

        weightFourteenSeven = parseFloat(document.getElementById("weightFourteenSeven").value, 10) || 0,
        scoreFourteenSeven = parseFloat(document.getElementById("scoreFourteenSeven").value, 10) || 0,
        weightedScoreFourteenSeven,

        weightFifteenOne = parseFloat(document.getElementById("weightFifteenOne").value, 10) || 0,
        scoreFifteenOne = parseFloat(document.getElementById("scoreFifteenOne").value, 10) || 0,
        weightedScoreFifteenOne,

        weightFifteenTwo = parseFloat(document.getElementById("weightFifteenTwo").value, 10) || 0,
        scoreFifteenTwo = parseFloat(document.getElementById("scoreFifteenTwo").value, 10) || 0,
        weightedScoreFifteenTwo,

        weightFifteenThree = parseFloat(document.getElementById("weightFifteenThree").value, 10) || 0,
        scoreFifteenThree = parseFloat(document.getElementById("scoreFifteenThree").value, 10) || 0,
        weightedScoreFifteenThree,

        weightFifteenFour = parseFloat(document.getElementById("weightFifteenFour").value, 10) || 0,
        scoreFifteenFour = parseFloat(document.getElementById("scoreFifteenFour").value, 10) || 0,
        weightedScoreFifteenFour,

        weightSixteenOne = parseFloat(document.getElementById("weightSixteenOne").value, 10) || 0,
        scoreSixteenOne = parseFloat(document.getElementById("scoreSixteenOne").value, 10) || 0,
        weightedScoreSixteenOne,

        weightSixteenTwo = parseFloat(document.getElementById("weightSixteenTwo").value, 10) || 0,
        scoreSixteenTwo = parseFloat(document.getElementById("scoreSixteenTwo").value, 10) || 0,
        weightedScoreSixteenTwo,

        weightSixteenThree = parseFloat(document.getElementById("weightSixteenThree").value, 10) || 0,
        scoreSixteenThree = parseFloat(document.getElementById("scoreSixteenThree").value, 10) || 0,
        weightedScoreSixteenThree,

        weightSixteenFour = parseFloat(document.getElementById("weightSixteenFour").value, 10) || 0,
        scoreSixteenFour = parseFloat(document.getElementById("scoreSixteenFour").value, 10) || 0,
        weightedScoreSixteenFour,


        sumWeightsMLM,
        sumWeightedScoresMLM,
        currentGradeMLM,
        cumulativeGradeMLM;

        weightedScoreZeroOne = weightZeroOne * scoreZeroOne;
        document.getElementById("weightedScoreZeroOne").value = weightedScoreZeroOne;

        weightedScoreOneOne = weightOneOne * scoreOneOne;
        document.getElementById("weightedScoreOneOne").value = weightedScoreOneOne;

        weightedScoreOneTwo = weightOneTwo * scoreOneTwo;
        document.getElementById("weightedScoreOneTwo").value = weightedScoreOneTwo;

        weightedScoreOneThree = weightOneThree * scoreOneThree;
        document.getElementById("weightedScoreOneThree").value = weightedScoreOneThree;

        weightedScoreOneFour = weightOneFour * scoreOneFour;
        document.getElementById("weightedScoreOneFour").value = weightedScoreOneFour;

        weightedScoreTwoOne1st = weightTwoOne1st * scoreTwoOne1st;
        document.getElementById("weightedScoreTwoOne1st").value = weightedScoreTwoOne1st;

        weightedScoreTwoOne2nd = weightTwoOne2nd * scoreTwoOne2nd;
        document.getElementById("weightedScoreTwoOne2nd").value = weightedScoreTwoOne2nd;

        weightedScoreTwoTwo = weightTwoTwo * scoreTwoTwo;
        document.getElementById("weightedScoreTwoTwo").value = weightedScoreTwoTwo; 

        weightedScoreTwoThree1st = weightTwoThree1st * scoreTwoThree1st;
        document.getElementById("weightedScoreTwoThree1st").value = weightedScoreTwoThree1st;

        weightedScoreTwoThree2nd = weightTwoThree2nd * scoreTwoThree2nd;
        document.getElementById("weightedScoreTwoThree2nd").value = weightedScoreTwoThree2nd;

        weightedScoreTwoFour1st = weightTwoFour1st * scoreTwoFour1st;
        document.getElementById("weightedScoreTwoFour1st").value = weightedScoreTwoFour1st; 

        weightedScoreTwoFour2nd = weightTwoFour2nd * scoreTwoFour2nd;
        document.getElementById("weightedScoreTwoFour2nd").value = weightedScoreTwoFour2nd;    

        weightedScoreFiveFour = weightFiveFour * scoreFiveFour;
        document.getElementById("weightedScoreFiveFour").value = weightedScoreFiveFour;

        weightedScoreSevenOne = weightSevenOne * scoreSevenOne;
        document.getElementById("weightedScoreSevenOne").value = weightedScoreSevenOne;

        weightedScoreSevenTwo = weightSevenTwo * scoreSevenTwo;
        document.getElementById("weightedScoreSevenTwo").value = weightedScoreSevenTwo;

        weightedScoreSevenThree = weightSevenThree * scoreSevenThree;
        document.getElementById("weightedScoreSevenThree").value = weightedScoreSevenThree;

        weightedScoreSevenFour = weightSevenFour * scoreSevenFour;
        document.getElementById("weightedScoreSevenFour").value = weightedScoreSevenFour;

        weightedScoreSevenFive = weightSevenFive * scoreSevenFive;
        document.getElementById("weightedScoreSevenFive").value = weightedScoreSevenFive;

        weightedScoreSevenSix = weightSevenSix * scoreSevenSix;
        document.getElementById("weightedScoreSevenSix").value = weightedScoreSevenSix;

        weightedScoreNineOne = weightNineOne * scoreNineOne;
        document.getElementById("weightedScoreNineOne").value = weightedScoreNineOne;

        weightedScoreNineTwo = weightNineTwo * scoreNineTwo;
        document.getElementById("weightedScoreNineTwo").value = weightedScoreNineTwo;

        weightedScoreNineThree = weightNineThree * scoreNineThree;
        document.getElementById("weightedScoreNineThree").value = weightedScoreNineThree;

        weightedScoreNineFour = weightNineFour * scoreNineFour;
        document.getElementById("weightedScoreNineFour").value = weightedScoreNineFour;

        weightedScoreNineSix = weightNineSix * scoreNineSix;
        document.getElementById("weightedScoreNineSix").value = weightedScoreNineSix;

        weightedScoreNineSeven = weightNineSeven * scoreNineSeven;
        document.getElementById("weightedScoreNineSeven").value = weightedScoreNineSeven;

        weightedScoreTenOne1st = weightTenOne1st * scoreTenOne1st;
        document.getElementById("weightedScoreTenOne1st").value = weightedScoreTenOne1st;

        weightedScoreTenOne2nd = weightTenOne2nd * scoreTenOne2nd;
        document.getElementById("weightedScoreTenOne2nd").value = weightedScoreTenOne2nd;

        weightedScoreTenTwo = weightTenTwo * scoreTenTwo;
        document.getElementById("weightedScoreTenTwo").value = weightedScoreTenTwo;

        weightedScoreTenThree = weightTenThree * scoreTenThree;
        document.getElementById("weightedScoreTenThree").value = weightedScoreTenThree;

        weightedScoreTenFour1st = weightTenFour1st * scoreTenFour1st;
        document.getElementById("weightedScoreTenFour1st").value = weightedScoreTenFour1st; 

        weightedScoreTenFour2nd = weightTenFour2nd * scoreTenFour2nd;
        document.getElementById("weightedScoreTenFour2nd").value = weightedScoreTenFour2nd;  

        weightedScoreElevenOne1st = weightElevenOne1st * scoreElevenOne1st;
        document.getElementById("weightedScoreElevenOne1st").value = weightedScoreElevenOne1st;

        weightedScoreElevenOne2nd = weightElevenOne2nd * scoreElevenOne2nd;
        document.getElementById("weightedScoreElevenOne2nd").value = weightedScoreElevenOne2nd;

        weightedScoreElevenTwo1st = weightElevenTwo1st * scoreElevenTwo1st;
        document.getElementById("weightedScoreElevenTwo1st").value = weightedScoreElevenTwo1st;

        weightedScoreElevenTwo2nd = weightElevenTwo2nd * scoreElevenTwo2nd;
        document.getElementById("weightedScoreElevenTwo2nd").value = weightedScoreElevenTwo2nd;

        weightedScoreElevenThree = weightElevenThree * scoreElevenThree;
        document.getElementById("weightedScoreElevenThree").value = weightedScoreElevenThree;

        weightedScoreElevenFour1st = weightElevenFour1st * scoreElevenFour1st;
        document.getElementById("weightedScoreElevenFour1st").value = weightedScoreElevenFour1st; 

        weightedScoreElevenFour2nd = weightElevenFour2nd * scoreElevenFour2nd;
        document.getElementById("weightedScoreElevenFour2nd").value = weightedScoreElevenFour2nd;

        weightedScoreTwelveOne = weightTwelveOne * scoreTwelveOne;
        document.getElementById("weightedScoreTwelveOne").value = weightedScoreTwelveOne;

        weightedScoreTwelveThree = weightTwelveThree * scoreTwelveThree;
        document.getElementById("weightedScoreTwelveThree").value = weightedScoreTwelveThree;

        weightedScoreTwelveFour = weightTwelveFour * scoreTwelveFour;
        document.getElementById("weightedScoreTwelveFour").value = weightedScoreTwelveFour;
        
        weightedScoreTwelveSix1st = weightTwelveSix1st * scoreTwelveSix1st;
        document.getElementById("weightedScoreTwelveSix1st").value = weightedScoreTwelveSix1st;

        weightedScoreTwelveSix2nd = weightTwelveSix2nd * scoreTwelveSix2nd;
        document.getElementById("weightedScoreTwelveSix2nd").value = weightedScoreTwelveSix2nd;

        weightedScoreTwelveEight = weightTwelveEight * scoreTwelveEight;
        document.getElementById("weightedScoreTwelveEight").value = weightedScoreTwelveEight;

        weightedScoreTwelveNine = weightTwelveNine * scoreTwelveNine;
        document.getElementById("weightedScoreTwelveNine").value = weightedScoreTwelveNine;

        weightedScoreThirteenOne1st = weightThirteenOne1st * scoreThirteenOne1st;
        document.getElementById("weightedScoreThirteenOne1st").value = weightedScoreThirteenOne1st;

        weightedScoreThirteenOne2nd = weightThirteenOne2nd * scoreThirteenOne2nd;
        document.getElementById("weightedScoreThirteenOne2nd").value = weightedScoreThirteenOne2nd;

        weightedScoreThirteenTwo = weightThirteenTwo * scoreThirteenTwo;
        document.getElementById("weightedScoreThirteenTwo").value = weightedScoreThirteenTwo; 

        weightedScoreThirteenThree1st = weightThirteenThree1st * scoreThirteenThree1st;
        document.getElementById("weightedScoreThirteenThree1st").value = weightedScoreThirteenThree1st;

        weightedScoreThirteenThree2nd = weightThirteenThree2nd * scoreThirteenThree2nd;
        document.getElementById("weightedScoreThirteenThree2nd").value = weightedScoreThirteenThree2nd;

        weightedScoreThirteenFour = weightThirteenFour * scoreThirteenFour;
        document.getElementById("weightedScoreThirteenFour").value = weightedScoreThirteenFour;

        weightedScoreFourteenSeven = weightFourteenSeven * scoreFourteenSeven;
        document.getElementById("weightedScoreFourteenSeven").value = weightedScoreFourteenSeven;

        weightedScoreFifteenOne = weightFifteenOne * scoreFifteenOne;
        document.getElementById("weightedScoreFifteenOne").value = weightedScoreFifteenOne;

        weightedScoreFifteenTwo = weightFifteenTwo * scoreFifteenTwo;
        document.getElementById("weightedScoreFifteenTwo").value = weightedScoreFifteenTwo;

        weightedScoreFifteenThree = weightFifteenThree * scoreFifteenThree;
        document.getElementById("weightedScoreFifteenThree").value = weightedScoreFifteenThree;

        weightedScoreFifteenFour = weightFifteenFour * scoreFifteenFour;
        document.getElementById("weightedScoreFifteenFour").value = weightedScoreFifteenFour;

        weightedScoreSixteenOne = weightSixteenOne * scoreSixteenOne;
        document.getElementById("weightedScoreSixteenOne").value = weightedScoreSixteenOne;

        weightedScoreSixteenTwo = weightSixteenTwo * scoreSixteenTwo;
        document.getElementById("weightedScoreSixteenTwo").value = weightedScoreSixteenTwo;

        weightedScoreSixteenThree = weightSixteenThree * scoreSixteenThree;
        document.getElementById("weightedScoreSixteenThree").value = weightedScoreSixteenThree;

        weightedScoreSixteenFour = weightSixteenFour * scoreSixteenFour;
        document.getElementById("weightedScoreSixteenFour").value = weightedScoreSixteenFour;


        sumWeightsMLM = 
        weightZeroOne 
        + weightOneOne + weightOneTwo + weightOneThree + weightOneFour 
        + weightTwoOne1st + weightTwoOne2nd + weightTwoTwo + weightTwoThree1st + weightTwoThree2nd + weightTwoFour1st + weightTwoFour2nd
        + weightFiveFour 
        + weightSevenOne + weightSevenTwo + weightSevenThree + weightSevenFour + weightSevenFive + weightSevenSix
        + weightNineOne + weightNineTwo + weightNineThree + weightNineFour + weightNineSix + weightNineSeven 
        + weightTenOne1st + weightTenOne2nd + weightTenTwo + weightTenThree + weightTenFour1st + weightTenFour2nd
        + weightElevenOne1st + weightElevenOne2nd + weightElevenTwo1st + weightElevenTwo2nd + weightElevenThree + weightElevenFour1st + weightElevenFour2nd
        + weightTwelveOne + weightTwelveThree + weightTwelveFour + weightTwelveSix1st + weightTwelveSix2nd + weightTwelveEight + weightTwelveNine
        + weightThirteenOne1st + weightThirteenOne2nd + weightThirteenTwo + weightThirteenThree1st + weightThirteenThree2nd + weightThirteenFour 
        + weightFourteenSeven 
        + weightFifteenOne + weightFifteenTwo + weightFifteenThree + weightFifteenFour
        + weightSixteenOne + weightSixteenTwo + weightSixteenThree + weightSixteenFour
        ;

        document.getElementById("sumWeightsMLM").value = sumWeightsMLM;
        
        sumWeightedScoresMLM = 
        weightedScoreZeroOne
        + weightedScoreOneOne + weightedScoreOneTwo + weightedScoreOneThree + weightedScoreOneFour
        + weightedScoreTwoOne1st + weightedScoreTwoOne2nd + weightedScoreTwoTwo + weightedScoreTwoThree1st + weightedScoreTwoThree2nd + weightedScoreTwoFour1st + weightedScoreTwoFour2nd
        + weightedScoreFiveFour
        + weightedScoreSevenOne + weightedScoreSevenTwo + weightedScoreSevenThree + weightedScoreSevenFour + weightedScoreSevenFive + weightedScoreSevenSix
        + weightedScoreNineOne + weightedScoreNineTwo + weightedScoreNineThree + weightedScoreNineFour + weightedScoreNineSix + weightedScoreNineSeven
        + weightedScoreTenOne1st + weightedScoreTenOne2nd  + weightedScoreTenTwo + weightedScoreTenThree + weightedScoreTenFour1st + weightedScoreTenFour2nd
        + weightedScoreElevenOne1st + weightedScoreElevenOne2nd + weightedScoreElevenTwo1st + weightedScoreElevenTwo2nd + weightedScoreElevenThree + weightedScoreElevenFour1st + weightedScoreElevenFour2nd
        + weightedScoreTwelveOne + weightedScoreTwelveThree + weightedScoreTwelveFour + weightedScoreTwelveSix1st + weightedScoreTwelveSix2nd
        + weightedScoreThirteenOne1st + weightedScoreThirteenOne2nd + weightedScoreThirteenTwo + weightedScoreThirteenThree1st + weightedScoreThirteenThree2nd + weightedScoreThirteenFour
        + weightedScoreFourteenSeven
        + weightedScoreFifteenOne + weightedScoreFifteenTwo + weightedScoreFifteenThree + weightedScoreFifteenFour
        + weightedScoreSixteenOne + weightedScoreSixteenTwo + weightedScoreSixteenThree + weightedScoreSixteenFour
        ;

        document.getElementById("sumWeightedScoresMLM").value = sumWeightedScoresMLM;

        currentGradeMLM = sumWeightedScoresMLM / sumWeightsMLM;

        document.getElementById("currentGradeMLM").value = currentGradeMLM;

        cumulativeGradeMLM = sumWeightedScoresMLM / 100;

        document.getElementById("cumulativeGradeMLM").value = cumulativeGradeMLM;        

}
// End MATH 1010 MLM Grade Calculations


/* 
  MATH 1010
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

        weightDB1 =+ parseFloat(document.getElementById("weightDB1").value, 10) || 0,
        scoreDB1 =+ parseFloat(document.getElementById("scoreDB1").value, 10) || 0,
        weightedScoreDB1,

        weightDB2 =+ parseFloat(document.getElementById("weightDB2").value, 10) || 0,
        scoreDB2 =+ parseFloat(document.getElementById("scoreDB2").value, 10) || 0,
        weightedScoreDB2,

        weightDB3 =+ parseFloat(document.getElementById("weightDB3").value, 10) || 0,
        scoreDB3 =+ parseFloat(document.getElementById("scoreDB3").value, 10) || 0,
        weightedScoreDB3,

        weightDB4 =+ parseFloat(document.getElementById("weightDB4").value, 10) || 0,
        scoreDB4 =+ parseFloat(document.getElementById("scoreDB4").value, 10) || 0,
        weightedScoreDB4,

        weightDB5 =+ parseFloat(document.getElementById("weightDB5").value, 10) || 0,
        scoreDB5 =+ parseFloat(document.getElementById("scoreDB5").value, 10) || 0,
        weightedScoreDB5,

        weightDB6 =+ parseFloat(document.getElementById("weightDB6").value, 10) || 0,
        scoreDB6 =+ parseFloat(document.getElementById("scoreDB6").value, 10) || 0,
        weightedScoreDB6,

        weightDB7 =+ parseFloat(document.getElementById("weightDB7").value, 10) || 0,
        scoreDB7 =+ parseFloat(document.getElementById("scoreDB7").value, 10) || 0,
        weightedScoreDB7,

        weightDB8 =+ parseFloat(document.getElementById("weightDB8").value, 10) || 0,
        scoreDB8 =+ parseFloat(document.getElementById("scoreDB8").value, 10) || 0,
        weightedScoreDB8,

        weightDB9 =+ parseFloat(document.getElementById("weightDB9").value, 10) || 0,
        scoreDB9 =+ parseFloat(document.getElementById("scoreDB9").value, 10) || 0,
        weightedScoreDB9,
        
        weightDB10 =+ parseFloat(document.getElementById("weightDB10").value, 10) || 0,
        scoreDB10 =+ parseFloat(document.getElementById("scoreDB10").value, 10) || 0,
        weightedScoreDB10,

        weightDB11 =+ parseFloat(document.getElementById("weightDB11").value, 10) || 0,
        scoreDB11 =+ parseFloat(document.getElementById("scoreDB11").value, 10) || 0,
        weightedScoreDB11,

        weightDB12 =+ parseFloat(document.getElementById("weightDB12").value, 10) || 0,
        scoreDB12 =+ parseFloat(document.getElementById("scoreDB12").value, 10) || 0,
        weightedScoreDB12,

        weightDB13 =+ parseFloat(document.getElementById("weightDB13").value, 10) || 0,
        scoreDB13 =+ parseFloat(document.getElementById("scoreDB13").value, 10) || 0,
        weightedScoreDB13,

        weightDB14 =+ parseFloat(document.getElementById("weightDB14").value, 10) || 0,
        scoreDB14 =+ parseFloat(document.getElementById("scoreDB14").value, 10) || 0,
        weightedScoreDB14,

        weightDB15 =+ parseFloat(document.getElementById("weightDB15").value, 10) || 0,
        scoreDB15 =+ parseFloat(document.getElementById("scoreDB15").value, 10) || 0,
        weightedScoreDB15,

        weightProject =+ parseFloat(document.getElementById("weightProject").value, 10) || 0,
        scoreProject =+ parseFloat(document.getElementById("scoreProject").value, 10) || 0,
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
        weightMLM 
        + weightDB1 + weightDB2 + weightDB3 + weightDB4 + weightDB5 + weightDB6 + weightDB7 + weightDB8 + weightDB9 + weightDB10 + weightDB11 + weightDB12 + weightDB13 + weightDB14 + weightDB15
        + weightProject
        ;

        document.getElementById("sumWeightsCourse").value = sumWeightsCourse;
        
        sumWeightedScoresCourse = 
        weightedScoreMLM 
        + weightedScoreDB1 + weightedScoreDB2 + weightedScoreDB3 + weightedScoreDB4 + weightedScoreDB5 + weightedScoreDB6 + weightedScoreDB7 + weightedScoreDB8 + weightedScoreDB9 + weightedScoreDB10 + weightedScoreDB11 + weightedScoreDB12 + weightedScoreDB13 + weightedScoreDB14 + weightedScoreDB15
        + weightedScoreProject
        ;

        document.getElementById("sumWeightedScoresCourse").value = sumWeightedScoresCourse;

        currentGradeCourse = sumWeightedScoresCourse / sumWeightsCourse;

        document.getElementById("currentGradeCourse").value = currentGradeCourse;

        cumulativeGradeCourse = sumWeightedScoresCourse / 100;

        document.getElementById("cumulativeGradeCourse").value = cumulativeGradeCourse;        

}
// End MATH 1010 MLM Grade Calculations
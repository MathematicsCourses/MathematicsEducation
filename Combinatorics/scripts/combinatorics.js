// Copyright 2017 - Samuel Dominic Chukwuemeka (Samdom For Peace)
// www.samuelchukwuemeka.com
// www.chukwuemekasamuel.com
// www.modular-arithmetic.appspot.com

"use strict";

// Factorial, Permutation, and Combination Functions

function factorial(n) {
    if (n === 0) {
        return 1;
    }
    return n * factorial(n - 1);
}

function permutation(n, r) {
    if (r > n) {
        return "Error: r cannot be greater than n";
    }
    return Math.round(factorial(n) / factorial(n-r));
}

function combination(n, r) {
    if (r > n) {
        return "Error: r cannot be greater than n";
    }
    return Math.round(factorial(n) / (factorial(n-r) * factorial(r)));
}




// Find Factorial 1st
document.getElementById("factorial1st").addEventListener("submit", factorial1st);
function factorial1st(event) {
    event.preventDefault();

    var findFactorialNumber1st = parseInt(document.getElementById("findFactorialNumber1st").value, 10),
        factorialNumber1st;
    
    factorialNumber1st = factorial(findFactorialNumber1st);

    document.getElementById("factorialNumber1st").value = factorialNumber1st;
}


// Find Factorial 2nd
document.getElementById("factorial2nd").addEventListener("submit", factorial2nd);
function factorial2nd(event) {
    event.preventDefault();

    var findFactorialNumber2nd1 = parseInt(document.getElementById("findFactorialNumber2nd1").value, 10),
        findFactorialNumber2nd2 = parseInt(document.getElementById("findFactorialNumber2nd2").value, 10),
        operationFactorialNumber2nd = document.getElementById("operationFactorialNumber2nd").value,
        factorialNumber2nd;

    if (operationFactorialNumber2nd === "additionFactorialNumber2nd") {
        factorialNumber2nd = factorial(findFactorialNumber2nd1) + factorial(findFactorialNumber2nd2);
    }

    if (operationFactorialNumber2nd === "subtractionFactorialNumber2nd") {
        factorialNumber2nd = factorial(findFactorialNumber2nd1) - factorial(findFactorialNumber2nd2);
    }

    if (operationFactorialNumber2nd === "multiplicationFactorialNumber2nd") {
        factorialNumber2nd = factorial(findFactorialNumber2nd1) * factorial(findFactorialNumber2nd2);
    }

    if (operationFactorialNumber2nd === "divisionFactorialNumber2nd") {
        factorialNumber2nd = factorial(findFactorialNumber2nd1) / factorial(findFactorialNumber2nd2);
    }

    document.getElementById("factorialNumber2nd").value = factorialNumber2nd;
}


// Find Permutation 1st
document.getElementById("permutation1st").addEventListener("submit", permutation1st);
function permutation1st(event) {
    event.preventDefault();

    var totalPermutation1st = parseInt(document.getElementById("totalPermutation1st").value, 10),
        somePermutation1st = parseInt(document.getElementById("somePermutation1st").value, 10),
        permutationAnswer1st;
    
        permutationAnswer1st = permutation(totalPermutation1st, somePermutation1st);

    document.getElementById("permutationAnswer1st").value = permutationAnswer1st;
}


// Find Permutation 2nd
document.getElementById("permutation2nd").addEventListener("submit", permutation2nd);
function permutation2nd(event) {
    event.preventDefault();

    var totalPermutation2nd1 = parseInt(document.getElementById("totalPermutation2nd1").value, 10),
        totalPermutation2nd2 = parseInt(document.getElementById("totalPermutation2nd2").value, 10),
        somePermutation2nd1 = parseInt(document.getElementById("somePermutation2nd1").value, 10),
        somePermutation2nd2 = parseInt(document.getElementById("somePermutation2nd2").value, 10),
        operationPermutation2nd = document.getElementById("operationPermutation2nd").value,
        permutationAnswer2nd;
    
        if (operationPermutation2nd === "additionPermutation2nd") {
            permutationAnswer2nd = permutation(totalPermutation2nd1, somePermutation2nd1) + permutation(totalPermutation2nd2, somePermutation2nd2);
        }
    
        if (operationPermutation2nd === "subtractionPermutation2nd") {
            permutationAnswer2nd = permutation(totalPermutation2nd1, somePermutation2nd1) - permutation(totalPermutation2nd2, somePermutation2nd2);
        }
    
        if (operationPermutation2nd === "multiplicationPermutation2nd") {
            permutationAnswer2nd = permutation(totalPermutation2nd1, somePermutation2nd1) * permutation(totalPermutation2nd2, somePermutation2nd2);
        }
    
        if (operationPermutation2nd === "divisionPermutation2nd") {
            permutationAnswer2nd = permutation(totalPermutation2nd2, somePermutation2nd2) / permutation(totalPermutation2nd1, somePermutation2nd1);
        }    

    document.getElementById("permutationAnswer2nd").value = permutationAnswer2nd;
}


// Find Permutation 3rd
document.getElementById("permutation3rd").addEventListener("submit", permutation3rd);
function permutation3rd(event) {
    event.preventDefault();

    var totalPermutation3rd1 = parseInt(document.getElementById("totalPermutation3rd1").value, 10),
        totalPermutation3rd2 = parseInt(document.getElementById("totalPermutation3rd2").value, 10),
        totalPermutation3rd3 = parseInt(document.getElementById("totalPermutation3rd3").value, 10),
        somePermutation3rd1 = parseInt(document.getElementById("somePermutation3rd1").value, 10),
        somePermutation3rd2 = parseInt(document.getElementById("somePermutation3rd2").value, 10),
        somePermutation3rd3 = parseInt(document.getElementById("somePermutation3rd3").value, 10),
        permutationAnswer3rd;

        permutationAnswer3rd = permutation(totalPermutation3rd1, somePermutation3rd1) + permutation(totalPermutation3rd2, somePermutation3rd2) + permutation(totalPermutation3rd3, somePermutation3rd3);

    document.getElementById("permutationAnswer3rd").value = permutationAnswer3rd;
}


// Find Permutation 4th
document.getElementById("permutation4th").addEventListener("submit", permutation4th);
function permutation4th(event) {
    event.preventDefault();

    var totalPermutation4th1 = parseInt(document.getElementById("totalPermutation4th1").value, 10),
        totalPermutation4th2 = parseInt(document.getElementById("totalPermutation4th2").value, 10),
        totalPermutation4th3 = parseInt(document.getElementById("totalPermutation4th3").value, 10),
        somePermutation4th1 = parseInt(document.getElementById("somePermutation4th1").value, 10),
        somePermutation4th2 = parseInt(document.getElementById("somePermutation4th2").value, 10),
        somePermutation4th3 = parseInt(document.getElementById("somePermutation4th3").value, 10),
        permutationAnswer4th;

        permutationAnswer4th = permutation(totalPermutation4th1, somePermutation4th1) * permutation(totalPermutation4th2, somePermutation4th2) * permutation(totalPermutation4th3, somePermutation4th3);

    document.getElementById("permutationAnswer4th").value = permutationAnswer4th;
}


// Find Permutation 5th
document.getElementById("permutation5th").addEventListener("submit", permutation5th);
function permutation5th(event) {
    event.preventDefault();

    var totalPermutation5th1 = parseInt(document.getElementById("totalPermutation5th1").value, 10),
        totalPermutation5th2 = parseInt(document.getElementById("totalPermutation5th2").value, 10),
        totalPermutation5th3 = parseInt(document.getElementById("totalPermutation5th3").value, 10),
        somePermutation5th1 = parseInt(document.getElementById("somePermutation5th1").value, 10),
        somePermutation5th2 = parseInt(document.getElementById("somePermutation5th2").value, 10),
        somePermutation5th3 = parseInt(document.getElementById("somePermutation5th3").value, 10),
        permutationAnswer5th;

        permutationAnswer5th = permutation(totalPermutation5th1, somePermutation5th1) * (permutation(totalPermutation5th2, somePermutation5th2) + permutation(totalPermutation5th3, somePermutation5th3));

    document.getElementById("permutationAnswer5th").value = permutationAnswer5th;
}


// Find Combination 1st
document.getElementById("combination1st").addEventListener("submit", combination1st);
function combination1st(event) {
    event.preventDefault();

    var totalCombination1st = parseInt(document.getElementById("totalCombination1st").value, 10),
        someCombination1st = parseInt(document.getElementById("someCombination1st").value, 10),
        combinationAnswer1st;
    
        combinationAnswer1st = combination(totalCombination1st, someCombination1st);

    document.getElementById("combinationAnswer1st").value = combinationAnswer1st;
}


// Find Combination 2nd
document.getElementById("combination2nd").addEventListener("submit", combination2nd);
function combination2nd(event) {
    event.preventDefault();

    var totalCombination2nd1 = parseInt(document.getElementById("totalCombination2nd1").value, 10),
        totalCombination2nd2 = parseInt(document.getElementById("totalCombination2nd2").value, 10),
        someCombination2nd1 = parseInt(document.getElementById("someCombination2nd1").value, 10),
        someCombination2nd2 = parseInt(document.getElementById("someCombination2nd2").value, 10),
        operationCombination2nd = document.getElementById("operationCombination2nd").value,
        combinationAnswer2nd;
    
        if (operationCombination2nd === "additionCombination2nd") {
            combinationAnswer2nd = combination(totalCombination2nd1, someCombination2nd1) + combination(totalCombination2nd2, someCombination2nd2);
        }
    
        if (operationCombination2nd === "subtractionCombination2nd") {
            combinationAnswer2nd = combination(totalCombination2nd1, someCombination2nd1) - combination(totalCombination2nd2, someCombination2nd2);
        }
    
        if (operationCombination2nd === "multiplicationCombination2nd") {
            combinationAnswer2nd = combination(totalCombination2nd1, someCombination2nd1) * combination(totalCombination2nd2, someCombination2nd2);
        }
    
        if (operationCombination2nd === "divisionCombination2nd") {
            combinationAnswer2nd = combination(totalCombination2nd2, someCombination2nd2) / combination(totalCombination2nd1, someCombination2nd1);
        }    

    document.getElementById("combinationAnswer2nd").value = combinationAnswer2nd;
}


// Find Combination 3rd
document.getElementById("combination3rd").addEventListener("submit", combination3rd);
function combination3rd(event) {
    event.preventDefault();

    var totalCombination3rd1 = parseInt(document.getElementById("totalCombination3rd1").value, 10),
        totalCombination3rd2 = parseInt(document.getElementById("totalCombination3rd2").value, 10),
        totalCombination3rd3 = parseInt(document.getElementById("totalCombination3rd3").value, 10),
        someCombination3rd1 = parseInt(document.getElementById("someCombination3rd1").value, 10),
        someCombination3rd2 = parseInt(document.getElementById("someCombination3rd2").value, 10),
        someCombination3rd3 = parseInt(document.getElementById("someCombination3rd3").value, 10),
        combinationAnswer3rd;

        combinationAnswer3rd = combination(totalCombination3rd1, someCombination3rd1) + combination(totalCombination3rd2, someCombination3rd2) + combination(totalCombination3rd3, someCombination3rd3);

    document.getElementById("combinationAnswer3rd").value = combinationAnswer3rd;
}


// Find Combination 4th
document.getElementById("combination4th").addEventListener("submit", combination4th);
function combination4th(event) {
    event.preventDefault();

    var totalCombination4th1 = parseInt(document.getElementById("totalCombination4th1").value, 10),
        totalCombination4th2 = parseInt(document.getElementById("totalCombination4th2").value, 10),
        totalCombination4th3 = parseInt(document.getElementById("totalCombination4th3").value, 10),
        someCombination4th1 = parseInt(document.getElementById("someCombination4th1").value, 10),
        someCombination4th2 = parseInt(document.getElementById("someCombination4th2").value, 10),
        someCombination4th3 = parseInt(document.getElementById("someCombination4th3").value, 10),
        combinationAnswer4th;

        combinationAnswer4th = combination(totalCombination4th1, someCombination4th1) * combination(totalCombination4th2, someCombination4th2) * combination(totalCombination4th3, someCombination4th3);

    document.getElementById("combinationAnswer4th").value = combinationAnswer4th;
}


// Find Combination 5th
document.getElementById("combination5th").addEventListener("submit", combination5th);
function combination5th(event) {
    event.preventDefault();

    var totalCombination5th1 = parseInt(document.getElementById("totalCombination5th1").value, 10),
        totalCombination5th2 = parseInt(document.getElementById("totalCombination5th2").value, 10),
        totalCombination5th3 = parseInt(document.getElementById("totalCombination5th3").value, 10),
        someCombination5th1 = parseInt(document.getElementById("someCombination5th1").value, 10),
        someCombination5th2 = parseInt(document.getElementById("someCombination5th2").value, 10),
        someCombination5th3 = parseInt(document.getElementById("someCombination5th3").value, 10),
        combinationAnswer5th;

        combinationAnswer5th = combination(totalCombination5th1, someCombination5th1) * (combination(totalCombination5th2, someCombination5th2) + combination(totalCombination5th3, someCombination5th3));

    document.getElementById("combinationAnswer5th").value = combinationAnswer5th;
}

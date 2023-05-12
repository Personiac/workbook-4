"use strict";

let myScores = [92, 98, 84, 76, 89, 99, 100];
let yourScores = [82, 98, 94, 88, 92, 100, 100]; 

function getAverage(scoreList) {
    let sum = 0;
    let totalScores = scoreList.length
    for (let index = 0; index < totalScores; index++) {
        sum += scoreList[index];
        
    }
    sum /= totalScores;
    return sum;
}

function sortAscending(a,b) {
    return a - b;
}

function getMedian(testScores) {
    testScores.sort(sortAscending);
    let half = Math.floor(testScores.length/2)
    if (testScores.length % 2 == 0) {
        return (testScores[half-1] + testScores[half])/2;
    }
    return testScores[half];

}

let myAvgScore = getAverage(myScores);
let yourAvgScore = getAverage(yourScores);
let myMedianScore = getMedian(myScores);
let yourMedianScore = getMedian(yourScores);


console.log(`
My avg score is ${Math.round(myAvgScore)}.
Your avg score is ${Math.round(yourAvgScore)}.
My median score is ${myMedianScore}.
Your median score is ${yourMedianScore}.`);
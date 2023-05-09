"use strict";

let students = [
    {name: "Zephaniah", scores: [100, 96, 99, 92]},
    {name: "Pursalane", scores: [92, 89, 96, 100, 94]},
    {name: "Siddalee", scores: [86, 72, 92]},
    {name: "Ian", scores: [98, 84, 89, 100, 100, 76]},
    {name: "Elisha", scores: [89, 100]},
    {name: "Ezra", scores: [100, 99, 100, 87]}
   ];

let numOfStudents = students.length;

for (let index = 0; index < numOfStudents; index++) { 
    let numOfScores = students[index].scores.length;
    let scoreAvg = 0;
    for (let testNum = 0; testNum < numOfScores; testNum++) {
        scoreAvg = scoreAvg + students[index].scores[testNum];
    }   
    scoreAvg /= numOfScores;
    console.log(`${students[index].name} has an average score of ${Math.round(scoreAvg)} with ${numOfScores} test scores.`);
}
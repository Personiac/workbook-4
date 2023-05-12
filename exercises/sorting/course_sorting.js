"use strict";

let courses = [
  {
    CourseId: "PROG100",
    Title: "Introduction to HTML/CSS/Git",
    Location: "Classroom 7",
    StartDate: "09/08/22",
    Fee: "100.00",
  },
  {
    CourseId: "PROG200",
    Title: "Introduction to JavaScript",
    Location: "Classroom 9",
    StartDate: "11/22/22",
    Fee: "350.00",
  },
  {
    CourseId: "PROG300",
    Title: "Introduction to Java",
    Location: "Classroom 1",
    StartDate: "01/09/23",
    Fee: "50.00",
  },
  {
    CourseId: "PROG400",
    Title: "Introduction to SQL and Databases",
    Location: "Classroom 7",
    StartDate: "03/16/23",
    Fee: "50.00",
  },
  {
    CourseId: "PROJ500",
    Title: "Introduction to Angular",
    Location: "Classroom 1",
    StartDate: "04/25/23",
    Fee: "50.00",
  },
  {
    CourseId: "VAMP100",
    Title: "Introduction to Vampirism",
    Location: "Classroom 3",
    StartDate: "10/01/23",
    Fee: "20.00",
  },
];



courses.sort(function(a,b) { //Ascending Order because a is less than b
    
    let aUpper = a.Title.toUpperCase();
    let bUpper = b.Title.toUpperCase();

    if (aUpper < bUpper) return -1;
    else if (aUpper == bUpper) return 0;
    else return 1;
});

   for (const course of courses) {
    console.log(course);
   }

   
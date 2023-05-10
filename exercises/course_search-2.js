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
];

// When does the PROG200 course start?
// What is the title of the PROJ500 course?
// What are the titles of the courses that cost $50 or less?
// What classes meet in "Classroom 1"?

function courseSearch(courseList) {
  let cheapCourses = [];
  let class1Courses = [];

  for (const course of courseList) {
    if (course.CourseId == "PROG200") {
      console.log(`${course.CourseId} starts at ${course.StartDate}.`);
    }
    if (course.CourseId == "PROJ500") {
      console.log(`${course.CourseId} has the title of ${course.Title}.`);
    }
    if (course.Fee <= 50) {
      cheapCourses.push(course);
    }
    if (course.Location == "Classroom 1") {
      class1Courses.push(course);
    }
  }
  console.log("-----------------");
  console.log(cheapCourses);
  console.log("-----------------");
  console.log(class1Courses);
}

function courseStartsIn2023(courseList, startingYear) {

  let startsIn2023 = [];

  for (const course of courseList) {
    if (course.StartDate.endsWith(startingYear)) {
    startsIn2023.push(course);
    }  
  }
  return startsIn2023;
}

// courseSearch(courses);
const test = courseStartsIn2023(courses, "23")

console.log(test);
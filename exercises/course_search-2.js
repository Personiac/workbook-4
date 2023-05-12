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

// When does the PROG200 course start?
// What is the title of the PROJ500 course?
// What are the titles of the courses that cost $50 or less?
// What classes meet in "Classroom 1"?

function courseSearch(courseList) {
  let cheapCoursesFee = [];
  let class1CoursesMeet = [];

  
  for (const course of courseList) {
    let courseFee = parseFloat(course.Fee);

    if (course.CourseId == "PROG200") {
      console.log(`${course.CourseId} starts at ${course.StartDate}.`);
    }
    if (course.CourseId == "PROJ500") {
      console.log(`${course.CourseId} has the title of ${course.Title}.`);
    }
    if (courseFee <= 50) {
      cheapCoursesFee.push(course);
    }
    if (course.Location == "Classroom 1") {
      class1CoursesMeet.push(course);
    }
  }

  console.log("-----------------");
  console.log(`Here are all the courses that are $50 or less:`);
  for (const course of cheapCoursesFee) {
    console.log(`${course.CourseId}: $${course.Fee}`);
  }
  const c1Courses = class1CoursesMeet.map(course => ({CourseId: course.CourseId, Title: course.Title})); //map() function in use
  console.log("-----------------");
  console.log(`Here are all the classes that meet in Classrom 1:`);
  for (const course of c1Courses) {
    console.log(`${course.CourseId}: ${course.Title}`);
  }
  console.log("-----------------");
  console.log(`More info on Classroom 1 courses:`);
  for (const course of class1CoursesMeet) {
    console.log(`${course.CourseId}: ${course.Title}, Fee: $${course.Fee}, Starts: ${course.StartDate}`);
  }
  
}

function getCourses2023(courseList, startingYear) {
  
  let startsIn2023 = [];
  
  for (const course of courseList) {
    if (course.StartDate.endsWith(startingYear)) {
      startsIn2023.push(course);
    }  
  }
  console.log(`Here is a list of all the courses that start in 20${startingYear}:`);
  for (const course of startsIn2023) {
    console.log(`${course.CourseId}: ${course.StartDate} `);
  }
  return startsIn2023;
}


courseSearch(courses);
console.log("-----------------");
getCourses2023(courses, "22");
console.log("-----------------");
getCourses2023(courses, "23");

// console.log("-----------------");
// const courses2023 = getCourses2023(courses, "23");
// const courseIds = courses2023.map(course => course.CourseId); 
// //map() function collects courseId properties from each course object in courses2023 array
// //map() returns all collected values from courses2023 array and creates a new array called courseIds using the collected values 

// console.log(`Here is a list of all the courses that start in 2023: ${courseIds}.`);
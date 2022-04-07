//var listCoursesBlock = document.querySelector("#list-courses");
import fetch from "node-fetch";
var courseApi = "https://jsonplaceholder.typicode.com/posts";
// function start() {
//   getCourses(function (courses) {
//     console.log(courses);
//   });
// }

// Functions
// function getCourses(callback) {
//   fetch(courseApi)
//     .then(function (response) {
//       return response.json();
//     })
//     .then(callback);
// }

// const fetch = (url) =>
//   new Promise((resolve, reject) => {
//     console.log("gfectching");
//     return resolve({ id: 1, name: "myname" });
//   });

function getCourses(callback) {
  fetch(courseApi)
    .then(function (response) {
      //   console.log("turn to json", response);
      return response.json();
    })
    .then(function (json) {});
}

function start() {
  getCourses(function (courses) {
    console.log(courses);
  });
}
start();

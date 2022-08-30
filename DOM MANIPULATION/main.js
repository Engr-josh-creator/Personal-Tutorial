// const allLis = document.querySelectorAll("li");

// for (let i = 0; i < allLis.length; i++) {
//   allLis[i].innerText = "I AM GOOD";
// }

// for (let li of allLis) {
//   li.innerHTML = "we are <b>good</b>";
// }

// const colors = ["red", "green", "yellow", "purple", "pink", "gray"];

// allLis.forEach((li, i) => {
//   const color = colors[i]; //we are assigning colors to be the index of  i. that is the first li shoudld be red, the 2nd li should be green, the 3rd li should be yellow. so and so forth.
//   li.style.color = color;
// });

const todo = document.querySelector("#todos .todo"); //we are looking for the first todo in todos

// todo.style.color = "gray";
// todo.style.textDecoration = "line-through";
const img = document.createElement("img");
img.src = "./Images/Marcus.jpg";
document.body.appendChild(img);
img.style.width = "200px";

const newLink = document.createElement("a");
newLink.innerText = "MR BUGS VIDEO, CLICK ME!";
newLink.href = "https://www.youtube.com/watch?v=QQNL83fhWJU";
const firstP = document.querySelector("p"); //we select where we want to append it to.
firstP.appendChild(newLink);

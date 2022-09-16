// const btn = document.querySelector("#clicker");

// //you set it to a function, for it to work here.
// btn.onclick = function () {
//   console.log("you click me, go away!!");
// };

const colors = [
  "red",
  "orange",
  "yellow",
  "blue",
  "purple",
  "indigo",
  "violet",
];

const changeColor = function (evt) {
  // console.log(evt);
  const h1 = document.querySelector("h1");
  // console.log(this); //refering to the individual divs(element) that was click on
  h1.style.backgroundColor = this.style.backgroundColor;
};

const container = document.querySelector("#boxes"); //this is where we will attach all our divs
for (let color of colors) {
  const box = document.createElement("div");
  box.style.backgroundColor = color; //we are adding the background of color to the divs
  box.classList.add("box"); //we are adding the style box to the box
  //"this" inside of a method which is added on to an object is referencing that object. //and the object are the colors
  box.addEventListener("click", changeColor);
  container.append(box);
}

// document.body.addEventListener("keypress", function (e) {
//   //the event object, it contains information about the event
//   console.log(e);
// });

const input = document.querySelector("#username");

input.addEventListener("keydown", function (e) {
  console.log("KEY DOWN");
});

//key up occurs when we only release the key
input.addEventListener("keyup", function (e) {
  console.log("KEY UP");
});

input.addEventListener("keypress", function (e) {
  console.log("KEY PRESS");
});

const addItemInput = document.querySelector("#additem");
const itemUl = document.querySelector("#items");

//create a list and add it to our ul
//get the "enter key" from the input and use that figure to create a list
//clear the value after we have added it to our list

addItemInput.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    if (!this.value) return; //if no value in our "enter", then dont return anything
    //add what was entered to the ul
    console.log(this.value);
    const newItemText = this.value; //this is referencing to the addItemInput
    const newtext = document.createElement("li");
    newtext.innerText = newItemText;
    itemUl.append(newtext);
    this.value = "";
  }
});

// const btn = document.querySelector("button");

// btn.addEventListener("click", function () {
//   alert("CLICKED ME!!!");
// });

// btn.addEventListener("mouseover", function () {
//   btn.innerText = "STOP TOUCHING ME";
//   const heigth = Math.floor(Math.random() * window.innerHeight);
//   const width = Math.floor(Math.random() * window.innerWidth);

//   btn.style.top = `${heigth}px`;
//   btn.style.left = `${width}px`;
// });

// btn.addEventListener("mouseout", function () {
//   btn.innerText = "Click Me!";
// });

// window.addEventListener("scroll", function () {
//   console.log("STOP SCROLLING");
// });

const form = document.querySelector("#signUp-form");

const creditCardInput = document.querySelector("#cc");
const termsCheckbox = document.querySelector("#terms");
const veggieSelect = document.querySelector("#veggie");

// form.addEventListener("submit", function (e) {
//   e.preventDefault(); //stops the request from being sent (prevents page reload)

//   console.log("cc", creditCardInput.value);
//   console.log("terms", termsCheckbox.checked);
//   console.log("veggie", veggieSelect.value);
//   //send form to database
//   //append something to page using form data
// });

//the input is used to get what the user is typing in a form
const formData = {};
// creditCardInput.addEventListener("input", (e) => {
//   console.log("CC CHANGED!", e);

//   formData["cc"] = e.target.value; //to get the value of every of our input
// });

// veggieSelect.addEventListener("input", (e) => {
//   console.log("veggie CHANGED!", e);

//   formData["veggie"] = e.target.value; //to get the value of every of our input as it changed
// });

// termsCheckbox.addEventListener("input", (e) => {
//   console.log("terms CHANGED!", e);
//   formData["terms"] = e.target.checked; //to get the value of every of our input
// });

for (let input of [creditCardInput, termsCheckbox, veggieSelect]) {
  input.addEventListener("change", ({ target }) => {
    const { name, value, checked, type } = target;
    // console.log(e.target.name); //to bring out all the names in our form
    console.log(target);
    formData[name] = type === "checkbox" ? checked : value; //we are updating formData name for each selected event, then, check the type, if is equal to checkbox, do this, but if is not(i.e either text or so), then use the value.
    console.log(formData);
  });
}

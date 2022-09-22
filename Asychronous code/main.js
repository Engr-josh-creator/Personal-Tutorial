// const multiply = (x, y) => x * y;
// const sqaure = (x) => multiply(x, x);

// const isRightTraingle = (a, b, c) => {
//   return sqaure(a) + sqaure(b) === sqaure(c);
// };

// isRightTraingle(3, 4, 5);
// //when the intepreter encounters the right traingle. it is added to the callstack, then the rest function inside that functions is called, until  we get to the last function. when we get to the last funcction, the last function will have to be resolved first, then the next function follows till we get to the last function, which was the first one that was called.(remember when it returns a value it is removed from the stack: THE LAST THING IN, IS THE FIRST THING OUT)

// const repeat = (str, times) => {
//   let result = "";
//   for (let i = 0; i < times; i++) {
//     result += str;
//   }
//   return result;
// };

// const scream = (str) => {
//   return str.toUpperCase() + "!!!";
// };

// const getRantText = (phrase) => {
//   let text = scream(phrase);
//   let rant = repeat(text, 8);
//   return rant;
// };

// const makeRant = (phrase, el) => {
//   const h1 = document.createElement("h1");
//   h1.innerText = getRantText(phrase);
//   el.appendChild(h1);
// };
// console.log("HELLO!");

// makeRant("I hate mayonnaise", document.body);
// //makeRant("if you have to cough, please cover your mouth", document.body);

const btn = document.querySelector("button");

// setTimeout(() => {
//   btn.style.transform = `translateX(100px)`;
//   setTimeout(() => {
//     btn.style.transform = `translateX(200px)`;
//   }, 5000);
// }, 1000);

// const moveX = (element, amount, delay, callback) => {
//   const bodyBoundary = document.body.clientWidth;
//   const elRight = element.getBoundingClientRect().right;
//   const currLeft = element.getBoundingClientRect().left;

//   if (elRight + amount > bodyBoundary) {
//     console.log("DONE - CAN'T GO THAT FAR");
//   } else {
//     setTimeout(() => {
//       element.style.transform = `translate(${currLeft + amount}px)`;
//       if (callback) callback();
//     }, delay);
//   }
// };

// moveX(btn, 100, 1000, () => {
//   moveX(btn, 100, 1000, () => {
//     moveX(btn, 800, 1000);
//   });
// });

const moveX = (element, amount, delay) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const bodyBoundary = document.body.clientWidth;
      const elRight = element.getBoundingClientRect().right;
      const currLeft = element.getBoundingClientRect().left;
      if (elRight + amount > bodyBoundary) {
        reject({ bodyBoundary, elRight, amount });
      } else {
        element.style.transform = `translateX(${currLeft + amount}px)`;
        resolve();
      }
    }, delay);
  });
};

// moveX(btn, 300, 1000) //return this promise first, when resolve
//   .then(() => {
//     return moveX(btn, 300, 1000); //then return this, when resolve
//   })
//   .then(() => {
//     return moveX(btn, 300, 1000); //then return this, when resolve
//   })
//   .then(() => {
//     return moveX(btn, 300, 1000); //then return this, when resolve
//   })
//   .then(() => {
//     return moveX(btn, 300, 1000); //then return this, when resolve
//   })
//   .then(() => {
//     console.log("done both"); //then do this
//   })
//   .catch(() => {
//     console.log("out of space, cannot move");
//   });

//we can use implicit functions

moveX(btn, 300, 1000) //return this promise first, when resolve
  .then(() => moveX(btn, 300, 1000)) //then return this, when resolve
  .then(() => moveX(btn, 300, 1000)) //then return this, when resolve
  .then(() => moveX(btn, 300, 1000)) //then return this, when resolve
  .then(() => moveX(btn, 300, 1000)) //then return this, when resolve
  .then(
    () => console.log("done both") //then do this
  )
  .catch(({ bodyBoundary, elRight, amount }) => {
    console.log(`Cannot Move! Body is ${bodyBoundary}px wide`);
    console.log(`Element is at ${elRight}px, ${amount}px is too large!`);
  });

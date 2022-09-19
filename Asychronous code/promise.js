//REMEMBER, CALLBACKS ARE ATTACH TO PROMISES.
// const willGetYouDog = new Promise((resolve, reject) => {
//   const rand = Math.random();
//   if (rand < 0.5) {
//     resolve();
//   } else {
//     reject();
//   }
// });

// //the ".then" method will work if our promise was resolve.
// willGetYouDog.then(() => {
//   console.log("WILL GET YOU A DOG");
// });

// //the ".catch" method will work if our promise was rejected
// willGetYouDog.catch(() => {
//   console.log("SORRY WE COULD NOT");
// });

// const willGetYouDog = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     const rand = Math.random();
//     if (rand < 0.5) {
//       resolve();
//     } else {
//       reject();
//     }
//   }, 5000);
// });

// willGetYouDog.then(() => {
//   console.log("WILL GET YOU A DOG");
// });

// willGetYouDog.catch(() => {
//   console.log("SORRY WE COULD NOT");
// });

//RETURNING A PROMISE FROM A FUNCTION

const makeDogPromise = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const rand = Math.random();
      if (rand < 0.5) {
        resolve();
      } else {
        reject();
      }
    }, 5000);
  });
};

//we can chain .then and .catch together.
makeDogPromise()
  .then(() => {
    console.log("WILL GET YOU A DOG");
  })
  .catch(() => {
    console.log("SORRY WE COULD NOT");
  });

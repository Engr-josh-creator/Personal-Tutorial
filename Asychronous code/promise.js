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

const fakeRequest = (url) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const pages = {
        "/users": [
          { id: 1, username: "Joshua" },
          { id: 5, username: "Esther" },
        ],
        "/users/1": {
          id: 1,
          username: "Joshua",
          upvotes: 360,
          city: "Lisbon",
          topPostId: 454321,
        },
        "/users/5": {
          id: 5,
          username: "Esther",
          upvotes: 571,
          city: "Honolulu",
        },
        "/posts/454321": {
          id: 454321,
          title: "Ladies & Gentlemen, may I introduce my pet pig, Hamlet",
        },
        "/about": "this is the about page",
      };
      //what ever we pass when calling the function, take the url and resolve it with pages of url.
      const data = pages[url]; //everything in our pages url

      if (data) {
        //it means if data is not find in our pages
        resolve({ status: 200, data }); //resolve with a value
      } else {
        reject({ status: 404 }); //reject with a value
      }
    }, 1000);
  });
};

//we can chain .then and .catch together.
//to check if this exist in our url

//THIS IS PROMISE CHAINING
//if we do a '.then' and in the callback of the '.then' we return a promise we can call the '.then' immediately after, at the same level and it will run if the first .then promise was resolve

//PROMISE CHAINING. CHAINING ONE PROMISE TO ANOTHER
//res stand for response. response for the parameter that was passed in fakerequst
//the '.catch' runs when any of them catches an error

fakeRequest("/users")
  .then((res) => {
    console.log(res);
    const id = res.data[0].id;
    return fakeRequest(`/users/${id}`); //returning of a promise
  })

  .then((res) => {
    console.log(res);
    const postId = res.data.topPostId;
    return fakeRequest(`/posts/${postId}`);
  })

  .then((res) => {
    console.log(res);
  })

  .catch((err) => {
    console.log("OH NO", err);
  });
// .catch((res) => {
//   console.log(res.status);
//   console.log("REQUEST FAILED");
// });

// fakeRequest("/dogs")
//   .then((res) => {
//     console.log("status code", res.status);
//     console.log("Data", res.data);
//     console.log("REQUEST WORKED");
//   })
//   .catch((res) => {
//     console.log(res.status);
//     console.log("REQUEST FAILED");
//   });

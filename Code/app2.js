for (i = 1; i <= 10; i++) {
  console.log("hello:", i);
}

for (num = 1; num <= 20; num++) {
  console.log(`${num}*${num} = ${num * num}`);
}

for (x = 50; x >= 0; x -= 10) {
  console.log(x);
}

const examScore = [40, 61, 66, 70, 80, 92, 99];
//length is ALWAYS ONE MORE GREATER THAN THE GREATEST INDEX, that is why we are saying our i variale(in this case y variable is less than the length of the array)

for (let y = 0; y < examScore.length; y++) {
  console.log(y, examScore[y]);
  //y is the index, while examscore[y] is the value of the index
}

const myStudents = [
  {
    firstName: "Zeus",
    grade: 80,
  },

  {
    firstName: "Artemis",
    grade: 89,
  },

  {
    firstName: "Hera",
    grade: 90,
  },

  {
    firstName: "Apollo",
    grade: 99,
  },
];
let total = 0;
for (let z = 0; z < myStudents.length; z++) {
  let student = myStudents[z];
  //    console.log(myStudents[z])
  //    console.log(student)
  console.log(`${student.firstName} scored ${student.grade}`);
  total += student.grade;

  //     console.log(`${myStudents[z].firstName} scored ${myStudents[z].grade}`)
}
console.log(total / myStudents.length);

const word = "stressed";
//instead of counting the string, we can use (word.length-1), because a string can be long and we wont be able to count them. So this will collect the length and return the index.
reverseWord = "";
//loop over array backward
for (let i = word.length - 1; i >= 0; i--) {
  console.log(i, word[i]);
  reverseWord += word[i];
  console.log(reverseWord);
}

for (let i = 1; i <= 10; i++) {
  console.log("OUTER LOOP:", i);
  for (let j = 10; j >= 0; j -= 2) {
    console.log("       INNER LOOP:", j);
  }
}

const gameBoard = [
  [4, 32, 8, 4],
  [64, 8, 32, 2],
  [8, 32, 16, 4],
  [2, 8, 4, 2],
];

let totalScore = 0;
for (let i = 0; i < gameBoard.length; i++) {
  console.log(gameBoard[i]);

  let row = gameBoard[i];
  sum = 0;

  for (let j = 0; j < row.length; j++) {
    totalScore += row[j];
    sum += row[j];
    console.log(row[j]);
  }
  console.log(`${row} summed to = ${sum}`);
}
console.log(totalScore);

let k = 0;
while (k <= 5) {
  console.log(k);
  k++;
}

const target = Math.floor(Math.random() * 10) + 1;

let guess = Math.floor(Math.random() * 10) + 1;

while (guess !== target) {
  console.log(`target: ${target} guess: ${guess} ....Incorrect!`);

  guess = Math.floor(Math.random() * 10) + 1;
  //we are just updating the loop, if the first guess did not work
}

console.log(`our final answer is; target: ${target} guess:${guess}`);

// gameOver = false
// const target = Math.floor(Math.random()*10) + 1
// let guess = Math.floor(Math.random()*10) + 1

// while(!gameOver){
//     if (target === guess) break; {
//        console.log(`target: ${target} guess: ${guess} ....Incorrect!`);
//         guess = Math.floor(Math.random()*10) + 1
//     }
//     }

// console.log(`our final answer is; target: ${target} guess:${guess}`)

let subreddit = ["soccer", "popheads", "cringe", "books"];

for (let sub of subreddit) {
  console.log(sub);
}

for (let reddit of "helloboss") {
  console.log(reddit.toUpperCase());
}

const magicSquare = [
  [4, 32, 8, 4],
  [64, 8, 32, 2],
  [8, 32, 16, 4],
  [2, 8, 4, 2],
];

for (let row of magicSquare) {
  console.log(row);
  sum = 0;
  for (let num of row) {
    console.log(num);
    sum += num;
  }
  console.log(`${row} summed to ${sum}`);
}

const shoppingCart = [
  {
    product: "Jenga Classic",
    price: 6.88,
    quantity: 1,
  },
  {
    product: "Echo Dot",
    price: 29.99,
    quantity: 3,
  },
  {
    product: "Fire Stick",
    price: 39.99,
    quantity: 2,
  },
];

// for(let x of shoppingCart){
//     // console.log(x)
//     let y = shoppingCart['price']
//     console.log(y)
// }

const movieReviews = {
  Arrival: 9.5,
  Alien: 9,
  Amelie: 8,
  "In Bruges": 9,
  Amadeus: 10,
  "Kill Bill": 8,
  "Little Miss Sunshine": 8.5,
  Coraline: 7.5,
};

//Object.keys(movieReviews) will produce a list of all the keys in this object, while  Object.values(movieReviews) will produde a list of all the values.
for (let movie of Object.keys(movieReviews)) {
  let score = movieReviews[movie];
  console.log(movie, movieReviews[movie]);

  // console.log(`i rate ${movie} ${score}/10 `)
  rating = Object.values(movieReviews);
  total = 0;
  for (let r of rating) {
    //we have assigned all the numbers to r
    //this means name of iterable. i.e variable name of the iterable items.
    total += r;
  }
}
let avg = (total /= rating.length);
console.log(`the avg score movie of the review is ${avg}`);

const jeorpardywinnings = {
  regularPlay: 2522700,
  wastonChallenge: 300000,
  momentOfChampions: 500000,
  battleOfTheDecades: 100000,
};

let totalNum = 0;
for (let prop in jeorpardywinnings) {
  //"for in" is used to print keys. in an object.
  totalNum += jeorpardywinnings[prop];
  // console.log(jeorpardywinnings[prop])
  console.log(prop);
}

console.log(`Ken's Jennings total num is $${totalNum}`);

function addUp(num) {
  total = 0;
  for (x = 0; x <= num; x++) {
    total += x;
  }
  return total;
}

// function lessThanOrEqualToZero(num) {
//   if (num <= 0) {
//     return true;
//   }
//   return false;
// }

const lessThanOrEqualToZero = (num) => {
  return num <= 0 ? true : false;
};

function whichIsLarger(f, g) {
  if (f.length > g.length) {
    return f;
  } else if (f.length < g.length) {
    return g;
  } else {
    return "neither";
  }
}

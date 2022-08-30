function rollDie() {
  let roll = Math.floor(Math.random() * 6) + 1;
  console.log(`Rolled: ${roll}`);
}

function throwDie(numRolls) {
  //this is to specify the number of times we want the roll dice. i.e if we set our rolldie to be 5, our i will be less than 5. which means that our rolldie will be 4.
  for (i = 1; i < numRolls; i++) {
    rollDie();
  }
}

function greet(person) {
  // console.log(`hello ${person}, welcome here`);
  return `hello ${person}, welcome here`;
}

function divide(a, b) {
  //the order matters here. how we aranged it, does matter.
  return a / b;
}

function findLargest(x, y) {
  if (x > y) {
    console.log(`${x} is larger than ${y}`);
  } else if (x < y) {
    console.log(`${x} is smaller than ${y}`);
  } else {
    console.log(`both ${x} and ${y} are equal`);
  }
}

function containIsPurple(arr) {
  for (let color of arr) {
    if (color === "purple" || color === "magneta") {
      return true;
    }
  }
  return false;
}

// Write a isValidPassword function
// It accepts 2 arguments: password and username
// Password must:
//	- be at least 8 characters
//  - cannot contain spaces
//  - cannot contain the username
// If all requirements are met, return true.
//Otherwise: false

// isValidPassword('89Fjj1nms', 'dogLuvr');  //true
// isValidPassword('dogLuvr123!', 'dogLuvr') //false
// isValidPassword('hello1', 'dogLuvr') //false

function isValidPassword(username, password) {
  if (
    password.length >= 8 &&
    password.indexOf(" ") === -1 &&
    password.indexOf(username) === -1
  ) {
    //password.indexOf(username)===-1 means, we dont want the username to be in the password.
    return true;
  }
  return false;
}

// Write a function to find the average value in an array of numbers
//avg([0,50]) //25
//avg([75,76,80,95,100]) //85.2

function avg(arr) {
  let total = 0;
  //loop over each num
  for (let num of arr) {
    //add them together
    total += num;
  }
  //add them together
  result = total / arr.length;
  return result;
}

// function avg(arr){
//     let total = 0;
//     for (i=0; i<arr.length; i++){
//         num = arr
//         total += num
//     }
//     result = total/arr.length
//       return result
// }

// A pangram is a sentence that contains every letter of the alphabet, like:
//"The quick brown fox jumps over the lazy dog"

// Write a function called isPangram, which checks to see if a given sentence contains every letter of the alphabet.  Make sure you ignore string casing!

// isPangram('The five boxing wizards jump quickly') //true
// isPangram('The five boxing wizards jump quick') //false

function isPangram(sentence) {
  let word = "abcdefghijklmnopqrstuvwxyz";
  for (let char of word) {
    if (sentence.toLowerCase().indexOf(char) === -1) return false;
  }
  return true;
}

// Write a getCard() function which returns a random playing card object, like:
// 		{
// 			value: 'K'
// 			suit: 'clubs'
// 		}
//Pick a random value from:
//----1,2,3,4,5,6,7,8,9,10,J,Q,K,A
//Pick a random suit from:
//----clubs,spades, hearts, diamonds
//Return both in an object

function pick(arr) {
  //select random element from array
  idx = Math.floor(Math.random() * arr.length); //this mean select a random number from this array.
  return arr[idx];
}

function getCard() {
  const values = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K",
    "A",
  ];
  const value = pick(values);
  //    const randomValue = Math.floor(Math.random() * values.length) //this mean pick a random number from the array.
  //    const value = values[randomValue] //this means, print it out.

  const suits = ["clubs", "spades", "hearts", "diamonds"];
  const suit = pick(suits);
  //     randomSuit = Math.floor(Math.random() * suits.length)

  // const suit = suits[randomSuit]

  return { value: pick(values), suit: pick(suits) };
}

let myName = "Joshua";
function lol() {
  let age = 78;
  const name = "John";
  console.log(name);
}
console.log(myName);

function doubleArray(arr) {
  const result = [];
  for (let num of arr) {
    let double = num * 2;
    result.push(double);
  }
  return result;
}

function outer() {
  let movie = "who am i";

  function inner() {
    let movie = "rush hour"; //the  nested declaration is been declared first
    console.log(movie.toUpperCase());
  }
  inner(); // we have to call the inner(nested)function first before we call the outer fucntion. if no movie in the inner fucntion then it checks the outer function.
}

const sum = function (x, y) {
  //function are object; which means that we can pass them into a variable. This is called function expression.
  return x + y;
};

function add(x, y) {
  return x + y;
}

const subtract = function (x, y) {
  return x - y;
};

function multiply(x, y) {
  return x * y;
}

const Divide = function (x, y) {
  return x / y;
};

//We can store functions in an array!
const operations = [add, subtract, multiply, Divide];

//Loop over all the functions in operations
for (let func of operations) {
  let result = func(30, 5); //execute func! i.e func is holding "add,subtract,multiply, and divide" as if it was a value in an array.. but this are function that will have to execute, when we print it out.
  console.log(result);
}

// We can also store functions in objects!
const thing = {
  doSomething: multiply,
}; // by adding a value to a function we are creating a method. i.e thing.dosomething(5,7). which is a method like; "Joshua".toUpperCase()

function callThreeTimes(f) {
  f();
  f();
  f();
}

function cry() {
  //we are passing in the function "cry" into the function "callThreeTimes". so that what we have in the function cry will be printed out the no of times we have in the function callThreeTimes, which is 3 times here.
  console.log("BOO HOO, I AM SO SAD!");
}

function rage() {
  console.log("I FIT TEAR YOU SLAP NOW IF YOU NO BEHAVE.");
}
function scream() {
  console.log("LEAVE ME ALONE!!!");
}

function repeatNTimes(action, num) {
  for (i = 0; i < num; i++) {
    action();
  }
}
//the loop is to specify the number of times we want the function to repeat
//   repeatNTimes(cry, 10)

const randomChoice = [cry, rage, scream];

//   function randomlyPick(){
//       for(let choice of randomChoice){
//       randomlyPickArr = Math.floor(Math.random()*randomChoice.length)

//   }
//   }

function pickOne(f1, f2) {
  let rand = Math.random();
  console.log(rand);
  if (rand < 0.5) {
    f1();
  } else {
    f2();
  }
}

function multiplyBy(num) {
  //this function below is a factory for making more function. one can modify them.
  return function (x) {
    //by doing this, we can save the function on a variable that helps us to modify the function. here the functions carries a number and multiply it by our num.
    return x * num;
  };
}

const triple = multiplyBy(3);
const double = multiplyBy(2);

function makeBetweenFunc(x, y) {
  return function (num) {
    return num >= x && num <= y; //this expression, express a boolean, whether true or false
  };
}

const isChild = makeBetweenFunc(0, 18);
const isYouth = makeBetweenFunc(18, 35);

//callback functions
// function grumpus(){
//     alert("ahhhh, go away from me")
// }
// setTimeout(grumpus, 5000)

// setTimeout(function(){
//     alert("go away from me")
// }, 5000) //it means run this function code or block of code after a set time. that is after 5000 Miliseconds, which is 5 seconds.

//FOREACH: accept a callback function call the function per element in the array
const num = [20, 21, 22, 24, 25, 26];

num.forEach(function (num, idx) {
  console.log(idx, num * 2);
});

isEven = num.map(function (n) {
  return { value: n, Even: n % 2 === 0 };
});

const books = [
  {
    title: "Good Omens",
    authors: ["Terry Pratchett", "Neil Gaiman"],
    rating: 4.25,
    genres: ["fiction", "fantasy"],
  },
  {
    title: "Changing My Mind",
    authors: ["Zadie Smith"],
    rating: 3.83,
    genres: ["nonfiction", "essays"],
  },
  {
    title: "Bone: The Complete Edition",
    authors: ["Jeff Smith"],
    rating: 4.42,
    genres: ["fiction", "graphic novel", "fantasy"],
  },
  {
    title: "American Gods",
    authors: ["Neil Gaiman"],
    rating: 4.11,
    genres: ["fiction", "fantasy"],
  },
  {
    title: "A Gentleman in Moscow",
    authors: ["Amor Towles"],
    rating: 4.36,
    genres: ["fiction", "historical fiction"],
  },
  {
    title: "The Name of the Wind",
    authors: ["Patrick Rothfuss"],
    rating: 4.54,
    genres: ["fiction", "fantasy"],
  },
  {
    title: "The Overstory",
    authors: ["Richard Powers"],
    rating: 4.19,
    genres: ["fiction", "short stories"],
  },
  {
    title: "The Way of Kings",
    authors: ["Brandon Sanderson"],
    rating: 4.65,
    genres: ["fantasy", "epic"],
  },
  {
    title: "Lord of the flies",
    authors: ["William Golding"],
    rating: 3.67,
    genres: ["fiction"],
  },
];
const higherRating = books.filter((n) => {
  //this is used for search majorly. where we are to narrow down our search button to only ratings above 4.5. here it will filter and brings those books above 4.5 rating.
  return n.rating >= 4.5;
});
const shortBooks = books.filter((f) => {
  return f.genres.includes("fantasy") || f.genres.includes("essays");
});

books.forEach(function (book) {
  console.log(book["title"].toUpperCase());
});

const titles = books.map(function (b) {
  //here we are creating a new array of title and we are storing it to titles.
  return b["title"].toUpperCase();
});
const goodBook = books.find((book) => {
  return book.rating >= 4.3; //The book stand for every element in the array which is an object.
});
const goodBook2 = books.find(function (b) {
  return b.rating >= 4.1;
});

const goodBook3 = books.find((Neil) => {
  return Neil.authors.includes("Neil Gaiman");
});

const figures = [2, 4, 5, 6, 8, 10];

const doubleNum = figures.map(function (num) {
  return num * 2;
});

let nameOfBoys = ["Joshua", "John", "Elias", "Zalas"];
const Capital = nameOfBoys.map(function (t) {
  return t.toUpperCase();
});

const adding = (x, y) => {
  //this is called Arrow functions
  return x + y;
};

const square = (n) => n * n;

const numberss = [1, 2, 3, 4, 5, 6, 7];

const doubleNumberss = numberss.map((k) => {
  return k * 2;
});

const doubleNumbers2 = numberss.map(function (n) {
  return n * 2;
});

const doubleNumbers3 = numberss.map((j) => j * 2);

const parityList = numberss.map(function (n) {
  //parity is the term refering to if a number is even or odd
  //numberss.map (n) =>
  if (n % 2 === 0) {
    return "even";
  } else {
    return "odd";
  }
});

//using tenary operator, it will be
//(if n % 2===0? "even": "odd")

let movies = [
  "The Fantastic Mr. Fox",
  "Mr. and Mrs. Smith",
  "Mrs. Doubtfire",
  "Mr. Deeds",
];

const movie1 = movies.find(function (movie) {
  return movie.includes("Mrs");
});

const movie2 = movies.find((movie) => {
  return movie.includes("Mrs"); //it means look for any movie that contain Mrs anywhere. we have 2 of them. but it return the first movie that contain Mrs. i.e after its first match
});

const movie3 = movies.find((movie) => {
  return movie.indexOf("Mrs") === 0; //it means find the movie that start with Mrs
});

//FILTER; it create a new array with all elements that pass the test implemented by the provided funtion
// const nums = [9, 10, 7, 8, 12, 13, 15, 17];
// const odds = nums.filter((n) => { //using Arrow functions
//   return n % 2 === 1;
// });

const nums = [9, 10, 7, 8, 12, 13, 15, 17];
const odds = nums.filter(function (n) {
  //using function annonymous expression
  return n % 2 === 1; // here it return true or false. if it returns true n is added to the filtered array. i.e we are creating a copy with specified targeted informations
});
const evens = nums.filter((n) => {
  return n % 2 === 0;
});

const query = "The"; //This will be coming from a user
const resultOfThe = books.filter((n) => {
  return n.title.toLowerCase().includes(query.toLowerCase());
}); //we are searching for title and making it insensitive by lowercasing it. and we are searching for the input of the query and also making it insensitive by lowecasing it.

const words = ["dog", "cat", "bags", "log", "men"];
const threeLetters = words.every((n) => {
  return n.length === 3;
});

const lastG = words.every((n) => {
  return n.length - 1 === "g"; // We are checking if the last words of all the element in the array end with g. n.length - 1, is to check for the last index
});

const greaterThan4 = words.some((n) => {
  //used to check it any element pass the test function
  return n.length >= 4;
});

const bookRating = books.every((n) => {
  return n.rating >= 4.3;
});

const any2Authors = books.some((n) => n.authors.length === 2); //this is an implicit arrow function. To check for books that have 2 authors

const prices = [12, 200, 35.5, 90, 9000, 12000, 30000];

const ascSort = prices.slice().sort((a, b) => a - b); //we made a copy of the original array before we sort.
const desSort = prices.slice().sort((a, b) => b - a); //same here also. because if we dont. the desSort will change the copy of sort

const goodBook4 = books.slice().sort((a, b) => a.rating - b.rating);

const product = nums.reduce((total, currentval) => {
  return total * currentval; //The first time reduce call the callback, total will be initialize with the first element.
});

const grades = [88, 68, 70, 90, 89, 99, 50];

const topGrade = grades.reduce((max, culVar) => {
  if (max > culVar) return max;
  return culVar;
});

// const topGrade2 = grades.reduce(function (max, culVar) {
//   if (max > culVar) return max;
//   return culVar;
// });

const topGrade2 = grades.reduce(function (max, culVar) {
  return Math.max(max, culVar);
});

const lowScore = grades.reduce((min, culVar) => {
  return Math.min(min, culVar);
});

const figure = [5, 8, 9, 10, 46];
normal = 0;
for (let a of figure) {
  normal += a;
}
console.log(normal);

const votes = ["y", "y", "n", "y", "n", "y", "n", "y", "n", "n", "n", "y", "y"];

const result = votes.reduce((tally, val) => {
  if (tally[val]) {
    //do we have the current key in the object.
    //"tally" is more like the last event in memory. and it last event for the first current item is the initial value. while "val" is the element ln the array, which is the object
    tally[val]++; //if tally[val] exist, then add one to it. for the 1st iteration, is there an element of y in its last memory? if is NO, which it is for its first iteration then set {y:1}
  } else {
    tally[val] = 1; //if not, set it to one
  }
  return tally; //which is its total number
}, {}); //but we set an iniitial value of an empty object

const result2 = votes.reduce((tally, val) => {
  tally[val] = (tally[val] || 0) + 1; //here the first time tally[val] is empthy(0) and 0 || 1 is 1. and we add 1 to it which make y=1

  return tally;
}, {}); //here, the empty object, is the initial value.

const booksRating = books.reduce((groupedBooks, b) => {
  //"groupedBooks" is more like the last event in memory. and it last event for the first current item is the initial value. while "b" is the element ln the array, which is the object
  const key = Math.floor(b.rating); //we are removing the decimal point in books rating
  if (!groupedBooks[key]) {
    //!groupedBooks[key]) means if there is no book with rating of 3 or rating of 4 or other rating, then do this
    groupedBooks[key] = [];
    groupedBooks[key].push(b);
  } else {
    groupedBooks[key].push(b);
  }
  return groupedBooks;
}, {}); //here, the empty object, is the initial value.

function odd(arr) {
  return arr.filter((n) => n % 2 === 1);
}

const deckFactory = {
  values: ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"],
  suits: ["clubs", "spades", "hearts", "diamonds"],
  deck: [],
  withDrawnDeck: [],
  initilizeDeck() {
    const { values, suits, deck } = this;
    for (let value of values) {
      for (let suit of suits) {
        deck.push({ value, suit }); //we push the value and suit into the deck
      }
    }
    return deck;
  },
  withDrawn(numbers) {
    const { deck } = this;

    const card2 = [];
    for (let i = 0; i < numbers; i++) {
      const card1 = deck.pop(); //to delete an element
      card2.push(card1); //push card1 that we deleted into card2
    }
    this.withDrawnDeck.push(card2); //then push all that was deleted in the "for loop" into "withDrawnDeck"
    return card2;
  },
  shuffle() {
    const { deck } = this; //we are making reference to the deck so as to make use of it in the shuffle
    //using FISHER YATES ALGORITHM to fisher an array
    for (let i = deck.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [deck[i], deck[j]] = [deck[j], deck[i]];
    }
  },
};

const deck = () => {
  return {
    values: ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"],
    suits: ["clubs", "spades", "hearts", "diamonds"],
    deck: [],
    withDrawnDeck: [],
    initilizeDeck() {
      const { values, suits, deck } = this;
      for (let value of values) {
        for (let suit of suits) {
          deck.push({ value, suit }); //we push the value and suit into the deck
        }
      }
      return deck;
    },
    //we want to withdraw card
    withDrawDeck() {
      const { deck } = this; //this is used to reference the deck
      card1 = deck.pop(); //to delete an element from the deck.
      this.withDrawnDeck.push(card1); // we are pushing card1(that we deleted) into withDrawnDeck array
      return card1;
    },
    //to keep track of our withdrawn item. lets create an array for it.
    withDrawnMany(numbers) {
      const card2 = [];
      for (let i = 0; i < numbers; i++) {
        card2.push(this.withDrawDeck()); //this is referecing the withDrawDeck method which is to delete an element. so "withDrawnMany" method will delete any set number of element we passed into it.
      }
      return card2;
    },
    shuffle() {
      const { deck } = this;
      //using FISHER YATES ALGORITHM to fisher an array
      for (let i = deck.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [deck[i], deck[j]] = [deck[j], deck[i]];
      }
    },
  };
};

const myDeck = deck();
myDeck.initilizeDeck();
myDeck.shuffle();
myDeck.withDrawnMany(5);

//is possible to create a 2nd deck because of the return keyword. and this is possible anytime we call "deck".
const myDeck2 = deck();
myDeck2.initilizeDeck();

//  //we want to withdraw card
//   withDrawDeck() {
//     const { deck } = this; //this is used to reference the deck
//     card1 = deck.pop(); //to delete an element from the deck.
//     this.withDrawnDeck.push(card1); // we are pushing card1(that we deleted) into withDrawnDeck array
//     return card1;
//   },
//   //to keep track of our withdrawn item. lets create an array for it.
//   withDrawnMany(numbers) {
//     const card2 = [];
//     for (let i = 0; i < numbers; i++) {
//       card2.push(this.withDrawDeck()); //this is referecing the withDrawDeck method which is to delete an element. so "withDrawnMany" method will delete any set number of element we passed into it.
//     }
//     return card2;
// },

function longer(a, b) {
  return a.length > b.length ? a : b;
}

function longestWord(...str) {
  //the threedot(...) was to convert it to an array using rest
  var words = str;
  return words.reduce(longer); // we are returning the longer word here, after we have define it up. the reduce will return one value, after taking 2 functions up
}

function convertToRoman(num) {
  var roman = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
  };
  var str = "";

  for (var i of Object.keys(roman)) {
    var q = Math.floor(num / roman[i]);
    num -= q * roman[i];
    str += i.repeat(q);
  }

  return str;
}

function romanize(num) {
  var lookup = {
      M: 1000,
      CM: 900,
      D: 500,
      CD: 400,
      C: 100,
      XC: 90,
      L: 50,
      XL: 40,
      X: 10,
      IX: 9,
      V: 5,
      IV: 4,
      I: 1,
    },
    roman = "";

  for (i in lookup) {
    console.log(i);
    console.log(i, lookup[i]);
    while (num >= lookup[i]) {
      roman += i;
      num -= lookup[i];
    }
  }
  return roman;
}

const uniqueMorseRepresentations = (words) => {
  return {
    uniqueCodes: [
      ".-",
      "-...",
      "-.-.",
      "-..",
      ".",
      "..-.",
      "--.",
      "....",
      "..",
      ".---",
      "-.-",
      ".-..",
      "--",
      "-.",
      "---",
      ".--.",
      "--.-",
      ".-.",
      "...",
      "-",
      "..-",
      "...-",
      ".--",
      "-..-",
      "-.--",
      "--..",
    ],
    alphabets: "abcdefghijklmnopqrstuvwxyz",
    transformation: [],
    initialize() {
      const { uniqueCodes, alphabets, transformation } = this;
      const letters = alphabets.split("");
      for (let uniqueCode of uniqueCodes) {
        for (let alphabet of letters) {
          transformation.push({ uniqueCode, alphabet });
        }
      }
      return transformation;
    },
  };
};

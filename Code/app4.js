// function multiply(a, b) {
//   b = typeof b === "undefined" ? 5 : b; //it means if b === undefined(not specified, no value passed in), set b, to be  5.
//   return a * b;
// }

//DEFAULT PARAMETERS IN FUNCTIONS.
const multiply = (a, b = 6) => a * b; //this is also mean same thing with the first example.

//SPREAD
function giveMeFour(a, b, c, d) {
  console.log("a", a);
  console.log("c", c);
  console.log("c", c);
  console.log("d", d);
}

const colors = ["red", "orange", "yellow", "green"]; //it cannot be expanded because is an array. We have to use spread to expand it.

const nums1 = [1, 2, 3, 4];
const nums2 = [5, 6, 7, 8];

const cephalopods = [
  "dumbo octopus",
  "humboldt squid",
  "flamboyant cuttlefish",
];

const gastropods = ["giant african snail", "banana slug", "variable neon slug"];

const cnidaria = ["fire coral", "moon jelly"];

const mollusca = [...cephalopods, ...gastropods];

const feline = {
  legs: 4,
  family: "Felidae",
};

const canine = {
  family: "Caninae",
  furry: true,
  legs: 4,
};

const dog = {
  ...canine,
  isPet: true,
  adorable: true,
};

const houseCat = {
  ...feline,
  sweet: true,
  personality: "unpredictable",
};

const tripod = {
  ...canine,
  legs: 3, //legs will be set to "3" not "4", because, first, the legs in canine will be 4, but will be updated to be 3. so its orders matter.
};

function sum(arr) {
  //here we are calling the function we need to put [], so we can let the function know that it is an array.
  let total = 0;
  for (let num of arr) {
    total += num;
  }
  return total;
}
//REST
function add(...nums) {
  //THIS IS CALLED REST
  // here we all passed all argument we want, whether 10 or 20 and they are converted into a nums array using the three "DOT", so that when callilng the function we dont need to put '[]'
  return nums.reduce((total, currVal) => total + currVal);
}

const multiplyBy = (...nums) =>
  nums.reduce((total, currVal) => total * currVal);
//DESTRUCTURING
const raceResults = [
  "Eliud Kipchoge",
  "Feyisa Lelisa",
  "Galen Rupp",
  "Ghirmay Ghebreslassie",
  "Alphonce Simbu",
  "Jared Ward",
];

const [gold, silver, bronze] = raceResults; //The gold, silver, and bronze will be set to the first 3 values in raceResults.

const [first, , , fourth] = raceResults; //The comma is used to skip element, so we skip 2 elements.
const [winner, ...others] = raceResults; //show us the winner, and put the rest name in an array

const jeorpardywinnings = {
  regularPlay: 2522700,
  wastonChallenge: 300000,
  momentOfChampions: 500000,
  battleOfTheDecades: 100000,
};

const { regularPlay, wastonChallenge } = jeorpardywinnings; //the variable names must be existing key names in the object.

const { wastonChallenge: Joshua, momentOfChampions: bestMen } =
  jeorpardywinnings;

const results = [
  {
    first: "Eliud",
    last: "Kipchoge",
    country: "Kenya",
  },
  {
    first: "Feyisa",
    last: "Lilesa",
    country: "Ethiopia",
  },
  {
    first: "Galen",
    last: "Rupp",
    country: "United States",
  },
];

const [, { country }] = results; //The comma place was to skip the first element in the array.
const [goldWinner] = results;
// const { first } = goldWinner;
const [, silverWinner] = results;
const { last } = silverWinner; //rem, we use the "key" to destructure.

const runner = {
  first: "Eliud",
  last: "Kipchoge",
  country: "Kenya",
  title: "Elder of the Order of the Golden Heart of Kenya",
};

const name = ({ first, last }) => {
  return `${first} ${last}`;
};

const getStats = (arr) => {
  const max = Math.max(...arr); //(...arr): it means whatever we passed into here, convert it into an array.
  const min = Math.min(...arr);
  const sum = arr.reduce((sum, r) => sum + r);
  const avg = sum / arr.length;
  return {
    max, //This will return the key with the corresponding value, it is a shorthand object property.
    min,
    sum,
    avg,
  };
};

const reviews = [4.5, 5.0, 3.44, 2.8, 3.5, 4.0, 3.55];
const stats = getStats(reviews);

// function Stats(arr) {
//   const max = Math.max(...arr);
//   const min = Math.min(...arr);
//   const sum = arr.reduce((sum, r) => sum + r);
//   const avg = sum / arr.length;
//   return {
//     max, //This will return the key with the corresponding value
//     min,
//     sum,
//     avg,
//   };
// }

// const reviews = [4.5, 5.0, 3.44, 2.8, 3.5, 4.0, 3.55];
// const stats = Stats(reviews);

//In COMPUTED PROPERTY: we can use a variable as a key name of an object.
const role = "host";
const person = "jools halland";
const role2 = "director";
const person2 = "james cameroon";

const team = {
  [role]: person,
  [role2]: person2,
};

const addProp = (obj, k, v) => {
  //here we are copying the old object and adding in a new key, value pair.
  return {
    ...obj,
    [k]: v,
  };
};

const res = addProp(team, "happy", ":)");

// const math = {
//   add: function (x, y) {
//     return x + y;
//   },
//   subtract: function (x, y) {
//     return x - y;
//   },
//   divide: function (x, y) {
//     return x / y;
//   },
// };

const math = {
  add(x, y) {
    return x + y;
  },
  subtract(x, y) {
    return x - y;
  },
  divide(x, y) {
    return x / y;
  },
  login() {
    console.log("YOU ARE LOGGED IN");
  },
};

function sayHi() {
  console.log("HI");
  //this refers to the window (global scope object in the browser)
  console.log(this);
}

const myName = {
  first: "Joshua",
  last: "Onwuemene",
  nickName: "SirJosh",
  fullName() {
    const { first, last, nickName } = this; //We are destructuring the element in the curly braces. This is referencing the object.
    return `${first} ${last} AKA ${nickName}`; //The value of 'THIS' is set to the object. i.e the 'myName' object(the current object). The value of this is referencing to the object it lives in.
  },
  printBio() {
    const fullName = this.fullName(); //To make reference to the fullName, which is inside the object.
    console.log(`${fullName} is a lover of knowledge`);
  },
};

const printBio = myName.printBio;

// function getFirstValue(arr) {
//   return arr.find((arr) => arr !== undefined); //This means if the first value we find is not equal to undefined i.e a real number, then return that number
// }

function getFirstValue(arr) {
  return arr[0];
}

const annoyer = {
  phrases: [
    "literally",
    "cray cray",
    "I can't even",
    "Totes!",
    "YOLO",
    "Can't Stop, Won't Stop",
  ],
  pickPhrases() {
    const { phrases } = this; //this is referencinig the object.
    const idx = Math.floor(Math.random() * phrases.length);
    return phrases[idx];
  },
  start() {
    this.timerId = setInterval(() => {
      console.log(this.pickPhrases()); //we are using the "this" to refer to the object, because of "Arrow function", it does not create its own This.
    }, 3000);
  },
  stop() {
    clearInterval(this.timerId);
    console.log("it is over now");
  },
};

function makeDeck() {
  const deck = [];
  const values = [
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
  const suits = ["clubs", "spades", "hearts", "diamonds"];
  for (let value of values) {
    for (let suit of suits) {
      //this means for each value, we want to iterate over all the suits. i.e 13*4 = 52. i.e let an element for values, be each assigned  to all the element in suits.
      deck.push({ value, suit });
    }
  }
  return deck;
}

function drawCard(deck) {
  //we are creating a function to delete one of the card
  return deck.pop();
}

// const myDeck = makeDeck(); //we are saving the "makedeck" card in  a variable
// const card1 = drawCard(myDeck); //we are saving the function "drawcard"(which is to delete a deck and we are saving it in a variable, 'card1'), and we pass in an argument "mydeck", which will delete an element from the makeDeck()

const myDeck = {
  deck: [],
  drawnCards: [],
  values: ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"],
  suits: ["clubs", "spades", "hearts", "diamonds"],
  initilizeDeck() {
    const { values, suits, deck } = this;
    for (let value of values) {
      for (let suit of suits) {
        deck.push({ value, suit });
      }
    }
    return deck;
  },
  drawCard() {
    const card = this.deck.pop();
    this.drawnCards.push(card);
    return card;
  },
  drawMultiple(numCards) {
    const cards = [];
    for (let i = 0; i < numCards; i++) {
      cards.push(this.drawCard());
    }
    return cards;
  },
  shuffle() {
    const { deck } = this;
    for (let i = deck.length - 1; i > 0; i--) {
      //pick random index before current element
      let j = Math.floor(Math.random() * (i + 1));
      //swap
      [deck[i], deck[j]] = [deck[j], deck[i]];
    }
  },
};

//we can use the keyword "return" to create a new object.

//TO SHUFFLE AN ARRAY USING FISHER YATES ALGORITHM.
function shuffle(arr) {
  //loop over array backwards
  for (let i = arr.length - 1; i > 0; i--) {
    //pick random index before current element
    let j = Math.floor(Math.random() * (i + 1));
    //swap
    [arr[i], arr[j]] = [arr[j], arr[i]];
    console.log(arr);
  }
}

//this is finding the largest and smallest number in an array using spread, when calling it, we need to put []
// function minMax(arr) {
//   small = Math.min(...arr);
//   large = Math.max(...arr);
//   return [small, large];
// }

//this is finding the largest and smallest number in an array using rest, when calling it, we dont need to put the []
// function minMax(...arr) {
//   small = Math.min(...arr);
//   large = Math.max(...arr);
//   return [small, large];
// }

var runningSum = function (nums) {
  let total = [];
  let currentTotal = 0;
  for (let i = 0; i < nums.length; i++) {
    let cv = nums[i];
    currentTotal += cv;
    total.push(currentTotal);
  }
  return total;
};

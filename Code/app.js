//alert("hello from Joshua!");

//

//console.log("am so happy");
//console.log("all is good");

let rating = 1;
if (rating === 3) {
  console.log(`wow, this is excellent`);
} else if (rating === 2) {
  console.log(`you are good`);
} else if (rating === 1) {
  console.log("this needs improvemnt");
} else {
  console.log("invalid rating!");
}
let number = 37;
if (number % 2 !== 0) {
  console.log("this is a Odd number");
}

let num = Math.floor(Math.random() * 10) + 1;
if (num % 2 !== 0) {
  console.log("0dd number alert");
} else if (num % 2 === 0) {
  console.log(`even number alert`);
}

let highScore = 1530;
let userScore = 9000;

if (userScore >= highScore) {
  console.log(
    `Good game!. You are really improving bro, you have a new highscore of ${userScore}`
  );
  highScore = userScore;
} else {
  console.log(`keep playing, you will get there soonest.`);
}

let passWord = "helloworld";

if (passWord.length >= 8) {
  // let no space be found. if space === "not found" - then print valid password.
  if (passWord.indexOf(" ") === -1) {
    console.log("valid password!");
  } else {
    console.log("password should not contain space");
  }
} else {
  console.log("password must be longer.");
}

let Name = "onwuemene joshua";

// !== -1. is to test if it contains space. we are trying to say, let it  contain space. i.e let space be found in our names.

if (Name.length >= 9 && Name.indexOf(" ") !== -1) {
  console.log("correct name!");
} else {
  console.log("pls, check your name again");
}
//both statement need to be true for the AND(&&) logical operator to work(be TRUE).

//only one statement need to be true for the OR(||) logical operator to work(be TRUE).

let age = 90;
if (age >= 18 && age <= 90) {
  console.log("welcome!");
} else {
  console.log("Access denied, go to the room for the elderly.");
}

let minAge = 17;

if (minAge >= 6 || minAge <= 18) {
  console.log("you are welcome pal");
} else {
  console.log("Accesss denied!");
}

let day = 9;
//switch statment means that we are talking ove value and checking it against multiple potential values.
switch (day) {
  case 1:
    console.log("Monday");

    break;

  case 2:
    console.log("Tuesday");
    break;

  case 3:
    console.log("Wednesday");
    break;

  case 4:
    console.log("Thursday");
    break;

  case 5:
    console.log("Friday");
    break;

  case 6:
    console.log("Saturday");
    break;

  case 7:
    console.log("sunday");
    break;

  default:
    console.log("invalid day");
}

let numb = 2;

//Tenary operators. it works when only we are doing a "yes or no condition".
//condition? expIfTrue: expIfFalse

numb === 2 ? console.log("Good!") : console.log("Bad...");

let Status = "offline";

Status === "offline" ? console.log("red") : console.log("green");

let student = ["hello", "good", 57, true];

student[0] = "cereal";
student[student.length] = "egg";
student[student.length] = "rice";
console.log(student);

let NameOfStudent = ["Joshua", "Timothy", "Paul"];
NameOfStudent.push("Elijah");

let fruit = ["orange", "pinneapple", "mangoes"];
let veggies = ["water leaf", "biiter leaf"];

console.log(fruit.concat(veggies));

let vegetable = [
  "maggie",
  "lemon",
  "crayfish",
  "water",
  "salt",
  "peppper",
  "corn starch",
];

if (vegetable.includes("salt")) {
  console.log("i can eat this food");
}

let animals = ["shark", "fish", "whale", "Lizard", "tortise"];
//slice is used to copy portion of an array
let swimmers = animals.slice(0, 3);

const animalPairs = [
  ["Shark", "whale"],
  ["dog", "cat"],
  ["snake", "anaconda"],
  ["cat", "tiger"],
];

const fitBitData = {
  totalSteps: 308727,
  totalMiles: 211.7,
  avgCalorieBurn: 5755,
  workoutsThisWeek: "5 of 7",
  avgGoodSleep: "2:13",
  100: "one hundred",
  16: "sixteen",
};

const studentRecord = {
  firstName: "David",
  lastName: "joe",
  strength: ["music", "art"],
  exams: {
    midTerm: 92,
    finalExam: 88,
  },
};

const avgScore =
  (studentRecord.exams.midTerm + studentRecord.exams.finalExam) / 2;

const Game1 = {
  player1: {
    userName: "Joshua",
    playingAs: "X",
  },

  player2: {
    userName2: "Daniel",
    playingAs: "O",
  },

  board: [
    [null, "X", "O"],
    ["O", null, "X"],
    ["X", null, "O"],
  ],
};

const game = {
  player1: {
    username: "Blue",
    playingAs: "X",
  },
  player2: {
    username: "Muffins",
    playingAs: "O",
  },
  board: [
    ["O", null, "X"],
    ["X", "O", "X"],
    [null, "O", "X"],
  ],
};

const user = {
  username: "cherryGarcia8",
  email: "garcia8@gmail.com",
  Notification: [],
};

if (!user.Notification.length) {
  //if there is nothing in the notification.
  console.log("no new message");
} else {
  console.log("there is a new message");
}

var isPalindrome = function (x) {
  //convert to a string, then convert it to an array, then one can use the reverse method since is an array, then join it.
  let num = parseInt(x.toString().split("").reverse().join(""));
  if (x === num) {
    return true;
  }
  return false;
};

function array(a) {
  return a.toString().split("");
}

function romanToInt(s) {
  const numToRoman = {
    1000: M,
    900: C,
    500: D,
    400: CD,
    100: C,
    90: XC,
    50: L,
    40: XL,
    10: X,
    9: IX,
    5: V,
    4: IV,
    1: I,
  };
  num = "";
  for (let key in numToRoman) {
    console.log(key);
    while (s >= numToRoman[key]) {
      num += key;
      s -= numToRoman[key];
    }
  }
  return num;
}

//Simply, indexOf() gets first occurrence of a character & lastIndexOf() gets the last occurrence. So when the first occurrence is also == the last occurence, it means the character repeat itself
//this specify the character of a of a non repeating character
var firstUniqChar = function (s) {
  for (let i = 0; i < s.length; i++) {
    let j = s.charAt(i); //returns the character from the specified index
    if (s.indexOf(j) === s.lastIndexOf(j)) {
      return j;
    }
  }
  return -1;
};

//leetcode challenge, it return the index of a non repeating character

var firstUniqChars = function (s) {
  for (let i = 0; i < s.length; i++) {
    const word = s[i]; //this is the value of the index
    if (s.indexOf(word) === s.lastIndexOf(word)) {
      return i;
    }
  }
  return -1;
};

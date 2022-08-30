const warriorsGames = [
  {
    awayTeam: {
      team: "Golden State",
      points: 119,
      isWinner: true,
    },
    homeTeam: {
      team: "Houston",
      points: 106,
      isWinner: false,
    },
  },
  {
    awayTeam: {
      team: "Golden State",
      points: 105,
      isWinner: false,
    },
    homeTeam: {
      team: "Houston",
      points: 127,
      isWinner: true,
    },
  },
  {
    homeTeam: {
      team: "Golden State",
      points: 126,
      isWinner: true,
    },
    awayTeam: {
      team: "Houston",
      points: 85,
      isWinner: false,
    },
  },
  {
    homeTeam: {
      team: "Golden State",
      points: 92,
      isWinner: false,
    },
    awayTeam: {
      team: "Houston",
      points: 95,
      isWinner: true,
    },
  },
  {
    awayTeam: {
      team: "Golden State",
      points: 94,
      isWinner: false,
    },
    homeTeam: {
      team: "Houston",
      points: 98,
      isWinner: true,
    },
  },
  {
    homeTeam: {
      team: "Golden State",
      points: 115,
      isWinner: true,
    },
    awayTeam: {
      team: "Houston",
      points: 86,
      isWinner: false,
    },
  },
  {
    awayTeam: {
      team: "Golden State",
      points: 101,
      isWinner: true,
    },
    homeTeam: {
      team: "Houston",
      points: 92,
      isWinner: false,
    },
  },
];

//we will loop over the warriorGames so as to bring out each element.
//(DESTRUCTURING); game is each element in the array(which is an object). so we are destructuring to bring out the homeTeam and awayTeam from each['team']
//to create a new li so we can  add it to the parent ul
//using destructuring to change the name & point of the team.
//  const golden = ateam === "Houston" ? awayTeam : homeTeam;
//   console.log(golden); to bring out  all the team with Houston.

document.body.style.backgroundColor = "gray";
document.body.style.fontSize = "1.3rem";

// const parentUl = document.createElement("ul");
// for (let game of warriorsGames) {
//   const { awayTeam, homeTeam } = game;
//   const gameLi = document.createElement("li");
//   const { team: hteam, points: hpoints } = homeTeam;
//   const { team: ateam, points: apoints } = awayTeam;
//   const teamNames = `${ateam} @ ${hteam}`; //to create the name of the team.
//   let scoreLine; //scoreLine exist, but it does not has a valule
//   if (apoints > hpoints) {
//     scoreLine = `<b>${apoints}</b> - ${hpoints}`; //we are updating the scoreLine.
//   } else {
//     scoreLine = `${apoints} - <b>${hpoints}</b>`;
//   }
//   const warriors = hteam === "Golden State" ? homeTeam : awayTeam; //to bring out all the team with Golden state
//   gameLi.classList.add(warriors.isWinner ? "win" : "lose");
//   gameLi.innerHTML = `${teamNames} ${scoreLine}`; //this is the content of the list in the parentUl.
//   parentUl.append(gameLi);
// }

//the parentUl we created is not associated with the body, so we have to append it to the body, so it can show up in our webpage.

// document.body.append(parentUl);

//the function, is so we can we can call its twice without manually coding it.

// const makeData = (games, targetTeam) => {
//   const parentUl = document.createElement("ul");
//   for (let game of games) {
//     const gameLi = document.createElement("li");
//     gameLi.innerHTML = getScoreLine(game);
//     gameLi.classList.add(isWinner(game, targetTeam) ? "win" : "lose");
//     parentUl.append(gameLi);
//   }
//   return parentUl; //to return all of the li and all of the datas
// };

// const isWinner = ({ homeTeam, awayteam }, targetTeam) => {
//   const target = homeTeam.team === targetTeam ? homeTeam : awayteam;
//   return target.isWinner;
// };

//a function to determine the innertext
//we are destructuring it here, to bring out the hometeam and awayteam
// const getScoreLine = ({ homeTeam, awayTeam }) => {
//   const { team: hteam, points: hpoints } = homeTeam;
//   const { team: ateam, points: apoints } = awayTeam;
//   const teamNames = `${ateam} @ ${hteam}`;
//   let scoreLine;
//   if (apoints > hpoints) {
//     scoreLine = `<b>${apoints}</b> - ${hpoints}`;
//   } else {
//     scoreLine = `${apoints} - <b>${hpoints}</b>`;
//   }
//   return `${teamNames} ${scoreLine}`;
// };

// const gsSection = document.querySelector("#gs");
// const gschart = makeData(warriorsGames, "Golden State"); //here we are calling the funtion
// gsSection.append(gschart);

// const hrSection = document.querySelector("#hr");
// const hrchart = makeData(warriorsGames, "Houston");
// hrSection.append(hrchart);

const makeChart = (games, targetTeam) => {
  const ulParent = document.createElement("ul");
  for (let game of games) {
    const gameLi = document.createElement("li");
    gameLi.innerHTML = getScoreLine(game);
    gameLi.classList.add(isWinner(game, targetTeam) ? "win" : "lose");
    ulParent.appendChild(gameLi);
  }
  return ulParent;
};

const isWinner = ({ homeTeam, awayTeam }, targetTeam) => {
  const target = homeTeam.team === targetTeam ? homeTeam : awayTeam;
  return target.isWinner;
};

const getScoreLine = ({ homeTeam, awayTeam }) => {
  const { team: hTeam, points: hPoints } = homeTeam;
  const { team: aTeam, points: aPoints } = awayTeam;
  const teamNames = `${aTeam} @ ${hTeam}`;
  let scoreLine;
  if (aPoints > hPoints) {
    scoreLine = `<b>${aPoints}</b>-${hPoints}`;
  } else {
    scoreLine = `${aPoints}-<b>${hPoints}</b>`;
  }
  return `${teamNames} ${scoreLine}`;
};

//Select the 2 sections to append to (from index.html)
const gsSection = document.querySelector("#gs");
const houstonSection = document.querySelector("#hr");

// Make the 2 charts:
const gsChart = makeChart(warriorsGames, "Golden State");
const hrChart = makeChart(warriorsGames, "Houston");

//Append them!
gsSection.append(gsChart);
houstonSection.append(hrChart);

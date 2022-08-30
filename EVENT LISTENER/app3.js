//A function to test if 2 element are overlapping
function isTouching(a, b) {
  const aRect = a.getBoundingClientRect();
  const bRect = b.getBoundingClientRect();

  return !(
    aRect.top + aRect.height < bRect.top ||
    aRect.top > bRect.top + bRect.height ||
    aRect.left + aRect.width < bRect.left ||
    aRect.left > bRect.left + bRect.width
  );
}

const player = document.querySelector("#player");
const coin = document.querySelector("#coin");

window.addEventListener("keyup", function (e) {
  if (e.key === "ArrowDown" || e.key === "Down") {
    moveVertical(player, 50);
  } else if (e.key === "ArrowUp" || e.key === "Up") {
    moveVertical(player, -50);
  } else if (e.key === "ArrowRight" || e.key === "Right") {
    moveHorizontal(player, 50);
    player.style.transform = "scale(1,1)"; //so the image will face the right, when moving to the right
  } else if (e.key === "ArrowLeft" || e.key === "Left") {
    moveHorizontal(player, -50);
    player.style.transform = "scale(-1,1)"; //so the image will face the left, when moving to the left
  }
  if (isTouching(player, coin)) moveCoin();
});

moveVertical = (element, amount) => {
  const currTop = extractPos(element.style.top);
  element.style.top = `${currTop + amount}px`;
};
moveHorizontal = (element, amount) => {
  const currLeft = extractPos(element.style.left);
  element.style.left = `${currLeft + amount}px`;
};

//where the pos is the "player.style.top" it removes the last 2 digit from which are px, and convert it to a number
//set the current position to be 0. WHY we did this is because their is no current position, even though we style it in our stylesheet it wont reflect BECAUSE? at first the style is refering to the inline style and there is no inline style.
//where "extractpos is extractposition" and "pos is position"

const extractPos = (pos) => {
  if (!pos) return 100;
  return parseInt(pos.slice(0, -2));
};

//the code to move our coin
const moveCoin = () => {
  const x = Math.floor(Math.random() * innerWidth);
  const y = Math.floor(Math.random() * innerHeight);
  coin.style.top = `${y}px`;
  coin.style.left = `${x}px`;
};

moveCoin();

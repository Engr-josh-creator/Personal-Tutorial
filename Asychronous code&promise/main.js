const multiply = (x, y) => x * y;
const sqaure = (x) => multiply(x, x);

const isRightTraingle = (a, b, c) => {
  return sqaure(a) + sqaure(b) === sqaure(c);
};

isRightTraingle(3, 4, 5);

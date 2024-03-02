// transfer statement 3/2/24

/*
const prices = [199, 299, 99, 399, 4999, 99, 899];
console.log("continue");
for (let price of prices) {
  if (price == 99) continue;
  console.log(`${price} add to card`);
}
console.log("brak staement");

for (let p of prices) {
  if (p == 99) break;
  console.log(`${p}`);
}
*/

// function
/*
function add() {
  let x = 10;
  let y = 20;
  let resutl = x + y;
  console.log(`addition of two number ${x} + ${y}  is---> ${resutl}`);
}
add();

function sub(x, y) {
  let result = x - y;
  console.log(`substraction of two number is---> ${result}`);
}
sub(30, 20);
*/

// function with return keyword
/*
function div() {
  var x = 100;
  var y = 20;
  let resutl = x / y;
  return resutl;
}
div();
let output = div();
console.log(div());
console.log(output);
*/

// anonymous function

let join_name = function (fName, lName) {
  console.log(`full anme is ${fName} ${lName}`);
};

join_name("steave", "jobs");

// arrow function

let multi = (x, y) => {
  console.log(`${x / y}`);
};
multi(100, 20);

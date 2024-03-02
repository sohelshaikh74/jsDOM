// getElementById
let green = document.getElementById("green");
let red = document.getElementById("red");
console.log(green);
console.log(red);
green.style.color = "green";
red.style.color = "red";

// getElementsByTagName
let h2 = document.getElementsByTagName("h2");
console.log(`it will print node list ${h2}`);
for (let indi of h2) {
  indi.style.color = "blue";
}

// getElementsByClassName
let purple = document.getElementsByClassName("purple");

for (let eachElement of purple) {
  eachElement.style.color = "purple";
}

// querySelector
let div_p = document.querySelector("div>p");
div_p.style.color = "pink";

// querySelectorAll
let divs_ps = document.querySelectorAll("div>p");
for (let eachDivs_p of divs_ps) {
  eachDivs_p.style.backgroundColor = "yellow";
}

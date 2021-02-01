let temp = 65;

if (temp >= 18 && temp <= 30) {
  console.log("It's a decent temp");
} else if (temp <= 10 || temp >= 35) {
  console.log("probably best to stay indoors");
} else {
  console.log("meh");
}

let isGuestOneVegan = true;
let isGuestTwoVegan = true;

if (isGuestOneVegan && isGuestTwoVegan) {
  console.log("Here's your rabbit food menus");
} else if (isGuestOneVegan || isGuestTwoVegan) {
  console.log("Here's a nice menu and then a shit menu for the vegan");
} else {
  console.log("Here's 2 cool menus");
}

let isAccountLocked = false;
// let isAccountLocked = true;
let userRole = "user";
// let userRole = "admin";

if (isAccountLocked) {
  console.log("Account is Locked");
} else if (userRole === "admin") {
  ("Welcome Admin");
} else {
  console.log("Welcome User");
}

// It's freezing
// It's too hot
// It's perfect temp

let temp = 40;
// let temp = 0;
// let temp = 20;
if (temp >= 40) {
  console.log("It's too hot");
} else if (temp <= 0) {
  console.log("It's freezing");
} else {
  console.log("It's an acceptable temp");
}

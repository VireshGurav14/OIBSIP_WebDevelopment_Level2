const loginBox = document.getElementById("loginBox");
const registerBox = document.getElementById("registerBox");

const authBox = document.getElementById("authBox");
const dashboard = document.getElementById("dashboard");

const msg = document.getElementById("msg");

function showRegister() {
  loginBox.classList.add("hide");
  registerBox.classList.remove("hide");
  msg.textContent = "";
}

function showLogin() {
  registerBox.classList.add("hide");
  loginBox.classList.remove("hide");
  msg.textContent = "";
}

function register() {

  let user = document.getElementById("regUser").value;
  let pass = document.getElementById("regPass").value;

  if (!user || !pass) {
    msg.style.color = "red";
    msg.textContent = "Fill all fields";
    return;
  }

  let users = JSON.parse(localStorage.getItem("users")) || {};

  if (users[user]) {
    msg.textContent = "User already exists";
    return;
  }

  users[user] = pass;
  localStorage.setItem("users", JSON.stringify(users));

  msg.style.color = "#00ffcc";
  msg.textContent = "Registration successful";

}

function login() {

  let user = document.getElementById("loginUser").value;
  let pass = document.getElementById("loginPass").value;

  let users = JSON.parse(localStorage.getItem("users")) || {};

  if (users[user] === pass) {

    authBox.style.display = "none";
    dashboard.style.display = "block";

  } else {

    msg.style.color = "red";
    msg.textContent = "Invalid login details";

  }

}

function logout() {

  dashboard.style.display = "none";
  authBox.style.display = "block";

}

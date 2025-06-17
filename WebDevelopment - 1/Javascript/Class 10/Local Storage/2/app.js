// Check if user is already logged in
window.onload = function () {
  const activeUser = localStorage.getItem("activeUser");
  if (activeUser) {
    showWelcome(activeUser);
  } else {
    const registeredUser = localStorage.getItem("user");
    if (registeredUser) {
      // If user is registered, show login
      document.getElementById("signupForm").style.display = "none";
      document.getElementById("loginForm").style.display = "block";
    }
  }
};

function signup() {
  const username = document.getElementById("signupUsername").value;
  const password = document.getElementById("signupPassword").value;

  if (username && password) {
    const user = {
      username: username,
      password: password,
    };
    localStorage.setItem("user", JSON.stringify(user));
    alert("Signup successful! Please log in.");
    document.getElementById("signupForm").style.display = "none";
    document.getElementById("loginForm").style.display = "block";
  } else {
    alert("Please enter a username and password.");
  }
}

function login() {
  const username = document.getElementById("loginUsername").value;
  const password = document.getElementById("loginPassword").value;
  const userData = JSON.parse(localStorage.getItem("user"));

  if (
    userData &&
    username === userData.username &&
    password === userData.password
  ) {
    localStorage.setItem("activeUser", username);
    showWelcome(username);
  } else {
    alert("Invalid username or password.");
  }
}

function showWelcome(username) {
  document.getElementById("signupForm").style.display = "none";
  document.getElementById("loginForm").style.display = "none";
  document.getElementById("welcomeMessage").style.display = "block";
  document.getElementById("displayUsername").textContent = username;
}

function logout() {
  localStorage.removeItem("activeUser");
  document.getElementById("welcomeMessage").style.display = "none";
  document.getElementById("loginForm").style.display = "block";
}

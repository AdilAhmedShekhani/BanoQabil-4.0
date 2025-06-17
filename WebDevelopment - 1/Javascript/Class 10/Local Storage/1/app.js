function signup() {
  let name = document.getElementById("signupName").value;
  let email = document.getElementById("signupEmail").value;
  let password = document.getElementById("signupPassword").value;

  if (name && email && password) {
    let user = {
      name: name,
      email: email,
      password: password,
    };

    localStorage.setItem("user", JSON.stringify(user));
    alert("Signup successful!");
  } else {
    alert("Please fill all fields!");
  }
}

function login() {
  let email = document.getElementById("loginEmail").value;
  let password = document.getElementById("loginPassword").value;

  let storedUser = JSON.parse(localStorage.getItem("user"));

  if (
    storedUser &&
    storedUser.email === email &&
    storedUser.password === password
  ) {
    alert("Login successful! Welcome, " + storedUser.name);
  } else {
    alert("Incorrect email or password!");
  }
}

function logout() {
  localStorage.removeItem("user");
  alert("User data removed (Logout successful).");
}

function clearAll() {
  localStorage.clear();
  alert("All data cleared from localStorage.");
}

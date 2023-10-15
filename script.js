function makeUser() {
  var userData = {
    login: document.getElementById("nick").value,
    password: document.getElementById("password").value,
    email: document.getElementById("email").value,
  };
  console.log("Login: " + userData.login);
  console.log("Password: " + userData.password);
  console.log("E-mail: " + userData.email);
  var jsonData = JSON.stringify(userData);
  localStorage.setItem("userData", jsonData);
  document.getElementById("nick").value = "";
  document.getElementById("password").value = "";
  document.getElementById("email").value = "";
  window.location.href = "index.html";
}

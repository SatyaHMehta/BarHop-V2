const loginFormHandler = async (event) => {
  event.preventDefault();

  // Collect values from the login form
  const email = document.querySelector("#email-login").value.trim();
  const password = document.querySelector("#password-login").value.trim();

  if (email && password) {
    // Send a POST request to the API endpoint
    const response = await fetch("/api/users/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      // If successful, redirect the browser to the profile page
      document.location.replace("/profile");
    } else {
      alert(response.statusText);
    }
  }
};

const signupFormHandler = async (event) => {
  event.preventDefault();
  console.log("hey");
  // const name = document.querySelector("#name-signup").value.trim();
  const age = document.querySelector("#registerAge").value.trim();
  const email = document.querySelector("#registerEmail").value.trim();
  const password = document.querySelector("#registerPassword").value.trim();
  var ageValEl = document.getElementById("ageVal");
  var ageCalc = 21 - age;

  console.log(age, email, password);

  if (age < 20) {
    ageValEl.textContent = "Try in " + ageCalc + " more years";
  } else if (age < 21) {
    ageValEl.textContent = "Try in " + ageCalc + " more year";
  } else if (age >= 21 && email && password) {
    console.log(age, email, password);

    const postResponse = await fetch("/api/users", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: { "Content-Type": "application/json" },
    }).then(document.location.replace("/homepage"));
  } else {
    document.location.replace("/homepage");
  }
};

// document
//   .querySelector(".login-form")
//   .addEventListener("submit", loginFormHandler);
// Need a Id's for landing page handlebars
//
document
  .querySelector(".signup-form")
  .addEventListener("submit", signupFormHandler);

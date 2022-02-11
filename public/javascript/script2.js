// const { report } = require("../../controllers/homeroutes");

async function getInputValue() {
  // Selecting the input element and get its value
  var registerAge = document.getElementById("registerAge").value;
  var registerEmail = document.getElementById("registerEmail").value;
  //   var registerPassword = document.getElementById("registerPassword ").value;
  var ageValEl = document.getElementById("ageVal");
  var ageCalc = 21 - registerAge;
  // Displaying the value
  console.log(registerAge);
  console.log(ageValEl.textContent);
    console.log('hello')
  if (registerAge < 20) {
    ageValEl.textContent = "Try in " + ageCalc + " more years";
  } else if (registerAge < 21) {
    ageValEl.textContent = "Try in " + ageCalc + " more year";
  } else {
    //location.href = "index_2.html"
    const response = await fetch("/homepage", {
      method: "GET",
    });

    if (response.ok) {
      document.location.replace("/homepage");
    } else {
      console.log(response.statusText);
    }
  }
}

function letsExplore() {
  var enterAge = document.querySelector(".enterAge");
  var exploreBtn = document.querySelector(".explore");

  enterAge.setAttribute("class", "show");
  exploreBtn.setAttribute("class", "hide");
  exploreBtn.setAttribute("value", "text");
}


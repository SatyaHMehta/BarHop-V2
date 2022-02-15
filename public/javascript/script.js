var inputEl = document.querySelector("#search-bar");
var formEl = document.querySelector("form");
var barHistory = document.querySelector("#bar-history");
var getRoute = document.querySelector("#generate-route");
var clearList = document.querySelector("#clear-list");
var barDiv = document.querySelector("#bars-div");
let review = document.querySelector("#write-a-review");

var removeCard = document.querySelector("#cardEl");
var sortableDiv = $(".sortable");
barAddress = [];
var addresses = [];
var localStorageBars = [];
var localStorageBarNames = [];
var chosenLocations = [];

const lastSearches = JSON.parse(localStorage.getItem("bars")) ?? [];
const lastSearches2 = JSON.parse(localStorage.getItem("barName")) ?? [];
var barHistory = document.querySelector("#bar-history");
lastSearches.forEach((address, i) => {
  var barName2 = lastSearches2[i];
  var newBtn2 = document.createElement("button");

  newBtn2.textContent = barName2;
  newBtn2.setAttribute("id", "cardEl");
  newBtn2.setAttribute("data-value", address);
  newBtn2.setAttribute("class", "button success expanded");
  newBtn2.setAttribute("onclick", "removeBtn()");
  sortableDiv.append(newBtn2);
});

function getBarVal() {
  localStorage.clear();
  const city = document.getElementById("search-bar").value;
  fetch(
    ` https://floating-headland-95050.herokuapp.com/api.yelp.com/v3/businesses/search?location=${city}&categories=danceclubs`,
    {
      headers: {
        // my api key
        // Authorization:
        //   "Bearer GVUhoebZxMFnk5DtlEDRJjH5YkakjwmzRp-hi2zCxyKwXsYaBmvNDNQslyWp6SO6jPr5fFZGNzAWPGnT1o5w443vHe9Zxv7KNxIsZDFNYtgSLQEGmDTeNudeUtXdYXYx",
        // back-up key
        // "Authorization": 'Bearer GVUhoebZxMFnk5DtlEDRJjH5YkakjwmzRp-hi2zCxyKwXsYaBmvNDNQslyWp6SO6jPr5fFZGNzAWPGnT1o5w443vHe9Zxv7KNxIsZDFNYtgSLQEGmDTeNudeUtXdYXYx'
        //3rd api key
        Authorization:
          "bearer PUihWdj-17gdl98pdBSeYX0398u9kpVDNov6R1RBZgSdEJo-JHYcnkesMW68cQbq20N9W-Lyq9Sy8canmTCMMFpWPU4jaucRA05M3uYOBHJMYJkvJtb2iD2F3T_gYXYx",
      },
    }
  )
    .then((res) => {
      return res.json();
    })
    .then((bars) => {
      console.log(bars);
      console.log(bars.businesses[0].location.address1);
      console.log(bars.businesses[0].name);
      console.log(bars.businesses[0].phone);
      console.log(bars.businesses[0].rating);
      console.log(bars.businesses[0].price);
      console.log(bars.businesses[0].review_count);
      console.log(bars.businesses[0].image_url);
      document.getElementById("error-msg").innerHTML = "";
      var numbOfBars = bars.businesses;
      for (var i = 0; i < bars.businesses.length; i++) {
        generateCards(bars, i);
      }
    })
    .catch((err) => {
      document
        .getElementById("error-msg")
        .setAttribute("style", "color: red; font-weight: bold");
      document.getElementById("error-msg").innerHTML =
        "please enter a valid city";
    });
}
function generateCards(bars, i) {
  let barsDivEl = document.getElementById("bars-div");
  let barCardEl = document.createElement("div");
  barCardEl.setAttribute("id", "card");
  barsDivEl.appendChild(barCardEl);
  let barImageEl = document.createElement("img");
  barImageEl.setAttribute("id", "bar-image");
  barImageEl.src = bars.businesses[i].image_url;
  barCardEl.appendChild(barImageEl);
  let barInfoEl = document.createElement("div");
  barInfoEl.setAttribute("id", "card-information");
  barCardEl.appendChild(barInfoEl);
  let addBtn = document.createElement("button");
  addBtn.innerHTML = "Add";
  addBtn.classList.add("addBtn");
  barCardEl.appendChild(addBtn);
  rating = bars.businesses[i].rating;
  let barInfo = [
    document.createElement("h2"),
    document.createElement("span"),
    document.createElement("span"),
    document.createElement("span"),
    document.createElement("span"),
  ];

  let barData = [
    bars.businesses[i].name,
    bars.businesses[i].location.display_address[0] +
      " " +
      bars.businesses[i].location.display_address[1],
    "phone: " + bars.businesses[i].phone,
    "rating: " + `${"⭐"}`.repeat(Math.round(rating)),
    "reviews: " + bars.businesses[i].review_count,
  ];

  let barId = [
    "bar-name",
    "bar-address",
    "bar-phone-number",
    "bar-rating",
    "bar-review-count",
  ];
  barInfo.forEach((element, i) => {
    element.setAttribute("id", barId[i]);
    element.textContent = barData[i];
    barInfoEl.appendChild(element);
  });
}

formEl.addEventListener("submit", function (e) {
  e.preventDefault();
  var searchValue = inputEl.value.trim();

  if (!searchValue) {
    return;
  }

  inputEl.value = "";
});

barDiv.addEventListener("click", function (e) {
  if (e.target.matches(".addBtn")) {
    var clickedBtn = e.target;
    var barName = clickedBtn.parentElement.children[1].children[0].innerHTML;
    var barAddress = clickedBtn.parentElement.children[1].children[1].innerHTML;
    var newBtn = document.createElement("button");

    newBtn.textContent = barName;
    newBtn.setAttribute("id", "cardEl");
    newBtn.setAttribute("data-value", barAddress);
    newBtn.setAttribute("class", "button success expanded");
    newBtn.setAttribute("onclick", "removeBtn()");
    sortableDiv.append(newBtn);

    chosenLocations.push(barName);

    const previousSearches = JSON.parse(localStorage.getItem("bars")) ?? [];
    const previousSearches2 = JSON.parse(localStorage.getItem("barName")) ?? [];
    localStorage.setItem(
      "bars",
      JSON.stringify([barAddress, ...previousSearches])
    );
    localStorage.setItem(
      "barName",
      JSON.stringify([barName, ...previousSearches2])
    );
  }
});

function removeBtn() {
  var elem = document.querySelector("#cardEl");
  elem.parentNode.removeChild(elem);
}

clearList.addEventListener("click", function (e) {
  e.preventDefault;
  sortableDiv.html("");
});

review.addEventListener("click", reviewPost);

function reviewPost() {
  document.location.replace("/review");
}

getRoute.addEventListener("click", function (each) {
  each.preventDefault;
  const selectedBars = document.querySelectorAll("#cardEl");
  selectedBars.forEach((bar) => addresses.push(bar.getAttribute("data-value")));
  var map, dir;
  map = L.map("map", {
    layers: MQ.mapLayer(),
    center: [38.895345, -77.030101],
    zoom: 15,
  });
  dir = MQ.routing.directions();
  dir.route({
    locations: [
      addresses[0],
      addresses[1],
      addresses[2],
      addresses[3],
      addresses[4],
      addresses[5],
      addresses[6],
      addresses[7],
      addresses[8],
      addresses[9],
    ],
  });
  console.log(addresses);
  map.addLayer(
    MQ.routing.routeLayer({
      directions: dir,
      fitBounds: true,
    })
  );
});

document.querySelector("#home-logout").addEventListener("click", logoutx);

//document.querySelector("#logout-post").addEventListener("click", logoutx)

function logoutx() {
  document.location.replace("/");
}
// //Wrap every letter in a span
// var textWrapper = document.querySelector('.heading');
// textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

// anime.timeline({loop: true})
//   .add({
//     targets: '.heading .letter',
//     scale: [4,1],
//     opacity: [0,1],
//     translateZ: 0,
//     easing: "easeOutExpo",
//     duration: 1950,
//     delay: (el, i) => 70*i
//   })
//   .add({
//     targets: '.heading',
//     opacity: 0,
//     duration: 1000,
//     easing: "easeOutExpo",
//     delay: 1000
//   });
function sayHello() {
  document.location.replace("/review");
}
review.addEventListener("click", sayHello);
